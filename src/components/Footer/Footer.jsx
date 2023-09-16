import React from "react";
import "./Footer.css";
import {BsWhatsapp} from "react-icons/bs"
import {AiOutlineInstagram} from "react-icons/ai"

function Footer() {
  return (
    
      <div className="Footer">
        <div className="Horarios">
      <h2>Horarios</h2>
      <p>Terça a Sábado: 9h30 às 19h00</p>
      <p>Fechado (Segunda e Domingo)</p>
        </div>

      <div className="contato">
      <h2>Contato</h2>
      <a href="https://wa.me/5519997643065" target="_blank"><BsWhatsapp className="icon"/></a>
      <a href="https://www.instagram.com/deliciadivinaa/" target="_blank"><AiOutlineInstagram className="icon"/></a>

      </div>
     
     <div className="navegacao">
      <h2>Navegação</h2>
      <a href="#home"><p>Home</p></a>
      <a href="#products"><p>Produtos</p></a>
      <a href="#Contato"><p>Contato</p></a>
      <a href="#localização"><p>Localização</p></a>
     </div>
      </div>
    
  );
}

export default Footer;
