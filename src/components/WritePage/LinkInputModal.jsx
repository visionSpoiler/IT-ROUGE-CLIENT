import styled from "styled-components";

export const LinkInputModalBox = styled.div`
  width: 320px;
  padding: 1.5rem 1rem;
  display: flex;
  flex-direction: column;
  position: absolute;
  background-color: #ffffff;
  z-index: 100;
  border-radius: 4px;
  box-shadow: rgba(0, 0, 0, 0.08) 0px 0px 4px;
  left: ${props => `${props.$position.x}px`}; 
  top: ${props => `calc(${props.$position.y}px + 1.5em)`};
`;

export const Title = styled.div`
  font-size: 1rem;
  font-weight: bold;
  margin-bottom: 1rem;
`;

export const LinkInputBox = styled.div`
  display: flex;
`;
export const LinkInput = styled.input`
  color: #000;
  background: transparent;
  flex: 1 1 0%;
  border-top: none;
  border-right: none;
  border-left: none;
  border-image: initial;
  outline: none;
  border-bottom: 1px inset rgb(173, 181, 189);
  font-size: 1rem;
  margin-right: 0.5rem;
  line-height: 1.5;
  padding: 0px;
`;

export const ConfirmButton = styled.button`
  height: 1.5rem;
  padding-left: 0.75rem;
  padding-right: 0.75rem;
  font-size: 0.875rem;
  border-radius: 0.75rem;
  border: none;
  outline: none;
  font-weight: bold;
  word-break: keep-all;
  background: rgb(134, 142, 150);
  color: white;
  transition: 0.125s ease-in;
  cursor: pointer;
`;