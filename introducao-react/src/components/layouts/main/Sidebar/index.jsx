import { Link } from "react-router-dom";

export function Sidebar() {
    return (
        <nav class="w-1/6 bg-white">
        <ul class="px-4 flex flex-col gap-3">
            <li class="text-lg font-semibold"><Link to="/">Home</Link></li>
            <li class="text-lg font-semibold"><Link to="/usuarios">Usuários</Link></li>
            <li class="text-lg font-semibold"><Link to="/produtos">Produtos</Link></li>
            <li class="text-lg font-semibold"><Link to="/clientes">Clientes</Link></li>
        </ul>
    </nav>
    )
}