import React from 'react'
import Spaghetti from '/src/assets/BottomMenu/Spaghetti.png'
import Sweets from '/src/assets/BottomMenu/Sweets.png'
import VegetablePizza from '/src/assets/BottomMenu/VegetablePizza.png'
import MushroomPizza from '/src/assets/MushroomPizza.png'
import { Star, Plus } from 'lucide-react'
import bottomMenu from './data/bottomMenu.json'
import './bottomMenu.css'


const BottomMenu = () => {
    const iconMap = {
        "Spaghetti": Spaghetti,
        "Sweets": Sweets,
        "Vegetable Pizza": VegetablePizza,
        "Mushroom Pizza": MushroomPizza
    }

    return (
        <div className='bottom-menu-container'>
            <div className="grid grid-cols-4 gap-4">
                {bottomMenu.items.map((item, index) => (
                    <div key={index} className="menu-card">
                        <div className="menu-image-wrapper">
                            <div className="menu-image">
                                <img 
                                    src={iconMap[item.name]} 
                                    alt={item.name}
                                    className="menu-image-content"
                                />
                            </div>
                        </div>
    
                        <div className="menu-content">
                            <h3 className="menu-title">{item.name}</h3>
                            
                            <div className="star-rating">
                                {[...Array(5)].map((_, i) => (
                                    <Star 
                                        key={i}
                                        className={i < 3 ? 'star-icon-filled' : 'star-icon-empty'}
                                    />
                                ))}
                            </div>
    
                            <div className="menu-footer">
                                <span className="price-text">
                                    ₹{Math.floor(Math.random() * (999 - 299) + 299)}
                                </span>
                                <button className="add-button">
                                    <Plus className="w-3 h-3" />
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default BottomMenu