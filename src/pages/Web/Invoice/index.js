import React  from 'react';
import { Container, Card, Title, L, Button, Text } from "./styles";
import Form from "../../../components/Form";
import Input from "../../../components/Input";
import Link from "../../../components/Link";


const Invoice = () => {
  return (
    <Container>
      <Card>
        <Title>2ª Via Nota Fiscal</Title>
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
          <Link label="Gerar" route="/" size="19px" />
        </Button>
      </Card>
    </Container>
  );
};

export default Invoice;
            