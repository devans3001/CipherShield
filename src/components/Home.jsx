import { useState } from "react";
import styled from "styled-components";
import EncryptModal from "./Encrypt";
import { Code, Github, Info } from "lucide-react";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Container>
        <Overlay />
        <Content>
          <Title>Encrypt, Protect, and Share Securely

          <TooltipWrapper>
        <InfoIcon><Info /></InfoIcon>
        <Tooltip>
          <p><strong>Example:</strong></p>
          <p>🔹 <strong>Input:</strong> hello</p>
          <p>🔹 <strong>Shift Key:</strong> 3</p>
          <p>🔹 <strong>Encrypted:</strong> khoor</p>
          <p>🔹 <strong>Decryption:</strong> Reverse the shift!</p>
        </Tooltip>
      </TooltipWrapper>
          </Title>
          <SubText>
            Convert your text into an unreadable format using a personalized
            encryption key.
          </SubText>
          <Button onClick={() => setIsOpen(true)}>Start Encrypting</Button>
          <Footer>

            <p>

        Made with <Heart>❤️</Heart> by{" "}
            </p>
        <a
          href="https://github.com/devans3001"
          target="_blank"
          rel="noopener noreferrer"
        >
          Devans 
        </a>
          <Github />
      </Footer>
        </Content>
        {isOpen && <EncryptModal onClose={() => setIsOpen(false)} />}
      </Container>
     
    </>
  );
};

export default Home;

// Styled Components
const Heart = styled.span`
  display: inline-block;
  font-size: 1.5rem;
  color: red;
  animation: heartbeat 1.5s infinite ease-in-out;

  @keyframes heartbeat {
    0% { transform: scale(1); }
    25% { transform: scale(1.2); }
    50% { transform: scale(1); }
    75% { transform: scale(1.2); }
    100% { transform: scale(1); }
  }
`;

const Footer = styled.footer`
display: flex;
align-items: center;
justify-content: center;
gap:5px;
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

const TooltipWrapper = styled.div`
  position: relative;
  display: inline-block;
  margin-left: 10px;
`;

const InfoIcon = styled.span`
  cursor: pointer;
  font-size: 1.2rem;
`;

const Tooltip = styled.div`
  position: absolute;
  bottom: 120%;
  left: 50%;
  transform: translateX(-50%);
  background: rgba(0, 0, 0, 0.9);
  color: white;
  padding: 10px;
  border-radius: 6px;
  font-size: 0.9rem;
  white-space: nowrap;
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.3s ease-in-out, visibility 0.3s ease-in-out;

  ${TooltipWrapper}:hover & {
    opacity: 1;
    visibility: visible;
  }
`;
