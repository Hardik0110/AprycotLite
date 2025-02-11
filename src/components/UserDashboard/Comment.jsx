import React from 'react'
import { Heart, MessageCircle, Share2 } from 'lucide-react'
import UIAvatar from '/src/assets/uiAvatar.jpg'

const Comment = () => {
  return (
    <div className="shadow-xl bg-white rounded-lg p-4 ml-1">
      {/* Header with Profile and Time */}
      <div className="flex justify-between items-start mb-8">
        <div className="flex gap-6">
          {/* Profile Picture */}
          <img 
            src={UIAvatar} 
            alt="User Avatar" 
            className="w-12 h-12 rounded-full object-cover border-2 border-orange-100"
          />
          
          {/* Name and Designation */}
          <div>
            <h3 className="font-semibold text-gray-800">Sarah Johnson</h3>
            <p className="text-sm text-gray-500">Food Critic</p>
          </div>
        </div>

        {/* Time Passed */}
        <span className="text-sm text-gray-400">2 hours ago</span>
      </div>

      {/* Comment Content */}
      <div className="">
        <p className="text-gray-700 text-base leading-relaxed mb-6">
          The flavors in this dish are absolutely incredible! The perfect balance 
          of spices and the presentation is stunning. I particularly loved how the 
          chef incorporated local ingredients. Definitely a must-try! 🍝✨
        </p>
      </div>

      {/* Interaction Section */}
      <div className=" flex items-center justify-between mt-4 pt-3 border-t border-gray-100">
        <div className="flex gap-6">
          {/* Like Button */}
          <button className="flex items-center gap-2 text-gray-500 hover:text-orange-500 transition-colors group">
            <Heart className="w-4 h-4 fill-red-500 text-red-500 
              group-hover:fill-orange-500 group-hover:text-orange-500" />
            <span className="text-sm">24 Likes</span>
          </button>

          {/* Reply Button */}
          <button className="flex items-center gap-2 text-gray-500 hover:text-orange-500 transition-colors">
            <MessageCircle className="w-4 h-4" />
            <span className="text-sm">Reply</span>
          </button>
        </div>

        {/* Share Count */}
        <div className="flex items-center gap-2 text-gray-500">
          <Share2 className="w-4 h-4" />
          <span className="text-sm">12 Shares</span>
        </div>
      </div>

      {/* Reply Input */}
      <div className="mt-4 flex gap-3 items-center">
        
        <input 
          type="text"
          placeholder="Reply to Sarah..."
          className="flex-1 bg-gray-50 rounded-full px-4 py-2 text-sm 
            border border-gray-200 focus:border-orange-500 focus:outline-none"
        />
      </div>
    </div>
  )
}

export default Comment