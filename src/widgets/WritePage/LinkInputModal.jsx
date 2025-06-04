import React, { useEffect, useRef } from "react";
import {
  ConfirmButton,
  LinkInput,
  LinkInputBox,
  LinkInputModalBox,
  Title
} from "../../components/WritePage/LinkInputModal"

const LinkInputModal = ({onClickConfirm, onChangeInput, text, position}) => {

  
  const linkInputRef = useRef(undefined);

  const handleStopPropagation = (e) => {
    e.stopPropagation();
  }

  const handleClickConfirm = (e) => {
    onClickConfirm(e)
  }

  const handleChangeInput = (e) => {
    onChangeInput(e.target.value)
  }

    useEffect(() => {
      linkInputRef.current.focus();
  }, [])

  return (
    <LinkInputModalBox $position={position} onClick={handleStopPropagation}>
      <Title>링크 등록</Title>
      <LinkInputBox>
        <LinkInput ref={linkInputRef} value={text} onChange={handleChangeInput} placeholder="링크를 입력하새요" />{" "}
        <ConfirmButton onClick={handleClickConfirm}>확인</ConfirmButton>
      </LinkInputBox>
    </LinkInputModalBox>
  );
};

export default LinkInputModal;
