'use client';

import {Dispatch, useEffect, useState} from "react";
import {toast} from "react-toastify";
import {deleteObject, getDownloadURL, ref, uploadBytesResumable} from "firebase/storage";
import {storage} from "@/app/utils/storage";
import {API_BASE_URL, API_URL, URL_EXTENSION} from "@/app/config";
import {uuidv4} from "@firebase/util";
import {deconnexion} from "@/app/utils/deconnexion";
import {PushNotifications} from "@capacitor/push-notifications";

const AXIOS = require('axios').default;
const DEFAULT_ERROR_MESSAGE = "Vérifier votre connexion internet";
const FIREBASE_PREFIX = "fichiers";

async function handleErrors(error: any) {
    if(error.response.status === 401) {
        deconnexion(API_BASE_URL+"tokens/utilisateur");
        location?.replace('/connexion'+URL_EXTENSION);
        return;
    }
    if(error.response.status === 403) {
        location?.replace('/404'+URL_EXTENSION);
        return;
    }
    if (error?.response?.data?.message !== undefined && error?.response?.data?.message !== null)
        toast(error?.response?.data?.message, {type: error?.response?.data?.status});
    else
        toast.error(DEFAULT_ERROR_MESSAGE);
}

export function useGet(url: string, childrenObjectOnlyId?: boolean): [any, Dispatch<any>] {
    const [data, setData] = useState(null);

    useEffect(() => {
        AXIOS.get(url, {
            headers: {
                'Authorization': 'Bearer ' + localStorage?.getItem('token'),
                "ngrok-skip-browser-warning": "69420"
            }
        })
            .then(function (response: any) {

                if (childrenObjectOnlyId === true) {
                    Object.keys(response.data.data).map((key: any) => {
                        if (typeof response.data.data[key] === 'object'
                            && response.data.data[key] !== null
                            && response.data.data[key].id !== undefined)
                            response.data.data[key] = response.data.data[key].id;
                    });
                }
                setData(response.data.data);
                if (response.data.message !== undefined && response.data.message !== null)
                    toast(response.data.message, {type: response.data.status});
            })
            .catch(handleErrors);
    }, [url, childrenObjectOnlyId, handleErrors]);

    return [data, setData];
}




export async function sendPost(url: string, form: any, noToast?: boolean) {
    let responseData: any = null;
    await AXIOS.post(url, form, {
        headers: {
            'Authorization': 'Bearer ' + localStorage?.getItem('token'),
            'Content-Type': 'application/x-www-form-urlencoded',
            "ngrok-skip-browser-warning": "69420"
        }
    })
        .then(function (response: any) {
            if (response.data.data !== undefined && response.data.data !== null)
                responseData = response.data.data;
            if (!noToast && response.data.message !== undefined && response.data.message !== null)
                toast(response.data.message, {type: response.data.status});
        })
        .catch(handleErrors);
    return responseData;
}

const addListeners = async () => {
    await PushNotifications.addListener('registration', token => {
        console.info('Registration token: ', token.value);
        localStorage?.setItem('notificationToken', token.value);
    });

    await PushNotifications.addListener('registrationError', err => {
        console.error('Registration error: ', err.error);
    });

    await PushNotifications.addListener('pushNotificationReceived', notification => {
        console.log('Push notification received', notification);
    });

    await PushNotifications.addListener('pushNotificationActionPerformed', notification => {
        console.log('Push notification action performed', notification.actionId, notification.inputValue);
    });
}

