import styled, { css } from 'styled-components';

export const Container = styled.div`
  width: 100%;
`;

export const Field = styled.input`
  -webkit-appearance: none;

  font-size: 16px;

  padding: 14px;
  margin-bottom: 40px;

  border-radius: 7px;
  transition: border-color 200ms linear;
  
  border: 1px solid #E5E4E6;
  box-sizing: border-box;


  :hover, :focus {
    border-color: #aeaeb2;
  }

  &::placeholder {
    font-size: 16px;
    color: #aeaeb2;
  }

  width: 100%;

`;

export const Label = styled.label`
  display: inline-block;
  width: 100%;
  font-size: 14px;
  font-weight: 500;
  margin-bottom: 5px;

  ${({ color }) => {
    if (color === 'black')
      return css`
        color: '#000000';
      `;

    return css`
      color: ${color};
    `;
  }}
`;
