import React, { useState } from "react";
import Item from "../Item/Item";

export default function ItemListContainer() {
  const [items, setItems] = useState();
  var productos = [
    {
      modelo: "TREN SUPERIOR",
      descripcion: "",
      dias: 75,
      id: 1,
      pic: "",
      hyperlink:''
    },
    {
      modelo: "TREN INFERIOR ",
      descripcion: "",
      dias: 30,
      id: 2,
      pic: "",
      hyperlink:''
    },
    {
      modelo: "ESPALDA",
      descripcion: "",
      dias: 40,
      id: 3,
      pic: "",
    },
    {
      modelo: "FULL BODY",
      descripcion: "",
      dias: 40,
      id: 4,
      pic: "",
      hyperlink:''
    },
    {
      modelo: "RESISTENCIA",
      descripcion: "",
      dias: 40,
      id: 5,
      pic: "",
      hyperlink:''
    },
    {
      modelo: "DEFINICION",
      descripcion: "",
      dias: 40,
      id: 6,
      pic: "",
      hyperlink:''
    },
    {
      modelo: "VELOCIDAD & EXPLOSIVIDAD",
      descripcion: "",
      dias: 40,
      id: 7,
      pic: "",
      hyperlink:''
    },
    {
      modelo: "BAJAR DE PESO",
      descripcion: "",
      dias: 40,
      id: 8,
      pic: "",
      hyperlink:''
    },
    {
      modelo: "COORDINACION",
      descripcion: "",
      dias: 40,
      id: 9,
      pic: "",
      hyperlink:''
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
            porcentaje={item.porcentaje}
          />
        ))}
      </div>
    </>
  );
}
