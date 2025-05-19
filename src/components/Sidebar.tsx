import Logo from "../assets/logo.png";
import { FiMessageCircle } from "react-icons/fi";
import { GoBriefcase } from "react-icons/go";
import { MdOutlineCopyright } from "react-icons/md";
import { RiGraduationCapLine } from "react-icons/ri";
import NavLink from "./NavLink";

function Sidebar() {
    return (
        <aside className="fixed left-0 top-0 bg-cream shadow-md min-h-full p-2 z-10 flex flex-col justify-between items-center">
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
    );
}

export default Sidebar;
