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
} from "./styles";

const CardGrid = () => {
  return (
    <Container>
      <CarIcon src={Logo} />
      <Content>
        <CarBox>
          <CarName>Onix</CarName>
          <CarDescription>Chevrolet</CarDescription>
        </CarBox>
        <CarDescription2>Seminovo, 2015</CarDescription2>
        <Price>R$71.920,00</Price>
      </Content>
    </Container>
  );
};

export default CardGrid;
