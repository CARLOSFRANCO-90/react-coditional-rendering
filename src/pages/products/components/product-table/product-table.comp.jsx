import React from 'react';
import ProductCategory from '../product-category/product-category.comp';

import './product-table.style.css';

const ProductTable = () => {
    return (
      <div className= "product-table-container">
        
            <p className= "name">Name</p> <p className="price">Price</p>
          
         <ProductCategory/>
      </div>   
   );
}

export default ProductTable;