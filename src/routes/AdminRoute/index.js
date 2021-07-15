import React from 'react';

import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';

import Admin from "../../pages/_layouts/Admin";

const AdminRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        <Admin>
           <Component {...props}/>
        </Admin>
      }
    />
  );
};

AdminRoute.propTypes = {
  component: PropTypes.func.isRequired,
};

export default AdminRoute;