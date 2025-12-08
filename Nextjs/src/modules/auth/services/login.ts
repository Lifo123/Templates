import { LSuser } from ".";
import { setInitial as setStoreInitialValues } from "../stores/auth.store";

export async function login(uid: string, pass: string) {
    if (!uid || !pass) return;

    // const res = await fetch('https://api-5lweajprsq-uc.a.run.app/auth/login', {
    //     method: 'POST',
    //     headers: { 'Content-Type': 'application/json' },
    //     body: JSON.stringify({ uid, pass })
    // });

    // const { status, data } = await res.json();

    // if (status !== 'success') {
    //     return console.log('Error login');
    // }

    // LSuser.setKey('token', data.token);
}


export function logOut() {
    setStoreInitialValues();
    LSuser.remove();
}