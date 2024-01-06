import "./User.css"
import React, { useState, useEffect } from 'react';
import lock from './pictures/lock.png'

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
    const sendNotif = () => {
         if (Notification.permission === 'granted') {
        // If permission is granted, show the notification
            new Notification('LETS GOOOOO', {
                body: 'This is the notification message.',
                icon: lock
        });
    };
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
                    <h6>Send Notif</h6>
                    <button
                        onClick={sendNotif}
                        >
                    </button>
                </div>

                

            </div>
            <div className="spacer">

            </div>
    
        </div>
    );
    }

    export default User;