import React, {Fragment, useState} from 'react';
import IndexNavbar from "../../components/Navbars/IndexNavbar.js";
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
//import Grid from '@material-ui/core/Grid';
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
  const [datos, setDatos]=useState({
    nombre: '',
    apellidos: '',
    celular: '',
    email: '',
    descripcion: ''
  })

  const handleChange = (e) => {
    setDatos({
      ...datos,
      [e.target.name]: e.target.value,
    });
  };

  const handleChecked = (e)=>{
    setDatos({
      ...datos,
      [e.target.nombre]:e.target.checked,
    })
  };

  const handleSubmit = (e)=>{
    e.preventDefault();
    alert("El formulario ha sido enviado");
  };

  return( 
    <>
      <IndexNavbar color="1"/>
        <div className="section section-about-us">
          <Container>
            <Row>
              <Col className="ml-auto mr-auto text-center" md="8">
                <h2 className="title">Formulario de contacto</h2>
                <h5 className="description">
                  Aquí deberás llenar todos los campos para podernos contactar contigo y darte información más detallada sobre 
                  nuestras deliciosas mermeladas artesanales.
                  ¡Gracias por elegirnos!
                </h5>
              </Col>
            </Row>
              <form className="ml-auto mr-auto col-center" onSubmit={handleSubmit}>
                
                <div className="col-md-3 col-center">
                  <label htmlFor="nombre">Nombre: </label>
                    <input 
                      type="text" 
                      name="nombre" 
                      className="form-control my-2"
                      value={datos.nombre}
                      onChange={handleChange}
                    />
                </div>
                <div className="col-md-3">
                  <label htmlFor="apellidos">Apellidos: </label>
                    <input 
                      type="text" 
                      name="apellidos" 
                      className="form-control my-2"
                      value={datos.apellidos}
                      onChange={handleChange}
                    />
                </div>
                <div className="col-md-3">
                  <label htmlFor="email">Email: </label>
                    <input 
                      type="text" 
                      name="email" 
                      className="form-control my-2"
                      value={datos.email}
                      onChange={handleChange}
                    />
                </div>
                <div className="col-md-3">
                  <label htmlFor="celular">Celular: </label>
                    <input 
                      type="text" 
                      name="celular" 
                      className="form-control my-2"
                      value={datos.celular}
                      onChange={handleChange}
                    />
                </div>
                <div className="col-md-3">
                  <label>
                    ¿Qué información le gustaría conocer?:
                    <textarea className="form-control my-2" value={datos.descripcion} onChange={handleChange} />
                  </label>
                </div>
                <button type="submit" className="btn btn-primary">Enviar</button>
              </form>

          </Container>
        </div>
    </>
  );
}