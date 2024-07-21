import Profile from "./component/Profile";
import Sidebar from "./component/Sidebar";
import Footer from "./component/Footer"

export default function App() {
  return (
    <main className="flex flex-col h-screen w-full">
      <section className="flex w-full h-full overflow-hidden">
        <Sidebar />
        <Profile />
      </section>
      <footer className="flex w-full h-10">
        <Footer />
      </footer>
    </main>
  )
}