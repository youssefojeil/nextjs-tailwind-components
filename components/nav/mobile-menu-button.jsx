'use client';

import { Bars3Icon } from '@heroicons/react/20/solid';
import useMobileMenuStore from '@/hooks/useMobileMenuStore';

const MobileMenuButton = () => {
  const { open } = useMobileMenuStore();
  return (
    <button
      type="button"
      className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
      onClick={open}
    >
      <span className="sr-only">Open main menu</span>
      <Bars3Icon className="h-6 w-6" aria-hidden="true" />
    </button>
  );
};

export default MobileMenuButton;
