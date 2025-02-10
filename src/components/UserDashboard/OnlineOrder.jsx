import React from 'react'

const OnlineOrder = () => {
  const items = [
    { title: "Dineline", count: 1 },
    { title: "Reviews", count: 2 },
    { title: "Photos", count: 3 },
    { title: "Followers", count: 4 },
    { title: "Bookmarks", count: 5 },
    { title: "Been There", count: 6 },
    { title: "Achievements", count: 7 },
    { title: "Following", count: 8 }
  ]

  return (
    <div className='ml-2 mt-2 w-full bg-white rounded-lg shadow-md p-4'>
      <h2 className='text-xl font-bold text-gray-800 mb-4'>Online Order</h2>
      <div className='h-[1px] w-full bg-gray-200 mb-6'></div>

      <div className='space-y-6'>
        {items.map((item, index) => (
          <div key={index}>
            <div className='flex justify-between items-center py-2'>
              <span className='text-gray-700'>{item.title}</span>
              <span className='px-4 py-1 bg-orange-500 text-white text-sm rounded-full'>
                {item.count}
              </span>
            </div>
            {index !== items.length - 1 && (
              <div className='h-[1px] w-full bg-gray-200'></div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default OnlineOrder