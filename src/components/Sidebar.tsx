import Logo from "../assets/logo.png";
import { FiMessageCircle } from "react-icons/fi";
import { GoBriefcase } from "react-icons/go";
import { MdOutlineCopyright } from "react-icons/md";
import { RiGraduationCapLine } from "react-icons/ri";
import NavLink from "./NavLink";
import { RxHamburgerMenu } from "react-icons/rx";

function Sidebar() {
    return (
        <>
            <aside className="hidden fixed left-0 top-0 bg-cream shadow-md min-h-full p-2 z-10 sm:flex flex-col justify-between items-center">
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
            <div className="fixed top-5 left-7 text-3xl bg-cream p-2 shadow-md rounded-lg hover:cursor-pointer">
                <RxHamburgerMenu />
            </div>
        </>
    );
}

export default Sidebar;
