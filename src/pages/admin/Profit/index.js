import React from "react";
import { Container, Card, Title, Button, Text } from "./styles";
import Form from "../../../components/Form";
import Input from "../../../components/Input";
import Link from "../../../components/Link";

const Profit = () => {
  return (
    <Container>
      <Card>
        <Title>Consultar Lucro</Title>
        <Form>
          <Text>Mês/Ano</Text>
          <Input
            name="search"
            placeholder="12/2020"
            variant="border"
            fullWidth
          />
        </Form>
        <Button>
          <Link label="Gerar" route="/admin" size="19px" />
        </Button>
      </Card>
    </Container>
  );
};

export default Profit;
