import React from 'react'
import EsteSeBorra from './EsteSeBorra'
import Boton from './Boton'
import OpenPopUps from './OpenPopUps'

function MainContent({states,callbacks}) {
  return (
    <div>
      <EsteSeBorra states={states} callbacks={()=>{callbacks.setMessageIcon(prev=>{return({...prev,["isUser"]:true})})}}/> 
    </div>
    
  )
}

export default MainContent