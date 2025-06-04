import React, { useState } from "react";
import logo from "./../assets/logo.svg";
import alarm from "./../assets/alarm.svg";
import search from "./../assets/search.svg";
import * as Components from "../components";
import LoginModal from "../widgets/Layout/LoginModal";
import { sendVerificationEmail } from "../services/auth";
import { userContext } from "../stores/usercontext";
import {
  DropDownMenuButton,
  HeaderBox,
  HeaderLogoBox,
  HeaderMenuBox,
  HeaderMenuImage,
  UserImage,
  WriteButton,
  DropDownMenuBox,
} from "../components/Header";
import DropDownMenu from "../components/dropdown/DropDownMenu";
import { dropDownMenuContext } from "../stores/DropDownMenuContext";
import { useNavigate } from "react-router";

const Header = () => {
  const { userId } = userContext();

  const navigate = useNavigate()

  const [isOpenLoginModal, setIsOpenLoginModal] = useState(false);
  const [isEmailSent, setIsEmailSent] = useState(false);


    const { isHeaderUserDropDownMenuOpen, toggleHeaderUserDropDownMenu } = dropDownMenuContext();

  const handleCloseLoginModal = () => {
    setIsOpenLoginModal(false);
    setIsEmailSent(false);
  };

  const handleOpenLoginModal = () => {
    setIsOpenLoginModal(true);
  };

  const handleClickUserHamberMenu = (e) => {
    e.stopPropagation();
    toggleHeaderUserDropDownMenu()
  }

  const handleEmailSubmit = async (email) => {
    try {
      const response = sendVerificationEmail(email);
      setIsEmailSent(true);
      console.log("인증용 메일이 전송되었습니다:", response);
    } catch (error) {
      console.error("인증용 메일을 전송하는데 실패하였습니다:", error);
    }
  };

  const goToWritePage = () => {
    navigate('/write');
  }

  return (
    <HeaderBox>
      {/* NOTE: 현재는 컴퍼넌트를 따로 분리하는게 의미가 없을거라 생각해 이렇게 만들었습니다. 이후 복잡해지거나 재사용해야 할 경우 따로 분리해주세요. */}
      {isOpenLoginModal && (
        <LoginModal
          onClickSubmit={handleEmailSubmit}
          onCloseModal={handleCloseLoginModal}
          isEmailSent={isEmailSent}
        />
      )}
      <HeaderLogoBox>
        <img src={logo} />
      </HeaderLogoBox>
      <HeaderMenuBox>
        <HeaderMenuImage src={alarm} />
        <HeaderMenuImage src={search} />
        {userId ? (
          <>
            <WriteButton onClick={goToWritePage}>새 글 작성</WriteButton>
            <UserImage src="https://www.gravatar.com/avatar/00000000000000000000000000000000?d=identicon" />
            <DropDownMenuBox>
              <DropDownMenuButton onClick={handleClickUserHamberMenu} />
              {isHeaderUserDropDownMenuOpen && <DropDownMenu menus={["내 벨로그", "임시 글", "읽기 목록", "설정", "로그아웃"]}/>}
            </DropDownMenuBox>
          </>
        ) : (
          <Components.Buttons.PrimaryButton onClick={handleOpenLoginModal}>
            로그인
          </Components.Buttons.PrimaryButton>
        )}
      </HeaderMenuBox>
    </HeaderBox>
  );
};

export default Header;
