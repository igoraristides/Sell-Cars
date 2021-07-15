import React from "react";
import Logo from "../../assets/onix.jpg";

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

const CardCar = () => {
  return (
    <Container>
      <Content>
        <CarIcon src={Logo} />
        <CarBox>
          <CarName>Onix</CarName>
          <CarDescription>Novo, 2022</CarDescription>
          <CarDescription2>
            Conecte-se ao Onix, o seu próximo hatch Você vai ter todos os
            motivos para querer o Onix na sua garagem. Além da exclusiva
            tecnologia com Wi-Fi nativo, MyLink de 8” e Easy Park, o Onix também
            conta com as novidades carregador e projeção sem fio, que vai
            permitir que você abandone os cabos na hora de conectar o seu
            smartphone ao MyLink do carro.
          </CarDescription2>
          <Price>R$ 71.920,00</Price>
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
            <Text2>2022</Text2>
          </Box>
        </Datasheet>
        <Datasheet>
          <Box2>
            <Text>Preço</Text>
          </Box2>
          <Box>
            <Text2>R$ 71.920,00</Text2>
          </Box>
        </Datasheet>
        <Datasheet>
          <Box2>
            <Text>Combustível</Text>
          </Box2>
          <Box>
            <Text2>Flex</Text2>
          </Box>
        </Datasheet>
        <Datasheet>
          <Box2>
            <Text>Marca</Text>
          </Box2>
          <Box>
            <Text2>Chevrolet</Text2>
          </Box>
        </Datasheet>
        <Datasheet>
          <Box2>
            <Text>Garantia</Text>
          </Box2>
          <Box>
            <Text2>3 anos</Text2>
          </Box>
        </Datasheet>
        <Datasheet>
          <Box2>
            <Text>Lugares</Text>
          </Box2>
          <Box>
            <Text2>5</Text2>
          </Box>
        </Datasheet>
        <Datasheet>
          <Box2>
            <Text>Câmbio</Text>
          </Box2>
          <Box>
            <Text2>Automático</Text2>
          </Box>
        </Datasheet>
        <Datasheet>
          <Box2>
            <Text>Situação</Text>
          </Box2>
          <Box>
            <Text2>Novo (0 KM)</Text2>
          </Box>
        </Datasheet>
        <Datasheet>
          <Box2>
            <Text>Consumo</Text>
          </Box2>
          <Box>
            <Text2>9,4 KM/L (urbano)</Text2>
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
            <Text2>Sim</Text2>
          </Box>
        </Datasheet>
        <Datasheet>
          <Box2>
            <Text>AirBags</Text>
          </Box2>
          <Box>
            <Text2>Sim</Text2>
          </Box>
        </Datasheet>
        <Datasheet>
          <Box2>
            <Text>Faróis de Neblina</Text>
          </Box2>
          <Box>
            <Text2>Sim</Text2>
          </Box>
        </Datasheet>
        <Datasheet>
          <Box2>
            <Text>Ar-Condicionado</Text>
          </Box2>
          <Box>
            <Text2>Sim</Text2>
          </Box>
        </Datasheet>
        <Datasheet>
          <Box2>
            <Text>Kit-Multimídia</Text>
          </Box2>
          <Box>
            <Text2>Sim</Text2>
          </Box>
        </Datasheet>
        <Datasheet>
          <Box2>
            <Text>Retrovisores Elétricos</Text>
          </Box2>
          <Box>
            <Text2>Sim</Text2>
          </Box>
        </Datasheet>
        <Datasheet>
          <Box2>
            <Text>Vidros elétricos</Text>
          </Box2>
          <Box>
            <Text2>Sim (4 portas)</Text2>
          </Box>
        </Datasheet>
        <Datasheet>
          <Box2>
            <Text>Volante Multifuncional</Text>
          </Box2>
          <Box>
            <Text2>Sim</Text2>
          </Box>
        </Datasheet>
        <Datasheet>
          <Box2>
            <Text>Controle de Estabilidade</Text>
          </Box2>
          <Box>
            <Text2>Sim</Text2>
          </Box>
        </Datasheet>
      </Content2>
      </Row>
    </Container>
  );
};

export default CardCar;
