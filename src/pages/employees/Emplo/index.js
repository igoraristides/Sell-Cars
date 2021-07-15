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

function createData(id, idcar, car, price, buyer) {
  return { id, idcar, car, price, buyer };
}

const rows = [
  createData(1, 124, "Onix", "R$71.920,00", "Gabriel"),
  createData(2, 124, "Onix", "R$71.920,00", "Gabriel"),
  createData(3, 124, "Onix", "R$71.920,00", "Gabriel"),
  createData(4, 124, "Onix", "R$71.920,00", "Gabriel"),
];

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

const Emplo = () => {
  const formRef = useRef(null);
  const classes = useStyles();
  return (
    <Container>
      <Section>
        <Form width={350} ref={formRef}>
          <Input
            name="search"
            placeholder="Busque uma venda"
            variant="border"
            fullWidth
          />
        </Form>
      </Section>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>ID</StyledTableCell>
              <StyledTableCell align="center">Código Carro</StyledTableCell>
              <StyledTableCell align="center">Carro</StyledTableCell>
              <StyledTableCell align="center">Preço</StyledTableCell>
              <StyledTableCell align="center">Comprador</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <StyledTableRow key={row.id}>
                <StyledTableCell component="th" scope="row">
                  {row.id}
                </StyledTableCell>
                <StyledTableCell align="center">{row.idcar}</StyledTableCell>
                <StyledTableCell align="center">{row.car}</StyledTableCell>
                <StyledTableCell align="center">{row.price}</StyledTableCell>
                <StyledTableCell align="center">{row.buyer}</StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};

export default Emplo;
