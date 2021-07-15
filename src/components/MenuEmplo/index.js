import React from "react";
import logo from "../../assets/logo.png";

import Avatar from "../Avatar";
import Link from "./Link";

import { Container, Centralize, Logo, Section } from "./styles";

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
        <Logo src={logo} />
        <Section>
          {links.map(({ to, label }) => (
            <Link key={to} to={to} label={label} className="link" />
          ))}
          <Centralize>
            <Avatar />
          </Centralize>
        </Section>
      </Container>
    </>
  );
};

export default MenuEmplo;
