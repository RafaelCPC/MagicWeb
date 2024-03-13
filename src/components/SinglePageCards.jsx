import React, { useCallback, useEffect, useState } from 'react'
import { useGetCards } from '../hooks/useGetCards'
import { Item } from './itemCard'
import ShowProducts from './ShowProducts';
import Boton from './Boton';
import ArrowUp from './ArrowUp';
import SpinnerSVG from './SpinnerSVG';


function SinglePageCards({cards,setCards,cardsArray,setCardsArray,startIndex,setStartIndex,type,options="",setOptions,callback,initOptions}) {

    

    const {data,error,isLoading} = useGetCards(type,options)
    const [actualPage,setActualPage] =useState(1)
   
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
            setCards(type=="cards"?data[type]?.filter(element=>element.imageUrl):data[type])
            setStartIndex(0)
            }
    },[data])

    useEffect(()=>{
        setOptions(initOptions)
        setCardsArray([])  
        window.scrollTo({ top: 0, behavior: 'smooth' });
    },[initOptions])

    useEffect(()=>{ 
        if(!isLoading){
            const newCards = type=="cards"?getCards(cards,startIndex,startIndex+(cards.length-1)):getSets(cards,startIndex,startIndex+(cards.length-1));
            setCardsArray([...newCards])  
        }
    },[cards])
    
    useEffect(()=>{ 
        if(!isLoading && !!options.match('page')){
            const newCards = type=="cards"?getCards(cards,startIndex,startIndex+(totalCards-1)):getSets(cards,startIndex,startIndex+(totalCards-1));
            setCardsArray(()=> [[...cardsArray],[...newCards]].flat())  
        }
    },[startIndex])

    function handleSetCards(e) {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    const handleScroll = useCallback((e) => {
      if(cards.length>0 && (e.currentTarget.scrollY+e.currentTarget.innerHeight)>=document.body.scrollHeight-10){
        
            setStartIndex(()=>Math.min(startIndex+totalCards,cards.length))
            if(((startIndex+totalCards>=cards.length)&&!isLoading) && !!options.match('page')){
                setActualPage((prev)=>prev+1)
                setOptions(`?page=${actualPage+1}`)
            }
        
    }
    }, [startIndex])


    document.querySelector('body').onscroll= handleScroll;


  return (
    <>
    {data &&!error && <ShowProducts callbackProduct={callback} cardsArray={cardsArray} className={`on-sale-section ${type}-section`}/>}
        {isLoading && <SpinnerSVG/>}
        <Boton callback={handleSetCards} text={<ArrowUp/>} className='back-to-top-button'/> 
    </>
  )
}

export default SinglePageCards