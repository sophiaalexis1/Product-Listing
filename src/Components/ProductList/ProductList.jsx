import React from 'react';
import Product from '../Product/Product'
import './ProductList.css'

const ProductList = ({ products, currentPage, itemsPerPage  }) => {
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentProducts = products.slice(startIndex, endIndex);
  
  return (
    <div className="product-list">
      {currentProducts.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
