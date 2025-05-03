import React from 'react'
import { useNavigate } from 'react-router-dom';
import './ProductCard.css';

const ProductCard = ({ item }) => {
  const navigate = useNavigate();

  const showDetail = () => {
    navigate(`/product/${item.id}`);
  };

  return (
    <div className="product-card" onClick={showDetail}>     
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