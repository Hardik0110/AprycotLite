import React from 'react'
import burger from '/src/assets/UserDashboard/burger.png'
import pasta from '/src/assets/UserDashboard/pasta.png'
import pizza from '/src/assets/UserDashboard/news2.png'
import pizza1 from '/src/assets/UserDashboard/news1.png'

const Suggestions = () => {
    const Items = [
        {
            image: burger,
            title: 'Burger',
            quantity: 'x453 options'
        },
        {
            image: pasta,
            title: 'Pasta',
            quantity: 'x230 options'
        },
        {
            image: pizza,
            title: 'Pizza',
            quantity: 'x340 options'
        },
        {
            image: pizza1,
            title: 'Pizza',
            quantity: 'x200 options'
        }
    ]

    return (
      <div className='w-full bg-white rounded-lg shadow-xl p-4 mb-4'>
          <h1 className='text-black font-semibold text-xl font-bold'>Suggestions</h1>
          <div className='h-[1px] w-full bg-gray-200 mb-6 mt-2'></div>

          <div className='space-y-4'>
              {Items.map((item, index) => (
                  <div key={index}>
                      <div className='flex items-start gap-6'>
                          <img 
                              src={item.image} 
                              alt={item.title}
                              className='w-16 h-16 rounded-lg object-cover shadow-sm'
                          />
                          <div className='flex flex-col justify-center'>
                              <h3 className='text-lg font-semibold text-gray-800'>{item.title}</h3>
                              <span className='text-sm text-gray-600 mt-1'>{item.quantity}</span>
                          </div>
                      </div>
                      {index !== Items.length - 1 && (
                          <div className='h-[1px] w-full bg-gray-100 mt-6'></div>
                      )}
                  </div>
              ))}
          </div>
      </div>
  )
}

export default Suggestions