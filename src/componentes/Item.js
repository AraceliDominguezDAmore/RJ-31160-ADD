import React from 'react'

function Item( {productos} ) {
  return (
    <div>
        <br/>
        <h1> {productos.nombre} </h1>
        <p> {productos.banda} </p>
        <p> {productos.formato} </p>
        <h4> ${productos.precio} </h4>
        <br/>
        <hr/>
    </div>
  )
}

export default Item;