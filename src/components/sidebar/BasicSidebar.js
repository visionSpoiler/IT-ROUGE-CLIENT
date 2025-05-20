import styled from "styled-components";

export const BasicSidebar = styled.ul`
  border: 1px solid #dee2e6;
  list-style: none;
  padding: 0;
  margin: 0;
  box-shadow: 0 0 8px 0 rgba(0,0,0,.1);

  li {
    border-bottom: 1px solid #dee2e6;;
  }

  li:last-child {
    border-bottom: none;
  }
`;