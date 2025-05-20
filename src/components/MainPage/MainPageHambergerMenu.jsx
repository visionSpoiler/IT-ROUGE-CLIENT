import React from "react";
import Sidebar from "../sidebar";
import  Buttons  from "../button";
import styled from "styled-components";



const MainPageHambergerMenuBox = styled.div`
  position: absolute;
  right: 0;
  top: 100%+8px;
  width: 12rem;
  background-color: white;
  z-index: 100;
`;

const MainPageHambergerMenu = ({menus}) => {
  return (
    <MainPageHambergerMenuBox>
      <Sidebar.BasicSidebar>
        {menus.map((val, i) => (
          <li>
            <Buttons.SidebarButton key={i}>{val}</Buttons.SidebarButton>
          </li>
        ))}
      </Sidebar.BasicSidebar>
    </MainPageHambergerMenuBox>
  );
};

export default MainPageHambergerMenu;