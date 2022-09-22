import React, {useState, useEffect} from "react";
import Card from "./Card";
import "../ItemListContainer/ItemListContainercss.css";
import ItemCount from "../ItemCount/ItemCount";
import getItems  from "../../Services/mockAPI";




function ItemLisContainer() {

    let [data, setData] = useState([]);

    useEffect(() => {
                getItems().then((respuestaDatos) => {
                    setData(respuestaDatos);
            });
        },
        []);
    

    return(
        <div>
            <h1>Articulos</h1>
        <div className="tarjetas">
            
            {
                data.map((item) => {
                
                    console.log(item)
                    return <Card 
                    key={item.id}
                    tittle={item.tittle} 
                    detail={item.detail} 
                    category={item.category} 
                    price={item.price}/>
                }
                )
            }

            {/*  <Card price={150} title="Libro Js" detail="Nuevo sin uso" 
            img="https://http2.mlstatic.com/D_NQ_NP_920687-MLA31024027949_062019-O.webp"/>

            <Card price={100} title="Libro Js" detail="Usado" 
            img="https://http2.mlstatic.com/D_NQ_NP_653972-MLA30106327278_042019-O.webp" />

            <Card price={200} title="Libro HTML-CSS-Js" detail="Nuevo sin uso" 
            img="https://http2.mlstatic.com/D_NQ_NP_644422-MLA31035529523_062019-V.webp" /> */}
        </div>

        <div className="contador">
        <ItemCount unidadInicial={1} stock={10}/>
        <ItemCount unidadInicial={1} stock={3}/>
        <ItemCount unidadInicial={1} stock={15}/>
        </div>
        </div>
            
    )
    
};

export default ItemLisContainer;