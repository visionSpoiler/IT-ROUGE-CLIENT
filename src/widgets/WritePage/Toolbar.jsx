import React from "react";
import BoldIcon from "./../../assets/boldicon.svg?react";
import ItalicIcon from "./../../assets/italicIcon.svg?react";
import CodeIcon from "./../../assets/CodeIcon.svg?react";
import QuoteIcon from "./../../assets/doublequotationmarksicon.svg?react";
import LinkIcon from "./../../assets/LinkIcon.svg?react";
import ImageIcon from "./../../assets/ImageIcon.svg?react";
import StrikethroughIcon from "./../../assets/Strikethroughicon.svg?react";
import { ToolbarBox, ToolbarButton, ImageFileInput } from "../../components/WritePage/Toolbar";

const Toolbar = ({
  formatH1,
  formatH2,
  formatH3,
  formatH4,
  formatBold,
  formatItalic,
  formatStrike,
  formatQuote,
  fileInputRef,
  formatImage,
  formatCodeBlock,
  handleClickImageButton,
  handleClickLinkButton,
}) => {
  return (
    <ToolbarBox>
      <ToolbarButton onClick={formatH1}>H1</ToolbarButton>
      <ToolbarButton onClick={formatH2}>H2</ToolbarButton>
      <ToolbarButton onClick={formatH3}>H3</ToolbarButton>
      <ToolbarButton onClick={formatH4}>H4</ToolbarButton>
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
    </ToolbarBox>
  );
};

export default Toolbar;
