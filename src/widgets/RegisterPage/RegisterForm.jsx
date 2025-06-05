import React, { useState } from "react";
import {
  RegisterLayout,
  RegisterFormBox,
  RegisterGreeting,
  RegisterGuide,
  RegisterLabel,
  RegisterInput,
  ButtonBox,
  CancelButton,
  RegisterButton,
  RegisterIdCheckButton,
  RegisterInputBox,
} from "../../components/RegisterPage";

const RegisterForm = ({ onClickCancel, onClickRegister, onChangeId, onClickIdCheck, isIdChecked }) => {
  const [form, setForm] = useState({
    nickname: "",
    userId: "",
    bio: "",
  });

  const handleFromUserIdChange = (e) => {handleFormChange(e); onChangeId(form.userId);}

  const handleIdCheck = () => {
    if (onClickIdCheck) {
      onClickIdCheck(form.userId);
    }
  }

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleCancel = () => {
    if (onClickCancel) {
      onClickCancel();
    }
  };

  const handleRegister = () => {
    if (onClickRegister) {
      onClickRegister(form);
    }
  };

  return (
    <RegisterLayout>
      <RegisterFormBox>
        <RegisterGreeting>환영합니다!</RegisterGreeting>
        <RegisterGuide>기본 회원 정보를 등록해 주세요.</RegisterGuide>
        <RegisterLabel>사용자 ID</RegisterLabel>
        <RegisterInputBox>
          <RegisterInput
            type="text"
            placeholder="사용자 ID를 입력하세요."
            name="userId"
            value={form.userId}
            onChange={handleFromUserIdChange}
          />
          <RegisterIdCheckButton
          onClick={handleIdCheck} disabled={isIdChecked}>{isIdChecked ? "사용 가능" : "중복 확인"}</RegisterIdCheckButton>
        </RegisterInputBox>
        <RegisterLabel>프로필 이름</RegisterLabel>
        <RegisterInput
          type="text"
          placeholder="프로필 이름을 입력하세요."
          name="nickname"
          value={form.nickname}
          onChange={handleFormChange}
        />
        <RegisterLabel>한 줄 소개</RegisterLabel>
        <RegisterInput
          type="text"
          placeholder="당신을 한 줄로 소개해보세요."
          name="bio"
          value={form.bio}
          onChange={handleFormChange}
        />
        <ButtonBox>
          <CancelButton onClick={handleCancel}>취소</CancelButton>
          <RegisterButton onClick={handleRegister}>가입</RegisterButton>
        </ButtonBox>
      </RegisterFormBox>
    </RegisterLayout>
  );
};

export default RegisterForm;
