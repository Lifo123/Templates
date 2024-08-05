import { createContext, useState } from "react"


export const GlobalContenxt = createContext();

export default function GlobalProvider({children}) {
    //GlobalStates
    const [Data, setData] = useState('Datos');

    return (
        <GlobalContenxt.Provider value={{
            Data, setData
        }}>
            {children}
        </GlobalContenxt.Provider>
    )
}