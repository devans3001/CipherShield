import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import styled from "styled-components";
import { wrapShift } from "../utils/helper";
import { Copy } from "lucide-react";
import toast from "react-hot-toast";
import { motion } from "framer-motion";

const EncryptModal = ({ onClose }) => {
  const [step, setStep] = useState(1);
  const [text, setText] = useState("");
  // const [mode, setMode] = useState("");
  const [shift, setShift] = useState("e");
  const [output, setOutput] = useState("");

  const [searchParams, setSearchParams] = useSearchParams();
  const mode = searchParams.get("mode") || "encrypt";

  const toggleMode = (newMode) => {
    setSearchParams({ mode: newMode });
  };

  const handleNext = () => {
    if (step === 1) {
      setStep(2);
    } else if (step === 2) {
      setStep(3);
    } else if (step === 3) {
      const isEncrypting = mode === "encrypt";
      setOutput(wrapShift(text, shift, isEncrypting));
      setStep(4); // ✅ Move to step 4 to display output
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(output);
    toast.success("Copied to clipboard!");
  };

  return (
    <Overlay onClick={(e) => {
      if (e.target === e.currentTarget) {
        onClose(); // ✅ Close modal only when clicking outside
      }
    }}>
      <Modal  as={motion.div}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.8 }}
        onClick={(e) => e.stopPropagation()}>
        <CloseButton onClick={onClose}>&times;</CloseButton>

        {/* Mode Selection */}
        {step === 1 && (
          <>
            <Title>Encrypt or Decrypt?</Title>
            <ToggleGroup>
              <ToggleButton
                active={mode === "encrypt"}
                onClick={() => toggleMode("encrypt")}
              >
                Encrypt
              </ToggleButton>
              <ToggleButton
                active={mode === "decrypt"}
                onClick={() => toggleMode("decrypt")}
              >
                Decrypt
              </ToggleButton>
            </ToggleGroup>
            <Button onClick={() => setStep(2)}>Next</Button>
          </>
        )}

        {/* Enter Text */}
        {step === 2 && (
          <>
            <Title>Enter Your Text</Title>
            <Input
              type="text"
              placeholder="Type your message..."
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
            <Button onClick={() =>
              
              {

                if(!text) {
                  toast.error("Please enter some text!");
                  return;
                }
                setStep(3)
                }}>Next</Button>
          </>
        )}

        {/* Enter Shift Key */}
        {step === 3 && (
          <>
            <Title>Enter Shift Key</Title>
            <Input
              type="text"
              placeholder="Enter a letter(key)..."
              value={shift}
              onChange={(e) => setShift(e.target.value)}
            />
            <Button onClick={handleNext}>Generate</Button>
          </>
        )}

        {/* Show Output */}
        {step === 4 && (
          <>
            <Title>{mode === "encrypt" ? "Encrypted" : "Decrypted"} Text</Title>
            <OutputContainer as={motion.div} initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }}>
              <Output>{output || "Your text will appear here..."}</Output>
              <CopyIcon
                onClick={copyToClipboard}
              >
                <Copy size={20} />
              </CopyIcon>
            </OutputContainer>
            <Button onClick={onClose}>Done</Button>
          </>
        )}
      </Modal>
    </Overlay>
  );
};

export default EncryptModal;

// Styled Components
const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 100;
`;

const OutputContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #333;
  padding: 10px;
  border-radius: 6px;
  font-size: 1.2rem;
  font-weight: bold;
  word-wrap: break-word;
  position: relative;
`;

const CopyIcon = styled.span`
  cursor: pointer;
  font-size: 1.5rem;
  margin-left: 10px;
  transition: 0.3s;

  &:hover {
    color: #ff9f33;
  }
`;


const Modal = styled.div`
  background: #1e1e1e;
  color: white;
  padding: 20px;
  border-radius: 12px;
  width: 90%;
  max-width: 400px;
  text-align: center;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
  position: relative;
`;

const Title = styled.h2`
  font-size: 1.8rem;
  margin-bottom: 10px;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin: 15px 0;
  border-radius: 6px;
  border: none;
  outline: none;
  background: #333;
  color: white;
  font-size: 1.1rem;
  text-align: center;
`;

const Output = styled.div`
  background: #333;
  padding: 10px;
  border-radius: 6px;
  font-size: 1.2rem;
  font-weight: bold;
  word-wrap: break-word;
`;

const Button = styled.button`
  background: #ff7b00;
  padding: 12px 20px;
  border: none;
  border-radius: 8px;
  font-size: 1.1rem;
  font-weight: bold;
  color: white;
  cursor: pointer;
  transition: 0.3s;
  width: 100%;
  margin-top: 15px;

  &:hover {
    background: #ff9f33;
  }
`;

const CloseButton = styled.span`
  position: absolute;
  top: 10px;
  right: 15px;
  font-size: 1.8rem;
  cursor: pointer;
  color: white;
`;

const ToggleGroup = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-bottom: 15px;
`;

const ToggleButton = styled.button`
  background: ${(props) => (props.active ? "#ff7b00" : "#333")};
  padding: 10px 20px;
  border: none;
  border-radius: 6px;
  font-size: 1.1rem;
  font-weight: bold;
  color: white;
  cursor: pointer;
  transition: 0.3s;
  width: 45%;

  &:hover {
    background: ${(props) => (props.active ? "#ff9f33" : "#555")};
  }
`;
