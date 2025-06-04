import React, { useState } from "react";
import styled from "styled-components";

import { SidebarButton } from "../../components/button/SidebarButton";
// 메인 페이지 컴퍼넌트들
import {MainPageComponents, DropDown} from "../../components";
// svg 아이콘 들
import TrendingIcon from "../../assets/trending.svg?react";
import ClockIcon from "../../assets/clock.svg?react";
import FeedIcon from "../../assets/feed.svg?react";
import HambergetMenuIcon from "../../assets/hambergerMenu.svg?react";
import { dropDownMenuContext } from "../../stores/DropDownMenuContext";


const MainPageBox = styled.div`
  display: flex;
  flex-direction: column;
  padding: 12px 0;
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

const MainPageSubMenu = styled.div`
  display: flex;
  align-items: center;
`;

const MainPageSubMenuDropTab = styled(SidebarButton)`
  position: relative;
  margin-right: 1rem;
  padding: 0.5rem 1.2rem;
  &:hover {
    color: black;
  }
`;

const HambergerButtonBox = styled.div`
  cursor: pointer;
  position: relative;
`;

const MainPagePostCardBoard = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: clamp(12px, 2vw, 32px);
  padding: 1rem;
`;

const MainPageMenuTabList = [
  { title: "트렌딩", icon: TrendingIcon },
  { title: "최신", icon: ClockIcon },
  { title: "피드", icon: FeedIcon },
];

const hamberMenus = ["공지사항", "태그 목록", "서비스 정책", "Discord"];

const sortSubOptionMenus = ["오늘", "이번 주", "이번 달", "올해"];

const MainPage = () => {
  // 현재 선택된 탭
  const [selectedMenuTab, setSelectedMenuTab] = useState(undefined);
  // 정렬 서브 옵션 메뉴 현재 설정
  const [selectedSortSubOption, setSelectedSortSubOption] = useState("오늘");

  const {isMainPageHambergerMenuOpen, isSortSubOptionMenuOpen, toggleSortSubOptionMenu, toggleMainPageHambergerMenu} = dropDownMenuContext()

  //메뉴 탭 클릭시
  const handleClickMenuTab = (val) => {
    setSelectedMenuTab(val);
  };

  const handleClickHambergerMenuIcon = (e) => {
    e.stopPropagation();
    toggleMainPageHambergerMenu()
  };

  // 정렬 서브 옵션 메뉴 클릭시
  const handleClickSortSubOptionMenu = (e) => {
    e.stopPropagation();
    toggleSortSubOptionMenu()
  }

  return (
    <MainPageBox>
      <MainPageHeader>
        <MainPageMenu>
          {MainPageMenuTabList.map(({ title, icon: Icon }, index) => (
            <MainPageComponents.MainPageMenuTab
              isSelected={selectedMenuTab === title}
              onClickMenuTab={handleClickMenuTab}
              title={title}
              key={index}
            >
              <Icon />
            </MainPageComponents.MainPageMenuTab>
          ))}
        </MainPageMenu>
        <MainPageSubMenu>
          <MainPageSubMenuDropTab >
            <div onClick={handleClickSortSubOptionMenu}>{selectedSortSubOption + " ▼ "}</div>
            {isSortSubOptionMenuOpen && (
              <DropDown.DropDownMenu menus={sortSubOptionMenus} />
            )}
          </MainPageSubMenuDropTab>
          <HambergerButtonBox >
            <div onClick={handleClickHambergerMenuIcon}><HambergetMenuIcon /></div>
            {isMainPageHambergerMenuOpen && (
              <DropDown.DropDownMenu menus={hamberMenus} />
            )}
          </HambergerButtonBox>
        </MainPageSubMenu>
      </MainPageHeader>
      <MainPagePostCardBoard>
        <MainPageComponents.MainPagePostCard />
        <MainPageComponents.MainPagePostCard />
        <MainPageComponents.MainPagePostCard />
        <MainPageComponents.MainPagePostCard />
        <MainPageComponents.MainPagePostCard />
        <MainPageComponents.MainPagePostCard />
        <MainPageComponents.MainPagePostCard />
        <MainPageComponents.MainPagePostCard />
      </MainPagePostCardBoard>
    </MainPageBox>
  );
};

export default MainPage;
