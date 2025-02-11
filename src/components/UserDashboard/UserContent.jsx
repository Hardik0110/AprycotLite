import React from 'react'
import Main from './Main'
import Searchbar from '../common/Searchbar'

const UserContent = ( { expanded }) => {
  return (
    <div className={` border rounded-m flex-1 ml-20 transition-all duration-300 ${expanded ? "ml-[200px]" : "ml-20"}`}>
      <div className="sticky top-0 z-20 bg-white ">
        <Searchbar />
      </div>
      <div className="">
        <Main />
      </div>
    </div>
  )
}

export default UserContent
