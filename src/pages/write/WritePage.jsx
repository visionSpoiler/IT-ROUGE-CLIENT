import React, { useState } from "react";
import { Layout } from "../../widgets/WritePage/Layout";
import Preview from "../../widgets/WritePage/Preview";
import WriteEditor from "../../widgets/WritePage/WriteEditor";

function WritePage() {
  const [text, setText] = useState("");
  const [title, setTitle] = useState("");

  return (
    <Layout>
      <WriteEditor text={text} setText={setText} title={title} setTitle={setTitle} />
      <Preview text={text} title={title} />
    </Layout>
  );
}

export default WritePage;
