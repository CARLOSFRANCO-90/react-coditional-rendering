import React from 'react';

import './programmans.style.css';

const Programmans = (props) => {
    return (
      <div className="programans-container">
         {props.programmansName}
         
      </div>
   );
}

export default Programmans;