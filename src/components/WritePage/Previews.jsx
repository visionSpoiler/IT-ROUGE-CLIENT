import styled from "styled-components";


export const PreviewBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 16px;
  border-left: 1px solid #ced4da;
  background-color: #f8f9fa;
  flex: 1;
  min-width: 0;
  overflow: auto; // ✅ 추가
`;