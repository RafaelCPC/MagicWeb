import { useEffect, useState } from 'react';
import { useGetCards } from '../hooks/useGetCards'
import { Item } from './itemCard'
import Boton from "./Boton";

function GetCards() {
  
//   const {data,error} = useGetCards("cards")
//   localStorage.setItem("cards", JSON.stringify(data.cards));  

  const {data,error} = useGetCards("sets")
  localStorage.setItem("sets", JSON.stringify(data.sets));  

  console.log(data)

  let cards = data.cards;

    const [startIndex,setStartIndex] = useState(0)
    const [cardsArray, setCardsArray] = useState([])

    function getCards(cards,start,end) {

        const newCards = [];

        cards.filter((element,index) => (index>=start && index<=end)).forEach(element => {
            const cardUrl = element.img?element.img:element.imageUrl;
            const cardContent = element.content?element.content:[element.name,element.artist,"Language: ENG"]
            const cardPrice = element.price?element.price:5+10*Math.random().toFixed(2);

            const card = new Item(cardUrl,cardContent,cardPrice)
            
            newCards.push({...card})
            
        });

        console.log(newCards)

        setCardsArray(prevArray => [[...prevArray],[...newCards]].flat())
    }

    console.log(cardsArray) 

    useEffect(()=>{
        getCards(cards,startIndex,startIndex+5)
        
        setStartIndex(prev=>prev+6)

    },[])
    

  return (
    <div>
        <ul></ul>
        <Boton text={"Load More"}/>     
    </div>
  )
}
export default GetCards