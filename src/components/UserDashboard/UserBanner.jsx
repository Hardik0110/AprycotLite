import React from 'react'
import UserBanner from '/src/assets/UserDashboard/userProfilebanner.png'
import UserProfile from '/src/assets/uiAvatar.jpg'
import { MapPin } from 'lucide-react'

const UserBannerTop = () => {
  return (
    <div className='p-4'>
    <div className='relative'>
      <img 
        src={UserBanner} 
        alt="user banner"
        className='w-full h-[400px] rounded-lg object-cover' 
      />
      
      <div className='absolute bottom-0 left-0 right-0 h-32 bg-white/50 backdrop-blur-sm rounded-b-lg px-8 py-4'>
        <div className='flex justify-between items-center'>
          <div className='flex items-center gap-6'>
            <img 
              src={UserProfile} 
              alt="profile" 
              className='w-24 h-24 rounded-full border-4 border-white'
            />
            <div>
              <h2 className='text-2xl font-bold text-orange-500'>Hardik Kubavat</h2>
              <div className='flex items-center gap-2 text-black/80 mt-2'>
                <MapPin className='w-4 h-4' />
                <span>New York, USA</span>
              </div>
            </div>
          </div>

          <div className='flex gap-6 '>
            <div className='text-center bg-orange-500  rounded-lg px-4'>
              <p className='text-xl font-bold text-white'>245</p>
              <p className='text-white/80'>Reviews</p>
            </div>
            <div className='text-center bg-orange-500  rounded-lg px-4'>
              <p className='text-xl font-bold text-white'>84</p>
              <p className='text-white/80'>Photos</p>
            </div>
            <div className='text-center bg-orange-500  rounded-lg px-4'>
              <p className='text-xl font-bold text-white'>1.4K</p>
              <p className='text-white/80'>Followers</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default UserBannerTop
