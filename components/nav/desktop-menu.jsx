import { Popover } from '@headlessui/react';
import ProductPopover from './popover';
import MenuLink from './menu-link';

const DesktopMenu = () => {
  return (
    <Popover.Group className="hidden lg:flex lg:gap-x-12">
      <ProductPopover />
      <MenuLink href="#">Features</MenuLink>
      <MenuLink href="#">Marketplace</MenuLink>
      <MenuLink href="#">Company</MenuLink>
    </Popover.Group>
  );
};

export default DesktopMenu;
