import React from 'react';
import './App.css';

function Tweet({ name, message }) {
  return (
    <div className='tweet'>
      <h3>{name}</h3>
      <p>{message}</p>
      <small>Number of likes</small>
    </div>
  );
}

export default Tweet;
