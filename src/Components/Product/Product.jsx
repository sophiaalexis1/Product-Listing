import React from 'react';
import './Product.css'

const Product = ({ product }) => {
  const renderRatingStars = (rating) => {
    const maxRating = 5;
    const fullStars = Math.floor(rating);
    const halfStar = rating - fullStars >= 0.5;

    const stars = [];

    for (let i = 0; i < fullStars; i++) {
      stars.push(<i key={i} className="fas fa-star gold-star"></i>);
    }

    if (halfStar) {
      stars.push(<i key={fullStars} className="fas fa-star-half-alt gold-star"></i>);
    }

    const emptyStars = maxRating - stars.length;

    for (let i = 0; i < emptyStars; i++) {
      stars.push(<i key={`empty-${i}`} className="far fa-star gold-star"></i>);
    }

    return stars;
  };

  const stockStyle = {
    color: product.stock <= 20 ? 'red' : 'initial',
    fontWeight: product.stock <= 20 ? 'bold' : 'normal',
  };

  return (
    <div className="product">
      <img src={product.thumbnail} alt={product.title} />
      <h3>{product.title}</h3>
      <p className='brand'>{product.brand}</p>
      <p className='category'>{product.category}</p>
      <p style={stockStyle}>{product.stock}</p>
      <div className="rating">{renderRatingStars(product.rating)}</div>
    </div>
  );
};

export default Product;
