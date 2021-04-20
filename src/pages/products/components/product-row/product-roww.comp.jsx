import React from 'react';

import './product-row.style.css';

const ProductRoww = () => {
    return (
      <div>
        <div className= "product-roww-container">
        ¡Pod Touch  $99.99
        </div>

        <div className= "product-roww-container">
        <span className="color-red">¡Phone 5</span> $399.99
        </div>

        <div className= "product-roww-container">
        Nexus 7  $199.99
        </div>
      </div> 
   );
}

export default ProductRoww;