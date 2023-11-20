export function Sidebar() {
    return (
        <nav class="w-1/6 fixed left-0 h-full">
        <ul class="px-4 flex flex-col gap-3">
            <li class="text-lg font-semibold">Home</li>
            <li class="text-lg font-semibold">Produtos</li>
            <li class="text-lg font-semibold">
                <a href="/home">
                    Clientes
                </a>
        </li>
        </ul>
    </nav>
    )
}