import { contact } from "@/content";

export default function Footer() {
  return (
    <footer className="border-t border-zinc-100">
      <div className="container-x flex flex-col gap-4 py-10 text-sm text-zinc-500 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="font-medium text-zinc-900">Stipill Solutions and Services</p>
          <p>Software, web & growth agency · Sikkim, India · Est. 2023</p>
        </div>
        <div className="flex flex-col gap-1 md:items-end">
          <a href={`mailto:${contact.email}`} className="hover:text-zinc-900">
            {contact.email}
          </a>
          <p>© 2023–{new Date().getFullYear()} Stipill. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
