import React from 'react';
import Searchbar from './Searchbar';
import Hero from './Hero';

const MainContent = ({ expanded }) => {
  return (
    <div className={` border rounded-m flex-1 ml-20 transition-all duration-300 ${expanded ? "ml-[200px]" : "ml-20"}`}>
      <div className="sticky">
        <Searchbar />
      </div>
      <div className="">
        <Hero />
      </div>
    </div>
  );
};

export default MainContent;