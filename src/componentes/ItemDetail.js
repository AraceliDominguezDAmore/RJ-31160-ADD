import React from "react";
import ItemCount from './ItemCount';

const ItemDetail=({producto})=>{
  return(
    <div>
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
        <ItemCount stock={producto.stock} initial={1}/>
      </div>
    </div>
  );
};

export default ItemDetail;