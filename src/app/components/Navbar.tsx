"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import clsx from "clsx";
import { Heart, Menu, Search, ShoppingCart, User, X } from "lucide-react";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    const handleResize = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        if (typeof window !== "undefined" && window.innerWidth >= 768) {
          setIsOpen(false);
        }
      }, 100); // Debounce resize events
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-[#FBEBB5] px-6 py-4">
      <div className="flex items-center justify-between">
        {/* Center Section (Navigation Links) */}
        <div className="hidden md:flex space-x-14 ml-20 items-center justify-center w-full">
          <NavLinks />
        </div>

        {/* Right Section (Icons) */}
        <div className="flex mr-3 items-center space-x-5">
          <NavIcons />
          {/* Hamburger Menu - Visible only on mobile */}
          <button
            className="md:hidden p-2"
            onClick={toggleMenu}
            aria-label={isOpen ? "Close Menu" : "Open Menu"}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={clsx(
          "md:hidden overflow-hidden transition-all duration-300 ease-in-out",
          { "max-h-96": isOpen, "max-h-0": !isOpen }
        )}
      >
        <div className="pt-4 pb-2 space-y-2 text-center">
          <NavLinks mobile />
        </div>
      </div>
    </nav>
  );
}

function NavLinks({ mobile = false }: { mobile?: boolean }) {
  const linkClass = mobile
    ? "block py-2 text-sm font-medium"
    : "text-sm font-medium text-center";

  return (
    <>
      <Link className={linkClass} href="/">
        Home
      </Link>
      <Link className={linkClass} href="/shop">
        Shop
      </Link>
      <Link className={linkClass} href="/about">
        About
      </Link>
      <Link className={linkClass} href="/contact">
        Contact
      </Link>
    </>
  );
}

function NavIcons() {
  return (
    <>
      <button className="p-2" aria-label="Account">
        <User className="h-5 w-5" aria-hidden="true" />
      </button>
      <button className="p-2" aria-label="Search">
        <Search className="h-5 w-5" aria-hidden="true" />
      </button>
      <button className="p-2" aria-label="Wishlist">
        <Heart className="h-5 w-5" aria-hidden="true" />
      </button>
      <button className="p-2" aria-label="Cart">
        <ShoppingCart className="h-5 w-5" aria-hidden="true" />
      </button>
    </>
  );
}
