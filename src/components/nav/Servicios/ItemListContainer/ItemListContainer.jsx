import React, { useState } from "react";
import Item from "../Item/Item";

export default function ItemListContainer() {
  
  const [items, setItems] = useState();
  var productos = [
    {
      modelo: "TREN SUPERIOR",
      descripcion: "Gigabyte",
      porcentaje: "75",
      id: 1,
      pic: "https://lesser-dawns.000webhostapp.com/multimedia/recursos/_RXYZIXH-removebg-preview.png",
    },
    {
      modelo: "TREN INFERIOR ",
      descripcion: "Western Digital Green",
      porcentaje: "30",
      id: 2,
      pic: "https://lesser-dawns.000webhostapp.com/multimedia/recursos/PIRAMIDE_-_copia-removebg-preview.png",
    },
    {
      modelo: "ESPALDA",
      descripcion: "Amd",
      porcentaje: "40",
      id: 3,
      pic: "https://lesser-dawns.000webhostapp.com/multimedia/recursos/PIRAMIDE-removebg-preview%20(1).png",
      
    },
    {
      modelo: "FULL BODY",
      descripcion: "Amd",
      porcentaje: "40",
      id: 3,
      pic: "https://lesser-dawns.000webhostapp.com/multimedia/recursos/PIRAMIDE-removebg-preview%20(1).png",
      
    },
    {
      modelo: "RESISTENCIA",
      descripcion: "Amd",
      porcentaje: "40",
      id: 3,
      pic: "https://lesser-dawns.000webhostapp.com/multimedia/recursos/PIRAMIDE-removebg-preview%20(1).png",
      
    },
    {
      modelo: "DEFINICION",
      descripcion: "Amd",
      porcentaje: "40",
      id: 3,
      pic: "https://lesser-dawns.000webhostapp.com/multimedia/recursos/PIRAMIDE-removebg-preview%20(1).png",
      
    },
    {
      modelo: "VELOCIDAD & EXPLOSIVIDAD",
      descripcion: "Amd",
      porcentaje: "40",
      id: 3,
      pic: "https://lesser-dawns.000webhostapp.com/multimedia/recursos/PIRAMIDE-removebg-preview%20(1).png",
      
    },
    {
      modelo: "BAJAR DE PESO",
      descripcion: "Amd",
      porcentaje: "40",
      id: 3,
      pic: "https://lesser-dawns.000webhostapp.com/multimedia/recursos/PIRAMIDE-removebg-preview%20(1).png",
      
    },
    {
      modelo: "COORDINACION",
      descripcion: "Amd",
      porcentaje: "40",
      id: 3,
      pic: "https://lesser-dawns.000webhostapp.com/multimedia/recursos/PIRAMIDE-removebg-preview%20(1).png",
      
    },
  ]; 

  const getItem = new Promise((resolve, reject) => {
    setTimeout(() => resolve(items), 2000);
  });
  getItem.then((resolve) => setItems(resolve));

  return (
    <>
      <div class="row row-cols-1 row-cols-md-3 g-4">
          {productos.map((item) => (
            <Item
              modelo={item.modelo}
              precio={item.precio}
              marca={item.marca}
              id={item.id}
              pic={item.pic}
              stock={item.stock}
              herramienta1={item.herramienta1}
              herramienta2={item.herramienta2}
              herramienta3={item.herramienta3}
              porcentaje={item.porcentaje}
            />
          ))}
      </div>
    </>
  );
}
