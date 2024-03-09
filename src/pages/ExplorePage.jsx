import React from 'react'
import GetCards from '../components/GetCards'
import { useAddToCart } from '../hooks/useAddToCart';
import Navbar from '../components/Navbar';
import { initNotifications, initContentCart } from "../components/NavbarData"

function ExplorePage({states,callbacks,numberOfCartItems,numberOfNotifications}) {

  const { onAddToCart } = useAddToCart({ states, callbacks });

  return (
    <>
      <Navbar states={states} callbacks={callbacks} numberOfNotifications={numberOfNotifications} numberOfCartItems={numberOfCartItems} initContentCart={initContentCart} initNotifications={initNotifications}/>
      {states.isMainContent &&<GetCards type={"cards"} callback={onAddToCart}/>}
    </>
  )
}

export default ExplorePage