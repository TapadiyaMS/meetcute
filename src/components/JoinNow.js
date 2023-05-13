import React from "react";
import styled from "styled-components";

const JoinNow = () => {
  return (
    <Container>
      <FormTitle>Create an Account</FormTitle>
      <Form>
        <FormGroup>
          <Label htmlFor="firstName">First Name:</Label>
          <Input type="text" id="firstName" name="firstName" required />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="lastName">Last Name:</Label>
          <Input type="text" id="lastName" name="lastName" required />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="email">Email Address:</Label>
          <Input type="email" id="email" name="email" required />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="password">Password:</Label>
          <Input type="password" id="password" name="password" required />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="confirmPassword">Confirm Password:</Label>
          <Input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            required
          />
        </FormGroup>
        <Button type="submit">Register</Button>
      </Form>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
`;

const FormTitle = styled.h2`
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 20px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 400px;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 4px;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
`;

const Label = styled.label`
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 5px;
`;

const Input = styled.input`
  font-size: 16px;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
`;

const Button = styled.button`
  font-size: 16px;
  font-weight: 500;
  padding: 10px;
  background-color: #2979ff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: #fff;
    color: #2979ff;
    border: 1px solid #2979ff;
  }
`;

export default JoinNow;
