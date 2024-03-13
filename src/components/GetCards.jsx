import { useCallback, useEffect, useState } from 'react';
import SinglePageCards from './SinglePageCards';

function GetCards({type="cards",callback,initOptions=""}) {
       
    const [cards,setCards] = useState([])
    const [startIndex,setStartIndex] = useState(null)
    const [cardsArray, setCardsArray] = useState([])
    // const [actualPage,setActualPage] =useState(1)
    const [options,setOptions] = useState(initOptions)
    const totalCards = 15; 

    
    
  return (
    <section className='explore-cards'>
        <SinglePageCards setOptions={setOptions} cards={cards} setCards={setCards} cardsArray={cardsArray} setCardsArray={setCardsArray} startIndex={startIndex} setStartIndex={setStartIndex} type={type} options={options} callback={callback}/>
    </section>
    
    
  )
}
export default GetCards