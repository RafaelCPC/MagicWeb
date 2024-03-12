import { useCallback, useEffect, useState } from 'react';
import SinglePageCards from './SinglePageCards';

function GetCards({type="cards",callback,initOptions=""}) {
       
    const [cards,setCards] = useState([])
    const [startIndex,setStartIndex] = useState(null)
    const [cardsArray, setCardsArray] = useState([])
    const [options,setOptions] = useState(initOptions)
    const [scrollToY, setScrollToY] = useState(document.body.scrollHeight)
    const totalCards = 15; 

    
   useEffect(()=>{
    setOptions(initOptions)
   },[initOptions])

    const handleScroll = useCallback((e) => {
      if(cards.length>0 && (e.currentTarget.scrollY+e.currentTarget.innerHeight)>=document.body.scrollHeight-10){
        
            setStartIndex(()=>Math.min(startIndex+totalCards,cards.length))
            if((startIndex+totalCards>=cards.length)){
              setTimeout(()=>{
                setActualPage((prev)=>prev+1)
                setOptions(`?page=${actualPage+1}`)
                setScrollToY(document.body.scrollHeight)
              },1000) 
            }
        
    }
    }, [startIndex])


    document.querySelector('body').onscroll= handleScroll;

    
  return (
    <section className='explore-cards'>
        <SinglePageCards scrollToY={scrollToY} cards={cards} setCards={setCards} cardsArray={cardsArray} setCardsArray={setCardsArray} startIndex={startIndex} setStartIndex={setStartIndex} type={type} options={options} callback={callback}/>
    </section>
    
    
  )
}
export default GetCards