import React, { useCallback } from 'react'
import Product from './Product'
import Boton from './Boton'

function ShowProducts({className,cardsArray,callbackProduct,callbackBoton,title,text}) {

  return (
    <div className={className}>
        <h3>{title}</h3>
        <Product cards={cardsArray} callback={callbackProduct}/>
        <Boton callback={callbackBoton} text={text}/>     
    </div>
  )
}

export default ShowProducts