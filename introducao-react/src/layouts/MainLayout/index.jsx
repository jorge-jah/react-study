import { Header } from "../../components/Header";
import { Sidebar } from "../../components/Sidebar";

export function MainLayout() {
    return (
        <main>
         <Header />
      <section className="min-h-screen">
        <Sidebar/>
      </section>
    </main>
    )
}