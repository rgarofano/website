function ScrollDown() {
    return (
        <div className="absolute bottom-8 text-gray-400">
            <a href="#work" className="flex flex-col items-center gap-2">
                <span className="text-sm">scroll down</span>
                <span className="relative w-5 h-7 border-2 border-gray-400 rounded-2xl">
                    <span className="absolute top-2 left-1 w-2 h-3 bg-gray-400 rounded-full animate-bounce" />
                </span>
            </a>
        </div>
    );
}

export default ScrollDown;
