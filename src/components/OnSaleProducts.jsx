import { onSale } from "./onSaleData";
import Boton from "./Boton";
import { useAddToCart } from "../hooks/useAddToCart";
import Product from "./Product";
import ShowProducts from "./ShowProducts";
import { Link } from "react-router-dom";

function OnSaleProducts({ states, callbacks }) {

  const { onAddToCart } = useAddToCart({ states, callbacks });

  return (
    <>
      <ShowProducts className={"on-sale-section"} cardsArray={onSale} title={"Explore the newest on-sale products"} callbackProduct={onAddToCart} text={<Link to="/explore">Explore for more</Link>}/>
      <Boton className="LoginFooterBar-button" text={<Link to="/explore">Explore for more</Link>}/>
    </>
  );
}

export default OnSaleProducts;
