import { useState } from "react";
import logo from "../assets/logo.png";

const Header: React.FC = () => {
  const [hamburgerButton, setHamburgerButton] = useState(false);

  return (
    <div className="fixed top-0 left-0 w-full z-50 bg-gray-100 shadow-md">
      <div className="h-20 flex items-center justify-between px-4">
        <img className="w-10 md:w-15" src={logo} alt="onon-logo" />
        <div className="hidden lg:flex items-center">
          <div className="ml-20 flex gap-4 font-bold">
            <a href="" className="hover:text-[#c7a17a] duration-300">
              ANA SAYFA
            </a>
            <a href="" className="hover:text-[#c7a17a] duration-300">
              MENÜ
            </a>
            <a href="" className="hover:text-[#c7a17a] duration-300">
              ŞUBELER
            </a>
            <a href="" className="hover:text-[#c7a17a] duration-300">
              HABERLER
            </a>
            <a href="" className="hover:text-[#c7a17a] duration-300">
              HAKKIMIZDA
            </a>
            <a href="" className="hover:text-[#c7a17a] duration-300">
              İLETİŞİM
            </a>
          </div>
        </div>
        <div className="flex">
          <button
            onClick={() => setHamburgerButton((prev) => !prev)}
            className="block lg:hidden mr-4 font-bold text-2xl cursor-pointer"
          >
            ☰
          </button>
          <button className="hidden sm:block mr-4 px-6 py-2.5 border rounded border-[#c7a17a] hover:border-black bg-[#c7a17a] text-white text-sm lg:text-lg font-bold hover:bg-black duration-300">
            İLETİŞİM
          </button>
        </div>
      </div>

      <div
        className={`absolute top-full left-0 w-full overflow-hidden transition-[max-height,opacity] duration-300 ease-in-out flex flex-col bg-white shadow-md font-bold
        ${hamburgerButton ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"}`}
      >
        <a href="" className="py-2 px-4">
          ANA SAYFA
        </a>
        <hr className="border-gray-200" />
        <a href="" className="py-2 px-4">
          MENÜ
        </a>
        <hr className="border-gray-200" />
        <a href="" className="py-2 px-4">
          ŞUBELER
        </a>
        <hr className="border-gray-200" />
        <a href="" className="py-2 px-4">
          HABERLER
        </a>
        <hr className="border-gray-200" />
        <a href="" className="py-2 px-4">
          HAKKIMIZDA
        </a>
        <hr className="border-gray-200" />
        <a href="" className="py-2 px-4">
          İLETİŞİM
        </a>
      </div>
    </div>
  );
};

export default Header;
