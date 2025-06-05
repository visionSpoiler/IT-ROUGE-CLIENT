import React, { useState } from "react";
import BackDrop from "../../layouts/BackDrop";
import play from "../../assets/play.png";
import exit from "../../assets/exit.png";
import FacebookIcon from "../../assets/facebookicon.svg";
import GoogleIcon from "../../assets/googleicon.svg";
import GithubIcon from "../../assets/githubicon.svg";
import {
  LoginModalBox,
  LoginModalWelcomBox,
  LoginModalWelcomImage,
  LoginFormlBox,
  LoginModalHeader,
  LoginModalExitButton,
  LoginModalExitImg,
  LoginModalBody,
  LoginModalBodyTitle,
  LoginModalBodyText,
  LoginModalForm,
  LoginModalFormInput,
  LoginModalFormButton,
  LoginModalOptionBox,
  LoginModalFooterBox,
  LoginModalFooterText,
  LoginModalFooterTextButton,
  LogimModalEmailSentText
} from "../../components/LayoutHeader/index";
import { CircleButton } from "../../components/button/CircleButton";

const imageSrc = [
  { src: GithubIcon },
  { src: GoogleIcon },
  { src: FacebookIcon, color: "rgb(59, 89, 152)" },
];

const LoginModal = ({ onCloseModal, onClickSubmit, isEmailSent }) => {
  const [mode, setMode] = useState("로그인");
  const [email, setEmail] = useState('')

  const handleChangeMode = () => {
    setMode((prevMode) => (prevMode === "로그인" ? "회원가입" : "로그인"));
  };

  const handleClickSubmit = (e) => {
    e.preventDefault()
    onClickSubmit(email)
  }

  return (
    <BackDrop onCloseModal={onCloseModal}>
      <LoginModalBox>
        <LoginModalWelcomBox>
          <LoginModalWelcomImage src={play} />
        </LoginModalWelcomBox>
        <LoginFormlBox>
          <LoginModalHeader>
            <LoginModalExitButton onClick={onCloseModal}>
              <LoginModalExitImg src={exit} />{" "}
            </LoginModalExitButton>{" "}
          </LoginModalHeader>
          <LoginModalBody>
            <LoginModalBodyTitle>{mode}</LoginModalBodyTitle>
            <LoginModalBodyText>이메일로 {mode}</LoginModalBodyText>
            <LoginModalForm>
              {isEmailSent ? <LogimModalEmailSentText>이메일이 전송되었습니다. 확인해주세요.</LogimModalEmailSentText> : (
                <>
                  <LoginModalFormInput placeholder="이메일을 입력하세요." value={email} onChange={(e) => setEmail(e.target.value)} />
                  <LoginModalFormButton onClick={handleClickSubmit}>
                    {mode}
                  </LoginModalFormButton>
                </>
              )}
            </LoginModalForm>
            <LoginModalBodyText>소셜 계정으로 {mode}</LoginModalBodyText>
            <LoginModalOptionBox>
              {imageSrc.map((val, i) => (
                <CircleButton key={i} $color={val.color}>
                  <img src={val.src} />
                </CircleButton>
              ))}
            </LoginModalOptionBox>
          </LoginModalBody>
          <LoginModalFooterBox>
            <LoginModalFooterText>
              {mode === "로그인"
                ? "아직 회원이 아니신가요?"
                : "계정이 이미 있으신가요?"}
            </LoginModalFooterText>
            <LoginModalFooterTextButton onClick={handleChangeMode}>
              {mode === "로그인" ? "회원가입" : "로그인"}
            </LoginModalFooterTextButton>
          </LoginModalFooterBox>
        </LoginFormlBox>
      </LoginModalBox>
    </BackDrop>
  );
};

export default LoginModal;
