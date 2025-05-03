import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './ProductDetail.css';

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  const getProductDetail = async () => {
    let response = await fetch('/products.json');
    let data = await response.json();

    const foundProduct = data.products.find(item => item.id === parseInt(id));
    setProduct(foundProduct);
  };

  useEffect(() => {
    getProductDetail();
  }, [id]);

  if (!product) {
    return <div>상품 정보를 불러오는 중입니다...</div>;
  }

  return (
    <div className="detail-container">
      <div className="detail-img">
        <img src={product.img} alt={product.title} />
      </div>
      <div className="detail-info">
        <h2>{product.title}</h2>
        <p className="detail-price">₩{product.price.toLocaleString()}</p>

        <div className="size-select">
          <p>사이즈 선택</p>
          <div className="size-buttons">
            {product.size.map((s, i) => (
              <button key={i} className="size-btn">{s}</button>
            ))}
          </div>
        </div>

        <button className="add-btn">추가</button>
      </div>
    </div>
  );
};

export default ProductDetail;