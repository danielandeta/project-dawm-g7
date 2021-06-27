import React from "react";
import IndexNavbar from "../../components/Navbars/IndexNavbar.js";
import CardTip from "./CardTip.js";
import DefaultFooter from "components/Footers/DefaultFooter.js";


const nutiTips = [
  {
    id: 1,
    title: "Ingiere suficiente agua",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6pc1cK_EaD18wlTmM0U4CjXcoxmICCzLJmxuQllozOm1BcikMLOYZDqAS5bC1P7w0qUA&usqp=CAU",
    desc: "Todas las células del cuerpo necesitan de agua para funcionar.",
    descTotal: "Una adecuada hidratación ayuda a (Boilesen, 2017): Evitar el estreñimiento. Favorecer la digestión y producción de la saliva. Mejorar el funcionamiento del riñón, pues por medio de la orina se expulsan las toxinas del cuerpo. Mantener la piel hidratada, elástica, tersa y suave. Para gozar de todos estos beneficios debes tomar entre 2,7 a 3,7 litros de agua potable por día. También puedes tomar infusiones o agua saborizada, eso sí, sin agregar azúcar."
  },
  {
    id: 2,
    title: "Vigila la porción de grasas saturadas",
    img: "https://www.ejemplos.co/wp-content/uploads/2016/09/grasas-sanas-buenas-lipidos-min-e1475434109998.jpg",
    desc: "Todas las células del cuerpo necesitan de agua para funcionar.",
    descTotal: "Una adecuada hidratación ayuda a (Boilesen, 2017): Evitar el estreñimiento. Favorecer la digestión y producción de la saliva. Mejorar el funcionamiento del riñón, pues por medio de la orina se expulsan las toxinas del cuerpo. Mantener la piel hidratada, elástica, tersa y suave. Para gozar de todos estos beneficios debes tomar entre 2,7 a 3,7 litros de agua potable por día. También puedes tomar infusiones o agua saborizada, eso sí, sin agregar azúcar."
  },
  {
    id: 3,
    title: "Ingiere suficiente agua",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6pc1cK_EaD18wlTmM0U4CjXcoxmICCzLJmxuQllozOm1BcikMLOYZDqAS5bC1P7w0qUA&usqp=CAU",
    desc: "Todas las células del cuerpo necesitan de agua para funcionar.",
    descTotal: "Una adecuada hidratación ayuda a (Boilesen, 2017): Evitar el estreñimiento. Favorecer la digestión y producción de la saliva. Mejorar el funcionamiento del riñón, pues por medio de la orina se expulsan las toxinas del cuerpo. Mantener la piel hidratada, elástica, tersa y suave. Para gozar de todos estos beneficios debes tomar entre 2,7 a 3,7 litros de agua potable por día. También puedes tomar infusiones o agua saborizada, eso sí, sin agregar azúcar."
  },
  {
    id: 4,
    title: "Vigila la porción de grasas saturadas",
    img: "https://www.ejemplos.co/wp-content/uploads/2016/09/grasas-sanas-buenas-lipidos-min-e1475434109998.jpg",
    desc: "Todas las células del cuerpo necesitan de agua para funcionar.",
    descTotal: "Una adecuada hidratación ayuda a (Boilesen, 2017): Evitar el estreñimiento. Favorecer la digestión y producción de la saliva. Mejorar el funcionamiento del riñón, pues por medio de la orina se expulsan las toxinas del cuerpo. Mantener la piel hidratada, elástica, tersa y suave. Para gozar de todos estos beneficios debes tomar entre 2,7 a 3,7 litros de agua potable por día. También puedes tomar infusiones o agua saborizada, eso sí, sin agregar azúcar."
  }
];

function News() {
  return (
    <>
      <IndexNavbar color="1"/>
      <h2 className="title_news">B'Saludable</h2>
      <div className="wrapper_card">

        <React.Fragment>
          { nutiTips.map((item, index) => 
            <CardTip img={item.img} title={item.title} desc={item.desc}/>
          )
          }
        </React.Fragment>
      </div>
      <DefaultFooter />
    </>
  );
}



export default News;