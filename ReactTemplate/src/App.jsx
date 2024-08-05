import { lazy } from "react";
import { HashRouter } from "react-router-dom"

//Lazy imports
import GlobalProvider from "./Context/GlobalContenxt";

const AppRoutes = lazy(() => import("./Routes/AppRoutes"))

function App() {

    return (
        <GlobalProvider>
            <HashRouter>
                <AppRoutes />
            </HashRouter>
        </GlobalProvider>
    )
}

export default App
