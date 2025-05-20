import React from "react";
import styled from "styled-components";

const MainPagePostCardBoardBox = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: clamp(12px, 2vw, 32px);
  padding: 1rem;
`;

const MainPagePostCardBoard = ({ children }) => {
  return <MainPagePostCardBoardBox>{children}</MainPagePostCardBoardBox>;
};

export default MainPagePostCardBoard;
