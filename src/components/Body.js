import React from 'react';
import '../App.css';
import { Button } from './Button';
import './Body.css';

function Body() {
  return (
    <div className='hero-container'>
      <video src='/videos/video2.mp4' autoPlay loop muted />
      <h1>CITI</h1>
      <p>Know More About CITI?</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
         
        >
          Visit CITI
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('hey')}
        >
         Sign Up 
        </Button>
      </div>
    </div>
  );
}

export default Body;