import "./App.css";
import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Sidebar from "./components/Sidebar";

function App() {
    return (
        <>
            <Sidebar />
            <main>
                <Home />
                <About />
                <Contact />
            </main>
        </>
    );
}

export default App;
