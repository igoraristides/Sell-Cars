import React, { useRef, useState } from "react";
import Button from "../../../components/Button";
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
import { Link, useHistory } from "react-router-dom";
import api from "../../../services/api";

//Cadastrar Cliente
const NewClient = () => {
  const [nome, setNome] = useState("");
  const [sobrenome, setSobrenome] = useState("");
  const [cpf, setCpf] = useState("");
  const [rg, setRg] = useState("");
  const [telefone, setTelefone] = useState("");
  const [celular, setCelular] = useState("");
  const [cep, setCep] = useState("");
  const [numero, setNumero] = useState("");
  const [rua, setRua] = useState("");
  const [complemento, setComplemento] = useState("");
  const [bairro, setBairro] = useState("");
  const [cidade, setCidade] = useState("");
  const [estado, setEstado] = useState("");

  const history = useHistory();

  function handleRegister() {
    const data = {
      cep,
      numero,
      rua,
      complemento,
      bairro,
      cidade,
      estado,
      nome,
      sobrenome,
      cpf,
      rg,
      telefone,
      celular,
    };

    api.post("client", data);
    alert("Cadastro realizado com sucesso");
    history.push("/emplo");
  }

  const formRef = useRef(null);
  return (
    <Container>
      <Title>Novo Cliente</Title>
      <SubTitle>Dados Pessoais</SubTitle>
      <Form onSubmit={handleRegister}>
        <Row>
          <Column>
            <Text>Nome</Text>
            <Input
              name="nome"
              placeholder=""
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              variant="border"
              fullWidth
            />
          </Column>
          <Column>
            <Text>Sobrenome</Text>
            <Input
              name="sobrenome"
              placeholder=""
              variant="border"
              value={sobrenome}
              onChange={(e) => setSobrenome(e.target.value)}
            />
          </Column>
        </Row>
        <Row>
          <Column>
            <Text>CPF</Text>
            <Input
              name="cpf"
              placeholder="000.000.000-00"
              value={cpf}
              onChange={(e) => setCpf(e.target.value)}
              variant="border"
              fullWidth
            />
          </Column>
          <Column>
            <Text>RG</Text>
            <Input
              name="rg"
              placeholder="0.000.000-0"
              value={rg}
              onChange={(e) => setRg(e.target.value)}
              variant="border"
            />
          </Column>
        </Row>
        <Row>
          <Column>
            <Text>Telefone</Text>
            <Input
              name="telefone"
              placeholder="(00)0 0000-0000"
              value={telefone}
              onChange={(e) => setTelefone(e.target.value)}
              variant="border"
              fullWidth
            />
          </Column>
          <Column>
            <Text>Celular</Text>
            <Input
              name="celular"
              placeholder="123456"
              value={celular}
              onChange={(e) => setCelular(e.target.value)}
              variant="border"
            />
          </Column>
        </Row>
        <SubTitle>Endereço</SubTitle>
        <Row>
          <Column>
            <Text>CEP</Text>
            <Input
              name="cep"
              placeholder=""
              variant="border"
              fullWidth
              value={cep}
              onChange={(e) => setCep(e.target.value)}
            />
          </Column>
        </Row>
        <Row>
          <Column>
            <Text>Rua</Text>
            <Input
              name="rua"
              placeholder=""
              variant="border"
              fullWidth
              value={rua}
              onChange={(e) => setRua(e.target.value)}
            />
          </Column>
          <Column>
            <Text>Número</Text>
            <Input
              name="numero"
              placeholder=""
              variant="border"
              value={numero}
              onChange={(e) => setNumero(e.target.value)}
            />
          </Column>
        </Row>
        <Row>
          <Column>
            <Text>Complemento</Text>
            <Input
              name="complemento"
              placeholder=""
              variant="border"
              value={complemento}
              onChange={(e) => setComplemento(e.target.value)}
              fullWidth
            />
          </Column>
          <Column>
            <Text>Bairro</Text>
            <Input
              name="bairro"
              placeholder=""
              variant="border"
              value={bairro}
              onChange={(e) => setBairro(e.target.value)}
            />
          </Column>
        </Row>
        <Row>
          <Column>
            <Text>Cidade</Text>
            <Input
              name="cidade"
              placeholder=""
              variant="border"
              fullWidth
              value={cidade}
              onChange={(e) => setCidade(e.target.value)}
            />
          </Column>
          <Column>
            <Text>Estado</Text>
            <Input
              name="estado"
              placeholder=""
              variant="border"
              value={estado}
              onChange={(e) => setEstado(e.target.value)}
            />
          </Column>
        </Row>
        <Column>
          <Content>
            <Save type="submit">Salvar</Save>
          </Content>
          <Link to={`/emplo`}>
            <Content>
              <Exit>Cancelar</Exit>
            </Content>
          </Link>
        </Column>
      </Form>
    </Container>
  );
};

export default NewClient;
