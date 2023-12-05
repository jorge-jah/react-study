import { RouterProvider } from "react-router-dom";
// import { Header } from "./components/layout/main/Header";
// import { Sidebar } from "./components/Sidebar";
import { routes } from "./routes";

export default function App() {
  return (

    // <main>
    //   <Header />
    //   <section className="min-h-screen">
    //     <Sidebar/>
    //   </section>
    // </main>
   <RouterProvider router={routes} />
   );
  }
  
  {/* <List nome="Convidados" items={convidados} /> */}
  // import { List } from "./components/List";
  // const convidados = ["Samuel", "Lopes", "Teste"];