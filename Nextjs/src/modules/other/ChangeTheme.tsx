'use client'

import { useTheme } from "next-themes"

export default function ChangeTheme() {
    const { setTheme, theme } = useTheme()

    return (
        <select
            value={theme}
            className="px-2 py-1.5 rounded-md bg-gray-3 text-p2 border text-gray-12 border-gray-6"
            onChange={(e) => {
                setTheme(e.target.value)
            }}
        >
            <option value="light">Light</option>
            <option value="dark">Dark</option>
            <option value="system">System</option>
        </select>
    )
}