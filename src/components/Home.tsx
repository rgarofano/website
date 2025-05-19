import Selfie from "../assets/selfie.jpg";

function Home() {
    return (
        <section className="min-h-screen max-w-5xl flex justify-center items-center">
            <div className="flex flex-col items-center gap-3">
                <img
                    className="size-35 rounded-full object-cover"
                    src={Selfie}
                    alt="Ryan Garofano"
                />
                <h1 className="text-2xl">
                    Hello! my name is { }
                    <span className="font-semibold">Ryan Garofano</span>
                </h1>
                <span className="text-md">I'm a tech and health enthusiast</span>
            </div>
        </section>
    );
}

export default Home;
