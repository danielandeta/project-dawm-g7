import React, {Fragment, useState} from 'react';
import IndexNavbar from "../../components/Navbars/IndexNavbar.js";
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import DarkFooter from "components/Footers/DarkFooter.js";
import Danie from "../../assets/img/Daniela Landeta.jpg"
import Ed from "../../assets/img/Edwin Veloz.jpeg"
import Wil from "../../assets/img/William Venegas.png"
import Ana from "../../assets/img/Ana Maria.jpg"
import Grid from '@material-ui/core/Grid';
import {
  Button,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col,
} from "reactstrap";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
  img:{
    weight: 50,
    height: 50,
  }
}));

export default function Desarroladores() {
  const classes = useStyles();

  return( 
    <>
      <IndexNavbar color="1"/>
        <div className="navbar_separation section">
          <Container>
            <Row>
              <Col className="ml-auto mr-auto text-center" md="8">
                <h2 className="tituloDev">Desarrolladores de B'natural</h2>
                <h5 className="description">
                Aquí conocerás quiénes están detrás de la página web B'natural.
                ¡Gracias por elegirnos!
                </h5>
              </Col>
            </Row>
            <hr></hr>
            <Row>
            <Col md="6">
            <div className="d-flex flex-column">
                <div className="d-flex justify-content-start">
                </div>
              <p className="info-devep1">Nombres: <b>Daniela Landeta</b></p>
              <p className="info-devep1">Edad: <b>21 años</b></p>
              <p className="info-devep1">Carrera: <b>Ingeniería en Ciencias Computacionales</b></p>
              </div>
              </Col>
              <Col md="6">
                <div className="d-flex justify-content-center">
                  <img className='perfil_gaby' src={require("assets/img/Daniela Landeta.jpg").default} alt="Logo" />  
                </div>
              </Col>
          </Row>
            <hr></hr>
          <Row>
            <Col md="6">
                <div className="d-flex justify-content-center">
                  <img className='perfil_gaby' src={require("assets/img/Edwin Veloz.jpeg").default} alt="Logo" />  
                </div>
              </Col>
            <Col md="6">
            <div className="d-flex flex-column">
                <div className="d-flex justify-content-start">
                </div>
              <p className="info-devep">Nombres: <b>Edwin Veloz</b></p>
              <p className="info-devep">Edad: <b>22 años</b></p>
              <p className="info-devep">Carrera: <b>Ingeniería en Ciencias Computacionales</b></p>
              </div>
              </Col>
          </Row>
          <hr></hr>
          <Row>
            <Col md="6">
            <div className="d-flex flex-column">
                <div className="d-flex justify-content-start">
                </div>
                <p className="info-devep1">Nombres: <b>William Venegas</b></p>
              <p className="info-devep1">Edad: <b>21 años</b></p>
              <p className="info-devep1">Carrera: <b>Ingeniería en Ciencias Computacionales</b></p>
              </div>
              </Col>
              <Col md="6">
                <div className="d-flex justify-content-center">
                  <img className='perfil_gaby' src={require("assets/img/William Venegas.png").default} alt="Logo" />  
                </div>
              </Col>
          </Row>
          <hr></hr>
          <Row>
            <Col md="6">
                <div className="d-flex justify-content-center">
                  <img className='perfil_gaby' src={require("assets/img/Ana Maria.jpg").default} alt="Logo" />  
                </div>
              </Col>
            <Col md="6">
            <div className="d-flex flex-column">
                <div className="d-flex justify-content-start">
                </div>
                <p className="info-devep">Nombres: <b>Ana</b></p>
              <p className="info-devep">Edad: <b>21 años</b></p>
              <p className="info-devep">Carrera: <b>Ingeniería en Ciencias Computacionales</b></p>
              </div>
              </Col>
          </Row>
              {/*<div>
                <img className= classes.img src={Danie} alt="Daniela Landeta" />
                <img src={Wil} alt="Daniela Landeta" />
                <img src={Ed} alt="Daniela Landeta"/>
              </div>*/}
          </Container>
        </div>
        <DarkFooter />
    </>
  );
}