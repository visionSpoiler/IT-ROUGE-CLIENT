import React from "react";
import { TagBox, Tag, TagInput } from "../../components/WritePage/TagList";

const TagList = ({tags, setTags}) => {
  return (
    <TagBox>
      <Tag>태그1</Tag>
      <Tag>태그2</Tag>
      <Tag>태그3</Tag>
      <TagInput placeholder="태그를 입력하세요." />
    </TagBox>
  );
};

export default TagList;
