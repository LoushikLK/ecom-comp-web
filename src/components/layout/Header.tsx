"use client";

import { ShoppingCart, X, Menu } from "lucide-react";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white dark:bg-gray-950 backdrop-blur ">
      <div className="container flex h-16 items-center">
        <div className="mr-4 hidden md:flex">
          <a className="mr-6 flex items-center space-x-2" href="/">
            <ShoppingCart className="h-6 w-6 text-primary" />
            <span className="hidden text-primary font-bold sm:inline-block">
              Adfolios Software
            </span>
          </a>
          <nav className="flex items-center space-x-6 text-sm font-medium">
            <a className="transition-colors hover:text-primary" href="#about">
              About
            </a>
            <a
              className="transition-colors hover:text-primary"
              href="#services"
            >
              Services
            </a>
            <a className="transition-colors hover:text-primary" href="#team">
              Our Team
            </a>
            <a className="transition-colors hover:text-primary" href="#contact">
              Contact
            </a>
          </nav>
        </div>
        <button
          className="inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-ring disabled:opacity-50 disabled:pointer-events-none ring-offset-background bg-secondary text-secondary-foreground hover:bg-secondary/80 h-10 py-2 px-4 md:hidden"
          onClick={toggleMenu}
        >
          {isMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
        {isMenuOpen && (
          <div className="absolute top-16 left-0 w-full bg-white dark:bg-gray-950 border-b md:hidden">
            <nav className="flex flex-col space-y-4 p-4">
              <a className="transition-colors hover:text-primary" href="#about">
                About
              </a>
              <a
                className="transition-colors hover:text-primary"
                href="#services"
              >
                Services
              </a>
              <a className="transition-colors hover:text-primary" href="#team">
                Our Team
              </a>
              <a
                className="transition-colors hover:text-primary"
                href="#contact"
              >
                Contact
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
