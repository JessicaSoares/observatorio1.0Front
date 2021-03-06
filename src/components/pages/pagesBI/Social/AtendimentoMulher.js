import "../graphs.css";
import { Container, Row, Col } from "react-grid-system";
import "../BoxLegend.css";
import React, { useState, useEffect } from "react";
import GraphItem from "../GraphItem";
import Search from '../../../../components/Search';
import TextSectionItem from "../TextSectionItem";
import NavSocial from "./NavSocial";
import ListarPaineis from '../../../ListarPaineis';
import initialDetails from '../../../data/initialDetails';

export default function Educacao() {

  return (
    <>
   
      
      <TextSectionItem
      titlesection = "Educação Municipal de Parauapebas"
      textsection = "O sistema educativo é o conjunto de meios pelo qual se concretiza o direito à educação. O sistema educativo desenvolve-se através de um conjunto organizado de estruturas e de ações diversificadas, por iniciativa e sob a responsabilidade de diferentes instituições e entidades, públicas e privadas. Os dados dos gráficos abaixo foram coletados da FONTE: INEP e SEMED"
      />
     <section class="page-section-sub-boxlegend " id="about">
        <Container>
       
       <ListarPaineis details={initialDetails} props ="AtendimentoMulher" />
        </Container>
      </section>
    </>
  );
}