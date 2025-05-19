import Selfie from "../assets/selfie.jpg";
import Button from "./Button";
import SocialLinks from "./SocialLinks";

function Home() {
    return (
        <section className="min-h-screen max-w-5xl flex flex-col justify-center items-center gap-5">
            <div className="flex flex-col items-center gap-4">
                <img
                    className="size-40 rounded-full object-cover"
                    src={Selfie}
                    alt="Ryan Garofano"
                />
                <h1 className="text-3xl">
                    Hello! my name is {}
                    <span className="font-semibold">Ryan Garofano</span>
                </h1>
                <span className="text-lg">I'm a tech and health enthusiast</span>
                <SocialLinks />
                <Button text="Get In Touch" />
            </div>
        </section>
    );
}

export default Home;
