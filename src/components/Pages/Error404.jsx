import React from 'react'
import Burger from '/src/assets/Error404/Burger.png'
import Four from '/src/assets/Error404/Four.png'

const Error404 = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#FFF6D8]">
      <div className="flex items-center justify-center gap-4">
        <img src={Four} alt="4" className="w-40 h-40 object-contain" />
        <img src={Burger} alt="0" className="w-48 h-48 object-contain shadow-xl" />
        <img src={Four} alt="4" className="w-40 h-40 object-contain" />
      </div>

      <h2 className="text-3xl font-bold text-gray-800 mt-8 mb-4">
        Oops! Page Not Found
      </h2>
      <p className="text-gray-600 mb-8 text-center max-w-md">
        The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
      </p>

      <button 
        onClick={() => window.location.reload()} 
        className="px-8 py-3 bg-orange-500 text-white rounded-full font-semibold
          hover:bg-orange-600 transition-colors duration-300 flex items-center gap-2"
      >
        Reload Page
      </button>
    </div>
  )
}

export default Error404