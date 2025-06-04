import React from "react";
import { WritePageBox } from "../../components/WritePage/Layout";
import {  writePageLinkModalContext } from "../../stores/WritePageLinkModalContext";

export const Layout = ({ children }) => {
  const { closeLinkModal } = writePageLinkModalContext();
  return <WritePageBox onClick={closeLinkModal}>{children}</WritePageBox>;
};

export default Layout;
