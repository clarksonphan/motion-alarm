import {useEffect, useState } from 'react'

import AlarmDetails from './AlarmDetails';
import './System.css'

const System = () => {
    const [alarms, setAlarm] = useState(null)
    useEffect(() => {
        const fetchAlarmStatus = async() => {
            try {
                const response = await fetch('/api/alarmStatus/');
                
                // Check if the response is not okay (e.g., 404 or 500 errors)
                if (!response.ok) {
                    throw new Error('Network response was not ok.');
                }

                const json = await response.json();
                console.log(json);
                setAlarm(json);
            } catch (error) {
                console.error('Error fetching data:', error.message);
                // Handle the error (e.g., show a message to the user)
            }
        }
        fetchAlarmStatus()
    }, [])

    return (
        <div className='system'>
            <div className = 'statuses'>
                {alarms && alarms.map((alarm) => (
                    <AlarmDetails key={alarm._id} alarm={alarm} />
                ))}
                </div>
        </div>
    )
}

export default System
    