import React, { useState } from 'react';
import './NavBar.css';
import Logo from '../../Assests/Logo.png';

const NavigationBar = () => {
  const [activeTab, setActiveTab] = useState(Logo);

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <div className='nav'>
      <nav>
        <h1>
            <img src={Logo} alt="Logo" className='logo'/>
        </h1>
      </nav>
      {}
    </div>
  );
};

export default NavigationBar;
