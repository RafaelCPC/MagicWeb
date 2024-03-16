import React from 'react'
import OnSaleProducts from './OnSaleProducts'
import HowTo from './HowTo'


function MainContent({states,callbacks}) {
  return (
    <div className='section-main-content'>
      
      
      <HowTo callbacks={()=>{callbacks.setMessageIcon(prev=>{return({...prev,["isUser"]:true})})}}/>
      <OnSaleProducts states={states} callbacks={callbacks}/>

    </div>
    
  )
}

export default MainContent