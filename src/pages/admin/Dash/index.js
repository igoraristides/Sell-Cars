import React, { useRef } from "react";
import { Container, Section } from "./styles";
import Input from "../../../components/Input";
import Form from "../../../components/Form";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

import { Link } from "react-router-dom";

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: "#249cf2",
    color: theme.palette.common.black,
    font: "14px 'Rajdhani', sans-serif",
    fontSize: 19,
  },
  body: {
    fontSize: 19,
    font: "14px 'Rajdhani', sans-serif",
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

function createData(id, name, job, sale) {
  return { id, name, job, sale };
}

const rows = [
  createData(1, "João", "Vendedor", 15),
  createData(2, "João", "Vendedor", 15),
  createData(3, "João", "Vendedor", 15),
  createData(4, "João", "Vendedor", 15),
];

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

const Admin = () => {
  const formRef = useRef(null);
  const classes = useStyles();
  return (
    <Container>
      <Section>
        <Form width={350} ref={formRef}>
          <Input
            name="search"
            placeholder="Busque um funcionário"
            variant="border"
            fullWidth
          />
        </Form>
      </Section>
    </Container>
  );
};

export default Admin;
