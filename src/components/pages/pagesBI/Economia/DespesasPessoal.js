import "../graphs.css";
import { Container, Row, Col } from "react-grid-system";
import "../BoxLegend.css";
import React, { Component } from "react";
import TextSectionItem from "../TextSectionItem";
import NavEconomia from "./NavEconomia";
import ListarPaineis from '../../../ListarPaineis';
import initialDetails from '../../../data/initialDetails';
import ModalDownload from '../ModalDownload';
import Search from '../../../../components/Search';
import PortalDataService from "../../../services/portal.service";

export default class TutorialsList extends Component {
  constructor(props) {
    super(props);

    this.downloaddespesaspessoal = this.downloaddespesaspessoal.bind(this);
    this.downloadcomissionados = this.downloadcomissionados.bind(this);
    this.downloadefetivados = this.downloadefetivados.bind(this);


    this.state = {
      tutorials: [],
      currentTutorial: null,
      currentIndex: -1,
      searchTitle: "",
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
    this.retrieveTutorials();
    this.setState({
      currentTutorial: null,
      currentIndex: -1
    });
  }

  downloaddespesaspessoal() {
    PortalDataService.downloaddespesaspessoal()
      .then(response => {

        const linhas = response.data; // Linhas reccebe os dados do JSON
        console.log(response.data); // Mostra no console os dados do JSON
        let csvContent = "data:text/csv;charset=utf-8," // Monta os dados capturados para download
          + linhas;
        var encodedUri = encodeURI(csvContent); 
        var link = document.createElement("a");
        link.setAttribute("href", encodedUri);
        link.setAttribute("download", "despesaspessoal.csv");
        document.body.appendChild(link);
        link.click();
        this.atualizarLista();
      })
      .catch(e => {
        console.log(e);
      });
  }

  downloadcomissionados() {
    PortalDataService.downloadcomissionados()
      .then(response => {

        const linhas = response.data; // Linhas reccebe os dados do JSON
      console.log(response.data); // Mostra no console os dados do JSON
      let csvContent = "data:text/csv;charset=utf-8," // Monta os dados capturados para download
        + linhas;
      var encodedUri = encodeURI(csvContent); 
      var link = document.createElement("a");
      link.setAttribute("href", encodedUri);
      link.setAttribute("download", "comissionados.csv");
      document.body.appendChild(link);
      link.click();
      this.atualizarLista();
      })
      .catch(e => {
        console.log(e);
      });
  }

  downloadefetivados() {
    PortalDataService.downloadefetivados()
      .then(response => {

        const linhas = response.data; // Linhas reccebe os dados do JSON
      console.log(response.data); // Mostra no console os dados do JSON
      let csvContent = "data:text/csv;charset=utf-8," // Monta os dados capturados para download
        + linhas;
      var encodedUri = encodeURI(csvContent); 
      var link = document.createElement("a");
      link.setAttribute("href", encodedUri);
      link.setAttribute("download", "efetivados.csv");
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
    const contratados = () => {
      return this.downloaddespesaspessoal // Chama a fun????o de download dos dados 
    }
    const comissionados = () => {
      return this.downloadcomissionados // Chama a fun????o de download dos dados 
    }
    const efetivados = () => {
      return this.downloadefetivados // Chama a fun????o de download dos dados 
    }

    return (

      <>

        <Search details={initialDetails} />{/* M??dulo de busca com filtro*/}
        <Container>
          <Row>

            <Col sm={8}>
              <NavEconomia /> {/* M??dulo que tr??s o submenu de econ??nomia*/}
            </Col>
          </Row>
        </Container>
        <br /> <br />
        <TextSectionItem
          titlesection="Despesa com Pessoal"
          textsection="Despesa com pessoal ?? todo e qualquer recurso consumido ou aplicado pela entidade na remunera????o direta ou indireta de seus funcion??rios. Tamb??m s??o despesas com pessoal os encargos sociais previstos em lei e os benef??cios oferecidos espontaneamente, ou concedidos em raz??o de previs??o legal, de acordos firmados entre empregador e empregados ou de decis??es judiciais."
        />{/* M??dulo que recebe o  t??tulo e o texto daquele inidicador*/}

        <div className="teste">

          <ModalDownload download1={contratados} classeSecundaria1="show" titulo1="Contratados"
            download2={comissionados} classeSecundaria2="show" titulo2="Comissionados"
            download3={efetivados} classeSecundaria3="show " titulo3="Efetivados"
            download4={efetivados} classeSecundaria4="hide"
            download5={efetivados} classeSecundaria5="hide" />
          {/* M??dulo que tr??s o modal de Download, recebe por par??metro a fun????o de download se ?? hide 
            ou show, ou seja se aparece ou n??o no select e o t??tulo que ?? o nome no select*/}

        </div>


        <section class="page-section-sub-boxlegend " id="about">
          <Container>

            <ListarPaineis details={initialDetails} props="DespsPessoal" /> {/* M??dulo de busca que tr??s os pain??is de acordo com a categoria*/}
          </Container>
        </section>
      </>
    );
  }
}
