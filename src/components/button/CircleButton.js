import styled from "styled-components";

export const CircleButton = styled.button`
  border-radius: 50%;
  height: ${({$height}) => $height ? $height: "48px" };
  width: ${({$width}) => $width ? $width: "48px" };
  background-color: ${({$color}) => $color ?  $color : "#ffffff"};
  border: ${({$color}) => $color ?  `1px solid ${$color}` : "1px solid #dee2e6"};
  outline: none;
  display: flex;
  justify-content: center;
  align-items: center;
`