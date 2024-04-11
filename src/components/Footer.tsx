import Link from "next/link";
import React from "react";

const menuItems = [
  { title: "terms", link: "#services" },
  { title: "privacy", link: "#about" },
];

export default function Footer() {
  return (
    <div className="text-center py-8">
      <nav className="mb-3">
        {menuItems.map((menu, index) => (
          <Link
            key={index}
            href={menu.link}
            className="mx-4 text-sm hover:text-purple-700"
          >
            {menu.title}
          </Link>
        ))}
      </nav>
      <p className="text-sm text-slate-500">
        a design and development agency based in Sikkim, India.
      </p>
      <p className="text-sm text-slate-500">
        © 2024 stipill solutions and services
      </p>
    </div>
  );
}
