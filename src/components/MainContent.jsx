import React from 'react'
import OnSaleProducts from './OnSaleProducts'
import HowTo from './HowTo'
import Banner from './Banner'
import { Sellers } from './Sellers'


function MainContent({states,callbacks}) {
  return (
    <div className='section-main-content'>
      
      <Banner />
      <Sellers />
      <HowTo callbacks={()=>{callbacks.setMessageIcon(prev=>{return({...prev,["isUser"]:true})})}}/>
      <OnSaleProducts states={states} callbacks={callbacks}/>

    </div>
    
  )
}

export default MainContent