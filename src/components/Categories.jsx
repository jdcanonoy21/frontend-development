import { useState } from 'react';
import Button from './Button';

const Categories = ({ filterItems, categories }) => {
  const [activeCategory, setActiveCategory] = useState('all');

  const handleClickCategory = (category) => {
    setActiveCategory(category === activeCategory ? '' : category);
    filterItems(category);
  };

  return (
    <ul className="flex items-center mb-3">
      {categories.map((category, index) => {
        const isActive = category === activeCategory;
        return (
          <li className="mr-2" key={index}>
            <Button
              onClick={() => handleClickCategory(category)}
              primary
              outline={!isActive}
              className="capitalize"
            >
              {category}
            </Button>
          </li>
        );
      })}
    </ul>
  );
};

export default Categories;
