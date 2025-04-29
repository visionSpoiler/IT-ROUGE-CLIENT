import React from "react";
import styled from "styled-components";
import logo from "./../assets/logo.svg";
import alarm from "./../assets/alarm.svg";
import search from "./../assets/search.svg"
import { PrimaryButton } from "../components/button/PrimaryButton";

const HeaderBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 12px;
  padding-bottom: 12px;
`;

const HeaderLogoBox = styled.div`
`;

const HeaderMenuBox = styled.div`
  font-size: 1.5rem;
  display: flex;
  align-items: center;
`

const HeaderMenuImage = styled.img`
  margin-right: 1rem;
`

const Header = () => {
  return (
    <HeaderBox>
      <HeaderLogoBox>
        <img src={logo} />
      </HeaderLogoBox>
      <HeaderMenuBox>
        <HeaderMenuImage src={alarm} />
        <HeaderMenuImage src={search} />
        <PrimaryButton>로그인</PrimaryButton>
      </HeaderMenuBox>
    </HeaderBox>
  );
};

export default Header;
