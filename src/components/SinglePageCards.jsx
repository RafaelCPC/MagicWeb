import React, { useEffect, useState } from 'react'
import { useGetCards } from '../hooks/useGetCards'
import { Item } from './itemCard'
import ShowProducts from './ShowProducts';
import Boton from './Boton';
import ArrowUp from './ArrowUp';
import SpinnerSVG from './SpinnerSVG';


function SinglePageCards({cards,setCards,cardsArray,setCardsArray,startIndex,setStartIndex,type,options,callback,scrollY}) {

    
    const {data,error,isLoading} = useGetCards(type,options)
    
    const totalCards = 15; 

    function getCards(cards,start,end) {

        const newCards = [];

        cards.filter((element,index) => (index>=start && index<=end)).forEach(element => {
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
            setCards(data.cards.filter(element=>element.imageUrl))
            setStartIndex(0)
            window.scrollTo({ top: scrollY, behavior: 'auto' });
        }  
    },[data])
    
    useEffect(()=>{ 
        const newCards = getCards(cards,startIndex,startIndex+(totalCards-1))
        setCardsArray(()=> [[...cardsArray],[...newCards]].flat())  
        
    },[startIndex])

    function handleSetCards(e) {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }


  return (
    <>
    {data &&!error && <ShowProducts callbackProduct={callback} cardsArray={cardsArray} className={"on-sale-section cards-section"} title={"Explore the Cards"}/>}
        {isLoading && <SpinnerSVG/>}
        <Boton callback={handleSetCards} text={<ArrowUp/>} className='back-to-top-button'/> 
        <div style={{width:'100%', height:'450px'}}></div> {/*Este se borra*/}
    </>
  )
}

export default SinglePageCards