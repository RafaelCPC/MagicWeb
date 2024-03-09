import { useCallback, useEffect, useState } from 'react';
import SinglePageCards from './SinglePageCards';
import SpinnerSVG from './SpinnerSVG';


function GetCards({type,callback}) {
       
    // const {data,error,isLoading} = useGetCards(type)
    const [cards,setCards] = useState([])
    const [startIndex,setStartIndex] = useState(null)
    const [cardsArray, setCardsArray] = useState([])
    const [options,setOptions] = useState('?page=1')
    const [actualPage,setActualPage] = useState(1)
    const [scrollY, setScrollY] = useState(0)
    const totalCards = 15; 
   


    const handleScroll = useCallback((e) => {
        //console.log((e.currentTarget.scrollY+e.currentTarget.innerHeight)==document.body.scrollHeight) 
        if((e.currentTarget.scrollY+e.currentTarget.innerHeight)==document.body.scrollHeight){
            setTimeout(()=>{
                setStartIndex(()=>Math.min(startIndex+totalCards,cards.length))
                if((startIndex+totalCards>=cards.length)){
                    setActualPage((prev)=>prev+1)
                    setOptions(`?page=${actualPage+1}`)
                    setScrollY(document.body.scrollHeight-1000)
                }
            },0) 
        }
      }, [startIndex])



    document.querySelector('body').onscroll= handleScroll;

    
  return (
    <section className='explore-cards'>
        <SinglePageCards cards={cards} setCards={setCards} cardsArray={cardsArray} setCardsArray={setCardsArray} startIndex={startIndex} setStartIndex={setStartIndex} type={type} options={options} scrollY={scrollY} callback={callback}/>
    </section>
    
    
  )
}
export default GetCards