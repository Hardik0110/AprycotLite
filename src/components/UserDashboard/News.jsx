import React from 'react'
import NewsImage1 from '/src/assets/UserDashboard/news1.png'
import NewsImage2 from '/src/assets/UserDashboard/news2.png'
import NewsImage3 from '/src/assets/UserDashboard/news3.png'

const News = () => {
  const newsItems = [
    {
      image: NewsImage1,
      title: "New Restaurant Opening",
      desc: "Grand opening of Italian cuisine..."
    },
    {
      image: NewsImage2,
      title: "Food Festival 2024",
      desc: "Join us for the biggest food fest..."
    },
    {
      image: NewsImage3,
      title: "Cooking Workshop",
      desc: "Learn from master chefs this weekend..."
    }
  ]

  return (
    <div className='ml-2 mt-2 w-full h-[300px] bg-white rounded-lg shadow-xl p-4 mb-2'>
      
      <h2 className='text-xl font-bold text-gray-800 mb-3'>News</h2>
      <div className='h-[1px] w-full bg-gray-200 mb-6'></div>

      
      <div className='space-y-4'>
        {newsItems.map((item, index) => (
          <div key={index} className='flex gap-6'>
            <img 
              src={item.image} 
              alt={item.title}
              className='w-14 h-14 rounded-lg object-cover'
            />
            <div>
              <h3 className='text-sm font-semibold text-gray-800'>{item.title}</h3>
              <div className='h-[1px] w-full bg-gray-200 mb-2'></div>
              <p className='text-xs text-gray-500 line-clamp-2'>{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default News