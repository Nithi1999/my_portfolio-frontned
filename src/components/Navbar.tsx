"use client";

import { useState } from 'react';
import Link from "next/link";
import { Menu, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: "/projects", label: "Projects" },
    { href: "/demos", label: "Demos" },
    { href: "/resume", label: "Resume" },
    { href: "/contact", label: "Contact" },
  ];
  
  return (
    <>
      <nav className={`
        flex justify-between items-center 
        px-6 md:px-10 py-6 
        bg-background/80 backdrop-blur-md
        sticky top-0 z-50
        border-b border-border
      `}>
        <Link href="/" className="text-xl font-bold bg-[length:200%_200%]
                bg-gradient-to-r
                from-indigo-400 via-violet-500 to-fuchsia-500
                bg-clip-text text-transparent
                animate-gradient">Nithin A</Link>

        <div className="flex items-center gap-6 md:gap-8">
          <div className="hidden md:flex items-center gap-6 text-secondary">
            <Link href="/projects" className="btn-nav hover:text-primary transition-colors">
              Projects
            </Link>
            <Link href="/demos" className="btn-nav hover:text-primary transition-colors">
              Demos
            </Link>
            <Link href="/resume" className="btn-nav hover:text-primary transition-colors">
              Resume
            </Link>
            <Link href="/contact" className="btn-nav hover:text-primary transition-colors">
              Contact
            </Link>
          </div>
          <ThemeToggle />
          <button
              onClick={() => setIsOpen(true)}
              className="md:hidden p-2 rounded-lg text-muted-foreground hover:text-foreground"
            >
              <Menu size={24} />
            </button>
        </div>
      </nav>

      <div
          className={`
            fixed inset-0 z-40  
            bg-background/80 backdrop-blur-md
            dark:bg-black/50
            backdrop-blur-2xl
            transition-opacity duration-300
            ${isOpen ? "opacity-70" : "opacity-0 pointer-events-none"}
          `}
          onClick={() => setIsOpen(false)}
        />

        <aside
            className={`
              fixed top-0 right-0 z-50
              h-half w-[60%] max-w-sm
              bg-background/70
              backdrop-blur-3xl
              shadow-2xl
              transform transition-transform duration-400 ease-out
              ${isOpen ? "translate-x-0" : "translate-x-full"}
            `}
          >
          <div className="flex justify-between items-center px-6 py-6 border-b border-border">
            <span className="text-lg font-semibold text-primary">
              Menu
            </span>
            <button
              onClick={() => setIsOpen(false)}
              className="p-2 rounded-full"
            >
              <X size={24} />
            </button>
          </div>

          <div className="flex flex-col px-6 py-6 space-y-2">
            {navLinks.map((link, index) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="
                  px-4 py-3 rounded-xl
                  text-lg font-medium
                  text-muted-foreground
                  hover:text-primary hover:bg-muted/60
                  transition-colors duration-200
                "
              >
                {link.label}
              </Link>
            ))}
          </div>
      </aside>
    </>
  );
}