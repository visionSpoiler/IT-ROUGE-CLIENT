import styled from "styled-components";

export const MenuBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: transparent;
  padding: 16px 48px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 8px;
`;

export const ExitButton = styled.button`
  border: none;
  outline: none;
  background: none;
  font-size: 1.2rem;
  cursor: pointer;
  padding: 8px 16px;

  &:hover {
    background-color: #e9ecef;
  }
`;

export const ButtonBox = styled.div`
  display: flex;
  gap: 16px;
  justify-content: space-between;
  align-items: center;
`;

export const SaveTempButton = styled.button`
  font-size: 1.2rem;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  cursor: pointer;
  outline: none;
  border: none;
  background: none;
  color: #12b886;
  border-radius: 4px;
  padding: 8px 1.25rem;

  &:hover {
    background-color: #e9ecef;
  }
`;

export const PostButton = styled.button`
  font-size: 1.2rem;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  cursor: pointer;
  outline: none;
  border: none;
  background: #12b886;
  color: #fff;
  border-radius: 4px;
  padding: 8px 1.25rem;

  &:hover {
    background-color: #20c997;
  }
`;
