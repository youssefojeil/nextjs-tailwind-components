"use client";

import { useState } from "react";
import Logo from "./logo";
import DesktopMenu from "./desktop-menu";
import MenuLink from "./menu-link";
import MobileMenu from "./mobile-menu";
import MobileMenuButton from "./mobile-menu-button";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <header className="bg-white">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <Logo />
        </div>
        <div className="flex lg:hidden">
          <MobileMenuButton onClick={() => setMobileMenuOpen(true)} />
        </div>
        <DesktopMenu />
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <MenuLink href="/login">Log in &rarr;</MenuLink>
        </div>
      </nav>
      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
      />
    </header>
  );
};

export default Navbar;
