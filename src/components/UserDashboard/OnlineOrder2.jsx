import React from 'react'                                   

const OnlineOrder2 = () => {
    const Items = [
        { title: 'Favourite Order'},
        { title: 'Order History'},
        { title: 'My Address'},
    ]
  return (
    <div className='ml-2 mt-2 w-full bg-white rounded-lg shadow-xl p-4'>
      <h2 className='text-xl font-bold text-gray-800 mb-4'>Online Order</h2>
      <div className='h-[2px] w-full bg-gray-200 mb-6'></div>

      <div className='space-y-6'>
        {
            Items.map((item , index) => (
                <div key={index}>
                    <div className='flex justify-between items-center py-2'>
                        <span className='text-gray-700'>{item.title}</span>
                        
                    </div>
                    {index !== Items.length - 1 && (
                        <div className='h-[2px] w-full bg-gray-200'></div>
                    )}
                </div>
            ))}
      </div>
    </div>
  )
}

export default OnlineOrder2
