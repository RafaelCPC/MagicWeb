import React, { useCallback } from 'react'
import Product from './Product'
import Boton from './Boton'

function ShowProducts({className,cardsArray,callbackProduct,title}) {

  return (
    <div className={className}>
        <h3>{title}</h3>
        <Product cards={cardsArray} callback={callbackProduct}/>
            
    </div>
  )
}

export default ShowProducts