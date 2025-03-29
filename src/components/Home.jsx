import { useState } from "react";
import styled from "styled-components";
import EncryptModal from "./Encrypt";
import { Code } from "lucide-react";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Container>
        <Overlay />
        <Content>
          <Title>Encrypt, Protect, and Share Securely</Title>
          <SubText>
            Convert your text into an unreadable format using a personalized
            encryption key.
          </SubText>
          <Button onClick={() => setIsOpen(true)}>Start Encrypting</Button>
          <Footer>
        Made with ❤️ by{" "}
        <a
          href="https://github.com/your-github"
          target="_blank"
          rel="noopener noreferrer"
        >
          Devans <Code />
        </a>
      </Footer>
        </Content>
        {isOpen && <EncryptModal onClose={() => setIsOpen(false)} />}
      </Container>
     
    </>
  );
};

export default Home;

// Styled Components
const Footer = styled.footer`
  margin-top: 20px;
  font-size: 1rem;
  opacity: 0.7;

  a {
    color: #ff7b00;
    text-decoration: none;
    font-weight: bold;

    &:hover {
      text-decoration: underline;
    }
  }
`;

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
  background: url("https://images.unsplash.com/photo-1633265486064-086b219458ec?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZW5jcnlwdGlvbnxlbnwwfHwwfHx8MA%3D%3D")
    center/cover no-repeat;
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
