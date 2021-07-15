import React, { useRef } from "react";
import { Container, Title, Row, Text, Column, SubTitle, Content, Exit, Save, TextButton } from "./styles";
import Form from "../../../components/Form";
import Input from "../../../components/Input";
import { Link } from "react-router-dom";

const NewClient = () => {
  const formRef = useRef(null);
  return (
    <Container>
      <Title>Novo Cliente</Title>
      <SubTitle>Dados Pessoais</SubTitle>
      <Form>
        <Row>
          <Column>
            <Text>Nome</Text>
            <Input name="search" placeholder="" variant="border" fullWidth />
          </Column>
          <Column>
            <Text>Sobrenome</Text>
            <Input name="password" placeholder="" variant="border" />
          </Column>
        </Row>
        <Row>
          <Column>
            <Text>CPF</Text>
            <Input
              name="search"
              placeholder="000.000.000-00"
              variant="border"
              fullWidth
            />
          </Column>
          <Column>
            <Text>RG</Text>
            <Input name="password" placeholder="0.000.000-0" variant="border" />
          </Column>
        </Row>
        <Row>
          <Column>
            <Text>Telefone</Text>
            <Input
              name="search"
              placeholder="(00)0 0000-0000"
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
      <SubTitle>Endereço</SubTitle>
      <Form>
        <Row>
          <Column>
            <Text>CEP</Text>
            <Input name="search" placeholder="" variant="border" fullWidth />
          </Column>
        </Row>
        <Row>
          <Column>
            <Text>Rua</Text>
            <Input name="search" placeholder="" variant="border" fullWidth />
          </Column>
          <Column>
            <Text>Número</Text>
            <Input name="password" placeholder="" variant="border" />
          </Column>
        </Row>
        <Row>
          <Column>
            <Text>Complemento</Text>
            <Input name="search" placeholder="" variant="border" fullWidth />
          </Column>
          <Column>
            <Text>Bairro</Text>
            <Input name="password" placeholder="" variant="border" />
          </Column>
        </Row>
        <Row>
          <Column>
            <Text>Cidade</Text>
            <Input name="search" placeholder="" variant="border" fullWidth />
          </Column>
          <Column>
            <Text>Estado</Text>
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

export default NewClient;
