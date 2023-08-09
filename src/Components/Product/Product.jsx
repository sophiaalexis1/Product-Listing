import React from 'react';

const Product = ({ product }) => {
  return (
    <div className="product">
      <img src={product.thumbnail} alt={product.title} />
      <h3>{product.title}</h3>
      <p>Brand: {product.brand}</p>
      <p>Category: {product.category}</p>
      <p>Quantity in Stock: {product.stock}</p>
      <p>Rating: {product.rating} out of 5</p>
    </div>
  );
};

export default Product;
