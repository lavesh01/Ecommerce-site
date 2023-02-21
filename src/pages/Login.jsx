import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(rgba(255,255,255,0.5),rgba(225,225,225,0.5)), url(https://img.freepik.com/free-vector/abstract-geometric-wireframe-background_52683-59421.jpg?w=900&t=st=1676981007~exp=1676981607~hmac=1bf562d0413f817561bf7883e492f95407380ba63495e772e61ef541e28229b2);
  background-size: cover;
`
const Wrapper = styled.div`
  width: 25%;
  padding: 20px;
  background-color: white;
`
const Title = styled.h1`
  font-size: 20px;
  font-weight: 300;
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
`
const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0px;
  padding: 10px;
`
const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
  margin-bottom: 10px;
`
const Link = styled.a`
  margin: 5px 0px;
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
`

const Login = () => {
  return (
    <Container>
      <Wrapper>
        <Title>SIGN IN</Title>
        <Form>
          <Input placeholder="username" />
          <Input placeholder="password" />
          <Button>LOGIN</Button>
          <Link>DO YOU REMEMBER THE PASSWORD?</Link>
          <Link>CREATE A NEW ACCOUNT</Link>
        </Form>
      </Wrapper>
    </Container>
  )
}

export default Login