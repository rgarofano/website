import { FaYoutube } from "react-icons/fa";
import "./App.css";
import selfie from "./assets/selfie.jpg";
import { SiOnlyfans } from "react-icons/si";

function App() {
    return (
        <>
            <div className="w-full flex flex-col sm:flex-row items-center gap-10 p-5">
                <img
                    className="size-40 md:size-60 lg:size-80 rounded-full object-cover"
                    src={selfie}
                    alt="Ryan Garofano"
                />
                <section className="flex flex-col gap-2">
                    <h2 className="text-center sm:text-left text-md lg:text-xl">
                        Hey there! My name is Ryan Garofano
                    </h2>
                    <h2 className="text-3xl text-center sm:text-4xl sm:text-left lg:text-5xl">
                        Welcome to my digital home
                    </h2>
                </section>
            </div>
            <section className="flex flex-col gap-5 text-center">
                <h2>You can also find me on:</h2>
                <ul>
                    <li className="flex justify-center items-center gap-2">
                        <FaYoutube className="text-red-400 text-2xl" />{" "}
                        <a href="https://youtube.com/@ryangarofano" className="text-xl">
                            YouTube
                        </a>
                    </li>
                    <li className="flex justify-center items-center gap-2">
                        <SiOnlyfans className="text-sky-400 text-2xl" />{" "}
                        <a
                            href="https://www.youtube.com/watch?v=BBJa32lCaaY"
                            className="text-xl"
                        >
                            Only Fans
                        </a>
                    </li>
                </ul>
            </section>
        </>
    );
}

export default App;
