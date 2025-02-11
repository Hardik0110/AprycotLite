import React from 'react'
import { Search, Bell, Mail, ShoppingCart } from 'lucide-react'
import UIAvatar from '/src/assets/uiAvatar.jpg'
import { useNavigate } from 'react-router-dom'
import './searchbar.css'

const Searchbar = ({ isExpanded }) => {
  const navigate = useNavigate();
    
  return (
    <div className="searchbar-container">
      <div className="search-section">
        <div className="search-input-container">
          <Search className="search-icon" />
          <input 
            type="text" 
            placeholder="Search..." 
            className={`search-input ${
              isExpanded ? 'w-[250px]' : 'w-[300px]'
            }`}
          />
        </div>
      </div>

      <div className="actions-container">
        <div className="icon-buttons">
          {['bell', 'mail', 'shopping-cart'].map((icon) => (
            <button key={icon} className="icon-button">
              {icon === 'bell' && <Bell className="icon" />}
              {icon === 'mail' && <Mail className="icon" />}
              {icon === 'shopping-cart' && <ShoppingCart className="icon" />}
            </button>
          ))}
        </div>

        <div className="profile-section" onClick={() => navigate('/userdashboard')}>
          <div className="profile-info">
            <h4 className="profile-name">Hardik Kubavat</h4>
            <p className="profile-role">Software Engineer</p>
          </div>
          <img 
            src={UIAvatar} 
            alt="User Avatar" 
            className="profile-avatar"
          />
        </div>
      </div>
    </div>
  )
}

export default Searchbar