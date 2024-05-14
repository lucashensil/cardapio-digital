import { useState } from "react";
import capa from "../assets/hashtaurante.webp";
import "./App.css";
import { Navegacao } from "./navegacao";
import { itemCardapio } from "./itemCardapio";
import { pratosPrincipais, sobremesas, bebidas } from "./cardapio";




export function App() {
  const [paginaSelecionada, mudarPagina] = useState(0)
  const secoesMenu = [pratosPrincipais, sobremesas, bebidas];

  return <>
      <img className="capa" src={capa} alt="" />
      <Navegacao mudarPagina={mudarPagina}/>
      <div className="menu">
        {secoesMenu[paginaSelecionada].map(itemCardapio)}
      </div>
    </>
  
}
