import styled from "styled-components";
import BottomArrow from "../../assets/bottomarrow.svg?react"

export const HeaderBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 12px;
  padding-bottom: 12px;
`;

export  const HeaderLogoBox = styled.div``;

export  const HeaderMenuBox = styled.div`
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const HeaderMenuImage = styled.img`
`;

export const WriteButton = styled.button`
  outline: none;
  border: none;
  border: 1px solid #212529;
  color: #212529;
  background-color: #f8f9fa;
  transition: hover 0.3 ease-in;
  font-size: 16px;
  font-weight: 700;
  border-radius: 20px;
  padding: 0.2rem 1.2rem;
  cursor: pointer;

  &:hover {
    background-color: #212529;
    color: #f8f9fa;
  }
`;

export const DropDownMenuBox = styled.div`
  position: relative;
  height: 100%;
`

export const DropDownMenuButton = styled(BottomArrow)`
  color: #868e96;
  cursor: pointer;

  &:hover {
    color: #212529;
  }
`

export const UserImage = styled.img`
  height: 40px;
  width: 40px;
  border-radius: 50%;
  object-fit: contain;
`