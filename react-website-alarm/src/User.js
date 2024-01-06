import React, { useState, useEffect } from 'react';


const User = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Check for saved preference in local storage
    const savedMode = localStorage.getItem('darkMode');
    if (savedMode) {
      setIsDarkMode(JSON.parse(savedMode));
    }
  }, []);

  useEffect(() => {
    // Update class on the body based on dark mode state
    document.body.classList.toggle('dark-mode', isDarkMode);
    document.body.classList.toggle('light-mode', !isDarkMode);

    // Save preference to local storage
    localStorage.setItem('darkMode', JSON.stringify(isDarkMode));
  }, [isDarkMode]);

    const toggleDarkMode = () => {
        setIsDarkMode(prevMode => !prevMode);
    };
    
    return (
        <div className="user">
            <div className="options-box">

                <h3 className="title">User Options</h3>

                <div className="dl-toggle">
                    <h6>Dark Mode Toggle</h6>
                    <button
                        onClick={toggleDarkMode}
                        class="dark-button"
                    >
                        {isDarkMode ? 'Light Mode' : 'Dark Mode'}
                    </button>
                </div>

        <div className='notifs'>
          <h6>Enable Notifications?</h6>
          {/* Change class based on isDarkMode */}
          <button onClick={requestNotificationPermission} className={`notification-button ${isDarkMode ? 'dark' : 'light'}`}>
            Enable Notifications
          </button>
        </div>

        <div className="sounds">
            <h6>Noitifcation Sound</h6>
            <form className="sound-form">
                <input type="file">

                </input>
            </form>
        </div>

      </div>
    </div>
  );
};

export default User;