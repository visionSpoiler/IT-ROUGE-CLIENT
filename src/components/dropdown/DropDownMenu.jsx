import React from "react";
import Sidebar from "../sidebar";
import  Buttons from "../button";
import styled from "styled-components";

const DropDownMenuBox = styled.div`
  position: absolute;
  right: 0;
  top: 100%+8px;
  width: 12rem;
  background-color: white;
  z-index: 100;
`;
const DropDownMenu = ({ menus }) => {
  return (
    <DropDownMenuBox>
      <Sidebar.BasicSidebar>
        {menus.map((val, i) => (
          <li key={i}>
            <Buttons.SidebarButton>{val}</Buttons.SidebarButton>
          </li>
        ))}
      </Sidebar.BasicSidebar>
    </DropDownMenuBox>
  );
};

export default DropDownMenu;
