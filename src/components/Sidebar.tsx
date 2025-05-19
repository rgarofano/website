import Logo from "../assets/logo.png";
import { FiMessageCircle } from "react-icons/fi";
import { GoBriefcase } from "react-icons/go";
import { MdOutlineCopyright } from "react-icons/md";
import { RiGraduationCapLine } from "react-icons/ri";

function Sidebar() {
    return (
        <aside className="fixed left-0 top-0 shadow-md min-h-full p-2 z-10 flex flex-col justify-between items-center">
            <a href="#home">
                <img className="size-15" src={Logo} alt="logo" />
            </a>
            <nav>
                <ul className="flex flex-col justify-center items-center gap-4 py-4 text-3xl">
                    <li className="px-2">
                        <GoBriefcase />
                    </li>
                    <li className="px-2">
                        <RiGraduationCapLine />
                    </li>
                    <li className="px-2">
                        <FiMessageCircle />
                    </li>
                </ul>
            </nav>
            <footer className="flex items-center gap-1">
                <MdOutlineCopyright /> 2025
            </footer>
        </aside>
    );
}

export default Sidebar;
