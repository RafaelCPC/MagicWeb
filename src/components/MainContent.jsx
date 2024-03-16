import React from 'react'
import OnSaleProducts from './OnSaleProducts'
import HowTo from './HowTo'
import Banner from './Banner'
import { TopPrices } from './TopPrices'


function MainContent({states,callbacks}) {
  return (
    <div className='section-main-content'>
      
      <Banner />
      <TopPrices title="TOP PRICES" />
      <HowTo callbacks={()=>{callbacks.setMessageIcon(prev=>{return({...prev,["isUser"]:true})})}}/>
      <OnSaleProducts states={states} callbacks={callbacks}/>

    </div>
    
  )
}

export default MainContent