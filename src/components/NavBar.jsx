import { useState } from "react";
import MenuIcon from "./MenuIcon";
import CloseIcon from "./CloseIcon";
import { links } from "@src/utils/consts";

function NavBar() {
  const [isActive, setIsActive] = useState(false);
  return (
    <nav className="md:w-auto">
      <div
        onClick={() => setIsActive(!isActive)}
        className="md:hidden flex justify-center">
        {!isActive ? <MenuIcon /> : <CloseIcon />}
      </div>
      <div
        className={`md:flex flex flex-col md:flex-row justify-between items-center ${
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
