import React from 'react';

import PropTypes from 'prop-types';

import { Container } from './styles';

const Th = ({ children, ...rest }) => {
  return <Container {...rest}>{children}</Container>;
};

Th.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.string,
    PropTypes.number,
  ]).isRequired,
};

export default Th;
