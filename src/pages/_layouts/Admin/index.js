import React from 'react';
import './styles'
import MenuAdmin from '../../../components/MenuAdmin'
import { Container, Content } from './styles';
import PropTypes from 'prop-types';
import { Grid } from '@material-ui/core';

const Admin = ({children}) =>  {
    return (
        <Container>
          <MenuAdmin />
          <Content>
            <Grid container spacing = {2}>
            <Grid item xs = {12} md = {12}>
            {children}
              </Grid>
            </Grid>
          </Content>
        </Container>
      );
    };

Admin.propTypes = {
    children: PropTypes.element.isRequired,
};
      
export default Admin;