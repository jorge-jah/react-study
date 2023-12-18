import { createBrowserRouter } from "react-router-dom";
import { Sidebar } from "../components/layouts/main/Sidebar";
import { Header } from "../components/layouts/main/Header";
import { MainLayout } from "../layouts/MainLayout";
import { DataTable } from "../components/shared/Table";
import Hooks from "../pages/Hooks";
import UsersPage from "../pages/Users";
import { UsersProvider } from "../context/UsersContext";

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
                element: 
                <UsersProvider>

                    <UsersPage/>
                </UsersProvider>
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