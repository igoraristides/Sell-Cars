import React from "react";
import logo from "../../assets/logo.png";

import Avatar from "../Avatar";
import { Navigation } from "../Menu/styles";
import Link from "./Link";

import { Container, Centralize, Logo, Section, Aux } from "./styles";

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
        <Navigation>
          <Logo src={logo} />
          <Aux>
            <Section>
              {links.map(({ to, label }) => (
                <Link key={to} to={to} label={label} className="link" />
              ))}
            </Section>
            <Centralize>
              <Avatar />
            </Centralize>
          </Aux>
        </Navigation>
      </Container>
    </>
  );
};

export default MenuAdmin;
<Centralize>
  <Avatar />
</Centralize>;
