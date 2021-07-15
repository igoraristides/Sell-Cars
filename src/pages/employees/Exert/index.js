import React, { useRef } from "react";
import { Container, Title, Row, Text, Column, SubTitle, Content, TextButton, Search, Troca } from "./styles";
import Form from "../../../components/Form";
import Input from "../../../components/Input";
import { Link } from "react-router-dom";

const Exert = () => {
  const formRef = useRef(null);
  return (
    <Container>
      <Title>Exercer Garantia</Title>
      <SubTitle>Consultar Venda</SubTitle>
      <Form>
        <Row>
          <Column>
            <Text>Nº da Venda</Text>
            <Input name="search" placeholder="" variant="border" fullWidth />
          </Column>
        </Row>
        <Content>
          <Search>
            <TextButton>Consultar</TextButton>
          </Search>
        </Content>
      </Form>
      <SubTitle>Dados da Venda</SubTitle>
      <Form>
        <Row>
          <Column>
            <Text>Código Vendedor</Text>
            <Input name="search" placeholder="" variant="border" fullWidth />
          </Column>
        </Row>
        <Row>
          <Column>
            <Text>Código do Automóvel</Text>
            <Input name="search" placeholder="" variant="border" fullWidth />
          </Column>
          <Column>
            <Text>Nome do Automóvel</Text>
            <Input name="password" placeholder="" variant="border" />
          </Column>
        </Row>
        <Row>
          <Column>
            <Text>Valor</Text>
            <Input name="search" placeholder="" variant="border" fullWidth />
          </Column>
          <Column>
            <Text>Método de Pagamento</Text>
            <Input name="password" placeholder="" variant="border" />
          </Column>
        </Row>
      </Form>
      <Form>
      <SubTitle>Dados Comprador</SubTitle>
        <Row>
          <Column>
            <Text>Nome</Text>
            <Input
              name="search"
              placeholder=""
              variant="border"
              fullWidth
            />
          </Column>
          <Column>
            <Text>Sobrenome</Text>
            <Input name="password" placeholder="" variant="border" />
          </Column>
        </Row>
        <Row>
          <Column>
            <Text>RG</Text>
            <Input
              name="search"
              placeholder="0.000.000-0"
              variant="border"
              fullWidth
            />
          </Column>
          <Column>
            <Text>Celular</Text>
            <Input name="password" placeholder="123456" variant="border" />
          </Column>
        </Row>
        </Form>
      <Row>
        <Link to={`/emplo`}>
        <Content>
          <Troca>
            <TextButton>Conserto</TextButton>
          </Troca>
        </Content>
        </Link>
        <Link to={`/emplo`}>
        <Content>
          <Troca>
            <TextButton>Trocar</TextButton>
          </Troca>
        </Content>
        </Link>
        <Link to={`/emplo`}>
        <Content>
          <Troca>
            <TextButton>Devolução do Dinheiro</TextButton>
          </Troca>
        </Content>
        </Link>
        </Row>
    </Container>
  );
};

export default Exert;
