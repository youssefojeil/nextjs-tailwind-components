'use client';

import { Popover } from '@headlessui/react';
import PopoverNavItem from './popover';
import MenuLink from './menu-link';
import { products, callsToAction } from '@/constants/nav-items';

import { UserButton, useAuth, useUser } from '@clerk/nextjs';

const DesktopMenu = () => {
  const { isLoaded, userId: clientUserId, sessionId, getToken } = useAuth();

  const { isLoaded: isUserLoaded, isSignedIn, user } = useUser();

  console.log({ clientUserId });

  return (
    <Popover.Group className="hidden lg:flex lg:gap-x-12  lg:justify-end">
      <PopoverNavItem
        navItem="Product"
        subItems={products}
        ctas={callsToAction}
      />
      <MenuLink href="#">Features</MenuLink>
      <MenuLink href="#">Marketplace</MenuLink>
      <MenuLink href="#">Company</MenuLink>
      <PopoverNavItem
        navItem="Services"
        subItems={products}
        ctas={callsToAction}
      />
      {isSignedIn ? (
        <UserButton afterSignOutUrl="/" />
      ) : (
        <MenuLink href="/sign-in">Log in &rarr;</MenuLink>
      )}
    </Popover.Group>
  );
};

export default DesktopMenu;
