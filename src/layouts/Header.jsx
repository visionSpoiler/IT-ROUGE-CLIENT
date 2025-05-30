import React, { useState } from "react";
import styled from "styled-components";
import logo from "./../assets/logo.svg";
import alarm from "./../assets/alarm.svg";
import search from "./../assets/search.svg";
import * as Components from "../components";
import LoginModal from "../widgets/Layout/LoginModal";
import { sendVerificationEmail } from "../services/auth";

const HeaderBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 12px;
  padding-bottom: 12px;
`;

const HeaderLogoBox = styled.div``;

const HeaderMenuBox = styled.div`
  font-size: 1.5rem;
  display: flex;
  align-items: center;
`;

const HeaderMenuImage = styled.img`
  margin-right: 1rem;
`;


const Header = () => {
  const [isOpenLoginModal, setIsOpenLoginModal] = useState(false);
  const [isEmailSent, setIsEmailSent] = useState(false);

  const handleCloseLoginModal = () => {
    setIsOpenLoginModal(false);
    setIsEmailSent(false)
  };

  const handleOpenLoginModal = () => {
    setIsOpenLoginModal(true);
  };

  const handleEmailSubmit = async (email) => {
    try {
      const response = sendVerificationEmail(email);
      setIsEmailSent(true);
      console.log("인증용 메일이 전송되었습니다:", response);
    } catch (error) {
      console.error("인증용 메일을 전송하는데 실패하였습니다:", error);
    }
  }

  return (
    <HeaderBox>
      {/* NOTE: 현재는 컴퍼넌트를 따로 분리하는게 의미가 없을거라 생각해 이렇게 만들었습니다. 이후 복잡해지거나 재사용해야 할 경우 따로 분리해주세요. */}
      {isOpenLoginModal && (
        <LoginModal onClickSubmit={handleEmailSubmit} onCloseModal={handleCloseLoginModal} isEmailSent={isEmailSent} />
      )}
      <HeaderLogoBox>
        <img src={logo} />
      </HeaderLogoBox>
      <HeaderMenuBox>
        <HeaderMenuImage src={alarm} />
        <HeaderMenuImage src={search} />
        <Components.Buttons.PrimaryButton onClick={handleOpenLoginModal}>
          로그인
        </Components.Buttons.PrimaryButton>
      </HeaderMenuBox>
    </HeaderBox>
  );
};

export default Header;
