import { Popover } from '@headlessui/react';
import PopoverNavItem from './popover';
import MenuLink from './menu-link';
import { products, callsToAction } from '@/constants/nav-items';

const DesktopMenu = () => {
  return (
    <Popover.Group className="hidden lg:flex lg:gap-x-12">
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
    </Popover.Group>
  );
};

export default DesktopMenu;
