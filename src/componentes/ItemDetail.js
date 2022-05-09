import React, { useState } from "react";
import ItemCount from './ItemCount';

//const discoImg = require.context ('../assets/img')

const ItemDetail=({producto})=>{
  const [isInCart, setIsInCart] = useState(false)

  function onAdd (count) {
    console.log(`Agregaste al carrito ${count} items.`);
    setIsInCart(true);
  }
  return(
    <div>
      {/* <img
        src= {discoImg (`./ ${producto.id}.jpg`)}
        alt= {producto.nombre}
        className="img-thumbnail animate__animated animate__fadeIn"
      /> */}
      <div>
        <h3 className="h-7 tracking-widest text-yellow-400 font-bold title-font">
          {producto.nombre}
        </h3>
        <h3 className="h-7 tracking-widest text-yellow-400 font-bold">
          {producto.banda}
        </h3>
        <span className="title-font font-medium text-black">
          <h2>${producto.precio}</h2>
        </span>
        <p className="leading-relaxed text-black">{producto.formato}</p>
        { isInCart? 
          <button>Ver en carrito</button>
        : 
          <ItemCount onAdd= {onAdd} stock={producto.stock} initial={1}/>
        }
        
      </div>
    </div>
  );
};

export default ItemDetail;