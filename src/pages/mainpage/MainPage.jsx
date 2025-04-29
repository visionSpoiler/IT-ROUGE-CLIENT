import React, { useState } from "react";
import styled from "styled-components";
import TrendingIcon from "../../assets/trending.svg?react";
import ClockIcon from "../../assets/clock.svg?react";
import FeedIcon from "../../assets/feed.svg?react";
import MainPageMenuTab from "./components/MainPageMenuTab";
import HambergetMenu from "../../assets/hambergerMenu.svg?react"

const MainPageBox = styled.div`
  display: flex;
  flex-direction: column;
`;

const MainPageHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1.5rem;
  padding-bottom: 1rem;
  color: #868e96;
`;

const MainPageMenu = styled.div`
  display: flex;
  align-items: center;
`;

const MainPageMenuTabList = [
  { title: "트렌딩", icon: TrendingIcon },
  { title: "최신", icon: ClockIcon },
  { title: "피드", icon: FeedIcon },
];

const MainPage = () => {
  const [selectedMenuTab, setSelectedMenuTab] = useState(undefined);

  const handleClickMenuTab = (val) => {
    setSelectedMenuTab(val);
  };

  return (
    <MainPageBox>
      <MainPageHeader>
        <MainPageMenu>
          {MainPageMenuTabList.map(({ title, icon: Icon }, index) => (
            <MainPageMenuTab
              isSelected={selectedMenuTab === title}
              onClickMenuTab={handleClickMenuTab}
              title={title}
              key={index}
            >
              <Icon />
            </MainPageMenuTab>
          ))}
        </MainPageMenu>
        <HambergetMenu>hello</HambergetMenu>
      </MainPageHeader>
    </MainPageBox>
  );
};

export default MainPage;
