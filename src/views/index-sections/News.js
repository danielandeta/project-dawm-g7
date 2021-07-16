import React from "react";
import IndexNavbar from "../../components/Navbars/IndexNavbar.js";
import CardTip from "./CardTip.js";
import { Button } from "reactstrap";
import DarkFooter from "components/Footers/DarkFooter.js";


const GetData = async() => {
  try{
    const res = await fetch('../../data/mermeladas.json')
    const data = await res.json()
    return data
  } catch(error) {
    console.error(error)
  }
}
function News() {
  return (
    <>
      <IndexNavbar color="1"/>
      <div className="main section">
      <h2 className="title_news color-texto">B'Saludable</h2>
      <p className="sub_title color-texto">Encuentra el mejor tip con la barra de búsqueda</p>
      <div className="mt-3 mb-4 search d-flex justify-content-center align-items-center">
        <input id="busqueda" className="mt-0 mb-0" type="text" placeholder="Buscar..." />
        <Button color="info" className="mt-0 mb-0 ml-1">Buscar</Button>
      </div>
      <div className="wrapper_card">

        <React.Fragment>
          { fetch('../../data/mermeladas.json').json().tips.map((item, index) => 
            <CardTip img={item.img} title={item.title} desc={item.desc}/>
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