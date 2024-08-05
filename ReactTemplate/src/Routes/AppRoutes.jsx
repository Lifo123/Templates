import { Route, Routes } from "react-router-dom";
import { useStore } from '@nanostores/react'
import { BasicStore } from "../Context/GlobalStore";

export default function AppRoutes() {
    //Stores
    const ExampleStore = useStore(BasicStore)

    return (
        <Routes>
            <Route path='/' element={<h1>Project {ExampleStore}</h1>} />
        </Routes>
    )
}