import { useState } from "react";
import MenuIcon from "@/components/MenuIcon";
import CloseIcon from "@/components/CloseIcon";
import { links } from "@/utils/consts";

function NavBar() {
  const [isActive, setIsActive] = useState(false);
  return (
    <nav className="lg:w-auto">
      <div
        onClick={() => setIsActive(!isActive)}
        className="lg:hidden flex justify-center">
        {!isActive ? <MenuIcon /> : <CloseIcon />}
      </div>
      <div
        className={`lg:flex flex flex-col lg:flex-row justify-between items-center ${
          isActive ? "block" : "hidden"
        }`}>
        {links.map(({ url, text }) => (
          <a
            key={text}
            href={url}
            className="links">
            {text}
          </a>
        ))}
      </div>
    </nav>
  );
}

export default NavBar;
