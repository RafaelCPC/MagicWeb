import React from 'react'
import Boton from './Boton';
import CartIcon from './CartIcon';

function Product({cards,callback}) {



  return (
    <ul>
        {cards.map((product) => {
          return (
            <li key={product.id}>
              <div>
                <img src={product.img} alt={`Magic card for ${product.text}`} />
              </div>
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
                  callback={() => callback(product)}
                  text={<CartIcon />}
                />
              </div>
            </li>
          );
        })}
      </ul>
  )
}

export default Product