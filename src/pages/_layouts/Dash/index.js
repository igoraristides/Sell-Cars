import React from "react";
import "./styles";
import { Container, Content } from "./styles";
import PropTypes from "prop-types";
import { Grid } from "@material-ui/core";
import Menu from "../../../components/Menu";

const Dash = ({ children }) => {
  return (
    <Container>
      <Menu />
      <Content>
        <Grid container spacing={2}>
          <Grid item xs={12} md={12}>
            {children}
          </Grid>
        </Grid>
      </Content>
    </Container>
  );
};

Dash.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Dash;