export async function sendPostConnexion(url: string, form: any) : Promise<any> {
    await addListeners();
    const data = {...form, notificationToken:localStorage?.getItem('notificationToken')};
    await AXIOS.post(url, data,{
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            "ngrok-skip-browser-warning": "69420"
        }
    })
        .then(function (response:any):void {
            console.log(response);
            if(response.data.data != null && response.data.data.value!==undefined && response.data.data.value!==null) {
                localStorage?.setItem('token', response.data.data.value);
                localStorage?.setItem('utilisateur', JSON.stringify(response.data.data.utilisateur));
            }
            if(localStorage?.getItem('token')!==null)
                location?.replace('/');
            if (response.data.message !== undefined && response.data.message !== null)
                toast(response.data.message, {type: response.data.status});
        })
        .catch(
            function (error: any) {
                if (error?.response?.data?.message !== undefined && error?.response?.data?.message !== null)
                    toast(error?.response?.data?.message, {type: error?.response?.data?.status});
                else
                    toast.error(DEFAULT_ERROR_MESSAGE);
            }
        );

}

export async function sendPut(url: string, form: any): Promise<any> {
    let responseData = null;
    await AXIOS.put(url, form, {
        headers: {
            'Authorization': 'Bearer ' + localStorage?.getItem('token'),
            'Content-Type': 'application/x-www-form-urlencoded',
            "ngrok-skip-browser-warning": "69420"
        }
    })
        .then(function (response: any) {
            if (response.data.data !== undefined && response.data.data !== null)
                responseData = response.data.data;
            if (response.data.message !== undefined && response.data.message !== null)
                toast(response.data.message, {type: response.data.status});
        })
        .catch(handleErrors);
    return responseData;
}




export async function sendDelete(url: string): Promise<any> {
    let responseData = null;
    await AXIOS.delete(url, {
        headers: {
            'Authorization': 'Bearer ' + localStorage?.getItem('token'),
            'Content-Type': 'application/x-www-form-urlencoded',
            "ngrok-skip-browser-warning": "69420"
        }
    })
        .then(function (response: any) {
            if (response.data.data !== undefined && response.data.data !== null)
                responseData = response.data.data;
            if (response.data.message !== undefined && response.data.message !== null)
                toast(response.data.message, {type: response.data.status});
        })
        .catch(handleErrors);
    return responseData;
}


export function isImage(file: File): boolean {
    const extension = file.name.split('.').pop();
    const allowedExtensions = ['jpg', 'jpeg', 'png', 'gif'];
    return allowedExtensions.includes(<string>extension);
}

export async function remove_file(nom: string) {
    if (nom === null || nom === undefined || nom === "")
        return;
    const imageRef= ref(storage, `${nom}`);
    await deleteObject(imageRef);
}

export async function upload_file(file: File, setLoading: any): Promise<any> {
    if(file.size > 1000000) {
        toast.error("La taille d'un fichier ne doit pas dépasser 1Mo");
        return {};
    }

    const path = `${FIREBASE_PREFIX}/${uuidv4()}`;
    const imageRef= ref(storage, path);
    const uploadTask = uploadBytesResumable(
        imageRef, file);
    let fileObject = null;
    await new Promise<void>((resolve, reject) => {
        uploadTask.on('state_changed',
            (snapshot) => {
                const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                setLoading(progress);
            },
            (error) => {
                console.log(error);
                toast.error(error.message);
                remove_file(path);
                reject(error);
            },
            async () => {
                const data: any = {};
                data.type = file.type;
                data.lien = path;
                fileObject = await sendPost(API_URL+'fichiers', data, true);
                if (fileObject === null)
                    await remove_file(data.lien);
                resolve();
            }
        );
    });
    return fileObject;
}

export async function getFile(nom: string) {
    if (nom === null || nom === undefined || nom === "")
        return "";
    const storageRef = ref(storage, `${nom}`);
    return await getDownloadURL(storageRef);
}

export function useGetFile(nom: string): [string, Dispatch<any>] {
    const [data, setData] = useState("");
    useEffect(() => {
        getFile(nom).then((url) => {
            setData(url);
        }).catch(function (error: any) {
            console.log(error);
            toast.error(DEFAULT_ERROR_MESSAGE);
        });
    }, [nom]);
    return [data, setData];
}

