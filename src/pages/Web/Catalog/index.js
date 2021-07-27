import React, { useRef, useEffect, useState } from "react";
import { Container, Section, Filter, Aux } from "./styles";
import Input from "../../../components/Input";
import Form from "../../../components/Form";
import Card from "../../../components/Card";
import filter from "../../../assets/icons/filter.svg";
import { Link } from "react-router-dom";
import { Grid } from "@material-ui/core";

import api from "../../../services/api";

const Catalog = () => {
  const formRef = useRef(null);
  const [car, setCar] = useState([]);
  console.log(car);
  useEffect(() => {
    api
      .get("car")
      .then((response) => setCar(response.data))
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });
  }, []);

  return (
    <Container>
      <Section>
        <Form width={350} ref={formRef}>
          <Input
            name="search"
            placeholder="Busque por um produto"
            variant="border"
            fullWidth
          />
        </Form>
        <Filter src={filter}></Filter>
      </Section>
      <Section>
        <Grid container spacing={2}>
          {car.map((car) => (
            <Grid key={car.idCarro} item xs={12} md={4}>
              <Link to={`/car/${car.idCarro}`}>
                <Card data={car} />
              </Link>
            </Grid>
          ))}
        </Grid>
      </Section>
    </Container>
  );
};

export default Catalog;
