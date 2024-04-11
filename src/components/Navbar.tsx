"use client";
import Link from "next/link";
import React, { useState } from "react";

interface Menu {
  title: string;
  link: string;
}

const menuItems: Menu[] = [
  { title: "services", link: "#services" },
  { title: "about", link: "#about" },
  { title: "contact", link: "#contact" },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="border-b">
      <nav className="max-w-5xl mx-auto px-6 md:px-2 flex justify-between py-4">
        <Link href="/" className="font-bold text-purple-700">
          stipill
        </Link>
        <div>
          <div className="hidden md:block">
            {menuItems.map((menu, index) => (
              <Link
                key={index}
                href={menu.link}
                className="mx-4 hover:text-purple-700"
              >
                {menu.title}
              </Link>
            ))}
          </div>
          <button className="md:hidden text-slate-600" onClick={toggleMenu}>
            menu
          </button>
        </div>
      </nav>

      {isMenuOpen && (
        <div className="md:hidden px-6 md:px-2">
          {menuItems.map((menu, index) => (
            <Link
              key={index}
              href={menu.link}
              className="block mb-2 hover:text-purple-700"
            >
              {menu.title}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
};

export default Navbar;
