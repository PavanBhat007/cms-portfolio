import React from "react";

export const Navbar = () => {
  return (
    <header className="px-8 mx-auto">
      <nav className="flex justify-between items-center py-4">
        <div className="group text-neon font-bold text-xl cursor-default">
          KSP
          <span className="max-w-0 overflow-hidden opacity-0 group-hover:max-w-xs group-hover:opacity-100 transition-all duration-300 ease-in-out">
            avan
          </span>
        </div>
        <div className="flex items-center gap-6 text-sm font-medium">
          <a className="hover:text-neon" href="/about">
            About
          </a>{" "}
          {/* About + Skills */}
          <a className="hover:text-neon" href="/experiences">
            Experiences
          </a>
          <a className="hover:text-neon" href="/projects">
            Projects
          </a>
          <a className="hover:text-neon" href="/contact">
            Contact
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
