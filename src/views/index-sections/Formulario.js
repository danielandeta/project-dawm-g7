import React from 'react';
import IndexNavbar from "../../components/Navbars/IndexNavbar.js";
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import Catalogo from "views/index-sections/Catalogo.js";
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
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));

export default function Formulario() {
  const classes = useStyles();

  return( 
    <>
      <IndexNavbar color="1"/>
        <div className="section section-about-us">
          <Container>
            <Row>
              <Col className="ml-auto mr-auto text-center" md="8">
                <h2 className="title">Encuentranos</h2>
                <h5 className="description">
                  Aquí podrás encontrar la dirección donde estamos ubicados
                  y te mostramos las maneras de ponerte en contacto con
                  nosotros para realizarnos consultas y realizar alguna compra.
                  ¡Gracias por elegirnos!
                </h5>
              </Col>
            </Row>
          </Container>
        </div>
    </>
  );
}