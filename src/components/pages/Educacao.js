import React from "react";
import "../../App.css";
import "../Cards.css";
import CardItem from "../CardItem";
import NavSubItem from "../pages/pagesBI/NavSubItem";
import Search from '../../components/Search';
import initialDetails from '../../components/data/initialDetails';
{/* Cards de opções de submenu do indicador*/}
export default function Educacao() {
  return <>

 
<Search details={initialDetails}/>
      
      <div className="cards">
      <h1>Indicadores da Educação</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="images/docentes.png"
              text=""
              label="Docentes"
              path="/docentes"
            />
            <CardItem
              src="images/evasao.png"
              text=""
              label="Evasão Escolar"
              path="/evasaoescolar"
            />
            <CardItem
              src="images/ideb.png"
              text=""
              label="IDEB"
              path="/ideb"
            />
            <CardItem
              src="images/matriculas.png"
              text=""
              label="Matriculas"
              path="'/matriculas"
            />
            <CardItem
              src="images/raiox.png"
              text=""
              label="Raio X da Educação"
              path="/raiox"
            />
            <CardItem
              src="images/taxa.png"
              text=""
              label="Taxa de Aparovação e Reprovação"
              path="/aprovacaoereprovacao"
            />
          </ul>
          <ul className="cards__items">

          </ul>
        </div>
      </div>
    </div>
  </>;
}
