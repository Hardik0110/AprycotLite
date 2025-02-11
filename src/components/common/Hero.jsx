import React from 'react';
import Banner from '/src/assets/banner.png'
import CouponCard from '/src/assets/CouponCard.png'
import Category from '../common/Category'
import MyCart from '../common/MyCart';
import MenuSection from './MenuSection';
import BottomMenu from './BottomMenu';
import TrendingOrders from './TrendingOrders';
import './hero.css'

const Hero = () => {
  return (
    <div className="hero-container">
      <div className="hero-layout">
        <div className="hero-columns">
          {/* Left Column */}
          <div className="hero-left-column">
            {/* Banner Section */}
            <div className="hero-banner">
              <img src={Banner} alt="Banner" className="banner-image" />
              <div className="banner-overlay">
                <div className="banner-content">
                  <div className="banner-text-container">
                    <div className="deal-text">Deal of the Day</div>
                    <h2 className="welcome-text">Hello, Hardik Kubavat</h2>
                    <p className="delivery-text">
                      Get <span className="highlight-text">Free Delivery</span> on every weekend
                    </p>
                    <button className="menu-button">Check Menu</button>
                  </div>
                </div>
              </div>
            </div>
    
            {/* Menu Sections */}
            <div><MenuSection /></div>
            <div><BottomMenu /></div>
            <div><TrendingOrders /></div>
          </div> 
    
          {/* Right Column */}
          <div className="hero-right-column">
            <img src={CouponCard} alt="Coupon Card" className="coupon-card" />
            <MyCart />
            <Category />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;