import styled from 'styled-components';

import devices, { max } from '~/styles/configs/devices';

export const Container = styled.td`
  color: #262626;
  background: #ffffff;

  text-align: left;

  padding: 10px;

  @media ${max.sm} {
    display: block;
    ${({ hideSm }) => hideSm && "padding: 0;"}

    &:before {
      content: attr(data-label);
      float: left;

      font-weight: 800;

      margin-right: 10px;
      vertical-align: middle;
    }
  }
`;
