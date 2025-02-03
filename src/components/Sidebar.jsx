import React, { useState } from 'react'
import MainLogo from '../assets/MainLogo.png'
import Logo from '../assets/Logo.png'
import { LayoutDashboard, Users, Settings, Package, Mail, FileText, LogOut } from 'lucide-react'

const Sidebar = () => {
  const [expanded, setExpanded] = useState(false);

  const sidebarItems = [
    { name: "Dashboard", icon: LayoutDashboard, path: "/" },
    { name: "Users", icon: Users, path: "/users" },
    { name: "Authentication", icon: FileText, path: "/auth" },
    { name: "Mail", icon: Mail, path: "/mail" },
    { name: "Widgets", icon: Package, path: "/widgets" },
    { name: "Settings", icon: Settings, path: "/settings" },
  ];

  return (
    <aside className="h-screen fixed top-2 left-0">
      <nav 
        className={`h-full flex flex-col bg-white border-r shadow-sm transition-all duration-300 gap-4
          ${expanded ? "w-60" : "w-20"}`}
        onMouseEnter={() => setExpanded(true)}
        onMouseLeave={() => setExpanded(false)}
      >
        <div className="flex justify-between items-center">
          <div className="overflow-hidden transition-all duration-300 ease-in-out">
            {expanded ? (
              <img src={MainLogo} alt="Main Logo" className="w-xl justify-center" />
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

        <ul className="flex-1 px-3 space-y-2">
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
        </ul>

        <div className="border-t flex p-3">
          <img
            src="https://ui-avatars.com/api/?background=c7d2fe&color=3730a3&bold=true"
            alt="User"
            className="w-8 h-8 rounded-md"
          />
          <div className={`flex justify-between items-center overflow-hidden transition-all 
            ${expanded ? "w-32 ml-3" : "w-0"}`}>
            <div className="leading-4">
              <h4 className="font-semibold text-sm">John Doe</h4>
              <span className="text-xs text-gray-600">johndoe@example.com</span>
            </div>
            <LogOut className="w-4 h-4 cursor-pointer" />
          </div>
        </div>
      </nav>
    </aside>
  );
};

export default Sidebar;