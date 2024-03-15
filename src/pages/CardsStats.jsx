import React from 'react'
import CardsInfo from '../components/CardsInfo'
import Navbar from '../components/Navbar'
import { initNotifications, initContentCart } from "../components/NavbarData"

function CardsStats({states,callbacks,numberOfCartItems,numberOfNotifications}) {
  return (
    <>
      <Navbar states={states} callbacks={callbacks} numberOfNotifications={numberOfNotifications} numberOfCartItems={numberOfCartItems} initContentCart={initContentCart} initNotifications={initNotifications}/>
      <CardsInfo/>
    </>
    
  )
}

export default CardsStats