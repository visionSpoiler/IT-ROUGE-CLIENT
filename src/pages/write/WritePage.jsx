import React, { useState } from "react";
import { Layout } from "../../widgets/WritePage/Layout";
import Preview from "../../widgets/WritePage/Preview";
import WriteEditor from "../../widgets/WritePage/WriteEditor";
import SubmitMenu from "../../widgets/WritePage/SubmitMenu";
import { useWriteStore } from "../../stores/WritePageTagsContext";

function WritePage() {
  // 관리해야 할 상태들 정리
  // 제목, 태그, 본문
  // 썸네일, 포스터 소개문, 공개 여부, URL 설정, 시리즈 설정
  //
  const {
    title,
    tags,
    content,
    url,
    description,
    visibility,
    series,
    setTitle,
    setContent,
    setDescription,
    setVisibility,
    setSeries,
    setURL,
    addTag,
    deleteTag,
  } = useWriteStore();

  const [isOpenSubmitMenu, setIsOpenSubmitMenu] = useState(false);

  const handleOpenSubmitMenu = () => {
    setIsOpenSubmitMenu(true);
  };

  const handleCloseSubmitMenu = () => {
    setIsOpenSubmitMenu(false);
  };

  return (
    <Layout>
      {isOpenSubmitMenu && (
        <SubmitMenu
          url={url}
          description={description}
          visibility={visibility}
          series={series}
          setDescription={setDescription}
          setSeries={setSeries}
          setURL={setURL}
          setVisibility={setVisibility}
          onCloseSubmitMenu={handleCloseSubmitMenu}
        />
      )}
      <WriteEditor
        content={content}
        setContent={setContent}
        title={title}
        setTitle={setTitle}
        tags={tags}
        addTag={addTag}
        deleteTag={deleteTag}
        onOpenSubmitMenu={handleOpenSubmitMenu}
      />
      <Preview text={content} title={title} />
    </Layout>
  );
}

export default WritePage;
