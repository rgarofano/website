import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Sidebar from "./components/Sidebar";

function App() {
    return (
        <div>
            <Sidebar />
            <main className="m-0 sm:ml-20">
                <Home />
                <About />
                <Contact />
            </main>
        </div>
    );
}

export default App;
