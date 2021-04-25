import React from 'react';
import Gender from '../gender/gender.comp';
import Grade from '../grade/grade.comp';

import './tabla-principal.style.css';

const TablaPrincipal = () => {
    
    return (
      <div className= "tabla-principal-container">
          <Grade/>
          <Gender/>
          
      </div>   
   );
}

export default TablaPrincipal;