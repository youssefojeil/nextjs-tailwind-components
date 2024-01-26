import React from 'react';

const MobileNavLink = ({ href, children, className }) => {
  return (
    <a
      href={href}
      className={`-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50 ${
        className || ''
      }`}
    >
      {children}
    </a>
  );
};

export default MobileNavLink;
