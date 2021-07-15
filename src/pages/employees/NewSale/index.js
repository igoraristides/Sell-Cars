import React, { useRef } from "react";
import { Container, Title, Row, Text, Column, SubTitle, Content, Exit, Save, TextButton, Search } from "./styles";
import Form from "../../../components/Form";
import Input from "../../../components/Input";
import { Link } from "react-router-dom";

const NewSale = () => {
  const formRef = useRef(null);
  return (
    <Container>
      <Title>Nova Venda</Title>
      <SubTitle>Consultar Cliente</SubTitle>
      <Form>
        <Row>
          <Column>
            <Text>CPF</Text>
            <Input name="search" placeholder="" variant="border" fullWidth />
          </Column>
        </Row>
        <Content>
          <Search>
            <TextButton>Consultar</TextButton>
          </Search>
        </Content>
        <SubTitle>Dados Pessoais</SubTitle>
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
      <Column>
        <Link to={`/emplo`}>
        <Content>
          <Save>
            <TextButton>Salvar</TextButton>
          </Save>
        </Content>
        </Link>
        <Link to={`/emplo`}>
        <Content>
          <Exit>
            <TextButton>Cancelar</TextButton>
          </Exit>
        </Content>
        </Link>
        </Column>
    </Container>
  );
};

export default NewSale;
