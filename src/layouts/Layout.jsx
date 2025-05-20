import React from "react";
import styled from "styled-components";
import Header from "./Header";
import { Outlet } from "react-router";

const LayoutBox = styled.div`
  padding: 0 5vw;
  background-color: #f8f9fa;
`;

const Layout = () => {
  return (
    <LayoutBox>
      <Header />
      <Outlet />
    </LayoutBox>
  );
};

export default Layout;
