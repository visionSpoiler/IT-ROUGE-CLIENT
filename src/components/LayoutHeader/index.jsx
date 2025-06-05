import styled from "styled-components";

export const HeaderBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 12px;
  padding-bottom: 12px;
`;

export const HeaderLogoBox = styled.div``;

export const HeaderMenuBox = styled.div`
  font-size: 1.5rem;
  display: flex;
  align-items: center;
`;

export const HeaderMenuImage = styled.img`
  margin-right: 1rem;
`;

export const LoginModalBox = styled.div`
  width: 600px;
  height: 500px;
  background-color: white;
  display: flex;
`;

export const LoginModalWelcomBox = styled.div`
  background-color: #f8f9fa;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const LoginModalWelcomImage = styled.img`
  width: 150px;
  height: 150px;
`;

export const LoginFormlBox = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  padding: 1rem;
`;

export const LoginModalHeader = styled.div`
  display: flex;
  justify-content: end;
  color: black;
  padding-bottom: 24px;
`;

export const LoginModalExitButton = styled.button`
  background: none;
  border: none;
  outline: none;
  cursor: pointer;
`;

export const LoginModalExitImg = styled.img`
  width: 24px;
  height: 24px;
  object-fit: contain;
`;

export const LoginModalBody = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

export const LoginModalBodyTitle = styled.div`
  font-size: 1.25rem;
  font-weight: bold;
`;

export const LoginModalBodyText = styled.div`
  padding: 1rem 0;
  color: #868e96;
`;

export const LoginModalForm = styled.form`
  display: flex;
  margin-bottom: 3rem;
`;

export const LoginModalFormInput = styled.input`
  border: 1px solid #868e96;
  border-right: none;
  padding: 0.5rem;
  font-size: 1.25rem;
  flex: 1;
`;

export const LoginModalFormButton = styled.button`
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
export const LoginModalOptionBox = styled.div`
  margin-top: 2rem;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

export const LoginModalFooterBox = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
  gap: 16px;
`;

export const LoginModalFooterText = styled.div`
  color: #20c997;
  font-size: 1 rem;
`;

export const LoginModalFooterTextButton = styled.div`
  color: #20c997;
  font-weight: bold;
  font-size: 1 rem;
  cursor: pointer;
`;

export const LogimModalEmailSentText = styled.div`
  display: flex;
  align-items: center;
  background: #c3fae8;
  border: 1px solid #96f2d7;
  padding-left: 0.75rem;
  padding-right: 0.75rem;
  height: 3rem;
  color: #087f5b;
  white-space: pre;
  width: 100%;
`;
