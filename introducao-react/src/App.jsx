import { RouterProvider } from "react-router-dom";
// import { Header } from "./components/layout/main/Header";
// import { Sidebar } from "./components/Sidebar";
import "react-toastify/dist/ReactToastify.css";
import { routes } from "./routes";
import { ToastContainer } from "react-toastify";

export default function App() {
  return (

    // <main>
    //   <Header />
    //   <section className="min-h-screen">
    //     <Sidebar/>
    //   </section>
    // </main>
    <>
   <RouterProvider router={routes} />
   <ToastContainer />
    </>
   );
  }
  
  {/* <List nome="Convidados" items={convidados} /> */}
  // import { List } from "./components/List";
  // const convidados = ["Samuel", "Lopes", "Teste"];