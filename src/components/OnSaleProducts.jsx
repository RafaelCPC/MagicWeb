import { onSale } from "./onSaleData";
import { Link } from "react-router-dom";
import Boton from "./Boton";
import CartIcon from "./CartIcon";
import { useAddToCart } from "../hooks/useAddToCart";

function OnSaleProducts({ states, callbacks }) {

  const { onAddToCart } = useAddToCart({ states, callbacks });

  return (
    <div className="on-sale-section">
      <h3>Explore the newest on sale products</h3>

      <ul>
        {onSale.map((product) => {
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
                  callback={() => onAddToCart(product)}
                  text={<CartIcon />}
                />
              </div>
            </li>
          );
        })}
      </ul>

      <Boton text={"Explore for more"} />
    </div>
  );
}

export default OnSaleProducts;
