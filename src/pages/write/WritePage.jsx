import React, { useState } from "react";
import { Layout } from "../../widgets/WritePage/Layout";
import Preview from "../../widgets/WritePage/Preview";
import WriteEditor from "../../widgets/WritePage/WriteEditor";

function WritePage() {
  const [text, setText] = useState("");

  return (
    <Layout>
      <WriteEditor text={text} setText={setText} />
      <Preview text={text} />
    </Layout>
  );
}

export default WritePage;
