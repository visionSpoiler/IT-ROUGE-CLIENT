import React, { useRef, useState } from "react";
import BoldIcon from "./../../assets/boldicon.svg?react";
import ItalicIcon from "./../../assets/italicIcon.svg?react";
import CodeIcon from "./../../assets/CodeIcon.svg?react";
import QuoteIcon from "./../../assets/doublequotationmarksicon.svg?react";
import LinkIcon from "./../../assets/LinkIcon.svg?react";
import ImageIcon from "./../../assets/ImageIcon.svg?react";
import StrikethroughIcon from "./../../assets/Strikethroughicon.svg?react";
import {
  Editor,
  EditorBox,
  ExitButton,
  MenuBox,
  Tag,
  TagBox,
  TagInput,
  Toolbar,
  ToolbarButton,
  WriteBoundaryLine,
  WriteBox,
  WriteBoxLayout,
  WriteTitle,
  ImageFileInput,
} from "../../components/WritePage/WriteEditor";
import getCaretCoordinates from "textarea-caret";
import LinkInputModal from "./LinkInputModal";
import { useWritePageLinkModalContext } from "../../stores/WritePageLinkModalContext";
import { useFormatter } from "../../hooks/useFormatter";

const WriteEditor = ({ text, setText }) => {
  const textareaRef = useRef(null);
  const fileInputRef = useRef(null);
  const {
    formatBold,
    formatCodeBlock,
    formatH1,
    formatH2,
    formatH3,
    formatH4,
    formatItalic,
    formatQuote,
    formatStrike,
    formatImage,
    formatLink
  } = useFormatter(textareaRef, setText)

  const {
    openLinkModal,
    closeLinkModal,
    isLinkModalOpen,
    setIndex,
    linkText,
    setLinkText,
    position,
  } = useWritePageLinkModalContext();


  const handleClickConfirmOnLinkModal = () => {
    const { linkText } = useWritePageLinkModalContext.getState();
    formatLink(linkText);
    closeLinkModal();
  };

  const handleClickLinkButton = (e) => {
    e.stopPropagation();
    openLinkModal();

    if (textareaRef.current) {
      const coords = getCaretCoordinates(
        textareaRef.current,
        textareaRef.current.selectionStart
      );
      setIndex(coords.left, coords.top);
    }
  };

  const handleClickImageButton = () => {
    fileInputRef.current.click();
  };

  return (
    <WriteBox>
      <WriteBoxLayout>
        {/* 마크다운 입력기 위치*/}
        <WriteTitle placeholder="제목을 입력하세요." />
        <WriteBoundaryLine />
        {/* 위젯으로 빼자 */}
        <TagBox>
          <Tag>태그1</Tag>
          <Tag>태그2</Tag>
          <Tag>태그3</Tag>
          <TagInput placeholder="태그를 입력하세요." />
        </TagBox>
        {/* 위젯으로 빼자  */}
        <Toolbar>
          <ToolbarButton
            onClick={formatH1}
          >
            H1
          </ToolbarButton>
          <ToolbarButton
            onClick={formatH2}
          >
            H2
          </ToolbarButton>
          <ToolbarButton
            onClick={formatH3}
          >
            H3
          </ToolbarButton>
          <ToolbarButton
            onClick={formatH4}
          >
            H4
          </ToolbarButton>
          <ToolbarButton onClick={formatBold}>
            <BoldIcon />
          </ToolbarButton>
          <ToolbarButton onClick={formatItalic}>
            <ItalicIcon />
          </ToolbarButton>
          <ToolbarButton onClick={formatStrike}>
            <StrikethroughIcon />
          </ToolbarButton>
          <ToolbarButton onClick={formatQuote}>
            <QuoteIcon />
          </ToolbarButton>
          <ToolbarButton onClick={handleClickLinkButton}>
            <LinkIcon />
          </ToolbarButton>
          <ToolbarButton onClick={handleClickImageButton}>
            <ImageIcon />
          </ToolbarButton>
          <ToolbarButton onClick={formatCodeBlock}>
            <CodeIcon />
          </ToolbarButton>
          <ImageFileInput
            type="file"
            accept="image/*"
            ref={fileInputRef}
            onChange={formatImage}
          />
        </Toolbar>
        <EditorBox>
          {isLinkModalOpen && (
            <LinkInputModal
              text={linkText}
              onChangeInput={setLinkText}
              onClickConfirm={handleClickConfirmOnLinkModal}
              position={position}
            />
          )}
          <Editor
            ref={textareaRef}
            onChange={(e) => {
              setText(e.target.value);
            }}
            value={text}
            placeholder="마크다운을 지원하는 에디터입니다. 당신의 글을 써보아요."
          ></Editor>
        </EditorBox>
      </WriteBoxLayout>
      <MenuBox>
        <ExitButton>나가기</ExitButton>{" "}
      </MenuBox>
    </WriteBox>
  );
};

export default WriteEditor;
