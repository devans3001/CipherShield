

import { useState } from "react";
import styled from "styled-components";
import EncryptModal from "./EncryptModal";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Container>
      <Overlay />
      <Content>
        <Title>Secure Your Messages</Title>
        <SubText>Encrypt your text with a custom shift key.</SubText>
        <Button onClick={() => setIsOpen(true)}>Start Encrypting</Button>
      </Content>
      {isOpen && <EncryptModal onClose={() => setIsOpen(false)} />}
    </Container>
  );
};

export default Home;

// Styled Components
const Container = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  background: #0d1117;
  color: white;
  overflow: hidden;
`;

const Overlay = styled.div`
  position: absolute;
  inset: 0;
  background: url("https://source.unsplash.com/1600x900/?encryption,security") center/cover no-repeat;
  filter: blur(5px) brightness(40%);
`;

const Content = styled.div`
  position: relative;
  text-align: center;
  z-index: 1;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: bold;
`;

const SubText = styled.p`
  font-size: 1.2rem;
  margin: 10px 0 20px;
  opacity: 0.8;
`;

const Button = styled.button`
  background: #ff7b00;
  padding: 15px 30px;
  border: none;
  border-radius: 10px;
  font-size: 1.2rem;
  font-weight: bold;
  color: white;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    background: #ff9f33;
  }
`;
