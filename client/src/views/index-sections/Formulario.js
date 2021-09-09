import React, { Fragment, useState } from 'react';
import IndexNavbar from "../../components/Navbars/IndexNavbar.js";
import Carrito from "../../views/index-sections/Carrito.js";
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import emailjs from 'emailjs-com';
import  { Redirect } from 'react-router-dom'


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
import { init } from 'emailjs-com';
import LandingPage from 'RESPALDO/carrito.js';
init("user_9sVBfThibEZgnu8R2JbhO");

<script src="https://smtpjs.com/v3/smtp.js">
</script>

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
  const [datos, setDatos] = useState({
    nombre: '',
    apellidos: '',
    celular: '',
    email: '',
    descripcion: '',
    //monto: a
  })

  const handleChange = (e) => {
    setDatos({
      ...datos,
      [e.target.name]: e.target.value,
    });
  };

  const handleChecked = (e) => {
    setDatos({
      ...datos,
      [e.target.nombre]: e.target.checked,
    })
  };
  
  var TEMPLATE_ID = "template_6tgyc86"
  var SERVICE_ID = "service_id50ucq"
  var USER_ID = "user_9sVBfThibEZgnu8R2JbhO"

  function sendEmail(e) {
    e.preventDefault();
    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, USER_ID)
      .then((result) => {
        console.log(result.text);
        alert("Se ha enviado su formulario");

      }, (error) => {
        console.log(error.text);
      });
  }

  return (
    <>
      <IndexNavbar color="1" />
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
          <div class="row justify-content-center">
            <form className="ml-auto mr-auto col-center" onSubmit={sendEmail}>
              <div className="col-lg-100 col-center">
                <label htmlFor="nombre">Nombre: </label>
                <input
                  type="text"
                  name="nombre"
                  className="form-control my-2"
                  value={datos.nombre}
                  onChange={handleChange}
                />
              </div>
              <div className="col-lg-100">
                <label htmlFor="apellidos">Apellidos: </label>
                <input
                  type="text"
                  name="apellidos"
                  className="form-control my-2"
                  value={datos.apellidos}
                  onChange={handleChange}
                />
              </div>
              <div className="col-lg-100">
                <label htmlFor="email">Email: </label>
                <input
                  type="text"
                  name="email"
                  className="form-control my-2"
                  value={datos.email}
                  onChange={handleChange}
                />
              </div>
              <div className="col-lg-100">
                <label htmlFor="celular">Celular: </label>
                <input
                  type="text"
                  name="celular"
                  className="form-control my-2"
                  value={datos.celular}
                  onChange={handleChange}
                />
              </div>
              <div className="col-lg-100">
                <label>¿Qué información le gustaría conocer?:</label>
                <input
                  type="text"
                  name="descripcion"
                  className="form-control my-2"
                  value={datos.descripcion}
                  onChange={handleChange}
                />
              </div>
              <button type="submit" className="btn btn-primary">Enviar</button>
            </form>
          </div>

        </Container>
      </div>
    </>
  );
}