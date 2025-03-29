import { useState } from "react";
import Modal from "./Modal";
import { Input, Button } from "../styles";
import { wrapShift } from "../utils/helper";

const Decrypt = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [text, setText] = useState("");
  const [shift, setShift] = useState(0);
  const [output, setOutput] = useState("");

  const handleDecrypt = () => {
    setOutput(wrapShift(text, shift, false));
  };

  return (
    <div>
      <Button onClick={() => setIsOpen(true)}>Open Decryptor</Button>
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <h2>Enter Text</h2>
        <Input type="text" value={text} onChange={(e) => setText(e.target.value)} />
        <h2>Enter Shift Key</h2>
        <Input type="number" value={shift} onChange={(e) => setShift(Number(e.target.value))} />
        <Button onClick={handleDecrypt}>Decrypt</Button>
        {output && <h3>Output: {output}</h3>}
      </Modal>
    </div>
  );
};

export default Decrypt;
