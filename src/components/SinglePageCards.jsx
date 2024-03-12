import React, { useEffect, useState } from 'react'
import { useGetCards } from '../hooks/useGetCards'
import { Item } from './itemCard'
import ShowProducts from './ShowProducts';
import Boton from './Boton';
import ArrowUp from './ArrowUp';
import SpinnerSVG from './SpinnerSVG';


function SinglePageCards({cards,setCards,cardsArray,setCardsArray,startIndex,setStartIndex,type,options="",callback,scrollToY}) {

    
    const {data,error,isLoading} = useGetCards(type,options)
    
    const totalCards = 15; 

    function getCards(cards,start,end) {

        const newCards = [];

        cards.filter((element,index) => (index>=start && index<=end)).forEach(element => {
            const cardUrl = element.img?element.img:element.imageUrl;
            const cardContent = element.content?element.content:[element.name,`Set: ${element.set}`,"Language: ENG"]
            const cardPrice = element.price?element.price:((5+10*Math.random()).toFixed(2));

            const card = new Item(cardUrl,cardContent,cardPrice)
            
            newCards.push({...card})
            
        });

        return newCards 
    }

    function getSets(cards,start,end) {

        const newCards = [];

        cards.filter((element,index) => (index>=start && index<=end)).forEach(element => {
            const cardUrl = element.img?element.img:element.imageUrl;
            const cardContent = element.content?element.content:[element.name,`Type: ${element.type}`,"Language: ENG"]
            const cardPrice = element.price?element.price:((50+100*Math.random()).toFixed(2));

            const card = new Item(cardUrl,cardContent,cardPrice)
            
            newCards.push({...card}) 
        });

        return newCards  
    }

    useEffect(()=>{
        if(!isLoading){
            setCards(type=="cards"?data[type].filter(element=>element.imageUrl):data[type])
            setStartIndex(0)
            }
    },[data])
    
    useEffect(()=>{ 
        const newCards = type=="cards"?getCards(cards,startIndex,startIndex+(totalCards-1)):getSets(cards,startIndex,startIndex+(totalCards-1));
        setCardsArray(()=> [[...cardsArray],[...newCards]].flat())  
        window.scrollTo({ bottom: scrollToY, behavior: 'smooth' });
    },[startIndex])

    function handleSetCards(e) {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }


  return (
    <>
    {data &&!error && <ShowProducts callbackProduct={callback} cardsArray={cardsArray} className={`on-sale-section ${type}-section`}/>}
        {isLoading && <SpinnerSVG/>}
        <Boton callback={handleSetCards} text={<ArrowUp/>} className='back-to-top-button'/> 
    </>
  )
}

export default SinglePageCards