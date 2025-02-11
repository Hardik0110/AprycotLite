import React from 'react'
import PostImage from '/src/assets/UserDashboard/PostImage.png'
import UIAvatar from '/src/assets/uiAvatar.jpg'
import { Heart, MessageCircle } from 'lucide-react'

const UserPost = () => {
  return (
    <div className='ml-1 mt-2 w-full h-[800px] bg-white rounded-lg shadow-xl overflow-hidden'>
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
        <p className='text-gray-700 mb-4'>
          Enjoying the most amazing Italian pasta at this new restaurant! 
          The flavors are simply incredible 🍝 #FoodLover #ItalianCuisine
        </p>

        {/* Comments Section */}
        <div className='space-y-4 mt-4'>
          {/* Comment 1 */}
          <div className='flex gap-3'>
            <img src={UIAvatar} alt="commenter" className='w-8 h-8 rounded-full' />
            <div className='flex-1'>
              <div className='bg-gray-50 p-3 rounded-lg'>
                <h4 className='font-semibold text-sm'>John Doe</h4>
                <p className='text-sm text-gray-600'>Looks delicious! I need to try this place soon 😋</p>
              </div>
              <div className='flex gap-4 mt-2 ml-2 text-xs text-gray-500'>
                <button className='hover:text-orange-500 text-orange-500 flex items-center gap-1 group'>
                  <Heart className='w-3 h-3 fill-red-500  group-hover:text-orange-500 ' />
                  Like
                </button>
                <button className='hover:text-orange-700 text-orange-500 flex items-center gap-1'>
                  <MessageCircle className='w-3 h-3' />
                  Reply
                </button>
                <span className='text-orange-500'>2h ago</span>
              </div>
            </div>
          </div>

          {/* Comment 2 */}
          <div className='flex gap-3'>
            <img src={UIAvatar} alt="commenter" className='w-8 h-8 rounded-full' />
            <div className='flex-1'>
              <div className='bg-gray-50 p-3 rounded-lg'>
                <h4 className='font-semibold text-sm'>Sarah Smith</h4>
                <p className='text-sm text-gray-600'>The presentation is amazing! 👌</p>
              </div>
              <div className='flex gap-4 mt-2 ml-2 text-xs text-gray-500'>
                <button className='hover:text-orange-500 text-orange-500 flex items-center gap-1 group'>
                  <Heart className='w-3 h-3 fill-red-500 text-red-500 group-hover:text-orange-500 group-hover:fill-orange-500' />
                  Like
                </button>
                <button className='hover:text-orange-700 text-orange-500 flex items-center gap-1'>
                  <MessageCircle className='w-3 h-3' />
                  Reply
                </button>
                <span className='text-orange-500'>1h ago</span>
              </div>
            </div>
          </div>
        </div>

        {/* Comment Input */}
        <div className='mt-6 flex gap-3 items-center'>
          <img src={UIAvatar} alt="user" className='w-8 h-8 rounded-full' />
          <div className='flex-1 relative'>
            <input 
              type="text"
              placeholder="Add a comment..."
              className='w-full px-4 py-2 bg-gray-50 rounded-full border border-orange-400 focus:outline-none focus:border-orange-500'
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default UserPost