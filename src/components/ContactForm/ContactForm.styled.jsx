import styled from '@emotion/styled';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;

  & > div{
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    width: 320px;
    margin-bottom: 20px;
  }

  & input {
    width: 204px;
    padding: 10px;
  }

  & button {
    margin-bottom: 40px;
    padding: 8px 16px;
    background-color: slategrey;
    color: azure;
    font-size: 18px;
    border-color: azure;
    cursor: pointer;
  }
`;
