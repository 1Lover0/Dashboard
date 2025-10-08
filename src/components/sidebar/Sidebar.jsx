import React from 'react'
import './Sidebar.css'

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <div className="logo">Webkit <span>Solution</span></div>
      <ul>
        <li>Dashboard</li>
        <li>Projects</li>
        <li>Contacts</li>
        <li>Kanban</li>
        <li>Analytics</li>
        <li>Calendar</li>
        <li>Messages</li>
      </ul>
      <div className="user-profile">
        <div className="user-profile-photo"></div>
        <div className="user-profile-text">
            <div className="user-profile-name">Dummy Dummy</div>
            <div className="user-profile-email">xyz.@gmail.com</div>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
