import React, { useRef, useState } from "react";

import styled from "styled-components";
import BoldIcon from "./../../assets/boldicon.svg?react";
import ItalicIcon from "./../../assets/italicIcon.svg?react";
import CodeIcon from "./../../assets/CodeIcon.svg?react";
import QuoteIcon from "./../../assets/doublequotationmarksicon.svg?react";
import LinkIcon from "./../../assets/LinkIcon.svg?react";
import ImageIcon from "./../../assets/ImageIcon.svg?react";
import StrikethroughIcon from "./../../assets/Strikethroughicon.svg?react";

const WritePageBox = styled.div`
  display: flex;
  height: 100vh;
  width: 100%;
`;

const WriteBox = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  min-width: 0;
`;

const WriteBoxLayout = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 0%;
  padding: 48px;
  flex: 1;
`;

const WriteTitle = styled.input`
  font-size: 2.75rem;
  font-weight: bold;
  margin-bottom: 16px;
  border: none;
  outline: none;
`;

const WriteBoundaryLine = styled.div`
  margin-top: 1.5rem;
  margin-bottom: 1rem;
  width: 64px;
  height: 6px;
  background-color: #343a40;
`;

const TagBox = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  flex-wrap: wrap;
  margin-bottom: 1rem;
  gap: 8px;
`;

const Tag = styled.button`
  border: 1px solid #ced4da;
  background-color: white;
  outline: none;
  cursor: pointer;
  border-radius: 16px;
  padding: 0.5rem 1.2rem;
  font-size: 16px;
`;

const TagInput = styled.input`
  border: none;
  outline: none;
  background: none;
  font-size: 16px;
`;

const Toolbar = styled.div`
  display: flex;
  justify-content: start;
  gap: 4px;
  flex-wrap: wrap;
`;

const ToolbarButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  background-color: transparent;
  border: none;
  cursor: pointer;
  outline: none;
  color: #6c757d;
  font-size: 24px;
  font-weight: bold;

  &:hover {
    background-color: #f8f9fa;
    color: black;
  }
`;

const Editor = styled.textarea`
  width: 100%;
  height: 100%;
  border: none;
  outline: none;
  resize: none;
  font-size: 1.2rem;
  line-height: 1.5rem;
`;

const MenuBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: transparent;
  padding: 16px 48px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 8px;
`;

const ExitButton = styled.button`
  border: none;
  outline: none;
  background: none;
  font-size: 1.2rem;
  cursor: pointer;
  padding: 8px 16px;

  &:hover {
    background-color: #f8f9fa;
  }
`;

const PreviewBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 16px;
  border-left: 1px solid #ced4da;
  background-color: #f8f9fa;
  flex: 1;
`;

const Preview = styled.textarea`
  width: 100%;
  height: 100%;
  overflow: auto;
  resize: none;
  border: none;
  outline: none;
  background-color: transparent;
  color: black;
`;

function WritePage() {
  const textareaRef = useRef(null);

  const [text, setText] = useState("");

  const handleClickH1Button = () => {
  if (textareaRef.current) {
    const cursorIndex = textareaRef.current.selectionStart;
    const text = textareaRef.current.value;

    const splitedText = text.slice(0, cursorIndex).split('\n');
    splitedText[splitedText.length - 1] = `# ${splitedText[splitedText.length - 1]}`;
    const newText = splitedText.join('\n') + text.slice(cursorIndex);

    setText(newText);

    requestAnimationFrame(() => {
      textareaRef.current.setSelectionRange(cursorIndex + 2, cursorIndex + 2);
      textareaRef.current.focus();
    });
  }
};

  return (
    <WritePageBox>
      <WriteBox>
        <WriteBoxLayout>
          {/* 마크다운 입력기 위치*/}
          <WriteTitle placeholder="제목을 입력하세요." />
          <WriteBoundaryLine />
          <TagBox>
            <Tag>태그1</Tag>
            <Tag>태그2</Tag>
            <Tag>태그3</Tag>
            <TagInput placeholder="태그를 입력하세요." />
          </TagBox>
          <Toolbar>
            <ToolbarButton onClick={handleClickH1Button}>H1</ToolbarButton>
            <ToolbarButton>H2</ToolbarButton>
            <ToolbarButton>H3</ToolbarButton>
            <ToolbarButton>H4</ToolbarButton>
            <ToolbarButton>
              <BoldIcon />
            </ToolbarButton>
            <ToolbarButton>
              <ItalicIcon />
            </ToolbarButton>
            <ToolbarButton>
              <StrikethroughIcon />
            </ToolbarButton>
            <ToolbarButton>
              <QuoteIcon />
            </ToolbarButton>
            <ToolbarButton>
              <LinkIcon />
            </ToolbarButton>
            <ToolbarButton>
              <ImageIcon />
            </ToolbarButton>
            <ToolbarButton>
              <CodeIcon />
            </ToolbarButton>
          </Toolbar>
          <Editor
            ref={textareaRef}
            onChange={(e) => {
              setText(e.target.value);
            }}
            value={text}
            placeholder="마크다운을 지원하는 에디터입니다. 당신의 글을 써보아요."
          />
        </WriteBoxLayout>
        <MenuBox>
          <ExitButton>나가기</ExitButton>{" "}
        </MenuBox>
      </WriteBox>
      <PreviewBox>
        <Preview readOnly value={text}/>
      </PreviewBox>
    </WritePageBox>
  );
}

export default WritePage;
