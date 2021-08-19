import React from "react";

const CardTip = (props) => {
  return(
    <div className="card_tip">
      <div className="card_tip__body">
        <img className="card_tip__image" src={props.img} alt="Card 1" />
        <h4 className="card_tip__title color-texto">{props.title}</h4>
        <p className="card_tip__description color-texto">{props.desc}</p> 
      </div>
      <button className="card_tip__btn">Ver Tip</button>
    </div>
  );
}

export default CardTip;