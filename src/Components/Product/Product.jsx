import React from 'react';
import './Product.css'

const Product = ({ product }) => {
  const renderRatingStars = (rating) => {
    const maxRating = 5;
    const fullStars = Math.floor(rating);
    const halfStar = rating - fullStars >= 0.5;

    const stars = [];

    for (let i = 0; i < fullStars; i++) {
      stars.push(<i key={i} className="fas fa-star"></i>);
    }

    if (halfStar) {
      stars.push(<i key={fullStars} className="fas fa-star-half-alt"></i>);
    }

    const emptyStars = maxRating - stars.length;

    for (let i = 0; i < emptyStars; i++) {
      stars.push(<i key={`empty-${i}`} className="far fa-star"></i>);
    }

    return stars;
  };

  return (
    <div className="product">
      <img src={product.thumbnail} alt={product.title} />
      <h3>{product.title}</h3>
      <p>Brand: {product.brand}</p>
      <p>Category: {product.category}</p>
      <p>Quantity in Stock: {product.stock}</p>
      <div className="rating">{renderRatingStars(product.rating)}</div>
    </div>
  );
};

export default Product;
