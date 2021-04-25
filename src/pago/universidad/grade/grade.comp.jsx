import React from 'react';

import './grade.style.css';

const Grade = () => {
    return (
      <div className= "grade-container">
          <input type="text" placeholder="Grade"/>
          <br/>
          <input type="checkbox"/> Consultar Nota
      </div>   
   );
}

export default Grade;