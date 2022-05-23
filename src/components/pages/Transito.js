import React from "react";
import "../../App.css";
import "../Cards.css";
import CardItem from "../CardItem";
import NavSubItem from "../pages/pagesBI/NavSubItem";
import Search from '../../components/Search';
import initialDetails from '../../components/data/initialDetails';
{/* Cards de opções de submenu do indicador*/}
export default function Transito() {
  return (
      <>
          <Search details={initialDetails}/> {/* Componente de filtro de busca */}
          <div className="cards">
          <h1>Indicadores de Trânsito</h1>
          <div className="cards__container">
            <div className="cards__wrapper">
              <ul className="cards__items">
                 {/* Componente de card que recebe o link do ícone, label e link de redirecionamento */}
                <CardItem 
                src="https://img.icons8.com/dotty/80//4a90e2/traffic-light.png"
                  text=""
                  label="Trânsito"
                  path="/transitocard"
                />
              </ul>
              <ul className="cards__items">
              </ul>
            </div>
          </div>
        </div>
        </>
  );
}
