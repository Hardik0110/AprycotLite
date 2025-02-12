import  { useState } from 'react'
import PropTypes from 'prop-types'
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

  const sidebarItems = [
    {
      title: "Home",
      items: [
        { 
          name: "Dashboard", 
          icon: DashboardIcon, 
          path: "/userdashboard",
          isActive: true
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
          isActive: false
        },
        { 
          name: "Authentication", 
          icon: ShieldDone, 
          path: "/login",
          isActive: false
        },
        { 
          name: "Users", 
          icon: User, 
          path: "/error500", 
          isActive: false
        },  
        { 
          name: "Utilities", 
          icon: Utilities, 
          path: "/utilities",
          isActive: false
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
          isActive: false
        },
        { 
          name: "Widgets", 
          icon: TicketStar, 
          path: "/widgets",
          isActive: false
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
                  className="h-10 w-12"  
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
                    <div className={`w-8 h-8 flex items-center justify-center rounded-lg
                      ${item.isActive ? 'bg-orange-500' : 'bg-gray-100'}`}>
                      <img 
                        src={item.icon} 
                        alt={item.name}
                        className={`w-5 h-5 transition-all duration-200
                          ${item.isActive ? 'brightness-200' : 'brightness-[0.4]'}
                          group-hover:brightness-[200%]`}
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

Sidebar.propTypes = {
  setExpandedState: PropTypes.func.isRequired,
};

export default Sidebar;