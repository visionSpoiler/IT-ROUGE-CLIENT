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
import { useMarkdownImageHandler } from "../../hooks/useMarkdownImageHandler";

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

  const { handleImageDrop, handleImagePaste } = useMarkdownImageHandler(
    textareaRef,
    setText
  );

  const { tags, addTag, deleteTag } = writePageTagsContext();

  const handleClickConfirmOnLinkModal = () => {
    const { linkText } = writePageLinkModalContext.getState();
    formatLink(linkText);
    closeLinkModal();
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
            onDrop={handleImageDrop}
            onPaste={handleImagePaste}
          ></Editor>
        </EditorBox>
      </WriteBoxLayout>
      <Menu onExit={handleExit} onClickPublish={onOpenSubmitMenu} />
    </WriteBox>
  );
};

export default WriteEditor;
