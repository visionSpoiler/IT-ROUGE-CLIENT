import React from "react";
import { MenuBox, ExitButton, ButtonBox, SaveTempButton, PostButton } from "../../components/WritePage/Menu";

const Menu = ({ onExit, onSaveTemp, onClickPublish }) => {
  const handleClickExit = () => {
    onExit()
  }

  return (
    <MenuBox>
      <ExitButton onClick={handleClickExit}>나가기</ExitButton>{" "}
      <ButtonBox>
        <SaveTempButton>임시저장</SaveTempButton>
        <PostButton onClick={onClickPublish}>출간하기</PostButton>
      </ButtonBox>
    </MenuBox>
  );
};

export default Menu;
