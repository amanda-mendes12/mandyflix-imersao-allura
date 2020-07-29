import React from "react";
import Logo from "../../assets/mandylogo.png";
import "./Menu.css";
import Button from "../ButtonLink";

function Menu() {
  return (
    <nav className="Menu">
      <a href="/">
        <img className="Logo" src={Logo} alt="MandyFlix logo" />
      </a>
      <Button as="a" href="/" className="ButtonLink">
        {" "}
        Novo vídeo{" "}
      </Button>
    </nav>
  );
}

export default Menu;
