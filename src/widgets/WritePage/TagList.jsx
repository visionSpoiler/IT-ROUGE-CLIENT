import React, { useState } from "react";
import {
  TagBox,
  Tag,
  TagInput,
  GuideText,
} from "../../components/WritePage/TagList";

const TagList = ({ tags, onAddTag, onDeleteTag }) => {
  const [value, setValue] = useState("");
  const [isOpenGuide, setIsOpenGuide] = useState(false);

  const handleKeyDown = (e) => {
    if (e.key === "Enter" || e.key === ",") {
      e.preventDefault();
      onAddTag(value);
      setValue("");
    } else if (e.key === "Backspace" && value === "") {
      // value가 비어있고, 백스페이스가 눌렸다면 마지막 태그 삭제
      onDeleteTag(tags[tags.length - 1].id);
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
        onFocus={() => setIsOpenGuide(true)}
        onBlur={() => setIsOpenGuide(false)}
      />
      {isOpenGuide && (
        <GuideText>{`쉼표 혹은 엔터를 클릭하면 태그가 등록됩니다.
등록된 태그를 누르면 삭제됩니다.`}</GuideText>
      )}
    </TagBox>
  );
};

export default TagList;
