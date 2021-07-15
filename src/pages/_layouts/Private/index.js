import React from 'react';

import PropTypes from 'prop-types';

import { Container, Content } from './styles';
import MenuEmplo from '../../../components/MenuEmplo';

const Private = ({ children }) => {
  return (
    <Container>
      <MenuEmplo/>
      <Content>{children}</Content>
    </Container>
  );
};

Private.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Private;