import React from 'react';
import ProductRow from '../product-row/product-row.comp';
import ProductRoww from '../product-row/product-roww.comp';

import './product-category.style.css';

const ProductCategory = () => {
    return (
      <div >
        <div className= "product-category-container">
          Sporting Goods
        </div>
        <ProductRow/>

        <div className= "product-category-container">
          Electonisc
        </div>
        <ProductRoww/>
      </div> 
   );
}

export default ProductCategory;