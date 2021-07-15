import React from "react";
import Form from "../../components/Form";
import Input from "../../components/Input";
import Link from "../../components/Link";
import icon from "../../assets/login.jpg"

import { Container, Card, Aux, Img, Button, Text } from "./styles";

export default function Login() {
  return (
    <Container>
      <Card>
        <Aux>
        <Img src={icon}/>
        </Aux>
        <Form>
          <Text>Código Usuário</Text>
          <Input
          name="search"
          placeholder="14582"
          variant="border"
          fullWidth
          />
          <Text>Sua Senha</Text>
          <Input
            name="password"
            placeholder="123456"
            variant="border"
            
          />
        </Form>
        <Button>
          <Link label="Entrar" route="/admin" size="19px" />
        </Button>
      </Card>
    </Container>
  );
}
