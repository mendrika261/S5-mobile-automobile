import {sendDelete, useGet} from "@/app/utils/hooks";
import {API_BASE_URL, API_URL} from "@/app/config";

export async function deconnexion(url: string) {
    await sendDelete(url);
    window?.localStorage?.removeItem('token');
    window?.localStorage?.removeItem('utilisateur');
}

