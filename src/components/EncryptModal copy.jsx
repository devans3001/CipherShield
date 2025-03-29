import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import styled from "styled-components";

const EncryptModal = ({ onClose }) => {
  const [step, setStep] = useState(1);
  const [text, setText] = useState("");
  const [shift, setShift] = useState(4);
  const [output, setOutput] = useState("");

  const [searchParams] = useSearchParams();
  const mode = searchParams.get("mode") || "encrypt"; 

  // Function to encrypt/decrypt text using the wrap shift method
//   const wrapShift = (str, key, encrypt = true) => {
//     const alphabet = "abcdefghijklmnopqrstuvwxyz";
//     return str
//       .toLowerCase()
//       .split("")
//       .map((char) => {
//         if (!alphabet.includes(char)) return char; // Ignore non-alphabet characters
//         let newIndex = encrypt
//           ? (alphabet.indexOf(char) + key) % 26
//           : (alphabet.indexOf(char) - key + 26) % 26;
//         return alphabet[newIndex];
//       })
//       .join("");
//   };

const wrapShift = (str, key, encrypt = true) => {
    const alphabet = "abcdefghijklmnopqrstuvwxyz";
    const shiftedAlphabet = alphabet.slice(-key) + alphabet.slice(0, -key); // ✅ Wrap shift from the bottom
  
    return str
      .toLowerCase()
      .split("")
      .map((char) => {
        let originalIndex = alphabet.indexOf(char);
        if (originalIndex === -1) return char; // Ignore non-alphabet characters
        return encrypt ? shiftedAlphabet[originalIndex] : alphabet[shiftedAlphabet.indexOf(char)];
      })
      .join("");
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
  

  return (
    <Overlay>
      <Modal>
        <CloseButton onClick={onClose}>&times;</CloseButton>

        {/* Mode Selection */}
        {step === 1 && (
          <>
            <Title>Encrypt or Decrypt?</Title>
            <ToggleGroup>
              <ToggleButton
                active={mode === "encrypt"}
                onClick={() => setMode("encrypt")}
              >
                Encrypt
              </ToggleButton>
              <ToggleButton
                active={mode === "decrypt"}
                onClick={() => setMode("decrypt")}
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
            <Button onClick={() => setStep(3)}>Next</Button>
          </>
        )}

        {/* Enter Shift Key */}
        {step === 3 && (
          <>
            <Title>Enter Shift Key</Title>
            <Input
              type="text"
           placeholder="Enter a number..."
              value={shift}
              onChange={(e) => setShift(Number(e.target.value))}
            />
            <Button onClick={handleNext}>Generate</Button>
          </>
        )}

        {/* Show Output */}
        {step === 4 && (
          <>
            <Title>{mode === "encrypt" ? "Encrypted" : "Decrypted"} Text</Title>
            <Output>{output || "Your text will appear here..."}</Output>
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
