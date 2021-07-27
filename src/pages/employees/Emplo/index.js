import React, { useRef, useEffect, useState } from "react";
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
import api from "../../../services/api";

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

//listarClientes
const Emplo = () => {
  const [client, setClient] = useState([]);
  console.log(client);
  useEffect(() => {
    api
      .get("client")
      .then((response) => setClient(response.data))
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });
  }, []);

  const useStyles = makeStyles({
    table: {
      minWidth: 700,
    },
  });

  const formRef = useRef(null);
  const classes = useStyles();
  return (
    <Container>
      <Section>
        <Form width={350} ref={formRef}>
          <Input
            name="search"
            placeholder="Busque um cliente"
            variant="border"
            fullWidth
          />
        </Form>
      </Section>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Nome</StyledTableCell>
              <StyledTableCell align="center">Sobrenome</StyledTableCell>
              <StyledTableCell align="center">CPF</StyledTableCell>
              <StyledTableCell align="center">RG</StyledTableCell>
              <StyledTableCell align="center">Telefone</StyledTableCell>
              <StyledTableCell align="center">Celular</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {client.map((client) => (
              <StyledTableRow key={client.idCliente}>
                <StyledTableCell component="th" scope="row">
                  {client.nomeCliente}
                </StyledTableCell>
                <StyledTableCell align="center">
                  {client.sobrenomeCliente}
                </StyledTableCell>
                <StyledTableCell align="center">
                  {client.cpfCliente}
                </StyledTableCell>
                <StyledTableCell align="center">
                  {client.rgCliente}
                </StyledTableCell>
                <StyledTableCell align="center">
                  {client.telefoneCliente}
                </StyledTableCell>
                <StyledTableCell align="center">
                  {client.celularCliente}
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};

export default Emplo;
