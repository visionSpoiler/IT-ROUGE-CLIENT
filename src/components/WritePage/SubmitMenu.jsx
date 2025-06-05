import styled from "styled-components";

export const SubmitMenuBox = styled.div`
  display: flex;
  position: absolute;
  left: 0;
  top: 0%;
  background-color: #f8f9fa;
  width: 100%;
  height: 100%;
  z-index: 200;
  justify-content: center;
  align-items: center;
`;

export const PostSettingBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 768px;
  gap: 60px;
`;

export const PostSettingSubBox = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  min-width: 0;
  width: 350px;
  height: 440px;
`;

export const PostSubTitle = styled.div`
  font-size: 1.25rem;
  margin-bottom: 0.5rem;
  font-weight: bold;
`;

export const PostImgContainer = styled.div`
  width: 100%;
  height: 190px;
`;

export const PostImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const PostIntroTextarea = styled.textarea`
  resize: none;
  width: 100%;
  border: none;
  outline: none;
  box-shadow: rgba(0, 0, 0, 0.03) 0px 0px 4px 0px;
  background: white;
  color: black;
  line-height: 1.5;
  font-size: 0.875rem;
  height: 7.375rem;
  padding: 0.75rem 1rem;
  margin-top: 0.5rem;
  box-sizing: border-box;
`;

export const PostIntroTextLengthBox = styled.div`
  text-align: end;
`;

export const PostButtonBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;
  margin: 1rem 0;
`;

export const PostButton2 = styled.button`
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
  flex: 1;

  &:hover {
    background-color: #e9ecef;
  }
`;

export const PostButton1 = styled.button`
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
  flex: 1;

  &:hover {
    background-color: #20c997;
  }
`;

export const PostVisibilityButton = styled.button`
  outline: none;
  flex: 1 1 0%;
  height: 3rem;
  display: inline-flex;
  align-items: center;
  justify-content: flex-start;
  font-weight: bold;
  background: #fff;
  font-size: 1.125rem;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 4px 0px;
  padding: 0px 0px 0px 1rem;
  border-radius: 4px;
  cursor: pointer;
  border: ${(props) =>
    `solid 1px ${props.$isActive ? "#20C997" : "transparent"}`};
  color: ${(props) => `${props.$isActive ? "#20C997" : "#868E96"}`};
`;

export const PostVisibilityButtonText = styled.span`
  margin-left: 1rem;
`

export const PostSeriesSettingButton = styled.button`
  outline: none;
  border: none;
  height: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 0.5rem;
  font-weight: bold;
  background: #fff;
  font-size: 1.125rem;
  box-sizing: border-box;
  border-radius: 4px;
  cursor: pointer;
  color: #20C997;
  margin: 1rem 0;
`

export const PostBlankBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: end;
  flex: 1;
`

export const PostSubmitMenuBox = styled.div`
  display: flex;
  gap: 16px;
  justify-content: end;
  align-items: center;
`

export const URLInputBox = styled.div`
    background-color: white;
    padding: 0.5rem;
    line-height: 1.5;
    margin: 1rem 0;
  `

export const URLUserNameBox = styled.span`
    color: #868E96;
  `
  
export const URLInput = styled.input`
    background: none;
    background-color: transparent;
    outline: none;
    border: none;
  `