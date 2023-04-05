import React from 'react';

const Menu = ({ menuItems }) => {
  return (
    <div className="grid">
      {menuItems.map((menuItem) => {
        const { id, title, desc } = menuItem;
        return (
          <div key={id} className="border p-2">
            <h2 className="capitalize mb-2 text-blue-500">{title}</h2>
            <p>{desc}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Menu;
