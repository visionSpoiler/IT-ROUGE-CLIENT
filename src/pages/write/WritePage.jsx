import React, { useState } from "react";
import { Layout } from "../../widgets/WritePage/Layout";
import Preview from "../../widgets/WritePage/Preview";
import WriteEditor from "../../widgets/WritePage/WriteEditor";
import styled from "styled-components";
import PublicIcon from "../../assets/publicIcon.svg?react";
import PrivateIcon from "../../assets/privateIcon.svg?react";
import HambergerMenuIcon from "../../assets/hambergerMenu.svg?react";

const SubmitMenuBox = styled.div`
  display: flex;
  position: absolute;
  left: 0;
  top: 0%;
  background-color: #f8f9fa;
  width: 100%;
  height: 100%;
  z-index: 200;
  justify-content: center;
  align-items: center;
`;

const PostSettingBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 768px;
  gap: 60px;
`;
const PostSettingSubBox = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  min-width: 0;
  width: 350px;
  height: 440px;
`;

const PostSubTitle = styled.div`
  font-size: 1.25rem;
  margin-bottom: 0.5rem;
  font-weight: bold;
`;

const PostImgContainer = styled.div`
  width: 100%;
  height: 190px;
`;

const PostImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const PostIntroTextarea = styled.textarea`
  resize: none;
  width: 100%;
  border: none;
  outline: none;
  box-shadow: rgba(0, 0, 0, 0.03) 0px 0px 4px 0px;
  background: white;
  color: black;
  line-height: 1.5;
  font-size: 0.875rem;
  height: 7.375rem;
  padding: 0.75rem 1rem;
  margin-top: 0.5rem;
  box-sizing: border-box;
`;

const PostIntroTextLengthBox = styled.div`
  text-align: end;
`;

const PostButtonBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;
  margin: 1rem 0;
`;

const PostButton2 = styled.button`
  font-size: 1.2rem;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  cursor: pointer;
  outline: none;
  border: none;
  background: none;
  color: #12b886;
  border-radius: 4px;
  padding: 8px 1.25rem;
  flex: 1;

  &:hover {
    background-color: #e9ecef;
  }
`;

const PostButton1 = styled.button`
  font-size: 1.2rem;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  cursor: pointer;
  outline: none;
  border: none;
  background: #12b886;
  color: #fff;
  border-radius: 4px;
  padding: 8px 1.25rem;
  flex: 1;

  &:hover {
    background-color: #20c997;
  }
`;

const PostVisibilityButton = styled.button`
  outline: none;
  flex: 1 1 0%;
  height: 3rem;
  display: inline-flex;
  align-items: center;
  justify-content: flex-start;
  font-weight: bold;
  background: #fff;
  font-size: 1.125rem;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 4px 0px;
  padding: 0px 0px 0px 1rem;
  border-radius: 4px;
  cursor: pointer;
  border: ${(props) =>
    `solid 1px ${props.$isActive ? "#20C997" : "transparent"}`};
  color: ${(props) => `${props.$isActive ? "#20C997" : "#868E96"}`};
`;

const PostVisibilityButtonText = styled.span`
  margin-left: 1rem;
`

const PostSeriesSettingButton = styled.button`
  outline: none;
  border: none;
  height: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 0.5rem;
  font-weight: bold;
  background: #fff;
  font-size: 1.125rem;
  box-sizing: border-box;
  border-radius: 4px;
  cursor: pointer;
  color: #20C997;
  margin: 1rem 0;
`

const PostBlankBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: end;
  flex: 1;
`

const PostSubmitMenuBox = styled.div`
  display: flex;
  gap: 16px;
  justify-content: end;
  align-items: center;
`

const Visibility = [{ label: "공개 설정", Icon: PublicIcon }, { label: "비공개 설정", Icon: PrivateIcon }];

function WritePage() {
  const [text, setText] = useState("");
  const [title, setTitle] = useState("");
  const [visibilityActiveIndex, setVisibilityActiveIndex] = useState(0);

  const [isOpenSubmitMenu, setIsOpenSubmitMenu] = useState(false);

  const handleOpenSubmtMenu = () => {
    setIsOpenSubmitMenu(true);
  };

  const handleCloseSubmtMenu = () => {
    setIsOpenSubmitMenu(false);
  };

  const URLInputBox = styled.div`
    background-color: white;
    padding: 0.5rem;
    line-height: 1.5;
    margin: 1rem 0;
  `

  const URLUserNameBox = styled.span`
    color: #868E96;
  `
  
  const URLInput = styled.input`
    background: none;
    background-color: transparent;
    outline: none;
    border: none;
  `

  return (
    <Layout>
      {isOpenSubmitMenu && (
        <SubmitMenuBox>
          <PostSettingBox>
            <PostSettingSubBox>
              <PostSubTitle>포스트 미리보기</PostSubTitle>
              <PostImgContainer>
                <PostImg src="https://5434aef0-363d-4656-abb8-87ee79e28676.mdnplay.dev/shared-assets/images/examples/plumeria-146x200.jpg" />
              </PostImgContainer>
              <PostButtonBox>
                <PostButton1>이미지 업로드</PostButton1>
                <PostButton1>이미지 제거</PostButton1>
              </PostButtonBox>
              <PostIntroTextarea placeholder="당신의 포스터를 짧게 소개해 보세요." />
              <PostIntroTextLengthBox>123/150</PostIntroTextLengthBox>
            </PostSettingSubBox>
            <PostSettingSubBox>
              <PostSubTitle>공개 설정</PostSubTitle>
              <PostButtonBox>
                {Visibility.map(({label, Icon: Icon}, i) => (
                  <PostVisibilityButton
                    $isActive={i === visibilityActiveIndex}
                    onClick={() => setVisibilityActiveIndex(i)}
                    key={i}
                  >
                    <Icon />
                    <PostVisibilityButtonText>{label}</PostVisibilityButtonText>
                  </PostVisibilityButton>
                ))}
              </PostButtonBox>
              <PostSubTitle>
                URL 설정
              </PostSubTitle>
              <URLInputBox>
                <URLUserNameBox>
                  @사용자이름/
                </URLUserNameBox>
                <URLInput />
              </URLInputBox>
              <PostSubTitle>
                시리즈 설정
              </PostSubTitle>
              <PostSeriesSettingButton>
                ☰ 시리즈에 추가하기
              </PostSeriesSettingButton>
              <PostBlankBox>
                <PostSubmitMenuBox>
                  <PostButton2>취소</PostButton2>
                  <PostButton1>출간하기</PostButton1>
                </PostSubmitMenuBox>
              </PostBlankBox>
            </PostSettingSubBox>
          </PostSettingBox>
        </SubmitMenuBox>
      )}
      <WriteEditor
        text={text}
        setText={setText}
        title={title}
        setTitle={setTitle}
        onClickPublish={handleOpenSubmtMenu}
      />
      <Preview text={text} title={title} />
    </Layout>
  );
}

export default WritePage;
