import React from "react";
import styled from "styled-components";
import Header from "./Header";
import { Outlet } from "react-router";
import { dropDownMenuContext } from "../stores/DropDownMenuContext";

const LayoutBox = styled.div`
  padding: 0 5vw;
  background-color: #ffffff;
`;

const Layout = () => {
  const { closeAllDropDownMenu } = dropDownMenuContext();

  return (
    <LayoutBox onClick={closeAllDropDownMenu}>
      <Header />
      <Outlet />
    </LayoutBox>
  );
};

export default Layout;
