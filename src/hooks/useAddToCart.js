import { useState,useEffect } from "react"
import { initContentCart } from "../components/NavbarData"

export function useAddToCart({states,callbacks}) {

    
    class Item {
        constructor(img, content,price) {
          this.id = Math.random().toString(36).substr(2, 9);
          this.img = img;
          this.content = content;
          this.price = price;
          this. total = 1;
        }
    }

    function onAddToCart(itemAdded) {

        const prevItems = localStorage.getItem("cart")?JSON.parse(localStorage.getItem("cart")):initContentCart;
       
        const cardUrl = itemAdded.img?itemAdded.img:itemAdded.imageUrl;
        const cardContent = itemAdded.content?itemAdded.content:[itemAdded.name,itemAdded.artist,itemAdded,"Language: ENG"]
        const cardPrice = itemAdded.price?itemAdded.price:5+10*Math.random().toFixed(2);

        const newItem = new Item(cardUrl,cardContent,cardPrice)
    
        const addedItem = [...prevItems].concat(newItem);

        if(states.isUserLoggedIn){
            localStorage.setItem("cart", JSON.stringify(addedItem));  
        }
        callbacks.setNumberOfCartItems(JSON.parse(localStorage.getItem("cart"))?.length)

    }
    
    return {onAddToCart:onAddToCart}

}