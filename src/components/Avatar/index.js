import React from 'react';

import PropTypes from 'prop-types';

import { Container } from './styles';

import avatar from '../../assets/boy.png';

const Avatar = ({ src, size }) => {
  return <Container className="root-team-avatar" src={src || avatar} size={size} />;
};

Avatar.defaultProps = {
  size: 36,
};

Avatar.propTypes = {
  size: PropTypes.number,
  src: PropTypes.string.isRequired,
};

export default Avatar;
