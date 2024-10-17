import './Alert.css'
import { useStore } from '@nanostores/react'
import { AlertStore } from '@Context/GlobalStore'

export default function Alert() {
    //Alert Store
    const Alert = useStore(AlertStore)

    return (
        <div>
            {Alert.text}
        </div>
    )
}