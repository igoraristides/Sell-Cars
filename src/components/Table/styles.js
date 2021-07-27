import styled from 'styled-components';

import devices, { max } from '~/styles/configs/devices';

export const Container = styled.table`
  border-collapse: collapse;
  width: 100%;

  border-collapse: separate;
  border-spacing: 0 10px;

  @media ${max.sm} {
    table-layout: fixed;
    margin: 0;
    border: 0;
  }
`;
