import React from 'react'
import Cookie from '/src/assets/Error500/cookie.png'
import Five from '/src/assets/Error500/five.png'

const Error500 = () => {
  return (
     <div className="min-h-screen flex flex-col items-center justify-center bg-[#FFF6D8]">
       <div className="flex items-center justify-center">
    <img src={Five} alt="five" className="w-[250px] h-[290px]" />
    <div className="flex -space-x-24"> 
      <img src={Cookie} alt="cookie" className="w-[300px] h-[300px]" />
      <img src={Cookie} alt="cookie" className="w-[300px] h-[300px]" />
    </div>
  </div>
 
       <h2 className="text-3xl font-bold text-gray-800 mt-8 mb-4">
         Internal Server Error
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

export default Error500
