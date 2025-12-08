'use client'
import React from 'react'
import { useRouter } from 'next/navigation'
import { useStore } from '@nanostores/react'
import { $authStore } from '@Auth/stores/auth.store'
import LoadingCircle from '@Shared/components/loadingCircle'
import { auth } from '../services'

export default function AuthGuard({ children }: { children: React.ReactNode }) {
    const router = useRouter()

    const {
        isAuth, status
    } = useStore($authStore)

    React.useEffect(() => {
        auth.checkSession();
    }, []);

    React.useEffect(() => {
        if (status === 'loading' || status === 'idle') return;

        if (status === 'error' || (status === 'success' && !isAuth)) {
            router.replace('/auth');
            return
        }
    }, [status, isAuth, router]);

    if (status === 'loading' || status === 'idle') {
        return <LoadingCircle />;
    }

    if (!isAuth) return null;

    return <>{children}</>;
}