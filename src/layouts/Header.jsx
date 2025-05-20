import React, { useState } from "react";
import styled from "styled-components";
import logo from "./../assets/logo.svg";
import alarm from "./../assets/alarm.svg";
import search from "./../assets/search.svg";
import * as Components from "../components";
import BackDrop from "./BackDrop";
import play from "../assets/play.png";
import exit from "../assets/exit.png";
import FacebookIcon from "../assets/facebookicon.svg";
import GoogleIcon from "../assets/googleicon.svg";
import GithubIcon from "../assets/githubicon.svg";

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

const LoginModalBox = styled.div`
  width: 600px;
  height: 500px;
  background-color: white;
  display: flex;
`;

const LoginModalWelcomBox = styled.div`
  background-color: #f8f9fa;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const LoginModalWelcomImage = styled.img`
  width: 150px;
  height: 150px;
`;

const LoginFormlBox = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  padding: 1rem;
`;

const LoginModalHeader = styled.div`
  display: flex;
  justify-content: end;
  color: black;
  padding-bottom: 24px;
`;

const LoginModalExitButton = styled.button`
  background: none;
  border: none;
  outline: none;
  cursor: pointer;
`;

const LoginModalExitImg = styled.img`
  width: 24px;
  height: 24px;
  object-fit: contain;
`;

const LoginModalBody = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

const LoginModalBodyTitle = styled.div`
  font-size: 1.25rem;
  font-weight: bold;
`;

const LoginModalBodyText = styled.div`
  padding: 1rem 0;
  color: #868e96;
`;

const LoginModalForm = styled.form`
  display: flex;
  margin-bottom: 3rem;
`;

const LoginModalFormInput = styled.input`
  border: 1px solid #868e96;
  border-right: none;
  padding: 0.5rem;
  font-size: 1.25rem;
`;

const LoginModalFormButton = styled.button`
  border: none;
  outline: none;
  background-color: #12b886;
  color: white;
  font-weight: bold;
  cursor: pointer;
  padding: 0.5rem 1.2rem;
  font-size: 1.25rem;

  &:hover {
    background-color: #20c997;
  }
`;
const LoginModalOptionBox = styled.div`
  margin-top: 2rem;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

const LoginModalFotter = styled.div`
  
`

const imageSrc = [
  { src: GithubIcon },
  { src: GoogleIcon},
  {src: FacebookIcon, color: "rgb(59, 89, 152)"},
];

const Header = () => {
  const [isOpenLoginModal, setIsOpenLoginModal] = useState(false);

  const handleCloseLoginModal = () => {
    setIsOpenLoginModal(false);
  };

  const handleOpenLoginModal = () => {
    setIsOpenLoginModal(true);
  };

  return (
    <HeaderBox>
      {/* NOTE: 현재는 컴퍼넌트를 따로 분리하는게 의미가 없을거라 생각해 이렇게 만들었습니다. 이후 복잡해지거나 재사용해야 할 경우 따로 분리해주세요. */}
      {isOpenLoginModal && (
        <BackDrop onCloseModal={handleCloseLoginModal}>
          <LoginModalBox>
            <LoginModalWelcomBox>
              <LoginModalWelcomImage src={play} />
            </LoginModalWelcomBox>
            <LoginFormlBox>
              <LoginModalHeader>
                <LoginModalExitButton onClick={handleCloseLoginModal}>
                  <LoginModalExitImg src={exit} />{" "}
                </LoginModalExitButton>{" "}
              </LoginModalHeader>
              <LoginModalBody>
                <LoginModalBodyTitle>회원가입</LoginModalBodyTitle>
                <LoginModalBodyText>이메일로 로그인</LoginModalBodyText>
                <LoginModalForm>
                  <LoginModalFormInput placeholder="이메일을 입력하세요." />
                  <LoginModalFormButton>로그인</LoginModalFormButton>
                </LoginModalForm>
                <LoginModalBodyText>소셜 계정으로 로그인</LoginModalBodyText>
                <LoginModalOptionBox>
                  {imageSrc.map((val) => (
                    <Components.Buttons.CircleButton $color={val.color}>
                      <img src={val.src} />
                    </Components.Buttons.CircleButton>
                  ))}
                </LoginModalOptionBox>
              </LoginModalBody>
            </LoginFormlBox>
          </LoginModalBox>
        </BackDrop>
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
