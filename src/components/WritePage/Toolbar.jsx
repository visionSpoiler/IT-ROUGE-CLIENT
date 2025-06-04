import styled from "styled-components";

export const ToolbarBox = styled.div`
  display: flex;
  justify-content: start;
  gap: 4px;
  flex-wrap: wrap;
`;

export const ToolbarButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  background-color: transparent;
  border: none;
  cursor: pointer;
  outline: none;
  color: #6c757d;
  font-size: 24px;
  font-weight: bold;

  &:hover {
    background-color: #f8f9fa;
    color: black;
  }
`;

export const ImageFileInput = styled.input`
  visibility: hidden;
`