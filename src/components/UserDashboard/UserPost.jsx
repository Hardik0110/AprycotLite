import React from 'react'
import PostImage from '/src/assets/UserDashboard/PostImage.png'
import UIAvatar from '/src/assets/uiAvatar.jpg'
import { Heart, MessageCircle } from 'lucide-react'

const UserPost = () => {
  return (
    <div className='ml-1 mt-2 w-full h-screen bg-white rounded-lg shadow-xl overflow-auto'>
      {/* Header */}
      <div className='p-4 flex justify-between items-center'>
        <div className='flex items-center gap-3'>
          <img 
            src={UIAvatar} 
            alt="avatar" 
            className='w-10 h-10 rounded-full'
          />
          <div>
            <h3 className='font-semibold'>Hardik Kubavat</h3>
            <p className='text-xs text-gray-500'>Ahmedabad, Gujarat </p>
          </div>
        </div>
        <span className='text-sm text-gray-500'>2 hours ago</span>
      </div>

      
      <img 
        src={PostImage} 
        alt="post" 
        className='w-full h-[300px] object-cover'
      />

      
      <div className='p-4'>
        <div className='flex gap-4 mb-3'>
          <button className='flex items-center gap-2 text-gray-600 hover:text-orange-500 transition-colors'>
            <Heart className='w-6 h-6' />
            <span>2.4k</span>
          </button>
          <button className='flex items-center gap-2 text-gray-600 hover:text-orange-500 transition-colors'>
            <MessageCircle className='w-6 h-6' />
            <span>42</span>
          </button>
        </div>

        {/* Description */}
        <p className='text-gray-700'>
          Enjoying the most amazing Italian pasta at this new restaurant! 
          The flavors are simply incredible 🍝 #FoodLover #ItalianCuisine
        </p>
      </div>
    </div>
  )
}

export default UserPost 