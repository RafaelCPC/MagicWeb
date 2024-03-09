import { useCallback, useEffect, useState } from 'react';
import { useGetCards } from '../hooks/useGetCards'
import { Item } from './itemCard'
import ShowProducts from './ShowProducts';


function GetCards({type,callback}) {
       
    const {data,error,isLoading} = useGetCards(type)
    const [cards,setCards] = useState([])
    const [startIndex,setStartIndex] = useState(null)
    const [cardsArray, setCardsArray] = useState([])

    function getCards(cards,start,end) {

        const newCards = [];

        cards.filter(element=>element.imageUrl).filter((element,index) => (index>=start && index<=end)).forEach(element => {
            const cardUrl = element.img?element.img:element.imageUrl;
            const cardContent = element.content?element.content:[element.name,element.artist,"Language: ENG"]
            const cardPrice = element.price?element.price:((5.2+10*Math.random()).toFixed(2));

            const card = new Item(cardUrl,cardContent,cardPrice)
            
            newCards.push({...card})
            
        });
        
        return newCards
        
    }

    useEffect(()=>{
        if(!isLoading){
            setCards(data.cards)
            setStartIndex(0)
        }  
    },[data])
    
    useEffect(()=>{ 
        const newCards = getCards(cards,startIndex,startIndex+5)
        setCardsArray(()=> [[...cardsArray],[...newCards]].flat())  
    },[startIndex])

 
    function handleSetCards(e) {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        const newCards = getCards(cards,0,5)
        setCardsArray(()=> [...newCards])
        setStartIndex(0)
        // setStartIndex(()=>startIndex+6)
    }


    const handleScroll = useCallback((e) => {
        //console.log((e.currentTarget.scrollY+e.currentTarget.innerHeight)==document.body.scrollHeight) 
        if((e.currentTarget.scrollY+e.currentTarget.innerHeight)==document.body.scrollHeight){
            setTimeout(()=>{
                setStartIndex(()=>startIndex+6)
            },500) 
        }
      }, [startIndex])


    document.querySelector('body').onscroll= handleScroll;
    
  return (
    <div>
        {data &&!error && <ShowProducts callbackBoton={handleSetCards} callbackProduct={callback} cardsArray={cardsArray} className={"on-sale-section cards-section"} title={"Explore the Cards"} text={"Back to top"}/>}
        <div style={{width:'100%', height:'450px'}}></div>
    </div>
    
    
  )
}
export default GetCards