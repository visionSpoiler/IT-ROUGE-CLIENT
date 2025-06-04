import React, { useState } from "react";
import { TagBox, Tag, TagInput } from "../../components/WritePage/TagList";

const TagList = ({ tags, onAddTag, onDeleteTag }) => {
  const [value, setValue] = useState("");

  const handleKeyDown = (e) => {
    if (e.key === "Enter" || e.key === ",") {
      e.preventDefault();
      onAddTag(value);
      setValue("");
    } else if (e.key === "Backspace" && value === "") {
      // value가 비어있고, 백스페이스가 눌렸다면 마지막 태그 삭제
      onDeleteTag(tags[tags.length-1].id);
    }
  };

  return (
    <TagBox>
      {tags &&
        tags.length > 0 &&
        tags.map((tag) => (
          <Tag onClick={() => onDeleteTag(tag.id)} key={tag.id}>
            {tag.label}
          </Tag>
        ))}
      <TagInput
        placeholder="태그를 입력하세요."
        onKeyDown={handleKeyDown}
        onChange={(e) => setValue(e.target.value)}
        value={value}
      />
    </TagBox>
  );
};

export default TagList;
