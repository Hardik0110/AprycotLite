import React from 'react';
import menuItems from '../Hero/data/menuItems.json';
import PizzaIcon from '/src/assets/Pizzaicon.png';
import PastaIcon from '/src/assets/Fruitsicon.png';
import SnacksIcon from '/src/assets/Snacksicon.png';
import VeggiesIcon from '/src/assets/Veggiesicon.png';
import HotdogIcon from '/src/assets/Hotdogicon.png';
import BurgerIcon from '/src/assets/Burgericon.png';
import DrinkIcon from '/src/assets/Cokeicon.png';

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
      <div className="w-[830px] h-[350px] p-3 mt-6">
        <div className='flex justify-between items-center mb-6'>
          <h2 className="text-2xl font-bold">{menuItems.menuTitle}</h2>
          <button className='flex items-center text-black font-medium '>
            View ALL <span className='ml-4 w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center text-white text-sm'>&#62;</span>
          </button>
        </div>
        
        <div className="grid grid-cols-7 gap-5">
          {menuItems.categories.map((category) => (
            <div 
              key={category.name}
              className="mt-8 flex flex-col items-center p-6 rounded-lg bg-white hover:bg-orange-300
                transition-all duration-300 cursor-pointer group"
            >
              <div className="w-16 h-16 flex items-center justify-center 
                bg-orange-500 rounded-full mb-2 ">
                <img 
                  src={iconMap[category.name]}
                  alt={category.name}
                  className="w-8 h-8 group-hover:brightness-1 transition-all duration-300"
                />
              </div>
              <span className="text-gray-800 text-sm font-medium group-hover:text-white">
                {category.name}
              </span>
              <div className="h-[2px] w-8 bg-gray-200 mt-5 group-hover:bg-orange-500"></div>
              <span className="mt-5 text-gray-400 group-hover:bg-white group-hover:text-orange-500 text-bold w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center text-white text-sm">&#62;</span>
            </div>
          ))}
        </div>
      </div>
    );
  };

export default MenuSection;