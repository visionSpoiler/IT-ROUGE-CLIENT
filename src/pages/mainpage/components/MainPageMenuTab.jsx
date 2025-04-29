import React, { Children } from "react";
import styled from "styled-components";

const MainPageMenuTabBox = styled.div`
  display: flex;
  align-items: center;
  color: ${({$isSelected}) => $isSelected ? "#000000" :"inherit"};
  cursor: pointer;
  padding: 0 0.25rem 0.25rem;
  border-bottom:  ${({$isSelected}) => $isSelected ? "2px solid black" :"2px solid transparent"};;
`;

const MainPageMenuTabLink = styled.a``;

const MainPageMenuTab = ({ title, children, onClickMenuTab, isSelected }) => {

  const handleClickMenuTab = () => {
    onClickMenuTab(title)
  }

  return (
    <MainPageMenuTabBox $isSelected={isSelected} onClick={handleClickMenuTab}>
      {children}
      <MainPageMenuTabLink>{title}</MainPageMenuTabLink>
    </MainPageMenuTabBox>
  );
};

export default MainPageMenuTab;
