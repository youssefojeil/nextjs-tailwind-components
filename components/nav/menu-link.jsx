import React from 'react';

const MenuLink = ({ href, children }) => (
  <a href={href} className="text-sm font-semibold leading-6 text-gray-900">
    {children}
  </a>
);

export default MenuLink;
