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
            <main className="m-0 sm:ml-20 flex flex-col gap-10">
                <Home />
                <h2 className="text-3xl text-center font-bold">My Experience</h2>
                <Experience />
                <Contact email="ryan@ryangarofano.ca" />
            </main>
        </div>
    );
}

export default App;
