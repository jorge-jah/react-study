import { createBrowserRouter } from "react-router-dom";
import { Sidebar } from "../components/layouts/main/Sidebar";
import { Header } from "../components/layouts/main/Header";
import { MainLayout } from "../layouts/MainLayout";
import { DataTable } from "../components/shared/Table";
import Hooks from "../pages/Hooks";
import UsersPage from "../pages/Users";

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
                path: "/usuarios",
                element: <UsersPage/>
            },
            {
                path: "/clientes",
                element: <h1>Olá, Clientes</h1>
            },
            {
                path: "/produtos",
                element: <h1>Página de produtos</h1>
            },
           
        ]
    },
]);