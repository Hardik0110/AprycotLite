import React , {useState} from 'react'
import Sidebar from '../common/Sidebar';
import UserContent from '../UserDashboard/UserContent';


const UserDashboard = () => {
    const [expanded, setExpanded] = useState(false);
  return (
    <div className="flex min-h-screen ">
    <Sidebar setExpandedState={setExpanded} />
    <UserContent expanded={expanded} />
    
  </div>
  )
}

export default UserDashboard
