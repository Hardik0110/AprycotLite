import React from 'react';
import Banner from '/src/assets/banner.png'
import CouponCard from '/src/assets/CouponCard.png'
import Category from '../Hero/Category'
import MyCart from '../Hero/MyCart';
import MenuSection from './MenuSection';
import BottomMenu from './BottomMenu';
import TrendingOrders from './TrendingOrders';


const Hero = () => {
  return (
    <div className="min-h-screen w-full bg-[#FFF6D8] overflow-y-auto">
      <div className="p-4">
        <div className="flex gap-4">
          {/* Left Column */}
          <div className="flex flex-col gap-2">
            {/* Banner Section */}
            <div className="relative w-[830px] h-[340px] rounded-lg overflow-hidden">
              <img 
                src={Banner} 
                alt="Banner" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#ffffff]/80 to-transparent">
                <div className="absolute inset-0 p-5 flex flex-col justify-between">
                  <div className="ml-5">
                    <div className="mt-20 font-bold text-orange-500">
                      Deal of the Day
                    </div>
                    <h2 className="mt-2 text-4xl font-bold text-black">
                      Hello, Hardik Kubavat
                    </h2>
                    <p className="text-black mt-6 text-s font-semibold">
                      Get <span className="text-orange-500">Free Delivery</span> on every weekend
                    </p>
                    <button className="bg-orange-500 mt-12 text-white px-6 py-2 rounded-full font-semibold 
                      hover:bg-opacity-90 transition-all duration-300">
                      Check Menu
                    </button>
                  </div>
                </div>
              </div>
            </div>
    
            {/* Menu Section */}
            <div>
              <MenuSection />
            </div>

            <div>
              <BottomMenu />
            </div>
            
            <div>
              <TrendingOrders />
            </div>
          </div> 
    
          {/* Right Column - Coupon Card */}
          <div className='flex flex-col gap-1/2'>
            <img 
              src={CouponCard} 
              alt="Coupon Card" 
              className="ml-5 h-[390px] w-auto object-contain"
            />
           <MyCart />
           <Category />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;