import React, {Fragment, useState} from 'react';
import IndexNavbar from "../../components/Navbars/IndexNavbar.js";
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import DarkFooter from "components/Footers/DarkFooter.js";
import Danie from "../../assets/img/Daniela Landeta.jpg"
import Ed from "../../assets/img/Edwin Veloz.jpeg"
import Wil from "../../assets/img/William Venegas.png"
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
                <h2 className="title">Desarroladores de B'natural</h2>
                <h5 className="description">
                Aquí conocerás quiénes están detrás de la página web B'natural.
                ¡Gracias por elegirnos!
                </h5>
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