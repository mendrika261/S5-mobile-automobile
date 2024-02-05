import {sendDelete, useGet} from "@/app/utils/hooks";
import {API_BASE_URL, API_URL} from "@/app/config";

export function deconnexion(url: string) {
    sendDelete(url);
    window?.localStorage?.removeItem('token');
    window?.localStorage?.removeItem('utilisateur');
}
