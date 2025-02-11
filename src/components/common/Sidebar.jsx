import React, { useState } from 'react'
import MainLogo from '/src/assets/MainLogo.png'
import Logo from '/src/assets/Logo.png'
import DashboardIcon from '/src/assets/DashboardIcon.png'
import Game from '/src/assets/Game.png'
import ShieldDone from '/src/assets/Shield Done.png'
import User from '/src/assets/3 User.png'
import Utilities from '/src/assets/Utilities.png'
import Wallet from '/src/assets/Wallet.png'
import TicketStar from '/src/assets/Ticket Star.png'
import { useNavigate } from 'react-router-dom'

const Sidebar = ({ setExpandedState }) => {
  const [expanded, setExpanded] = useState(false);
  const navigate = useNavigate();

  const handleExpand = (state) => {
    setExpanded(state);
    setExpandedState(state);
  }

  const handleNavigate = (path) => {
    navigate(path)
  }

  const sidebarItems = [
    {
      title: "Home",
      items: [
        { 
          name: "Dashboard", 
          icon: DashboardIcon, 
          path: "/userdashboard",
          className: "brightness-[0.4]" 
        },
      ]
    },
    {
      title: "Pages",
      items: [
        { 
          name: "Special Pages", 
          icon: Game, 
          path: "/special",
          className: "brightness-[0.4]" 
        },
        { 
          name: "Authentication", 
          icon: ShieldDone, 
          path: "/login",
          className: "brightness-[0.4]" 
        },
        { 
          name: "Users", 
          icon: User, 
          path: "/error500", 
          className: "bg-orange-500 rounded-lg"
        },  
        { 
          name: "Utilities", 
          icon: Utilities, 
          path: "/utilities",
          className: "brightness-[0.4]" 
        },
      ] 
    },
    {
      title: "Elements",
      items: [
        { 
          name: "Components", 
          icon: Wallet, 
          path: "/components",
          className: "brightness-[0.4]" 
        },
        { 
          name: "Widgets", 
          icon: TicketStar, 
          path: "/widgets",
          className: "brightness-[0.4]" 
        },
      ]
    }
  ];

  return (
    <div className="flex min-h-screen bg-gray-50">
      <nav 
        className={`fixed top-2 left-0 h-[calc(100vh-16px)] bg-white border-r shadow-lg transition-all duration-300 ease-in-out z-10
          ${expanded ? "w-[200px]" : "w-20"}`}
        onMouseEnter={() => handleExpand(true)}
        onMouseLeave={() => handleExpand(false)}
      >
        <div className="p-4 flex justify-center items-center h-16">
          <div className={`transition-all duration-300 ease-in-out overflow-hidden
            ${expanded ? "w-full" : "w-full"}`}>
            {expanded ? (
              <div className="w-full flex justify-start">
                <img 
                  src={MainLogo} 
                  alt="Main Logo" 
                  className="h-12 w-15"  
                />
              </div>
            ) : (
              <button 
                onClick={() => setExpanded(curr => !curr)}
                className="w-full flex items-center justify-center"
              >
                <img 
                  src={Logo} 
                  alt="Toggle" 
                  className="h-14 w-14"  
                />
              </button>
            )}
          </div>
        </div>

        <div className="flex-1 px-2 overflow-y-auto">
          {sidebarItems.map((section, index) => (
            <div key={section.title} className={`pb-4 ${index !== 0 ? "mt-6" : ""} border-b shadow-s border-gray-200`}>
              {expanded && (
                <p className="text-sm font-semibold text-gray-500 mb-3 px-3">
                  {section.title}
                </p>
              )}
              <ul className="space-y-2">
                {section.items.map((item) => (
                  <li
                    key={item.name}
                    onClick={() => navigate(item.path)}
                    className="group relative flex items-center py-2 px-3 rounded-md cursor-pointer
                      transition-all duration-200 ease-in-out hover:bg-orange-500"
                  >
                    <div className="w-8 h-8 flex items-center justify-center">
                      <img 
                        src={item.icon} 
                        alt={item.name}
                        className={`w-6 h-6 group-hover:brightness-[200%] transition-all duration-200 ${item.className}`}
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
    </div>
  );
};

export default Sidebar;