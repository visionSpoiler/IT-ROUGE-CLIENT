import RegisterForm from "../../widgets/RegisterPage/RegisterForm";
import { useNavigate, useLocation } from "react-router-dom";
import React, { useEffect, useState } from "react";
import {
  checkSignUpCodeValidity,
  checkIdDuplication,
} from "../../services/auth";

import { signUp } from "../../services/auth";

const RegisterPage = () => {
  // URLSearchParams를 사용하여 쿼리 문자열을 파싱합니다.
  const location = useLocation();
  const queryString = location.search;
  const params = new URLSearchParams(queryString);

  const code = params.get("code"); // 'code' 파라미터를 가져옵니다.

  const navigate = useNavigate();

  const [isIdChecked, setIsIdChecked] = useState(false);


  // 아이디를 입력할 때마다 중복 확인을 초기화
  const onChangeId = () => {
    setIsIdChecked(false);
  };

  // 아이디 중복 확인 함수
  const onClickIdCheck = async (userId) => {
    if (!userId.trim()) {
      alert("사용자 ID를 입력해주세요.");
      return;
    }
    try {
      // 중복 확인 API 호출
      const response = await checkIdDuplication(userId);
      if (response.available) {
        alert("사용 가능한 ID입니다.");
        setIsIdChecked(true);
      } else {
        alert("이미 사용 중인 ID입니다.");
      }
    } catch (error) {
      console.error("ID 중복 확인 실패:", error);
      alert("ID 중복 확인에 실패했습니다. 다시 시도해주세요.");
    }
  };

  const onClickCancel = () => {
    navigate("/");
  };

  const onClickRegister = async (form) => {
    console.log("회원가입 정보:", form);
    if (!isIdChecked) {
      alert("사용자 ID 중복 확인을 해주세요.");
      return;
    }
    try {
      await signUp(form, code);
    } catch (error) {
      console.error("회원가입 실패:", error);
      alert(`회원가입에 실패했습니다. (${error.message})`);
    }
    navigate("/");
  };

  // 코드 유효성 검사
  useEffect(() => {
    if (!code) {
      alert("잘못된 접근입니다. 홈페이지로 이동합니다.");
      navigate("/");
    }

    const validateCode = async () => {
      try {
        await checkSignUpCodeValidity(code);
      } catch (error) {
        console.error("유효하지 않은 코드입니다:", error.message);
        alert(
          `유효하지 않은 코드입니다. (${error.message})  홈페이지로 이동합니다.`
        );
        navigate("/");
      }
    };

    validateCode();
  }, [navigate, code]);

  return (
    <RegisterForm
      onClickCancel={onClickCancel}
      onClickRegister={onClickRegister}
      onChangeId={onChangeId}
      onClickIdCheck={onClickIdCheck}
      isIdChecked={isIdChecked}
    />
  );
};

export default RegisterPage;
