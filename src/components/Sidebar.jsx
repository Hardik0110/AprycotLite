import React, { useState } from 'react'
import MainLogo from '../assets/MainLogo.png'
import Logo from '../assets/Logo.png'
import { LayoutDashboard, Users, Settings, Package, Mail, FileText, LogOut , Component} from 'lucide-react'
import DashboardIcon from '../assets/DashboardIcon.png'
import Game from '../assets/Game.png'
import ShieldDone from '../assets/Shield Done.png'
import User from '../assets/3 User.png'
import Utilities from '../assets/Utilities.png'
import Wallet from '../assets/Wallet.png'
import TicketStar from '../assets/Ticket Star.png'

const Sidebar = () => {
  const [expanded, setExpanded] = useState(false);

  const sidebarItems = [
    {
      title: "Home",
      items: [
        { name: "Dashboard", icon: () => <img src={DashboardIcon} className='hover:bg-gray-200 '/>, path: "/" },
      ]
    },
    {
      title: "Pages",
      items: [
        { name: "Special Pages", icon: () => <img src={Game} className='hover:bg-gray-200 '/>, path: "/special" },
        { name: "Authentication", icon: () => <img src={ShieldDone} className='hover:bg-gray-200 border-radius: [100%] '/>, path: "/auth" },
        { name: "Users", icon: () => <img src={User} className='hover:bg-gray-200 bg-orange-500 outline-style: solid;'/>, path: "/users" },
        { name: "Utilities", icon: () => <img src={Utilities} />, path: "/utilities" },
      ]
    },
    {
      title: "Elements",
      items: [
        { name: "Components", icon: () => <img src={Wallet} />, path: "/components" },
        { name: "Widgets", icon: () => <img src={TicketStar} />, path: "/widgets" },
      ]
    }
  ]

  return (
    <aside className="h-screen fixed top-2 left-0">
      <nav 
        className={`h-full flex flex-col bg-white border-r shadow-sm transition-all duration-300 gap-8
          ${expanded ? "w-45" : "w-20 "}`}
        onMouseEnter={() => setExpanded(true)}
        onMouseLeave={() => setExpanded(false)}
      >
        <div className="flex justify-between items-center">
          <div className="overflow-hidden transition-all duration-4000 ease-in-out">
            {expanded ? (
              <img src={MainLogo} alt="Main Logo" className="gap-2" />
            ) : (
              <button 
            onClick={() => setExpanded((curr) => !curr)}
            className={`rounded-lg bg-gray-50 hover:bg-gray-100 ${expanded ? 'opacity-0' : 'opacity-100'}`}
          >
            <img 
              src={Logo} 
              alt="Toggle" 
              className={`rounded-lg bg-gray-50 hover:bg-gray-100 ${expanded ? 'opacity-0' : 'opacity-100'}`}
            />
          </button>
            )}
          </div>

        </div>
        <div className="flex-1 px-3 ">
          {sidebarItems.map((section, index) => (
            <div key={section.title} className={`border-b border-width: 3px  ${index !== 0 ? "mt-4" : ""}`}>
              {expanded && (
                <p className="text-s font-semibold test-decoration-line: underline  text-gray-500 mb-2 px-3 justify-start ">
                  {section.title}
                </p>
              )}
              <ul className="space-y-2">
                {section.items.map((item) => (
                  <li
                    key={item.name}
                    className="relative flex items-center py-2 px-3 font-medium rounded-md cursor-pointer
                      transition-colors group hover:bg-orange-500 text-gray-600 hover:text-white"
                  >
                    <item.icon className="w-5 h-5" />
                    <span className={`overflow-hidden transition-all ${
                      expanded ? "w-32 ml-3" : "w-0"
                    }`}>
                      {item.name}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        {/* <ul className="flex-1 px-3 space-y-2">
          {sidebarItems.map((item) => (
            <li
              key={item.name}
              className="relative flex items-center py-2 px-3 font-medium rounded-md cursor-pointer
                transition-colors group hover:bg-indigo-50 text-gray-600"
            >
              <item.icon className="w-5 h-5" />
              <span className={`overflow-hidden transition-all ${expanded ? "w-32 ml-3" : "w-0"}`}>
                {item.name}
              </span>
            </li>
          ))}
        </ul> */}
      </nav>
    </aside>
  );
};

export default Sidebar;