import { login, logOut } from "./login"
import { register } from "./register"
import { checkSession } from "./checkSession"
import { newLS } from "@Shared/utils";

export const LSuser = newLS('user');
export const auth = {
    login,
    logOut,
    register,
    checkSession
}