import React from "react";
import logo from "../../assets/logo.png";

import Avatar from "../Avatar";
import { Navigation } from "../Menu/styles";
import Link from "./Link";

import { Container, Centralize, Logo, Section, Aux } from "./styles";

const links = [
  {
    to: "/emplo",
    label: "Dashboard",
  },
  {
    to: "/newclient",
    label: "Cadastrar Cliente",
  },
  {
    to: "/newsale",
    label: "Registrar Venda",
  },
  {
    to: "/exert",
    label: "Exercer Garantia",
  },
];

const MenuEmplo = () => {
  return (
    <>
      <Container>
        <Navigation>
          <Logo src={logo} />
          <Aux>
            <Section>
              {links.map(({ to, label }) => (
                <Link key={to} to={to} label={label} className="link" />
              ))}
              <Centralize>
                <Avatar />
              </Centralize>
            </Section>
          </Aux>
        </Navigation>
      </Container>
    </>
  );
};

export default MenuEmplo;
