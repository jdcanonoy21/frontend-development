import { useState } from 'react';
import Categories from '../components/Categories';
import Menu from '../components/Menu';
import items from '../components/data';

const allCategories = ['all', ...new Set(items.map((item) => item.category))];

const MenuPage = () => {
  const [menuItems, setMenuItems] = useState(items);
  const [categories, setCategories] = useState(allCategories);

  const filterItems = (category) => {
    if (category === 'all') {
      setMenuItems(items);
      return;
    }

    const newItems = items.filter((item) => item.category === category);
    setMenuItems(newItems);
  };

  return (
    <div>
      <Categories filterItems={filterItems} categories={categories} />
      <Menu menuItems={menuItems} />
    </div>
  );
};

export default MenuPage;
