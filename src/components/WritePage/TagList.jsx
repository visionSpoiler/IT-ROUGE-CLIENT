import styled from "styled-components";

export const TagBox = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  flex-wrap: wrap;
  margin-bottom: 1rem;
  gap: 8px;
`;

export const Tag = styled.button`
  border: 1px solid #ced4da;
  background-color: white;
  outline: none;
  cursor: pointer;
  border-radius: 16px;
  padding: 0.5rem 1.2rem;
  font-size: 16px;
`;

export const TagInput = styled.input`
  border: none;
  outline: none;
  background: none;
  font-size: 16px;
`;