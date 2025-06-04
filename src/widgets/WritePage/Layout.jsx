import React from "react";
import { WritePageBox } from "../../components/WritePage/Layout";
import { useWritePageLinkModalContext } from "../../stores/WritePageLinkModalContext";

export const Layout = ({ children }) => {
  const { closeLinkModal } = useWritePageLinkModalContext();
  return <WritePageBox onClick={closeLinkModal}>{children}</WritePageBox>;
};

export default Layout;
