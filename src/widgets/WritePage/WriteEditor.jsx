import { useRef } from "react";
import {
  Editor,
  EditorBox,
  WriteBoundaryLine,
  WriteBox,
  WriteBoxLayout,
  WriteTitle,
} from "../../components/WritePage/WriteEditor";
import getCaretCoordinates from "textarea-caret";
import LinkInputModal from "./LinkInputModal";
import { writePageLinkModalContext } from "../../stores/WritePageLinkModalContext";
import { writePageTagsContext } from "../../stores/WritePageTagsContext";
import { useFormatter } from "../../hooks/useFormatter";
import Toolbar from "./Toolbar";
import TagList from "./TagList";
import { useNavigate } from "react-router";
import Menu from "./Menu";

const WriteEditor = ({ text, setText, title, setTitle, onOpenSubmitMenu }) => {
  const navigate = useNavigate();

  const handleExit = () => [navigate(-1)];

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
    formatLink,
  } = useFormatter(textareaRef, setText);

  const {
    openLinkModal,
    closeLinkModal,
    isLinkModalOpen,
    setIndex,
    linkText,
    setLinkText,
    position,
  } = writePageLinkModalContext();

  const { tags, addTag, deleteTag } = writePageTagsContext();

  const handleClickConfirmOnLinkModal = () => {
    const { linkText } = writePageLinkModalContext.getState();
    formatLink(linkText);
    closeLinkModal();
  };

  const handleImageDropOnEditor = (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (!file || !file.type.startsWith("image/")) {
      alert("이미지 파일만 지원됩니다.");
      return;
    }
    const previewURL = URL.createObjectURL(file);
    const markdown = `![image](${previewURL})`;
    const textarea = textareaRef.current;
    const { value } = textarea;

    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;

    const before = value.substring(0, start);
    const after = value.substring(end);

    const newValue = before + markdown + after;
    setText(newValue);

    requestAnimationFrame(() => {
      const newPos = start + markdown.length;
      textarea.selectionStart = textarea.selectionEnd = newPos;
      textarea.focus();
    });
  };

  const handlePaste = (e) => {
  const items = e.clipboardData.items;
  const imageItem = Array.from(items).find(
    (item) => item.kind === "file" && item.type.startsWith("image/")
  );

  if (!imageItem) return;

  const file = imageItem.getAsFile();
  if (!file) return;

  const previewURL = URL.createObjectURL(file);
  const markdown = `![image](${previewURL})`;

  const textarea = textareaRef.current;
  const { value } = textarea;

  const start = textarea.selectionStart;
  const end = textarea.selectionEnd;

  const before = value.substring(0, start);
  const after = value.substring(end);

  const newValue = before + markdown + after;
  setText(newValue);

  requestAnimationFrame(() => {
    const newPos = start + markdown.length;
    textarea.selectionStart = textarea.selectionEnd = newPos;
    textarea.focus();
  });

  // 붙여넣기 된 이미지가 일반 텍스트처럼 삽입되는 걸 방지
  e.preventDefault();
};

  const handleDragOver = (e) => {
    e.preventDefault(); // ✅ 브라우저가 파일을 열지 못하게 막음
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
        <WriteTitle
          placeholder="제목을 입력하세요."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <WriteBoundaryLine />
        <TagList tags={tags} onDeleteTag={deleteTag} onAddTag={addTag} />
        <Toolbar
          fileInputRef={fileInputRef}
          formatBold={formatBold}
          formatCodeBlock={formatCodeBlock}
          formatH1={formatH1}
          formatH2={formatH2}
          formatH3={formatH3}
          formatH4={formatH4}
          formatImage={formatImage}
          formatItalic={formatItalic}
          formatQuote={formatQuote}
          formatStrike={formatStrike}
          handleClickImageButton={handleClickImageButton}
          handleClickLinkButton={handleClickLinkButton}
        />
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
            onDragOver={handleDragOver}
            onDrop={handleImageDropOnEditor}
            onPaste={handlePaste}
          ></Editor>
        </EditorBox>
      </WriteBoxLayout>
      <Menu onExit={handleExit} onClickPublish={onOpenSubmitMenu} />
    </WriteBox>
  );
};

export default WriteEditor;
