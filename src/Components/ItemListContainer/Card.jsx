import React from "react";
import "./card.css";
import Button from "../Button/Button"
import ItemCount from "../ItemCount/ItemCount";

function Card(props) {
    return(
        <div className="card">
            <div className="card-img">
                <img src= {props.img} alt="card img" />
            </div>
            <div className="card-detail">
                <h2> {props.title} </h2>
                <p> {props.detail} </p>
                <h4>$ {props.price} </h4>

                
            </div>

            {/* <div className="boton-card">
            <a href="#">Ver mas</a>
            </div> */}

        <Button >
            Ver Mas
        </Button>
        
        </div>
    )

}

export default Card;