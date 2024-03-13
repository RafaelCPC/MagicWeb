import { useState } from 'react'
import GetCards from '../components/GetCards'
import { useAddToCart } from '../hooks/useAddToCart';
import Navbar from '../components/Navbar';
import { initNotifications, initContentCart } from "../components/NavbarData"
import ContentExplorePage from '../components/ContentExplorePage';

function ExplorePage({states,callbacks,numberOfCartItems,numberOfNotifications}) {

  const { onAddToCart } = useAddToCart({ states, callbacks });
  const [isTheCards,setIsTheCards] = useState(true)
  const [isTheSets,setIsTheSets] = useState(false)
  

  return (
    <>
      <Navbar states={states} callbacks={callbacks} numberOfNotifications={numberOfNotifications} numberOfCartItems={numberOfCartItems} initContentCart={initContentCart} initNotifications={initNotifications}/>
      <ContentExplorePage callbackCards={()=>{setIsTheCards(true);setIsTheSets(false)}} callbackSets={()=>{setIsTheCards(false);setIsTheSets(true)}} isTheCards={isTheCards} isTheSets={isTheSets}/>
      {isTheCards &&<GetCards type={"cards"} callback={onAddToCart} initOptions={states.initOptions}/>}
      {isTheSets &&<GetCards type={"sets"} callback={onAddToCart} initOptions={states.initOptions}/>}
    </>
  )
}

export default ExplorePage