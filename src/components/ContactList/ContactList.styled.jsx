import styled from '@emotion/styled';

export const List = styled.ul`
  width: 424px;
  margin: 0;
  padding: 0;
  list-style: none;

  & li {
    display: flex;
    justify-content: space-between;
    align-items: baseline;

    & p{
      color: #c9e955;
    }

    & button {
      width: 100px;
      padding: 8px 16px;
      background-color: slategrey;
      border-color: tomato;
      color: tomato;
      font-size: 16px;
      cursor: pointer;
    }
  }
`;
