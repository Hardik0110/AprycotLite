import React from 'react';
import menuItems from '../common/data/menuItems.json';
import PizzaIcon from '/src/assets/Pizzaicon.png';
import PastaIcon from '/src/assets/Fruitsicon.png';
import SnacksIcon from '/src/assets/Snacksicon.png';
import VeggiesIcon from '/src/assets/Veggiesicon.png';
import HotdogIcon from '/src/assets/Hotdogicon.png';
import BurgerIcon from '/src/assets/Burgericon.png';
import DrinkIcon from '/src/assets/Cokeicon.png';
import './MenuSections.css';

const iconMap = {
  Pizza: PizzaIcon,
  Pasta: PastaIcon,
  Snacks: SnacksIcon,
  Veggies: VeggiesIcon,
  Hotdog: HotdogIcon,
  Burger: BurgerIcon,
  Drink: DrinkIcon
};

const MenuSection = () => {
  return (
    <div className="menu-container">
      <div className="menu-header">
        <h2 className="menu-title">{menuItems.menuTitle}</h2>
        <button className="view-all-button">
          View ALL <span className="arrow-icon">&#62;</span>
        </button>
      </div>
      
      <div className="menu-grid">
        {menuItems.categories.map((category) => (
          <div key={category.name} className="menu-item">
            <div className="item-icon-container">
              <img 
                src={iconMap[category.name]}
                alt={category.name}
                className="item-icon"
              />
            </div>
            <span className="item-name">{category.name}</span>
            <div className="item-divider"></div>
            <span className="item-arrow">&#62;</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MenuSection;