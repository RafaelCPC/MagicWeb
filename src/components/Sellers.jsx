import { TopPrices } from "./TopPrices";

export function Sellers (){

    return(
        <div className="Ventas">
            <div className="top">
                <p className="prices_text"> Check Our Best Offers..! </p>
               <TopPrices title="TOP PRICES" /> 
            </div>
            <div className="top">
               <TopPrices title="BEST SELLERS" /> 
               <p className="prices_text"> ...Or Our Best Sellers! </p>
            </div>
        </div>
        
    )
}