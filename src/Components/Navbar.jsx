import { useState } from "react";
import { NavLink } from "react-router-dom";
import { HiMenuAlt3 } from "react-icons/hi"; // Import an icon for the menu (hamburger)

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="flex items-center justify-between pr-5 pl-5 pt-5">
      <div className="bg-black text-white rounded-lg p-2 font-semibold text-xl px-3 opacity-70">
        <p>Text Analyzer</p> {/* Fixed spelling here */}
      </div>
      <div className="lg:hidden flex items-center">
        <HiMenuAlt3
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="text-[#674e8e] text-3xl cursor-pointer"
        />
        <div
          className={`absolute z-50 top-16 right-5 flex flex-col bg-white shadow-lg rounded-lg p-5 space-y-4 md:hidden ${
            isMenuOpen ? "block" : "hidden"
          }`}
        >
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "bg-gradient-to-r from-[#9B8FE7] to-[#A631A1] py-2 rounded-3xl px-5 shadow-xl text-neutral-300"
                : "text-[#674e8e]"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive
                ? "bg-gradient-to-r from-[#9B8FE7] to-[#A631A1] py-2 rounded-3xl px-5 shadow-xl text-neutral-300"
                : "text-[#674e8e]"
            }
          >
            About
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive
                ? "bg-gradient-to-r from-[#9B8FE7] to-[#A631A1] py-2 rounded-3xl px-5 shadow-xl text-neutral-300"
                : "text-[#674e8e]"
            }
          >
            Contact
          </NavLink>
        </div>
      </div>
      <div className=" hidden lg:flex justify-end gap-5 items-center transition-all duration-700 font-semibold text-xl text-[#674e8e]">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "bg-gradient-to-r from-[#9B8FE7] to-[#A631A1] py-2 rounded-3xl px-5 shadow-xl text-neutral-300"
              : "text-[#674e8e]"
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive
              ? "bg-gradient-to-r from-[#9B8FE7] to-[#A631A1] py-2 rounded-3xl px-5 shadow-xl text-neutral-300"
              : "text-[#674e8e]"
          }
        >
          About
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive
              ? "bg-gradient-to-r from-[#9B8FE7] to-[#A631A1] py-2 rounded-3xl px-5 shadow-xl text-neutral-300"
              : "text-[#674e8e]"
          }
        >
          Contact
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
