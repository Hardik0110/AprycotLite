import React from 'react'
import myCartData from '../common/data/myCart.json'
import MushroomPizza from '/src/assets/MushroomPizza.png'
import ItalianPizza from '/src/assets/ItalianPizza.png'
import SausagePizza from '/src/assets/SausagePizza.png'
import CheesePizza from '/src/assets/CheesePizza.png'
import { Trash2 } from 'lucide-react'
import './mycart.css'

const MyCart = () => {
    const iconMap = {
        "Mushroom Pizza": MushroomPizza,
        "Cheese Pizza": CheesePizza,
        "Sausage Pizza": SausagePizza,
        "Italian Pizza": ItalianPizza
    }

    return (
        <div className="cart-container">
            <div className="cart-header">
                <h2 className="cart-title">{myCartData.title}</h2>
            </div>

            <div className="cart-items-container">
                {myCartData.items.map((item, index) => (
                    <div key={index} className="cart-item">
                        <div className="item-details">
                            <div className="item-image-container">
                                <img 
                                    src={iconMap[item.name]} 
                                    alt={item.name}
                                    className="item-image"
                                />
                            </div>
                            <div>
                                <p className="item-info">{item.name}</p>
                                <p className="item-quantity">x: {item.quantity}</p>
                            </div>
                        </div>
                        <div className="item-price-section">
                            <span className="item-price">₹{item.price}</span>
                            <Trash2 className="delete-button" />
                        </div>
                    </div>
                ))}
            </div>

            <div className="checkout-container">
                <button className="checkout-button">
                    Checkout
                </button>
            </div>
        </div>
    )
}

export default MyCart