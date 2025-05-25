import { ReactNode } from "react";

type NavLinkProps = {
    link?: string;
    children: ReactNode;
}

function NavLink(props: NavLinkProps) {
    const { link, children } = props;
  return (
    <a href={link}>
      <li className="px-2 hover:text-mydarkgreen hover:cursor-pointer hover:scale-105 transition-transform">
        {children}
      </li>
    </a>
  );
}

export default NavLink;
