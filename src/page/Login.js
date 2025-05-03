import React from 'react'
import { Container, Form, Button } from 'react-bootstrap';
import './Login.css';   
import { useNavigate } from 'react-router-dom'; 

const Login = ({ setAuthenticate }) => {
  const navigate = useNavigate();
  const loginUser = (event) => {
    event.preventDefault();
    setAuthenticate(true);
    navigate("/");
  };
  
  return (
    <Container className="login-container">
      <Form className="login-box shadow-sm" onSubmit={(event) => loginUser(event)}>
        <h3 className="text-center mb-4">로그인</h3>

        <Form.Group className="mb-3" controlId="loginEmail">
          <Form.Label>아이디</Form.Label>
          <Form.Control type="text" placeholder="H&M ID (아이디 또는 이메일)" />
        </Form.Group>

        <Form.Group className="mb-4" controlId="loginPw">
          <Form.Label>비밀번호</Form.Label>
          <Form.Control type="password" placeholder="비밀번호" />
        </Form.Group>

        <Button variant="danger" type="submit" className="w-100">
          로그인
        </Button>
      </Form>
    </Container>
  );
};

export default Login;