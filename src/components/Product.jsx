import React, { useEffect, useState } from 'react'
import Boton from './Boton';
import CartIcon from './CartIcon';
import CheckIcon from './CheckIcon';

function Product({cards,callback}) {

  const itemState = {}
  cards.forEach(element => {
    itemState[element.id]=false
  });

 
  const [isItemAdded,setIsItemAdded] = useState({...itemState})

  useEffect(()=>{
    if((Object.values(isItemAdded).find(item=>item==true))){
      setTimeout(()=>{
        setIsItemAdded({...itemState})
      },1000)
    }
  },[isItemAdded])

  return (
    <ul>
        {cards.map((product) => {
          return (
            <li key={product.id}>
              {product.img && <div>
                <img src={product.img} alt={`Magic card for ${product.text}`} />
              </div>}
              <p>{product.content[0]}</p>
              <p>{product.price} EUR</p>
              <div>
                <p>
                  {product.content[1]
                    ? product.content[1]
                    : "MTG MAsters Team (ENG)"}
                </p>
                <Boton
                  className="add-to-cart"
                  callback={() =>{
                    setIsItemAdded((prev)=>{return{...prev,[product.id]:true}});
                    callback(product)}}
                  text={isItemAdded[product.id]?<CheckIcon/>:<CartIcon />}
                />
              </div>
            </li>
          );
        })}
      </ul>
  )
}

export default Product