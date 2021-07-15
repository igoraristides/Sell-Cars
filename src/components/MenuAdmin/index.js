import React from "react";
import logo from "../../assets/logo.png";

import Avatar from "../Avatar";
import Link from "./Link";

import { Container, Centralize, Logo, Section } from "./styles";

const links = [
  {
    to: "/admin",
    label: "Dashboard",
  },
  {
    to: "/newcar",
    label: "Cadastrar Carro",
  },
  {
    to: "/newemplo",
    label: "Cadastrar Funcionário",
  },
  {
    to: "/pay",
    label: "Pagamento Funcionários",
  },
  {
    to: "/profit",
    label: "Lucro Mensal",
  },
];

const MenuAdmin = () => {
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

export default MenuAdmin;
