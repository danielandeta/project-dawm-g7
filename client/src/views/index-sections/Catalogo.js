import React, {Fragment, useEffect, useState, hashHistory} from 'react';
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import CameraIcon from '@material-ui/icons/PhotoCamera';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { Link } from "react-router-dom";
import IndexNavbar from "../../components/Navbars/IndexNavbar.js";
import DarkFooter from "components/Footers/DarkFooter.js";
import CarouselSection from "./Carousel.js";
import IndexHeader from "components/Headers/IndexHeader.js";
import Formulario from "views/index-sections/Formulario.js";
import { useHistory } from 'react-router-dom'
import {
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
}));



const cards = [1, 2, 3, 4, 5];
const sabores=["Frutilla.jpg", "Frutimora.jpg", "Manzana.jpg", "Piña.jpg", "Guayaba.jpg"]
/*function listaMermeladas(){
  const [mermeladas, setMermeladas]=useState({
    "id": null,
    "sabor": ''
  })

  useEffect(()=>{
    fetch("./data/mermeladas.json")
    .then(response=> response.json())
    .then(datos=>{
      setMermeladas(datos.mermeladas)
    })
  },[])
  return mermeladas
}

const mermeladas= listaMermeladas()*/


export default function Catalogo() {
  const classes = useStyles();

  let history = useHistory()
  return( <>
    <IndexNavbar color='1' />
          
        
    <React.Fragment>

      <main className="section mt-5">
      <h2 className="color-texto text-center ">Catálogo de mermeladas</h2>
          <h5 className="description text-center">
            Aquí puedes obtener mas información y comprar tus mermeladas preferidas.
          </h5>
        {/* Hero unit */}
        <Container className={classes.cardGrid} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {cards.map((card) => (
                //var ruta= "../assets/img/sabores/"+sabores[card]
                <Grid item key={card} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                  
                    image={require("assets/img/"+sabores[card-1]).default}
                    title={"Mermelada de "+sabores[card-1].slice(0, sabores[card-1].length - 4)}
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {sabores[card-1].slice(0, sabores[card-1].length - 4)}
                    </Typography>
                    <Typography className="tipoclas">
                      Mermelada de {sabores[card-1].slice(0, sabores[card-1].length - 4)} con endulzante orgánico, sin preservantes ni colorante artificial.
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" color="primary" type="submit" onClick={()=> {history.push(`/Catalogo/${sabores[card-1].slice(0, sabores[card-1].length - 4)}`)}}>
                      Más info
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
      <DarkFooter />
    </React.Fragment>
  </>
  );
}

