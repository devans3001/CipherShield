import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  text-align: center;
`;

export const Button = styled.button`
  background: #007bff;
  color: white;
  padding: 12px 24px;
  border: none;
  cursor: pointer;
  margin: 10px;
  font-size: 1.2rem;
`;

export const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin: 10px 0;
`;

export const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ModalContainer = styled.div`
  background: white;
  padding: 20px;
  border-radius: 10px;
  width: 300px;
`;
