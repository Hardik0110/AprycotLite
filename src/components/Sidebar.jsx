// Sidebar.jsx with adjusted logo sizing
import React, { useState } from 'react'
import MainLogo from '../assets/MainLogo.png'
import Logo from '../assets/Logo.png'
import DashboardIcon from '../assets/DashboardIcon.png'
import Game from '../assets/Game.png'
import ShieldDone from '../assets/Shield Done.png'
import User from '../assets/3 User.png'
import Utilities from '../assets/Utilities.png'
import Wallet from '../assets/Wallet.png'
import TicketStar from '../assets/Ticket Star.png'
import Searchbar from './Searchbar'

const Sidebar = () => {
  const [expanded, setExpanded] = useState(false);

  const sidebarItems = [
    {
      title: "Home",
      items: [
        { name: "Dashboard", icon: DashboardIcon, path: "/" },
      ]
    },
    {
      title: "Pages",
      items: [
        { name: "Special Pages", icon: Game, path: "/special" },
        { name: "Authentication", icon: ShieldDone, path: "/auth" },
        { name: "Users", icon: User, path: "/users" },
        { name: "Utilities", icon: Utilities, path: "/utilities" },
      ]
    },
    {
      title: "Elements",
      items: [
        { name: "Components", icon: Wallet, path: "/components" },
        { name: "Widgets", icon: TicketStar, path: "/widgets" },
      ]
    }
  ];

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <nav 
        className={`fixed top-2 left-0 h-[calc(100vh-16px)] bg-white border-r shadow-sm transition-all duration-300 ease-in-out z-10
          ${expanded ? "w-[257px]" : "w-20"}`}
        onMouseEnter={() => setExpanded(true)}
        onMouseLeave={() => setExpanded(false)}
      >
        <div className="p-4 flex justify-center items-center h-16">
          <div className={`transition-all duration-300 ease-in-out overflow-hidden
            ${expanded ? "w-full" : "w-12"}`}>
            {expanded ? (
              <div className="w-full flex justify-start">
                <img 
                  src={MainLogo} 
                  alt="Main Logo" 
                  className="h-12 w-auto"  // Adjusted height and made width auto
                />
              </div>
            ) : (
              <button 
                onClick={() => setExpanded(curr => !curr)}
                className="w-12 h-12 rounded-lg hover:bg-gray-100 transition-colors duration-200 flex items-center justify-center"
              >
                <img 
                  src={Logo} 
                  alt="Toggle" 
                  className="h-10 w-10"  // Increased size of collapsed logo
                />
              </button>
            )}
          </div>
        </div>

        <div className="flex-1 px-3 overflow-y-auto">
          {sidebarItems.map((section, index) => (
            <div key={section.title} className={`pb-4 ${index !== 0 ? "mt-6" : ""} border-b border-gray-200`}>
              {expanded && (
                <p className="text-sm font-semibold text-gray-500 mb-3 px-3">
                  {section.title}
                </p>
              )}
              <ul className="space-y-2">
                {section.items.map((item) => (
                  <li
                    key={item.name}
                    className="group relative flex items-center py-2 px-3 rounded-md cursor-pointer
                      transition-all duration-200 ease-in-out hover:bg-orange-500"
                  >
                    <div className="w-8 h-8 flex items-center justify-center">
                      <img 
                        src={item.icon} 
                        alt={item.name}
                        className="w-6 h-6 group-hover:brightness-[200%] transition-all duration-200" 
                      />
                    </div>
                    <span className={`whitespace-nowrap overflow-hidden transition-all duration-300 ease-in-out
                      ${expanded ? "ml-3 opacity-100 w-32" : "w-0 opacity-0"} group-hover:text-white`}>
                      {item.name}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </nav>

      {/* Main Content */}
      <div className={`flex-1 transition-all duration-300 ease-in-out ${expanded ? "ml-[257px]" : "ml-20"}`}>
        <div className="fixed top-2 left-0 right-0 transition-all duration-300 ease-in-out" 
             style={{ marginLeft: expanded ? '257px' : '80px' }}>
          <Searchbar isExpanded={expanded} />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;