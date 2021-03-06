import React from "react";
import { Link } from 'react-router-dom'

const Item=({productos})=>{
  return(
    <div>
      <img
        width="300"
        src= {productos.img}
        alt= {productos.nombre}
        className="mt-5 inline-flex items-center"
      />
      <div>
        <h3 className="h-7 tracking-widest text-yellow-400 font-bold title-font">
          {productos.nombre}
        </h3>
        <h3 className="h-7 tracking-widest text-yellow-400 font-bold">
          {productos.banda}
        </h3>
        <span className="title-font font-medium text-black">
          <h2>${productos.precio}</h2>
        </span>
        <p className="leading-relaxed text-black">{productos.formato}</p>
        <Link to= {`/discos/${productos.id}`} className="text-indigo-500 inline-flex items-center">
          Ver más
        </Link>
        <hr/>
      </div>
    </div>
  );
};

export default Item;