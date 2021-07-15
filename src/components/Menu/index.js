import React from "react";
import logo from "../../assets/logo.png";

import Avatar from "../Avatar";
import Link from "./Link";

import { Container, Navigation, Logo, Section } from "./styles";

const links = [
  {
    to: "/",
    label: "Catálogo",
  },
  
  {
    to: "/review",
    label: "Revisão",
  },
  {
    to: "/warranty",
    label: "2ª via garantia",
  },
  {
    to: "/invoice",
    label: "2ª via nota fiscal",
  },
  
];

const Menu = () => {
  return (
    <>
      <Container>
          <Logo src={logo} />
          <Section>
        {links.map(({ to, label }) => (
            <Link key={to} to={to} label={label} className="link" />
          ))}
        </Section>
      </Container>
    </>
  );
};

export default Menu;
