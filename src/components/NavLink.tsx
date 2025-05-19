import { ReactNode } from "react";

function NavLink(props: { children: ReactNode }) {
    return (
        <li className="px-2 hover:text-mydarkgreen hover:cursor-pointer hover:scale-105 transition-transform">
           {props.children} 
        </li>
    );
}

export default NavLink;
