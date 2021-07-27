import React, { useRef, useState } from "react";
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

//CadastrarCarro
const NewCar = () => {
  const [nome, setNome] = useState("");
  const [ano, setAno] = useState("");
  const [preco, setPreco] = useState("");
  const [combustivel, setCombustivel] = useState("");
  const [marca, setMarca] = useState("");
  const [garantia, setGarantia] = useState("");
  const [lugares, setLugares] = useState("");
  const [cambio, setCambio] = useState("");
  const [situacao, setSituacao] = useState("");
  const [consumo, setConsumo] = useState("");
  const [estoque, setEstoque] = useState("");
  const [freioABS, setFreioABS] = useState("");
  const [airbags, setAirbags] = useState("");
  const [faroisDeNeblina, setFaroisDeNeblina] = useState("");
  const [arCondicionado, setArCondicionado] = useState("");
  const [kitMultimidia, setKitMultimidia] = useState("");
  const [retrovisoresEletricos, setRetrovisoresEletricos] = useState("");
  const [vidrosEletricos, setVidrosEletricos] = useState("");
  const [volanteMultifuncional, setVolanteMultifuncional] = useState("");
  const [controleDeEstabilidade, setControleDeEstabilidade] = useState("");

  const history = useHistory();

  function handleRegister() {
    const data = {
      nome,
      ano,
      preco,
      combustivel,
      marca,
      garantia,
      lugares,
      cambio,
      situacao,
      consumo,
      estoque,
      freioABS,
      airbags,
      faroisDeNeblina,
      arCondicionado,
      kitMultimidia,
      retrovisoresEletricos,
      vidrosEletricos,
      volanteMultifuncional,
      controleDeEstabilidade,
    };

    api.post("car", data);
    history.push("/admin");
  }

  const formRef = useRef(null);
  return (
    <Container>
      <Title>Novo Carro</Title>
      <SubTitle>Ficha Técnica</SubTitle>
      <Form onSubmit={handleRegister}>
        <Row>
          <Column>
            <Text>Nome</Text>
            <Input
              name="nome"
              placeholder=""
              variant="border"
              fullWidth
              value={nome}
              onChange={(e) => setNome(e.target.value)}
            />
          </Column>
          <Column>
            <Text>Ano</Text>
            <Input
              name="ano"
              placeholder=""
              variant="border"
              value={ano}
              onChange={(e) => setAno(e.target.value)}
            />
          </Column>
        </Row>
        <Row>
          <Column>
            <Text>Preço</Text>
            <Input
              name="preco"
              placeholder=""
              variant="border"
              fullWidth
              value={preco}
              onChange={(e) => setPreco(e.target.value)}
            />
          </Column>
          <Column>
            <Text>Combustível</Text>
            <Input
              name="combustivel"
              placeholder=""
              variant="border"
              value={combustivel}
              onChange={(e) => setCombustivel(e.target.value)}
            />
          </Column>
        </Row>
        <Row>
          <Column>
            <Text>Marca</Text>
            <Input
              name="marca"
              placeholder=""
              variant="border"
              fullWidth
              value={marca}
              onChange={(e) => setMarca(e.target.value)}
            />
          </Column>
          <Column>
            <Text>Garantia</Text>
            <Input
              name="garantia"
              placeholder=""
              variant="border"
              value={garantia}
              onChange={(e) => setGarantia(e.target.value)}
            />
          </Column>
        </Row>
        <Row>
          <Column>
            <Text>Lugares</Text>
            <Input
              name="lugares"
              placeholder=""
              variant="border"
              fullWidth
              value={lugares}
              onChange={(e) => setLugares(e.target.value)}
            />
          </Column>
          <Column>
            <Text>Cãmbio</Text>
            <Input
              name="cambio"
              placeholder=""
              variant="border"
              value={cambio}
              onChange={(e) => setCambio(e.target.value)}
            />
          </Column>
        </Row>{" "}
        <Row>
          <Column>
            <Text>Situação</Text>
            <Input
              name="situacao"
              placeholder=""
              variant="border"
              fullWidth
              value={situacao}
              onChange={(e) => setSituacao(e.target.value)}
            />
          </Column>
          <Column>
            <Text>Consumo</Text>
            <Input
              name="consumo"
              placeholder=""
              variant="border"
              value={consumo}
              onChange={(e) => setConsumo(e.target.value)}
            />
          </Column>
        </Row>
        <Row>
          <Column>
            <Text>Estoque</Text>
            <Input
              name="estoque"
              placeholder=""
              variant="border"
              fullWidth
              value={estoque}
              onChange={(e) => setEstoque(e.target.value)}
            />
          </Column>
        </Row>
        <SubTitle>Equipamentos</SubTitle>
        <Row>
          <Column>
            <Text>Freios ABS</Text>
            <Input
              name="freiosABS"
              placeholder=""
              variant="border"
              fullWidth
              value={freioABS}
              onChange={(e) => setFreioABS(e.target.value)}
            />
          </Column>
          <Column>
            <Text>AirBags</Text>
            <Input
              name="airbags"
              placeholder=""
              variant="border"
              value={airbags}
              onChange={(e) => setAirbags(e.target.value)}
            />
          </Column>
        </Row>
        <Row>
          <Column>
            <Text>Faróis de Neblina</Text>
            <Input
              name="faroisDeNeblina"
              placeholder=""
              variant="border"
              fullWidth
              value={faroisDeNeblina}
              onChange={(e) => setFaroisDeNeblina(e.target.value)}
            />
          </Column>
          <Column>
            <Text>Ar-condicionado</Text>
            <Input
              name="arCondicionado"
              placeholder=""
              variant="border"
              value={arCondicionado}
              onChange={(e) => setArCondicionado(e.target.value)}
            />
          </Column>
        </Row>
        <Row>
          <Column>
            <Text>Kit-Multimídia</Text>
            <Input
              name="kitMultimidia"
              placeholder=""
              variant="border"
              fullWidth
              value={kitMultimidia}
              onChange={(e) => setKitMultimidia(e.target.value)}
            />
          </Column>
          <Column>
            <Text>Retrovisores elétricos</Text>
            <Input
              name="retrovisoresEletricos"
              placeholder=""
              variant="border"
              value={retrovisoresEletricos}
              onChange={(e) => setRetrovisoresEletricos(e.target.value)}
            />
          </Column>
        </Row>
        <Row>
          <Column>
            <Text>Vidros elétricos</Text>
            <Input
              name="vidrosEletricos"
              placeholder=""
              variant="border"
              fullWidth
              value={vidrosEletricos}
              onChange={(e) => setVidrosEletricos(e.target.value)}
            />
          </Column>
          <Column>
            <Text>Volante multifuncional</Text>
            <Input
              name="volanteMultifuncional"
              placeholder=""
              variant="border"
              value={volanteMultifuncional}
              onChange={(e) => setVolanteMultifuncional(e.target.value)}
            />
          </Column>
        </Row>{" "}
        <Row>
          <Column>
            <Text>Controle de Estabilidade</Text>
            <Input
              name="controleDeEstabilidade"
              placeholder=""
              variant="border"
              fullWidth
              value={controleDeEstabilidade}
              onChange={(e) => setControleDeEstabilidade(e.target.value)}
            />
          </Column>
        </Row>
        <Column>
          <Content>
            <Save type="submit">Salvar</Save>
          </Content>
          <Link to={`/admin`}>
            <Content>
              <Exit>Cancelar</Exit>
            </Content>
          </Link>
        </Column>
      </Form>
    </Container>
  );
};

export default NewCar;
