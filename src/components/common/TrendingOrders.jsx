import img1 from '/src/assets/TrendingOrders/img1.png'
import Sweets from '/src/assets/BottomMenu/Sweets.png'
import img3 from '/src/assets/TrendingOrders/img3.png'
import Crown from '/src/assets/TrendingOrders/crown.png'
import trendingOrders from '../common/data/trendingOrders.json'
import { Plus } from 'lucide-react'

const TrendingOrders = () => {
    const iconMap = {
        "Italian Salad": img1,
        "Spicy Chicken": Sweets,
        "Veggie Pizza": img3,
        "Chicken Wings": img3,
        "Pizza Special": img1,
        "Garlic Bread": img3
    }

    return (
        <div className='w-[836px] h-auto p-2 mt-2'>
            <div className='flex justify-between items-center mb-16'>
                <h2 className="text-2xl font-bold">{trendingOrders.title}</h2>
                <button className='flex items-center text-black font-medium'>
                    View ALL <span className='ml-4 w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center text-white text-sm'>&#62;</span>
                </button>
            </div>
    
            <div className="grid grid-cols-3 gap-9">
                {trendingOrders.items.map((item, index) => (
                    <div key={index} 
                        className="relative bg-white p-3 rounded-xl hover:bg-orange-300 hover:shadow-lg 
                            transition-all duration-300 cursor-pointer group h-[180px] w-[230px]"
                    >
                        {/* Image Section */}
                        <div className="absolute top-1/2 -right-10 -translate-y-1/2">
                            <div className="w-28 h-28 rounded-full overflow-hidden shadow-xl 
                                transform group-hover:scale-105 transition-all duration-300">
                                <img 
                                    src={iconMap[item.name]}
                                    alt={item.name}
                                    className="w-full h-full object-cover"
                                    style={{ objectFit: 'cover' , aspectRatio: '1/1'}}
                                />
                            </div>
                        </div>
    
                        {/* Content Section */}
                        <div className="flex flex-col gap-1.5 pr-14">
                            <div className="flex items-center gap-1">
                                <img 
                                src={Crown} 
                                alt="crown"
                                className='w-4 h-4 object-contain' />
                                <span className="text-xs text-gray-500">Top of the {item.topOf}</span>
                            </div>
                            <h3 className="font-semibold text-gray-800 group-hover:text-white text-sm">
                                {item.name}
                            </h3>
                            
                            <div className="flex flex-col">
                                <span className="text-xs text-gray-500">{item.calories}</span>
                                <div className="h-[2px] w-8 bg-gray-200 mt-2 group-hover:bg-orange-500"></div>
                            </div>
                            <span className="text-xs text-gray-500 mt-2">{item.persons} persons</span>
                            <div className="flex items-center justify-between mt-4">
                                <span className="font-bold text-orange-500 text-sm">₹{item.price}</span>
                                <button className='w-6 h-6 bg-orange-500 mr-12 rounded-full flex items-center justify-center text-white hover:bg-orange-600 transition-colors duration-300'>
                                    <Plus className='w-4 h-4' />
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default TrendingOrders