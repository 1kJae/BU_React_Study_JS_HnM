import React from 'react'
import './ProductCard.css';

const ProductCard = ({ item }) => {
  return (
    <div className="product-card">     
      <img src={item?.img} alt={item?.title} />

      {item?.consciousChoice && (
        <div className="choice-badge">Conscious choice</div>
      )}

      <h5 className="title">{item?.title}</h5>
      <div className="price">₩{item?.price}</div>
      {item?.new && <div className="new-badge">신제품</div>}
    </div>
  );
};

export default ProductCard