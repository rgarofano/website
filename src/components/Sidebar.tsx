import Logo from "../assets/logo.png";
import { FiMessageCircle } from "react-icons/fi";
import { GoBriefcase } from "react-icons/go";
import { MdOutlineCopyright } from "react-icons/md";
import { RiGraduationCapLine } from "react-icons/ri";
import NavLink from "./NavLink";
import { RxHamburgerMenu } from "react-icons/rx";
import { useState } from "react";
import { IoClose } from "react-icons/io5";

function Sidebar() {
    const [showMenu, setShowMenu] = useState(false);
    return (
        <>
            <aside className={`fixed ${showMenu ? "left-0" : "left-[-5rem] sm:left-0"} top-0 bg-cream shadow-md min-h-full p-2 z-30 flex flex-col justify-between items-center transition-all`}>
                <a href="#home">
                    <img className="size-15" src={Logo} alt="logo" />
                </a>
                <nav>
                    <ul className="flex flex-col justify-center items-center gap-4 py-4 text-4xl">
                        <NavLink>
                            <GoBriefcase />
                        </NavLink>
                        <NavLink>
                            <RiGraduationCapLine />
                        </NavLink>
                        <NavLink>
                            <FiMessageCircle />
                        </NavLink>
                    </ul>
                </nav>
                <footer className="flex items-center gap-1">
                    <MdOutlineCopyright /> 2025
                </footer>
            </aside>
            <div
                className={`fixed ${ showMenu ? "top-20 left-15 bg-myred text-white" : "top-5 left-7 bg-white" } text-3xl p-2 shadow-md rounded-lg z-20 hover:cursor-pointer transition-all`}
                onClick={() => setShowMenu((current) => !current)}
            >
                {showMenu ? <IoClose className="relative left-[0.4rem]"/> : <RxHamburgerMenu />}
            </div>
        </>
    );
}

export default Sidebar;
