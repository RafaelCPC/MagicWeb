import { onSale } from "./onSaleData";
import Boton from "./Boton";
import { useAddToCart } from "../hooks/useAddToCart";
import Product from "./Product";
import ShowProducts from "./ShowProducts";

function OnSaleProducts({ states, callbacks }) {

  const { onAddToCart } = useAddToCart({ states, callbacks });

  return (
    <ShowProducts className={"on-sale-section"} cardsArray={onSale} title={"Explore the newest on sale products"} callbackProduct={onAddToCart} text={"Explore for more"}/>
  );
}

export default OnSaleProducts;
