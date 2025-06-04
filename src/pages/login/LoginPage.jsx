import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router";
import { login } from "../../services/auth";
import { userContext } from "../../stores/usercontext";

const LoginPage = () => {
  const { setUserId } = userContext();

  // URLSearchParams를 사용하여 쿼리 문자열을 파싱합니다.
  const location = useLocation();
  const queryString = location.search;
  const params = new URLSearchParams(queryString);

  const code = params.get("code"); // 'code' 파라미터를 가져옵니다.

  const navigate = useNavigate();

  useEffect(() => {
    if (!code) {
      alert("코드가 존재하지 않습니다.");
      navigate("/");
    }
    login(code).then((data) => {
      setUserId(data.userId)
    });
    navigate("/");
  });

  return <div>LoginPage</div>;
};

export default LoginPage;
