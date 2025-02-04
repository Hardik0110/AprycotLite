import React from 'react'
import myCartData from '../Hero/data/myCart.json'
import MushroomPizza from '/src/assets/MushroomPizza.png'
import ItalianPizza from '/src/assets/ItalianPizza.png'
import SausagePizza from '/src/assets/SausagePizza.png'
import CheesePizza from '/src/assets/CheesePizza.png'
import { Trash2 } from 'lucide-react'

const MyCart = () => {
    const iconMap = {
        "Mushroom Pizza": MushroomPizza,
        "Cheese Pizza": CheesePizza,
        "Sausage Pizza": SausagePizza,
        "Italian Pizza": ItalianPizza
    }

    return (
        <div className="w-auto ml-14 mr-7 h-auto bg-white rounded-xl p-6 shadow-sm">
            <div className="flex justify-between items-center mb-8 pb-8 border-b">
                <h2 className="text-xl font-bold">{myCartData.title}</h2>
            </div>

            <div className="space-y-4">
                {myCartData.items.map((item, index) => (
                    <div key={index} className="flex items-center justify-between p-2 hover:bg-orange-50 rounded-lg transition-all duration-300">
                        <div className="flex items-center gap-4">
                            <div className="w-20 h-20 rounded-full shadow-md transition-all duration-300 group-hover:ring-2 group-hover:ring-orange-200">
                                <img 
                                    src={iconMap[item.name]} 
                                    alt={item.name}
                                    className="w-20 h-20 rounded-full object-cover shadow-lg hover:ring-4 hover:ring-orange-200 transition-all duration-300"
                                />
                            </div>
                            <div>
                                <p className="font-medium text-sm">{item.name}</p>
                                <p className="text-s text-gray-500">x: {item.quantity}</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-3">
                            <span className="font-semibold text-orange-500">₹{item.price}</span>
                            <Trash2 
                                className='w-5 h-5 text-red-500 cursor-pointer hover:text-red-600 transition-colors duration-300'
                            />
                        </div>
                    </div>
                ))}
            </div>

            <div className="flex justify-center mt-6">
                <button className="bg-orange-500 text-white py-2 px-8 rounded-full font-semibold hover:bg-orange-600 transition-colors duration-300">
                    Checkout
                </button>
            </div>
        </div>
    )
}

export default MyCart