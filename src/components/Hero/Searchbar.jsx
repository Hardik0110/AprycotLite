import React   from 'react'
import { Search, Bell, Mail, ShoppingCart } from 'lucide-react'
import UIAvatar from '/src/assets/uiAvatar.jpg'

const Searchbar = ({ isExpanded }) => {
    
  return (
    <div className="w-full bg-white h-16 flex items-center justify-between px-4 shadow-sm">
      <div className="flex-1 flex justify-start items-center mr-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
          <input 
            type="text" 
            placeholder="Search..." 
            className={`pl-10 pr-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:border-orange-500 transition-all duration-300 ease-in-out ${
              isExpanded ? 'w-[250px]' : 'w-[300px]'
            }`}
          />
        </div>
      </div>

      <div className="flex items-center gap-6">
        <div className="flex items-center gap-6">
          {['bell', 'mail', 'shopping-cart'].map((icon) => (
            <button 
              key={icon} 
              className="w-12 h-12 flex items-center justify-center hover:bg-orange-500 rounded-full transition-colors duration-200"
            >
              {icon === 'bell' && <Bell className="h-6 w-6 text-gray-600 group-hover:text-white" />}
              {icon === 'mail' && <Mail className="h-6 w-6 text-gray-600 group-hover:text-white" />}
              {icon === 'shopping-cart' && <ShoppingCart className="h-6 w-6 text-gray-600 group-hover:text-white" />}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-3 border-l pl-6">
          <div className="text-right">
            <h4 className="font-medium text-sm">Hardik Kubavat</h4>
            <p className="text-xs text-gray-500">Software Engineer</p>
          </div>
          <img 
            src={UIAvatar} 
            alt="User Avatar" 
            className="w-10 h-10 rounded-full object-cover"
          />
        </div>
      </div>
    </div>
  )
}

export default Searchbar;