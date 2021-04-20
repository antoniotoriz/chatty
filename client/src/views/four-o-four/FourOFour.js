import React from 'react';
import './FourOFour.css';

const FourOFour = () => {
  return (
    <div className='app__FourOFour-container'>
      <div className='app__FourOFour-box'>
        <span className='app__FourOFour-message'>
          What your looking for, it's not here.
        </span>
      </div>
      <a className='app__FourOFour-link' href='/'>
        Login again
      </a>
    </div>
  );
};

export default FourOFour;
