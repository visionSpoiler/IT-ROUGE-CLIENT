import React, { useState } from "react";
import { Layout } from "../../widgets/WritePage/Layout";
import Preview from "../../widgets/WritePage/Preview";
import WriteEditor from "../../widgets/WritePage/WriteEditor";
import SubmitMenu from "../../widgets/WritePage/SubmitMenu";

function WritePage() {
  const [text, setText] = useState("");
  const [title, setTitle] = useState("");

  const [isOpenSubmitMenu, setIsOpenSubmitMenu] = useState(false);

  const handleOpenSubmitMenu = () => {
    setIsOpenSubmitMenu(true);
  };

  const handleCloseSubmitMenu = () => {
    console.log(1)
    setIsOpenSubmitMenu(false);
  };

  return (
    <Layout>
      {isOpenSubmitMenu && (
        <SubmitMenu onCloseSubmitMenu={handleCloseSubmitMenu} />
      )}
      <WriteEditor
        text={text}
        setText={setText}
        title={title}
        setTitle={setTitle}
        onOpenSubmitMenu={handleOpenSubmitMenu}
      />
      <Preview text={text} title={title} />
    </Layout>
  );
}

export default WritePage;
