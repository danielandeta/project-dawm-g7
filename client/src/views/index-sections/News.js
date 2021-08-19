import React, { useEffect, useState } from "react";
import IndexNavbar from "../../components/Navbars/IndexNavbar.js";
import CardTip from "./CardTip.js";
import { Button } from "reactstrap";
import DarkFooter from "components/Footers/DarkFooter.js";

const data = [{
  "id": 1,
  "title": "Ingiere suficiente agua",
  "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6pc1cK_EaD18wlTmM0U4CjXcoxmICCzLJmxuQllozOm1BcikMLOYZDqAS5bC1P7w0qUA&usqp=CAU",
  "desc": "Todas las células del cuerpo necesitan de agua para funcionar.",
  "descTotal": "Una adecuada hidratación ayuda a (Boilesen, 2017): Evitar el estreñimiento. Favorecer la digestión y producción de la saliva. Mejorar el funcionamiento del riñón, pues por medio de la orina se expulsan las toxinas del cuerpo. Mantener la piel hidratada, elástica, tersa y suave. Para gozar de todos estos beneficios debes tomar entre 2,7 a 3,7 litros de agua potable por día. También puedes tomar infusiones o agua saborizada, eso sí, sin agregar azúcar."
  },
  {
  "id": 2,
  "title": "Vigila la porción de grasas saturadas",
  "img": "https://www.ejemplos.co/wp-content/uploads/2016/09/grasas-sanas-buenas-lipidos-min-e1475434109998.jpg",
  "desc": "Todas las células del cuerpo necesitan de agua para funcionar.",
  "descTotal": "Una adecuada hidratación ayuda a (Boilesen, 2017): Evitar el estreñimiento. Favorecer la digestión y producción de la saliva. Mejorar el funcionamiento del riñón, pues por medio de la orina se expulsan las toxinas del cuerpo. Mantener la piel hidratada, elástica, tersa y suave. Para gozar de todos estos beneficios debes tomar entre 2,7 a 3,7 litros de agua potable por día. También puedes tomar infusiones o agua saborizada, eso sí, sin agregar azúcar."
  },
  {
  "id": 3,
  "title": "Ingiere suficiente agua",
  "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6pc1cK_EaD18wlTmM0U4CjXcoxmICCzLJmxuQllozOm1BcikMLOYZDqAS5bC1P7w0qUA&usqp=CAU",
  "desc": "Todas las células del cuerpo necesitan de agua para funcionar.",
  "descTotal": "Una adecuada hidratación ayuda a (Boilesen, 2017): Evitar el estreñimiento. Favorecer la digestión y producción de la saliva. Mejorar el funcionamiento del riñón, pues por medio de la orina se expulsan las toxinas del cuerpo. Mantener la piel hidratada, elástica, tersa y suave. Para gozar de todos estos beneficios debes tomar entre 2,7 a 3,7 litros de agua potable por día. También puedes tomar infusiones o agua saborizada, eso sí, sin agregar azúcar."
},
{
  "id": 4,
  "title": "Vigila la porción de grasas saturadas",
  "img": "https://www.ejemplos.co/wp-content/uploads/2016/09/grasas-sanas-buenas-lipidos-min-e1475434109998.jpg",
  "desc": "Todas las células del cuerpo necesitan de agua para funcionar.",
  "descTotal": "Una adecuada hidratación ayuda a (Boilesen, 2017): Evitar el estreñimiento. Favorecer la digestión y producción de la saliva. Mejorar el funcionamiento del riñón, pues por medio de la orina se expulsan las toxinas del cuerpo. Mantener la piel hidratada, elástica, tersa y suave. Para gozar de todos estos beneficios debes tomar entre 2,7 a 3,7 litros de agua potable por día. También puedes tomar infusiones o agua saborizada, eso sí, sin agregar azúcar."
}]

function News() {
  // const [data, setData] = useState([]);
  
  // const fetchData = async() => {
  //   const res = await fetch('https://firebasestorage.googleapis.com/v0/b/apisaluable.appspot.com/o/mermeladas.json?alt=media&token=c100d5cf-158a-4881-943d-5ad95e517227')
  //   const result = await res.json()
  //   return result
  // }

  // useEffect(() => {
  //   console.log(fetchData())
  //   //setData(fetchData)
  // }, [])
  const renderCards = () => {
    if (document.getElementById('busqueda').value) {
      document.getElementsByClassName('wrapper_card')[0].innerHTML = ''
      data.map( (item) => {
        if (item.title.includes(document.getElementById('busqueda').value)) {
          document.getElementsByClassName('wrapper_card')[0].innerHTML += 
            `
            <div class="card_tip">
            <div class="card_tip__body">
              <img class="card_tip__image" alt="Card 1" src=${item.img}></img>
              <h4 class="card_tip__title color-texto">${item.title}</h4>
              <p class="card_tip__description color-texto">${item.desc}</p> 
            </div>
            <button class="card_tip__btn">Ver Tip</button>
          </div>
            `
          } 
        }
      )
    } else {
      document.getElementsByClassName('wrapper_card')[0].innerHTML = ''            
      data.map( (item) => {
          document.getElementsByClassName('wrapper_card')[0].innerHTML += 
            `
            <div class="card_tip">
            <div class="card_tip__body">
              <img class="card_tip__image" alt="Card 1" src=${item.img}></img>
              <h4 class="card_tip__title color-texto">${item.title}</h4>
              <p class="card_tip__description color-texto">${item.desc}</p> 
            </div>
            <button class="card_tip__btn">Ver Tip</button>
          </div>
            `
      })
    }
    
  }
    
  

  return (
    <>
      <IndexNavbar color="1"/>
      <div className="main section">
      <h2 className="title_news color-texto">B'Saludable</h2>
      <p className="sub_title color-texto">Encuentra el mejor tip con la barra de búsqueda</p>
      <div className="mt-3 mb-4 search d-flex justify-content-center align-items-center">
        <input id="busqueda" className="mt-0 mb-0" type="text" placeholder="Buscar..." />
        <Button color="info" className="mt-0 mb-0 ml-1" onClick={renderCards}>Buscar</Button>
      </div>
      <div className="wrapper_card">
        <React.Fragment>
          {
            data.map( (item) => 
              <CardTip img={item.img} title={item.title} desc={item.desc}></CardTip>
            )
          }
        </React.Fragment>
      </div>
      </div>
      <DarkFooter />
    </>
  );
}


export default News;