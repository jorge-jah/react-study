import { createBrowserRouter } from "react-router-dom";
import { Sidebar } from "../components/Sidebar";
import { Header } from "../components/Header";
import { MainLayout } from "../layouts/MainLayout";

export const routes = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                path: "/home",
                element: <h1>Olá</h1>
            },
           
        ]
    },
]);