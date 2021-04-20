import React from 'react';

import './product-row.style.css';

const ProductRow = () => {
    return (
      <div>
        <div className= "product-row-container">
        Football $49.99
        </div>

        <div className= "product-row-container">
        Baseball  $9.99
        </div>

        <div className= "product-row-container">
        <span className= "color-red">Basketball</span>  $29.99
        </div>
      </div> 
   );
}

export default ProductRow;