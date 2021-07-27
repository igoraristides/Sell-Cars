import React, { useState, useEffect } from "react";
import { Container } from "./styles";
import CardCar from "../../../components/CardCar";
import { Grid } from "@material-ui/core";
import { useParams, useLocation } from "react-router-dom";

import api from "../../../services/api";

const CarData = () => {
  const { pathname } = useLocation();
  const [, , id] = pathname.split("/");
  const [car, setCar] = useState([]);
  console.log(car);
  useEffect(() => {
    api
      .get(`car/${id}`)
      .then((response) => setCar(response.data[0]))
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });
  }, []);

  return (
    <Container>
      <CardCar data={car} />
    </Container>
  );
};

export default CarData;
