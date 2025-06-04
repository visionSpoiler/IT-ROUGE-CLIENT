import styled from "styled-components";

export const TagBox = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  flex-wrap: wrap;
  margin-bottom: 1rem;
  gap: 8px;
`;

const sharedStyle = `
  font-size: 16px;
  line-height: 1.5;
  height: 40px;
  display: inline-flex;
  align-items: center;
`;

export const Tag = styled.button`
  ${sharedStyle}
  border: 1px solid #ced4da;
  background-color: white;
  outline: none;
  cursor: pointer;
  border-radius: 16px;
  padding: 0.5rem 1.2rem;
`;

export const TagInput = styled.input`
  ${sharedStyle}
  border: none;
  outline: none;
  background: none;
    padding: 0.5rem;
`;