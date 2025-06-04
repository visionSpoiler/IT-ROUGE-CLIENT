import React from "react";
import styled from "styled-components";
import { clamp } from "../../utils/stringUtils";

const MainPagePostCardBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 400px;
  background-color: white;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const MainPagePostCardThumbnailBox = styled.div`
  flex: 1;
  position: relative;
  width: 100%;
  height: 100%;
`;

const MainPagePostCardThumbnail = styled.img`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

const MainPagePostCardContentBox = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 0.5rem;
  border-bottom: 1px solid;
`;

const MainPagePostCardContentTitle = styled.div`
  font-size: 1.25rem;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

const MainPagePostCardContentBody = styled.div`
  color: #495057;
  margin: 0.5rem 0;
  flex: 1;
  word-break:break-word;
  line-height: 1.5rem;
`;

const MainPagePostCardSubInfo = styled.div`
  font-size: 0.75rem;
  color: #868e96;
`;

const MainPagePostCardFotter = styled.div`
  padding: 0.5rem;
  border-top: 1px solid #f1f3f5;
  display: flex;
`;

const MainPagePostCard = ({post}) => {
  return (
    <MainPagePostCardBox>
      <MainPagePostCardThumbnailBox>
        <MainPagePostCardThumbnail src="../../../src/assets/image.png" />
      </MainPagePostCardThumbnailBox>
      <MainPagePostCardContentBox>
        <MainPagePostCardContentTitle>제목 wpdddddddddddddddddddddddddddddddddddddddddddddddddd</MainPagePostCardContentTitle>
        <MainPagePostCardContentBody>{`${clamp("제목제목제목제목제목제목제목제목제목제목제목제목제목목제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목목제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목목제목제목제목제목제목제목제목제목제목제목", 75)}`}</MainPagePostCardContentBody>
        <MainPagePostCardSubInfo>날짜 및 시간</MainPagePostCardSubInfo>
      </MainPagePostCardContentBox>
      <MainPagePostCardFotter>푸터</MainPagePostCardFotter>
    </MainPagePostCardBox>
  );
};

export default MainPagePostCard;
