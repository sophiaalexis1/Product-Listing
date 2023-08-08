import React, { useState } from 'react';
import './NavBar.css';

const NavigationBar = () => {
  const [activeTab, setActiveTab] = useState('SocialFeed');

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <div className='nav'>
      <nav>
        <h1>Social <span className='feed'>Feed</span></h1>
      </nav>
      {}
      {activeTab === 'Home' && <div>Home Content</div>}
      {activeTab === 'About' && <div>About Content</div>}
      {activeTab === 'Contact' && <div>Contact Content</div>}
    </div>
  );
};

export default NavigationBar;
