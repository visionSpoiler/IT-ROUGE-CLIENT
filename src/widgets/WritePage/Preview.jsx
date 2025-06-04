import React from 'react'
import { PreviewBox } from '../../components/WritePage/Previews'
import ReactMarkdown from "react-markdown";
import rehypeHighlight from "rehype-highlight";
import remarkGfm from "remark-gfm";
import 'github-markdown-css/github-markdown.css';
import remarkBreaks from 'remark-breaks';

const urlTransform = (url, key, node) => {
  return url; // URL을 그대로 반환
};

const Preview = ({text, title}) => {
  return (
    <PreviewBox className="markdown-body">
        <ReactMarkdown
          rehypePlugins={[rehypeHighlight]}
          remarkPlugins={[remarkGfm, remarkBreaks]}
          urlTransform={urlTransform}
        >
          {`${title ? '# ' + title+'\n' : ""}`+text}
        </ReactMarkdown>
      </PreviewBox>
  )
}

export default Preview