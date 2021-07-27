import React from "react";
import Logo from "../../assets/default.jpg";

import {
  Container,
  Content,
  CarIcon,
  CarBox,
  CarName,
  CarDescription2,
  CarDescription,
  Price,
  Title,
  Datasheet,
  Content2,
  Text,
  Text2,
  Box,
  Box2,
  Row,
} from "./styles";

const CardCar = (data) => {
  return (
    <Container>
      <Content>
        <CarIcon src={Logo} />
        <CarBox>
          <CarName>{data.data.nomeCarro}</CarName>
          <CarDescription>
            {data.data.situacao}, {data.data.ano}
          </CarDescription>
          <CarDescription2></CarDescription2>
          <Price>R$ {data.data.preco}</Price>
        </CarBox>
      </Content>
      <Row>
        <Content2>
          <Title>Ficha Técnica</Title>
          <Datasheet>
            <Box2>
              <Text>Ano</Text>
            </Box2>
            <Box>
              <Text2>{data.data.ano}</Text2>
            </Box>
          </Datasheet>
          <Datasheet>
            <Box2>
              <Text>Preço</Text>
            </Box2>
            <Box>
              <Text2>R$ {data.data.preco}</Text2>
            </Box>
          </Datasheet>
          <Datasheet>
            <Box2>
              <Text>Combustível</Text>
            </Box2>
            <Box>
              <Text2>{data.data.combustivel}</Text2>
            </Box>
          </Datasheet>
          <Datasheet>
            <Box2>
              <Text>Marca</Text>
            </Box2>
            <Box>
              <Text2>{data.data.marca}</Text2>
            </Box>
          </Datasheet>
          <Datasheet>
            <Box2>
              <Text>Garantia</Text>
            </Box2>
            <Box>
              <Text2>{data.data.garantia} anos</Text2>
            </Box>
          </Datasheet>
          <Datasheet>
            <Box2>
              <Text>Lugares</Text>
            </Box2>
            <Box>
              <Text2>{data.data.lugares}</Text2>
            </Box>
          </Datasheet>
          <Datasheet>
            <Box2>
              <Text>Câmbio</Text>
            </Box2>
            <Box>
              <Text2>{data.data.cambio}</Text2>
            </Box>
          </Datasheet>
          <Datasheet>
            <Box2>
              <Text>Situação</Text>
            </Box2>
            <Box>
              <Text2>{data.data.situacao}</Text2>
            </Box>
          </Datasheet>
          <Datasheet>
            <Box2>
              <Text>Consumo</Text>
            </Box2>
            <Box>
              <Text2>{data.data.consumo} KM/L (urbano)</Text2>
            </Box>
          </Datasheet>
        </Content2>
        <Content2>
          <Title>Equipamentos</Title>
          <Datasheet>
            <Box2>
              <Text>Freios ABS</Text>
            </Box2>
            <Box>
              <Text2>{data.data.freioABS}</Text2>
            </Box>
          </Datasheet>
          <Datasheet>
            <Box2>
              <Text>AirBags</Text>
            </Box2>
            <Box>
              <Text2>{data.data.airbags}</Text2>
            </Box>
          </Datasheet>
          <Datasheet>
            <Box2>
              <Text>Faróis de Neblina</Text>
            </Box2>
            <Box>
              <Text2>{data.data.faroisDeNeblina}</Text2>
            </Box>
          </Datasheet>
          <Datasheet>
            <Box2>
              <Text>Ar-Condicionado</Text>
            </Box2>
            <Box>
              <Text2>{data.data.arCondicionado}</Text2>
            </Box>
          </Datasheet>
          <Datasheet>
            <Box2>
              <Text>Kit-Multimídia</Text>
            </Box2>
            <Box>
              <Text2>{data.data.kitMultimidia}</Text2>
            </Box>
          </Datasheet>
          <Datasheet>
            <Box2>
              <Text>Retrovisores Elétricos</Text>
            </Box2>
            <Box>
              <Text2>{data.data.retrovisoresEletricos}</Text2>
            </Box>
          </Datasheet>
          <Datasheet>
            <Box2>
              <Text>Vidros elétricos</Text>
            </Box2>
            <Box>
              <Text2>{data.data.vidrosEletricos}</Text2>
            </Box>
          </Datasheet>
          <Datasheet>
            <Box2>
              <Text>Volante Multifuncional</Text>
            </Box2>
            <Box>
              <Text2>{data.data.volanteMultifuncional}</Text2>
            </Box>
          </Datasheet>
          <Datasheet>
            <Box2>
              <Text>Controle de Estabilidade</Text>
            </Box2>
            <Box>
              <Text2>{data.data.controleDeEstabilidade}</Text2>
            </Box>
          </Datasheet>
        </Content2>
      </Row>
    </Container>
  );
};

export default CardCar;
