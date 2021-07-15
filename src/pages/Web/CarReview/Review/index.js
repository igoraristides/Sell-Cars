import React from "react";
import { Link } from "react-router-dom";
import {
  Container,
  Content,
  Title,
  Datasheet,
  Content2,
  Text,
  Text2,
  Box,
  Box2,
  Exit,
  TextButton,
} from "./styles";

const Review = () => {
  return (
    <Container>
      <Content2>
        <Title>Revisão</Title>
        <Datasheet>
          <Box2>
            <Text>Código Cliente</Text>
          </Box2>
          <Box>
            <Text2>A485DFSD589</Text2>
          </Box>
        </Datasheet>
        <Datasheet>
          <Box2>
            <Text>Data da Compra</Text>
          </Box2>
          <Box>
            <Text2>20/06/2021</Text2>
          </Box>
        </Datasheet>
        <Datasheet>
          <Box2>
            <Text> 1ª Revisão</Text>
          </Box2>
          <Box>
            <Text2>20/12/2021</Text2>
          </Box>
        </Datasheet>
        <Datasheet>
          <Box2>
            <Text>Troca de Óleo</Text>
          </Box2>
          <Box>
            <Text2>20/06/2022 | 10.000 KM</Text2>
          </Box>
        </Datasheet>
        <Datasheet>
          <Box2>
            <Text>2ª Revisão</Text>
          </Box2>
          <Box>
            <Text2>20/06/2022</Text2>
          </Box>
        </Datasheet>
      </Content2>
      <Link to={`/`}>
        <Content>
          <Exit>
            <TextButton>Sair</TextButton>
          </Exit>
        </Content>
      </Link>
    </Container>
  );
};

export default Review;
