import React from 'react'
import categoryData from './data/category.json'

const Category = () => {
  const gapClasses = ['mr-2', 'mr-4', 'mr-3', 'ml-2', 'ml-3', 'ml-4']
  const paddingClasses = ['py-2', 'py-3', 'py-2.5']
  const marginClasses = ['mb-3', 'mb-4', 'mb-2']

  return (
    <div className="w-auto ml-14 mr-7 mt-4 p-6 rounded-xl bg-white/10 backdrop-blur-sm">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">Categories</h2>
        <button className="flex items-center text-black font-medium">
          View ALL <span className="ml-4 w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center text-white text-sm">&#62;</span>
        </button>
      </div>

      <div className="h-[1px] mt-6 w-full bg-gray-200 mb-6"></div>

      <div className="flex flex-wrap">
        {categoryData.categories.map((category, index) => (
          <button
            key={index}
            className={`px-7 ${paddingClasses[index % 2]} ${gapClasses[index % 6]} ${marginClasses[index % 3]} 
              bg-white rounded-full text-sm font-medium text-orange-500
              border border-orange-500 hover:bg-orange-500 hover:text-white 
              transition-all duration-300 shadow-sm hover:shadow-md`}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  )
}

export default Category