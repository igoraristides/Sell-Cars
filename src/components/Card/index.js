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
} from "./styles";

const CardGrid = (data) => {
  console.log(data);
  return (
    <Container>
      <CarIcon src={Logo} />
      <Content>
        <CarBox>
          <CarName>{data.data.nomeCarro}</CarName>
          <CarDescription>{data.data.marca}</CarDescription>
        </CarBox>
        <CarDescription2>
          {data.data.situacao}, {data.data.ano}
        </CarDescription2>
        <Price>R${data.data.preco}</Price>
      </Content>
    </Container>
  );
};

export default CardGrid;
