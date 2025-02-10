import React from 'react'
import UserBannerTop from './UserBanner'
import News from './News'
import UserPost from './UserPost'
import Suggestions from './Suggestions'
import About from './About'
import OnlineOrder from './OnlineOrder'
import OnlineOrder2 from './OnlineOrder2'


const Main = () => {
    return (
        <div className='min-h-screen w-full bg-[#FFF6D8] overflow-y-auto'>
            <UserBannerTop />
            <div className='grid grid-cols-12 gap-6 px-2 mt-2 mb-6'> 
                {/* Left Column */}
                <div className='col-span-3 space-y-8'> 
                    <News />
                    <OnlineOrder />
                    <OnlineOrder2 />
                </div>

                {/* Middle Column */}
                <div className='col-span-6 space-y-2'> 
                    <UserPost />
                    
                </div>

                {/* Right Column */}
                <div className='col-span-3 space-y-8'> 
                    <About />
                    <Suggestions />
                    
                </div>
            </div>
        </div>
    )
}

export default Main