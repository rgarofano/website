type ButtonProps = {
    text: string;
}

function Button({ text }: ButtonProps) {
    return (
        <button className="bg-mydarkgreen text-white px-8 py-2 rounded-full hover:bg-mygreen hover:scale-105 transition-transform">
            {text}
        </button>
    );
}

export default Button;
