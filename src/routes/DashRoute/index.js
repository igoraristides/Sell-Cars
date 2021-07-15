import React from 'react';

import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';

import Dash from "../../pages/_layouts/Dash";

const DashRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        <Dash>
           <Component {...props}/>
        </Dash>
      }
    />
  );
};

DashRoute.propTypes = {
  component: PropTypes.func.isRequired,
};

export default DashRoute;