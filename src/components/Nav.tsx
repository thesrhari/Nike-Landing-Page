import { useState } from "react";
import { headerLogo } from "../assets/images";
import { hamburger } from "../assets/icons";
import { navLinks } from "../constants";

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  const toggleMenu = () => {
    if (isMenuOpen) {
      setIsClosing(true);
      setTimeout(() => {
        setIsMenuOpen(false);
        setIsClosing(false);
      }, 40);
    } else {
      setIsMenuOpen(true);
    }
  };

  return (
    <header className="padding-x py-8 absolute z-50 w-full">
      <nav className="flex justify-between items-center max-container">
        <a href="/">
          <img src={headerLogo} alt="Logo" width={130} height={29} />
        </a>

        <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
          {navLinks.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="font-montserrat leading-normal text-lg text-slate-gray hover:font-semibold"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden max-lg:block">
          <img
            src={hamburger}
            alt="Hamburger"
            width={25}
            height={25}
            className="cursor-pointer"
            onClick={toggleMenu}
          />
        </div>

        <div
          className={`fixed inset-0 bg-white z-[100] lg:hidden transition-all duration-300 ease-in-out transform ${
            isMenuOpen
              ? "translate-x-0 opacity-100 visibility-visible"
              : isClosing
              ? "translate-x-0 opacity-0 visibility-hidden"
              : "translate-x-full opacity-0 visibility-hidden"
          }`}
        >
          <div className="flex justify-end p-4">
            <button onClick={toggleMenu} className="text-2xl p-2">
              ✕
            </button>
          </div>
          <ul className="flex flex-col items-center gap-8 pt-8">
            {navLinks.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="font-montserrat text-xl text-slate-gray hover:font-semibold"
                  onClick={toggleMenu}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Nav;
