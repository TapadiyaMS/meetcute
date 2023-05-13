import React, { useState } from "react";
import firebase from 'firebase/compat/app';
import "firebase/auth";
import "firebase/firestore";
import styled from "styled-components";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

    const handleSignUp = async () => {
        try {
            console.log("Handle SignUp function.");

            console.log("User created successfully!");
            } catch (error) {
            console.error(error);
            }
        };

  return (
    <Container>
        <Layout>
            <img src="/images/sign-up.png" alt="" />
            <Input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            
            <Input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />

            <Button>
                <button fill="true" onClick="" >Cancel</button>
                <button onClick={handleSignUp}>Sign Up</button>
            </Button>

        </Layout>
    </Container>
  );
};

const Container = styled.div`
    padding: 0%;
    height: 100vh;
    width: 100%;
`;

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: center;
  align-items: center;
  gap: 20px;
  
  img {
    height: 100px;
    width: 30%;
    padding-bottom: 40px;
  }
`;

const Input = styled.input`
    height: 40px;
    width: 20%;
    border: 2px solid orange;
`;

const Button = styled.div`
    display: flex;
    gap: 20px;

    button {

        background: orange;
        color: white;

        font-size: 20px;
        gap: 10px;
        padding: 0.25em 1em;
        border: 2px solid transparent;
        border-radius: 50px;
  }
`;

export default SignUp;
