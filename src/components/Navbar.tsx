"use client";
import Link from "next/link";
import { useState } from "react";

import { contact } from "@/content";

const menuItems = [
  { title: "Services", link: "#services" },
  { title: "Work", link: "#work" },
  { title: "Pricing", link: "#pricing" },
  { title: "FAQ", link: "#faq" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-zinc-100 bg-white/80 backdrop-blur">
      <nav className="container-x flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2 font-semibold tracking-tight">
          <span className="grid h-7 w-7 place-items-center rounded-md bg-zinc-900 text-sm text-white">
            S
          </span>
          Stipill
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {menuItems.map((m) => (
            <Link
              key={m.link}
              href={m.link}
              className="text-sm text-zinc-600 transition hover:text-zinc-900"
            >
              {m.title}
            </Link>
          ))}
        </div>

        <div className="hidden md:block">
          <Link href={contact.whatsapp} target="_blank" className="btn-primary !py-2">
            Start a project
          </Link>
        </div>

        <button
          className="-mr-2 p-2 text-zinc-700 md:hidden"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-label="Toggle menu"
        >
          <i className={`bi ${open ? "bi-x-lg" : "bi-list"} text-xl`} />
        </button>
      </nav>

      {open && (
        <div className="border-t border-zinc-100 md:hidden">
          <div className="container-x flex flex-col py-4">
            {menuItems.map((m) => (
              <Link
                key={m.link}
                href={m.link}
                onClick={() => setOpen(false)}
                className="py-2 text-zinc-700"
              >
                {m.title}
              </Link>
            ))}
            <Link
              href={contact.whatsapp}
              target="_blank"
              className="btn-primary mt-3 justify-center"
            >
              Start a project
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
