import React from 'react'
import { onSale } from './onSaleData'
import { Link } from 'react-router-dom'
import Boton from './Boton'
import CartIcon from './CartIcon'

function OnSaleProducts() {

  return (
    <div className='on-sale-section'>
        <h3>Explore the newest on sale products</h3>
        
        <ul>
            {
                onSale.map((product,index)=>{
                    return(
                        <li key={product.id}>
                            <div>
                                <img src={product.url} alt={`Magic card for ${product.text}`}/>
                            </div>
                            <p>{product.text}</p>
                            <p>{product.price} EUR</p>
                            <div>
                                <p>{product.set}</p>
                                <Boton className="add-to-cart" text={<CartIcon/>}/>
                            </div>
                        </li>
                    )
                })
            }
        </ul>
        
        <Boton text={"Explore for more"}/>
    </div>
  )
}

export default OnSaleProducts