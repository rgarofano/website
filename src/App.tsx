import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Home from "./components/Home";
import Sidebar from "./components/Sidebar";
import Wave from "./components/Wave";

function App() {
    return (
        <div>
            <Wave />
            <Sidebar />
            <main className="m-0 sm:ml-20">
                <Home />
                <Experience />
                <Contact />
            </main>
        </div>
    );
}

export default App;
