import React, { useState, useEffect } from 'react';

// A custom function to get the current Pakistan time string
const getPakistanTimeString = () => {
  const now = new Date();
  
  // Options for formatting the time in the 'Asia/Karachi' (Pakistan) time zone
  const options = {
    hour: '2-digit',      // e.g., 06
    minute: '2-digit',    // e.g., 45
    second: '2-digit',    // e.g., 51
    hour12: true,         // Use 12-hour format (AM/PM)
    timeZone: 'Asia/Islamabad' // <-- Changed to Pakistan's time zone
  };

  // Get the formatted time string (e.g., "6:45:51 PM")
  return now.toLocaleTimeString('en-US', options);
};

const PakistanTimeClock = () => {
  // 1. Initialize state with the current Pakistan time
  const [pakistanTime, setPakistanTime] = useState(getPakistanTimeString());

  // 2. Use useEffect to set up the interval for live updates
  useEffect(() => {
    // Function to update the state with the new time
    const updateTime = () => {
      setPakistanTime(getPakistanTimeString());
    };

    // Set up the interval to run every 1000ms (1 second)
    const timerId = setInterval(updateTime, 1000);

    // Clean-up function to clear the timer when the component is removed
    return () => clearInterval(timerId);
  }, []); // Run only once on mount

  return (
    <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-xl">
      {/* Label: PAKISTAN TIME */}
      <div className="text-xl font-bold text-gray-700 uppercase tracking-wider mb-2">
        PAKISTAN TIME
      </div>
      
      {/* Live Time */}
      <div 
        id="pakistan-time" 
        className="text-4xl font-mono text-green-600 font-extrabold" // Changed color to green for a fresh look
      >
        {pakistanTime}
      </div>
    </div>
  );
};

export default PakistanTimeClock;