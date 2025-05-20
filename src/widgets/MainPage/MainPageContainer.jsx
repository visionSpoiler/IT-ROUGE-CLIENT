import React, { useState } from "react";
import styled from "styled-components";
// 메인 페이지 컴퍼넌트들
import MainPageComponents from "../../components/MainPage";
// svg 아이콘 들
import TrendingIcon from "../../assets/trending.svg?react";
import ClockIcon from "../../assets/clock.svg?react";
import FeedIcon from "../../assets/feed.svg?react";
import HambergetMenuIcon from "../../assets/hambergerMenu.svg?react";
import { SidebarButton } from "../../components/button/SidebarButton";
import Components from "../../components";

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

const MainPageContainer = () => {
  // 현재 선택된 탭
  const [selectedMenuTab, setSelectedMenuTab] = useState(undefined);
  // 햄버거 메뉴 오픈 여부
  const [isOpenHambergerMenu, setIsOpenHambergerMenu] = useState(false);
  // 정렬 서브 옵션 메뉴 현재 설정
  const [selectedSortSubOption, setSelectedSortSubOption] = useState("오늘");
  // 정렬 서브 옵션 메뉴 오픈 여부
  const [isOpenSortSubOptionMenu, setIsOpenSortSubOptionMenu] = useState(false);

  //메뉴 탭 클릭시
  const handleClickMenuTab = (val) => {
    setSelectedMenuTab(val);
  };

  // !!warning!! 밑과 같이 서로 상호작용 하는 것이 복잡해지면 위에 관리하는 레이어 하나 깔고 리팩토링 할 것
  // 지금은 2개만 서로 상호작용하니깐 놔두고
  // 햄버거 메뉴 아이콘 클릭시
  const handleClickHambergerMenuIcon = (e) => {
    e.stopPropagation();
    setIsOpenHambergerMenu((prev) => !prev);
    setIsOpenSortSubOptionMenu(false)
  };

  // 정렬 서브 옵션 메뉴 클릭시
  const handleClickSortSubOptionMenu = (e) => {
    e.stopPropagation();
    setIsOpenSortSubOptionMenu((prev) => !prev)
    setIsOpenHambergerMenu(false);
  }

  // 화면 클릭 시
  const handleClickMainPage = () => {
    setIsOpenHambergerMenu(false);
    setIsOpenSortSubOptionMenu(false)
  };
  // ^^^^^^^!!warning!! 밑과 같이 서로 상호작용 하는 것이 복잡해지면 위에 관리하는 레이어 하나 깔고 리팩토링 할 것

  return (
    <MainPageBox onClick={handleClickMainPage}>
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
          <MainPageSubMenuDropTab onClick={handleClickSortSubOptionMenu}>
            {selectedSortSubOption + " ▼ "}
            {isOpenSortSubOptionMenu && (
              <Components.DropDown.DropDownMenu menus={sortSubOptionMenus} />
            )}
          </MainPageSubMenuDropTab>
          <HambergerButtonBox onClick={handleClickHambergerMenuIcon}>
            <HambergetMenuIcon />
            {isOpenHambergerMenu && (
              <Components.DropDown.DropDownMenu menus={hamberMenus} />
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

export default MainPageContainer;
