import React, { useEffect, useState } from 'react'
import ProductCard from '../component/ProductCard';
import { Container, Row, Col } from 'react-bootstrap';

const ProductAll = () => {
  const [productList, setProductList] = useState([]);
  
  const getProducts = async () => {
    let response = await fetch('/products.json');
    let data = await response.json();
    setProductList(data.products);
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div>
      <Container className="pt-4">
        <Row className="g-4">
          {productList.map((menu) => (
            <Col lg={3}>
              <ProductCard item={menu} />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  )
}

export default ProductAll