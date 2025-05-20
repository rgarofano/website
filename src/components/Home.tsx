import Selfie from "../assets/selfie.jpg";
import Button from "./Button";
import ScrollDown from "./ScrollDown";
import SocialLinks from "./SocialLinks";

function Home() {
    return (
        <section className="min-h-screen max-w-5xl flex flex-col justify-center items-center gap-5 z-10">
            <div className="flex flex-col items-center gap-4">
                <img
                    className="size-40 rounded-full object-cover"
                    src={Selfie}
                    alt="Ryan Garofano"
                />
                <h1 className="text-3xl">
                    <span className="hidden sm:inline">Hello! my name is {}</span>
                    <span className="font-semibold">Ryan Garofano</span>
                </h1>
                <span className="text-lg">
                    <span className="hidden sm:inline">I'm a {}</span>tech and health enthusiast
                </span>
                <SocialLinks />
                <Button text="Get In Touch" />
            </div>
            <ScrollDown />
        </section>
    );
}

export default Home;
