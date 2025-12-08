import { deepMap } from '@nanostores/deepmap'
import { User } from '../types'


type AuthStore = {
    isAuth: boolean,
    status: 'idle' | 'loading' | 'success' | 'error' | 'logout'
    user: User | null,

    isAuthorized?: boolean,
}

const initialState: AuthStore = {
    isAuth: false,
    user: null,
    status: 'idle'
}

export const $authStore = deepMap<AuthStore>(initialState)

export function setInitial() {
    $authStore.set(initialState)
}