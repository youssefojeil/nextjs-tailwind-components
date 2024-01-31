"use client";

import { useState } from "react";
import Logo from "./logo";
import DesktopMenu from "./desktop-menu";
import MenuLink from "./menu-link";
import MobileMenu from "./mobile-menu";
import MobileMenuButton from "./mobile-menu-button";

import { auth } from "@clerk/nextjs";
import { UserButton } from "@clerk/nextjs";
import { useAuth } from "@clerk/nextjs";
import { useUser } from "@clerk/nextjs";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const { isLoaded, userId: clientUserId, sessionId, getToken } = useAuth();

  const { isLoaded: isUserLoaded, isSignedIn, user } = useUser();

  console.log({ clientUserId });

  // const { userId } = auth();
  // console.log({ userId });

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
          {isSignedIn ? (
            <UserButton afterSignOutUrl="/" />
          ) : (
            <MenuLink href="/sign-in">Log in &rarr;</MenuLink>
          )}
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
