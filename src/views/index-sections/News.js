import React, { useEffect, useState } from "react";
import IndexNavbar from "../../components/Navbars/IndexNavbar.js";
import CardTip from "./CardTip.js";
import { Button } from "reactstrap";
import DarkFooter from "components/Footers/DarkFooter.js";


function News() {
  const [data, setData] = useState([]);
  
  const fetchData = async() => {
    const res = await fetch('src/data/mermeladas.json')
    const result = await res.json()
    console.log(result)
  }

  useEffect(() => {
    fetchData()
  }, [])
  

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
        
      </div>
      </div>
      <DarkFooter />
    </>
  );
}


export default News;