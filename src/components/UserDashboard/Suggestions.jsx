import React from 'react'
import burger from '/src/assets/UserDashboard/burger.png'
import pasta  from '/src/assets/UserDashboard/pasta.png'
import pizza from '/src/assets/UserDashboard/news2.png'
import pizza1 from '/src/assets/UserDashboard/news1.png'


const Suggestions = () => {
    const Items = [
        {
            image: burger,
            title: 'Burger',
            quantity: 'x453 options'
        },{
            image: pasta,
            title: 'Pasta',
            quantity: 'x230 options'
        },{
            image: pizza,
            title: 'Pizza',
            quantity: 'x340 options'
        },{
            image: pizza1,
            title: 'Pizza',
            quantity: 'x200 options'
        }
    ]
  return (
    <div className='w-full bg-white rounded-lg shadow-xl p-4 mb-4'>
      <h1 className='text-black font-semibold text-xl font-bold '>Suggestions</h1>
      <div className='h-[1px] w-full bg-gray-200 mb-6 mt-2'></div>

      <div className='space-y-4'>
        {
            Items.map((Items, index) => (
                <div key={index} className='flex gap-6'>
                        <img 
                        src={Items.image} 
                        alt={Items.title}
                        className='w-14 h-14 rounded-m object-cover mb-6' />
                        <h3 className='text-m font-semibold text-gray-800'>{Items.title}</h3>
                        <br />
                        <h5 className='text-sm text-gray-600'>{Items.quantity}</h5>
                </div>
            ))
        }
      </div>
    </div>
  )
}

export default Suggestions
