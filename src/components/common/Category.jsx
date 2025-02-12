//import React from 'react'
import categoryData from './data/category.json'

const Category = () => {
  const gapClasses = ['mr-2', 'mr-4', 'mr-3', 'ml-2', 'ml-3', 'ml-4']
  const paddingClasses = ['py-2', 'py-3', 'py-2.5']
  const marginClasses = ['mb-3', 'mb-4', 'mb-2']

  return (
    <div className="category-container">
      <div className="category-header">
        <h2 className="category-title">Categories</h2>
        <button className="view-all-btn">
          View ALL <span className="arrow-icon">&#62;</span>
        </button>
      </div>

      <div className="divider"></div>

      <div className="flex flex-wrap">
        {categoryData.categories.map((category, index) => (
          <button
            key={index}
            className={`category-btn ${paddingClasses[index % 2]} ${gapClasses[index % 6]} ${marginClasses[index % 3]}`}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  )
}

export default Category