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
    { href: "/architecture", label: "Architecture" },
    { href: "/resume", label: "Resume" },
    { href: "/contact", label: "Contact" },
  ];
  
  return (
    <nav className={`
      flex justify-between items-center 
      px-6 md:px-10 py-6 
      bg-background/80 backdrop-blur-md
      sticky top-0 z-50
      border-b border-border
    `}>
      <h1 className="text-xl font-bold text-primary">Nithin A</h1>

      <div className="flex items-center gap-6 md:gap-8">
        <div className="hidden md:flex items-center gap-6 text-secondary">
          <Link href="/projects" className="btn-nav hover:text-primary transition-colors">
            Projects
          </Link>
          <Link href="/demos" className="btn-nav hover:text-primary transition-colors">
            Demos
          </Link>
          <Link href="/architecture" className="btn-nav hover:text-primary transition-colors">
            Architecture
          </Link>
          <Link href="/resume" className="btn-nav hover:text-primary transition-colors">
            Resume
          </Link>
          <Link href="/contact" className="btn-nav hover:text-primary transition-colors">
            Contact
          </Link>
        </div>
        <ThemeToggle />
        <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="ml-4 p-2 rounded-md text-muted-foreground hover:text-primary"
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
      </div>

      <div 
        className={`
          md:hidden fixed inset-0 z-40
          bg-background/80 backdrop-blur-md
          transition-opacity duration-300 ease-in-out
          ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'}
        `}
        onClick={() => setIsOpen(false)}
      >
        <div 
          className={`
            absolute top-0 right-0 bottom-0 
            w-4/7 max-w-sm bg-background
            transform transition-transform duration-400 ease-out
            ${isOpen ? 'translate-x-0' : 'translate-x-full'}
          `}
          onClick={(e) => e.stopPropagation()}  // prevent closing when clicking inside
        >
          <div className="flex justify-between items-center p-6">
            <span className="text-lg font-semibold text-primary">Menu</span>
            <button 
              onClick={() => setIsOpen(false)}
              className="p-2 rounded-full"
            >
              <X size={24} />
            </button>
          </div>

          <div className="px-4 py-6 space-y-2">
            {navLinks.map((link, index) => (
              <div
                key={link.href}
                className={`
                  transform transition-all duration-400 ease-out
                  ${isOpen 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-6'
                  }
                `}
                style={{ transitionDelay: `${index * 60}ms` }}
              >
                <Link
                  href={link.href}
                  className={`
                    block px-5 py-4 rounded-lg text-lg font-medium
                    text-muted-foreground hover:text-primary hover:bg-muted/60
                    transition-colors duration-200
                  `}
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}