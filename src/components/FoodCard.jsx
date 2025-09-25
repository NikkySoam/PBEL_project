import React, { useState } from 'react';
import '../css/card.css';

function FoodCard({ title, image, description, price, status }) {
  const [added, setAdded] = useState(status);

  const handleAddToCart = () => {
    setAdded(prev => !prev);
  };

  return (
    <div className="food-card">
      <img src={image} alt={title} />
      <div className="food-info">
        <h3>{title}</h3>
        <p>{description}</p>
        
        <div className="button-row">
          <button className="price-button">
            ₹{price}
          </button>
          
          <button
            className={`add-to-cart ${added ? 'added' : ''}`}
            onClick={handleAddToCart}
          >
            {added ? 'Added' : 'Add to Cart'}
          </button>
        </div>
      </div>
    </div>
  );
}

export default FoodCard;
