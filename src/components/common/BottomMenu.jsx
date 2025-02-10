import React from 'react'
import Spaghetti from '/src/assets/BottomMenu/Spaghetti.png'
import Sweets from '/src/assets/BottomMenu/Sweets.png'
import VegetablePizza from '/src/assets/BottomMenu/VegetablePizza.png'
import MushroomPizza from '/src/assets/MushroomPizza.png'
import { Star , Plus } from 'lucide-react'
import bottomMenu from './data/bottomMenu.json'

const BottomMenu = () => {
    const iconMap = {
        "Spaghetti": Spaghetti,
        "Sweets": Sweets,
        "Vegetable Pizza": VegetablePizza,
        "Mushroom Pizza": MushroomPizza
    }

    return (
        <div className='w-[830px] h-[280px] p-2 mt-6 mb-2'>
            <div className="grid grid-cols-4 gap-4">
                {bottomMenu.items.map((item, index) => (
                    <div key={index} className="relative bg-white p-4 rounded-xl hover:bg-orange-300 hover:shadow-lg transition-all duration-300 cursor-pointer group">
                        {/* Image Section with Overlap */}
                        <div className="relative -mt-20 mb-6 flex justify-center">
                            <div className="w-36 h-36 rounded-full overflow-hidden shadow-xl transition-all duration-300">
                                <img 
                                    src={iconMap[item.name]} 
                                    alt={item.name}
                                    className="w-full h-full object-cover transform transition-all duration-300"
                                />
                            </div>
                        </div>
    
                        {/* Content Section */}
                        <div className="text-start mt-9">
                            <h3 className="font-semibold text-gray-800 mb-2 group-hover:text-white transition-colors duration-300">{item.name}</h3>
                            
                            {/* Star Rating */}
                            <div className="flex justify-start gap-1 mb-3">
                                {[...Array(5)].map((_, i) => (
                                    <Star 
                                        key={i}
                                        className={`w-4 h-4 
                                            ${i < 3 
                                                ? 'fill-orange-500 text-orange-500 group-hover:fill-white group-hover:text-white' 
                                                : 'fill-transparent text-orange-500 stroke-2 group-hover:text-white group-hover:fill-orange-500'
                                            }`}
                                    />
                                ))}
                            </div>
    
                            {/* Price and Add Button */}
                            <div className="flex justify-between items-center mt-8">
                                <span className="font-bold text-orange-500 group-hover:text-white">₹{Math.floor(Math.random() * (999 - 299) + 299)}</span>
                                <button className="w-5 h-5 bg-orange-500   rounded-full flex items-center justify-center text-white hover:bg-orange-600 transition-colors duration-300">
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