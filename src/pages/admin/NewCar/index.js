import React, { useRef } from "react";
import {
  Container,
  Title,
  Row,
  Text,
  Column,
  SubTitle,
  Content,
  Exit,
  Save,
  TextButton,
} from "./styles";
import Form from "../../../components/Form";
import Input from "../../../components/Input";
import { Link } from "react-router-dom";

const NewCar = () => {
  const formRef = useRef(null);
  return (
    <Container>
      <Title>Novo Carro</Title>
      <SubTitle>Ficha Técnica</SubTitle>
      <Form>
        <Row>
          <Column>
            <Text>Nome</Text>
            <Input name="search" placeholder="" variant="border" fullWidth />
          </Column>
          <Column>
            <Text>Ano</Text>
            <Input name="password" placeholder="" variant="border" />
          </Column>
        </Row>
        <Row>
          <Column>
            <Text>Preço</Text>
            <Input name="search" placeholder="" variant="border" fullWidth />
          </Column>
          <Column>
            <Text>Combustível</Text>
            <Input name="password" placeholder="" variant="border" />
          </Column>
        </Row>
        <Row>
          <Column>
            <Text>Marca</Text>
            <Input name="search" placeholder="" variant="border" fullWidth />
          </Column>
          <Column>
            <Text>Garantia</Text>
            <Input name="password" placeholder="" variant="border" />
          </Column>
        </Row>
        <Row>
          <Column>
            <Text>Lugares</Text>
            <Input name="search" placeholder="" variant="border" fullWidth />
          </Column>
          <Column>
            <Text>Cãmbio</Text>
            <Input name="password" placeholder="" variant="border" />
          </Column>
        </Row>{" "}
        <Row>
          <Column>
            <Text>Situação</Text>
            <Input name="search" placeholder="" variant="border" fullWidth />
          </Column>
          <Column>
            <Text>Consumo</Text>
            <Input name="password" placeholder="" variant="border" />
          </Column>
        </Row>
      </Form>
      <SubTitle>Equipamentos</SubTitle>
      <Form>
        <Row>
          <Column>
            <Text>Freios ABS</Text>
            <Input name="search" placeholder="" variant="border" fullWidth />
          </Column>
          <Column>
            <Text>AirBags</Text>
            <Input name="password" placeholder="" variant="border" />
          </Column>
        </Row>
        <Row>
          <Column>
            <Text>Faróis de Neblina</Text>
            <Input name="search" placeholder="" variant="border" fullWidth />
          </Column>
          <Column>
            <Text>Ar-condicionado</Text>
            <Input name="password" placeholder="" variant="border" />
          </Column>
        </Row>
        <Row>
          <Column>
            <Text>Kit-Multimídia</Text>
            <Input name="search" placeholder="" variant="border" fullWidth />
          </Column>
          <Column>
            <Text>Retrovisores elétricos</Text>
            <Input name="password" placeholder="" variant="border" />
          </Column>
        </Row>
        <Row>
          <Column>
            <Text>Vidros elétricos</Text>
            <Input name="search" placeholder="" variant="border" fullWidth />
          </Column>
          <Column>
            <Text>Volante multifuncional</Text>
            <Input name="password" placeholder="" variant="border" />
          </Column>
        </Row>{" "}
        <Row>
          <Column>
            <Text>Controle de Estabilidade</Text>
            <Input name="search" placeholder="" variant="border" fullWidth />
          </Column>
        </Row>
      </Form>
      <Column>
        <Link to={`/admin`}>
          <Content>
            <Save>
              <TextButton>Salvar</TextButton>
            </Save>
          </Content>
        </Link>
        <Link to={`/admin`}>
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

export default NewCar;
