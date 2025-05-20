import React from "react";
import styled from "styled-components";

const BackDropBox = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(250, 250, 250, 0.85);
  z-index: 100;
`;
const BackDropContentBox = styled.div`
`;

const BackDrop = ({ children, onCloseModal }) => {
  return (
    <BackDropBox onClick={onCloseModal}>
      <BackDropContentBox onClick={(e) => e.stopPropagation()}>
        {children}
      </BackDropContentBox>
    </BackDropBox>
  );
};

export default BackDrop;
