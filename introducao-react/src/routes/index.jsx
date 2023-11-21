import { createBrowserRouter } from "react-router-dom";
import { Sidebar } from "../components/Sidebar";
import { Header } from "../components/Header";
import { MainLayout } from "../layouts/MainLayout";
import { DataTable } from "../components/Table";
import Hooks from "../pages/Hooks";

export const routes = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                path: "/",
                element: <Hooks />
            },
            {
                path: "/clientes",
                element: <h1>Olá, Clientes</h1>
            },
            {
                path: "/produtos",
                element: <h1>Olá produtos</h1>
            },
           
        ]
    },
]);