import React  from 'react';
import { Container, Card, Title, L, Button, Text } from "./styles";
import Form from "../../../components/Form";
import Input from "../../../components/Input";
import Link from "../../../components/Link";


const CarReview = () => {
  return (
    <Container>
      <Card>
        <Title>Revisão</Title>
        <L />
        <Form>
          <Text>Código Cliente</Text>
          <Input
          name="search"
          placeholder="A485DFSD589"
          variant="border"
          fullWidth
          />
        </Form>
        <Button>
          <Link label="Consultar" route="/485dfsd589" size="19px" />
        </Button>
      </Card>
    </Container>
  );
};

export default CarReview;
            