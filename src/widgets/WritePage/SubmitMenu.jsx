import React, { useState } from "react";
import {
  PostBlankBox,
  PostButton1,
  PostButton2,
  PostButtonBox,
  PostImg,
  PostImgContainer,
  PostIntroTextLengthBox,
  PostIntroTextarea,
  PostSeriesSettingButton,
  PostSettingBox,
  PostSettingSubBox,
  PostSubTitle,
  PostSubmitMenuBox,
  PostVisibilityButton,
  PostVisibilityButtonText,
  SubmitMenuBox,
  URLInput,
  URLInputBox,
  URLUserNameBox,
} from "../../components/WritePage/SubmitMenu";
import ImageIcon from "../../assets/imageIcon.svg";

import PublicIcon from "../../assets/publicIcon.svg?react";
import PrivateIcon from "../../assets/privateIcon.svg?react";

const Visibility = [
  { label: "공개 설정", Icon: PublicIcon, state: "public" },
  { label: "비공개 설정", Icon: PrivateIcon, state: "private" },
];

const SubmitMenu = ({
  onCancel,
  onPublish,
  onCloseSubmitMenu,
  description,
  visibility,
  setDescription,
  setVisibility,
  setSeries,
  setURL,
  series,
  url,
}) => {
  const onChangeDescription = (e) => {
    setDescription(e.target.value);
  };

  const onChangeURL = (e) => {
    setURL(e.target.value);
  };

  return (
    <SubmitMenuBox>
      <PostSettingBox>
        <PostSettingSubBox>
          <PostSubTitle>포스트 미리보기</PostSubTitle>
          <PostImgContainer>
            <PostImg src={url ? url : ImageIcon} />
          </PostImgContainer>
          <PostButtonBox>
            <PostButton1>이미지 업로드</PostButton1>
            <PostButton1>이미지 제거</PostButton1>
          </PostButtonBox>
          <PostIntroTextarea
            value={description}
            placeholder="당신의 포스터를 짧게 소개해 보세요."
            onChange={onChangeDescription}
          />
          <PostIntroTextLengthBox>123/150</PostIntroTextLengthBox>
        </PostSettingSubBox>
        <PostSettingSubBox>
          <PostSubTitle>공개 설정</PostSubTitle>
          <PostButtonBox>
            {Visibility.map(({ label, Icon: Icon, state }, i) => (
              <PostVisibilityButton
                $isActive={visibility === state}
                onClick={() => setVisibility(state)}
                key={i}
              >
                <Icon />
                <PostVisibilityButtonText>{label}</PostVisibilityButtonText>
              </PostVisibilityButton>
            ))}
          </PostButtonBox>
          <PostSubTitle>URL 설정</PostSubTitle>
          <URLInputBox>
            <URLUserNameBox>@사용자이름/</URLUserNameBox>
            <URLInput onChange={onChangeURL} value={url} />
          </URLInputBox>
          <PostSubTitle>시리즈 설정</PostSubTitle>
          <PostSeriesSettingButton>☰ 시리즈에 추가하기</PostSeriesSettingButton>
          <PostBlankBox>
            <PostSubmitMenuBox>
              <PostButton2 onClick={onCloseSubmitMenu}>취소</PostButton2>
              <PostButton1>출간하기</PostButton1>
            </PostSubmitMenuBox>
          </PostBlankBox>
        </PostSettingSubBox>
      </PostSettingBox>
    </SubmitMenuBox>
  );
};

export default SubmitMenu;
