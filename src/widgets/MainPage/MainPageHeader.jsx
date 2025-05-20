import React from 'react'

const MainPageHeader = () => {
  return (
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
  )
}

export default MainPageHeader