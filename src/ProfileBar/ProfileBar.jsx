import React from 'react';
import './ProfileBar.css';

function currentTime() { // change to arrow functions
  const d = new Date();
  let hours = d.getHours();
  let minutes = d.getMinutes();
  const ampm = hours >= 12 ? 'pm' : 'am';
  hours %= 12;
  hours = hours || 12;
  minutes = minutes < 10 ? `0${minutes}` : minutes;
  const strTime = `${hours}:${minutes} ${ampm}`;
  return strTime;
}

function currentDate() {
  const d = new Date();
  const day = d.getDate();
  const month = d.getMonth();
  const year = d.getFullYear();
  const strDate = `${day} / ${month} /${year}`;
  return strDate;
}

function ProfileBar() { // change to arrow function, remove br tag
  return (
    <div className="ProfileBar">
      <img className="img" src="https://upload.wikimedia.org/wikipedia/commons/f/f9/Phoenicopterus_ruber_in_S%C3%A3o_Paulo_Zoo.jpg" alt="W3Schools.com" />
      <br />
      HI ROHINI
      <br />
      <br />
      <div className="dateAndTime">
        {currentTime()}
        {' '}
        <br />
        {currentDate()}
      </div>
    </div>
  );
}

export default ProfileBar;
