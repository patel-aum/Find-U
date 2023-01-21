import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [ipInfo, setIpInfo] = useState({});

  const handleClick = () => {
    axios.get('https://ipapi.co/json/')
      .then(response => {
        setIpInfo(response.data);
      });
  }

  return (
    <div className="main">
    <h1>Get Your IP information here</h1>
    <div className="container">
      {ipInfo.ip &&
        <div className="msg">
          <p>Your IP address is : {ipInfo.ip}</p>
          <p>Your ISP is : {ipInfo.org}</p>
          <p>Your location is : {ipInfo.city}, {ipInfo.region} {ipInfo.postal}, {ipInfo.country_name}</p>
        </div>
      }
      <div className="button">
        <button onClick={handleClick}>Go</button>
        </div>
    </div>
    </div>
  );
}

export default App;
