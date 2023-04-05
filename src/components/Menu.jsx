import React from 'react';

const Menu = ({ menuItems }) => {
  return (
    <div className="flex">
      {menuItems.map((menuItem) => {
        const { id, title, desc } = menuItem;
        return (
          <div key={id} className="w-1/2">
            <h2>{title}</h2>
            <p>{desc}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Menu;
