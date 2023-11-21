// import { createColumnHelper,
//     flexRender,
//     getCoreRowModel,
//     useReactTable,
//   } from '@tanstack/react-table'

// export function DataTable (data, columns) {

//     const data = [
//         {
//             firstName: "Jorge",
//             lastName: "Sousa"
//         }

//     ];

//     const columnHelper = createColumnHelper();

//     const columns = [
//         columnHelper.accessor("firstName", {
//             header: () => <span>Nome</span>,
//             cell: info => info.getValue(),
//         }

//         )
//     ]

//     const table = useReactTable({
//         data,
//         columns,
//         getCoreRowModel: getCoreRowModel(),

//     })

//     return (
//         <table>
//             <thead>
//             {table.getHeaderGroups().map(headerGroup => (
//             <tr key={headerGroup.id}>
//               {headerGroup.headers.map(header => (
//                 <th key={header.id}>
//                   {header.isPlaceholder
//                     ? null
//                     : flexRender(
//                         header.column.columnDef.header,
//                         header.getContext()
//                       )}
//                 </th>
//               ))}
//             </tr>

//             </thead>
//             <tbody>

//             </tbody>
//         </table>
//     );
// }

export function DataTable() {
    
}