import styled from 'styled-components';

export const Container = styled.th`
  font-size: 14px;
  font-weight: 700;
  text-align: left;

  color: #999999;

  padding: 0 10px;

  &.ascending {
    svg path:last-child {
      fill: green;
    }
  }

  &.descending {
    svg path:first-child {
      fill: red;
    }
  }
`;
