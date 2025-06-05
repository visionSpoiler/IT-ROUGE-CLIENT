import styled from "styled-components";


export const WriteBox = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  min-width: 0;
  position: relative;
`;

export const WriteBoxLayout = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 0%;
  padding: 48px;
  flex: 1;
`;

export const WriteTitle = styled.input`
  font-size: 2.75rem;
  font-weight: bold;
  margin-bottom: 16px;
  border: none;
  outline: none;
`;

export const WriteBoundaryLine = styled.div`
  margin-top: 1.5rem;
  margin-bottom: 1rem;
  width: 64px;
  height: 6px;
  background-color: #343a40;
`;

export const EditorBox = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  flex: 1;
`

export const Editor = styled.textarea`
  width: 100%;
  height: 100%;
  border: none;
  outline: none;
  resize: none;
  font-size: 1.2rem;
  line-height: 1.5rem;
  flex: 1;
`;

