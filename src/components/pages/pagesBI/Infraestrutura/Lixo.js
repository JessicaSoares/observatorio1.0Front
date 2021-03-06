import "../graphs.css";
import { Container, Row, Col } from "react-grid-system";
import "../BoxLegend.css";
import React, {Component } from "react";
import TextSectionItem from "../TextSectionItem";
import NavInfraestrutura from "./NavInfraestrutura";
import Search from '../../../../components/Search';
import ListarPaineis from '../../../ListarPaineis';
import initialDetails from '../../../data/initialDetails';
import ModalDownload from '../ModalDownload';
import PortalDataService from "../../../services/portal.service";

export default class TutorialsList extends Component {
  constructor(props) {
    super(props);
    
    this.downloadlixo = this.downloadlixo.bind(this);


    this.state = {
      tutorials: [],
      currentTutorial: null,
      currentIndex: -1,
      searchTitle: ""
    };
  }
  
  componentDidMount() {
    this.recuperarDados();
  }

  onChangeSearchTitle(e) {
    const searchTitle = e.target.value;

    this.setState({
      searchTitle: searchTitle
    });
  }

  recuperarDados() {
    PortalDataService.getAll()
      .then(response => {
        this.setState({
          tutorials: response.data
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

  atualizarLista() {
    this.recuperarDados();
    this.setState({
      currentTutorial: null,
      currentIndex: -1
    });
  }


  downloadlixo() {
    PortalDataService.downloadlixo()
    .then(response => {

      const linhas = response.data; // Linhas reccebe os dados do JSON
      console.log(response.data); // Mostra no console os dados do JSON
      let csvContent = "data:text/csv;charset=utf-8," // Monta os dados capturados para download
        + linhas;
      var encodedUri = encodeURI(csvContent); 
      var link = document.createElement("a");
      link.setAttribute("href", encodedUri);
      link.setAttribute("download", "lixo.csv");
      document.body.appendChild(link);
      link.click();
      this.atualizarLista();
    })
    .catch(e => {
      console.log(e);
    });
}
  render() {

    const { searchTitle, tutorials, currentTutorial, currentIndex } = this.state;
    const lixo=()=>{
      return this.downloadlixo // Chama a fun????o de download dos dados download 
    }
  
    return (
     
    <>
    
<Search details={initialDetails}/> {/* M??dulo de busca com filtro*/}
<Container>
  <Row>

       <Col sm={8}>
         <NavInfraestrutura/>{/* M??dulo que tr??s o submenu*/}
         </Col>
         </Row>
</Container>
       <br/> <br/>
     <TextSectionItem
      titlesection = "Coleta de Res??duos S??lidos - Parauapebas e Regi??o"
      textsection = "Res??duos s??lidos, segundo a Pol??tica Nacional de Res??duos S??lidos, s??o definidos como sendo todo material, subst??ncia, objeto ou bem descartado resultante de atividades humanas em sociedade. O Of??cio n?? 523/2021 de 12 de maio de 2021, institui a Pol??tica Municipal de Gest??o Integrada de Res??duos S??lidos de Parauapebas, que constitui instrumento da gest??o municipal de res??duos s??lidos, em conson??ncia com o Plano Nacional de Res??duos S??lidos e o Plano Estadual de Res??duos S??lidos, conforme as diretrizes da Lei Federal n?? 12.305, de 02 de agosto de 2010." />
  {/* M??dulo que recebe o  t??tulo e o texto daquele indicador*/}
<div className = "teste">   

<ModalDownload download1 = {lixo} classeSecundaria1="show" titulo1 ="Lixo" 
              download2 = {lixo} classeSecundaria2="hide"  titulo2 = "Por setor"
              download3 = {lixo} classeSecundaria3="hide "titulo3 = "Por munic??pio"
              download4 = {lixo} classeSecundaria4="hide" 
              download5 = {lixo} classeSecundaria5="hide"/>   {/* M??dulo que tr??s o modal de Download, recebe por par??metro a fun????o de download se ?? hide 
            ou show, ou seja se aparece ou n??o no select e o t??tulo que ?? o nome no select*/}

         </div>

    
<section class="page-section-sub-boxlegend " id="about">
        <Container>
       
        <ListarPaineis details={initialDetails} props ="Lixo" /> {/* M??dulo de busca que tr??s os pain??is de acordo com a categoria*/}
        </Container>
      </section>
    </>
  );
}}
