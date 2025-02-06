import React from 'react'
import Burger from '/src/assets/Error404/Burger.png'
import Four from '/src/assets/Error404/Four.png'

const Error404 = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#FFF6D8]">
      <div className="flex items-center justify-center gap-6">
        <img src={Four} alt="4" className="w-[300px] h-[300px] " />
        <img src={Burger} alt="0" className="w-[300px] h-[300px] drop-shadow-[0_35px_35px_rgba(0,0,0,0.30)]" />
        <img src={Four} alt="4" className="w-[300px] h-[300px]" />
      </div>

      <h2 className="text-3xl font-bold text-gray-800 mt-8 mb-4">
        Oopsiie! Page Not Found
      </h2>
      <p className="text-gray-600 mb-8 text-center max-w-md">
        The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
      </p>

      <button 
        onClick={() => window.location.reload()} 
        className="px-8 py-3 bg-orange-500 text-white rounded-full font-semibold
          hover:bg-orange-600 transition-colors duration-300 flex items-center gap-2"
      >
        Reload Page HeHe
      </button>
    </div>
  )
}

export default Error404