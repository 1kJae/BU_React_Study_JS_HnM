import React, { useEffect, useState } from 'react'
import ProductCard from '../component/ProductCard';
import { Container, Row, Col } from 'react-bootstrap';
import { useLocation, useNavigate } from 'react-router-dom';

const ProductAll = () => {
  const [productList, setProductList] = useState([]);
  const [filteredList, setFilteredList] = useState([]);
  const location = useLocation();
  const navigate = useNavigate();

  const searchQuery = new URLSearchParams(location.search).get('q');
  
  const getProducts = async () => {
    let response = await fetch('/products.json');
    let data = await response.json();
    setProductList(data.products);
  };

  useEffect(() => {
    getProducts();
  }, []);

  useEffect(() => {
    if (location.search.includes('q=')) {
      navigate('/', { replace: true });
    }
  }, [location.search, navigate]);

  useEffect(() => {
    if (searchQuery) {
      const filtered = productList.filter((product) =>
        product.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredList(filtered);
    } else {
      setFilteredList(productList);
    }
  }, [searchQuery, productList]);

  return (
    <div>
      <Container className="pt-4">
        <Row className="g-4">
          {filteredList.map((menu, idx) => (
            <Col xs={12} sm={6} md={4} lg={3} key={idx}>
              <ProductCard item={menu} />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  )
}

export default ProductAll