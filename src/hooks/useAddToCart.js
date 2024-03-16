import { initContentCart } from "../components/NavbarData"
import { Item } from "../components/itemCard";

export function useAddToCart({states,callbacks}) {

    
    function onAddToCart(itemAdded) {

        const prevItems = localStorage.getItem("cart")?JSON.parse(localStorage.getItem("cart")):initContentCart;
       
        const cardUrl = itemAdded.img?itemAdded.img:itemAdded.imageUrl;
        const cardContent = itemAdded.content?itemAdded.content:[itemAdded.name,itemAdded.artist,"Language: ENG"]
        const cardPrice = itemAdded.price?itemAdded.price:5+10*Math.random().toFixed(2);

        const newItem = new Item(cardUrl,cardContent,cardPrice)
    
        const addedItem = [...prevItems].concat(newItem);

        if(states.isUserLoggedIn){
            localStorage.setItem("cart", JSON.stringify(addedItem));  
        }
        callbacks.setNumberOfCartItems(JSON.parse(localStorage.getItem("cart"))?.length)

        alert(`Item añadido`)

    }
    
    return {onAddToCart:onAddToCart}

}