import React, { useRef } from "react";
import { Container, Section, Filter, Aux } from "./styles";
import Input from "../../../components/Input";
import Form from "../../../components/Form";
import Card from "../../../components/Card";
import filter from "../../../assets/icons/filter.svg";
import { Link } from "react-router-dom";

const Catalog = () => {
  const formRef = useRef(null);
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
        <Link to={`/car`}>
          <Card />
        </Link>
        <Link to={`/car`}>
          <Card />
        </Link>
        <Link to={`/car`}>
          <Card />
        </Link>
        <Link to={`/car`}>
          <Card />
        </Link>
        <Link to={`/car`}>
          <Card />
        </Link>
      </Section>
    </Container>
  );
};

export default Catalog;
