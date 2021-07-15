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

const NewEmplo = () => {
  const formRef = useRef(null);
  return (
    <Container>
      <Title>Novo Funcionário</Title>
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
            <Input
              name="password"
              placeholder="(00)0 0000-0000"
              variant="border"
            />
          </Column>
        </Row>
        <Row>
          <Column>
            <Text>Função</Text>
            <Input
              name="search"
              placeholder="Vendedor"
              variant="border"
              fullWidth
            />
          </Column>
          <Column>
            <Text>Salário Base</Text>
            <Input name="password" placeholder="R$ 1.600,00" variant="border" />
          </Column>
        </Row>
        <Row>
          <Column>
            <Text>Senha</Text>
            <Input
              name="search"
              placeholder="Vendedor"
              variant="border"
              fullWidth
            />
          </Column>
          <Column>
            <Text>Confirmar Senha</Text>
            <Input name="password" placeholder="" variant="border" />
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

export default NewEmplo;
