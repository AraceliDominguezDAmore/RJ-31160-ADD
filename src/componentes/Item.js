import React from "react";
import { Link } from 'react-router-dom'

//const discoImg = require.context ('../assets/img')

const Item=({productos})=>{
  return(
    <div>
      {/* <img
        src= {discoImg (`./${productos.img}.jpg`)}
        className="img-thumbnail animate__animated animate__fadeIn"
      /> */}
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