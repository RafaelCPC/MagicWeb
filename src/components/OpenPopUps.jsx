import React, { useEffect } from 'react'
import Explore from './Explore'
import NavbarPopUp from './NavbarPopUp'
import Boton from './Boton';

function OpenPopUps({states,callbacks,numberOfNotifications,numberOfCartItems}) {

  useEffect(()=>{
    if(localStorage.getItem("notifications")>0){
      callbacks.setNumberOfNotifications(JSON.parse(localStorage.getItem("notifications"))?.filter(item=>item.isRead==false).length)
    }else{
      callbacks.setNumberOfNotifications(prev=>prev)
    }
    
    if(localStorage.getItem("cart")>0){
      callbacks.setNumberOfCartItems(JSON.parse(localStorage.getItem("cart"))?.length)
    }else{
      callbacks.setNumberOfCartItems(prev=>prev)
    }
  },[numberOfNotifications,numberOfCartItems])


    function handleOpenSection(popUpName) {
        const newStates = {}
        const prev = Object.keys(states.isSectionOpen).filter(item=>item!={popUpName});
        prev.forEach(item=>newStates[`${item}`]=false);
        newStates[`${popUpName}`]=true
        callbacks.setIsSectionOpen((prev)=>
            newStates
        )
    }

  return (

    <div className="elements-overlay" onClick={()=>{return (callbacks.setIsExplore(false),callbacks.setMessageIcon({isNotifications:false,isCart:false,isUser:false,isMenu:false}))}}>
    {states.isExplore && <Explore />}
    
    {states.isUserLoggedIn? states.isMessageIcon.isNotifications && <NavbarPopUp className="popup notifications-popup" content={[`You have ${numberOfNotifications?numberOfNotifications:"no"} unread notifications!`,<Boton text={"See Notifications"} callback={()=>handleOpenSection("openNotifications")}/>]} onClick={(e)=>e.stopPropagation()}/>:
      states.isMessageIcon.isNotifications && <NavbarPopUp className="popup user-popup" content={[<Boton text={"Sign in"} callback={()=>handleOpenSection("openLogIn")}/>,"Not Registered?",<Boton text={"Sign Up"} callback={()=>handleOpenSection("openRegistration")}/>]} onClick={(e)=>e.stopPropagation()}/>}
    
    {states.isUserLoggedIn? states.isMessageIcon.isCart && <NavbarPopUp className="popup cart-popup" content={[`You have ${numberOfCartItems?numberOfCartItems:"no"} items in your Cart!`,<Boton text={"See Cart"} callback={()=>handleOpenSection("openCart")}/>]} onClick={(e)=>e.stopPropagation()}/>:
      states.isMessageIcon.isCart && <NavbarPopUp className="popup user-popup" content={[<Boton text={"Sign in"} callback={()=>handleOpenSection("openLogIn")}/>,"Not Registered?",<Boton text={"Sign Up"} callback={()=>handleOpenSection("openRegistration")}/>]} onClick={(e)=>e.stopPropagation()}/>}
    
    {states.isMessageIcon.isUser && <NavbarPopUp className="popup user-popup" content={[<Boton text={"Sign in"} callback={()=>handleOpenSection("openLogIn")}/>,"Not Registered?",<Boton text={"Sign Up"} callback={()=>handleOpenSection("openRegistration")}/>]} onClick={(e)=>e.stopPropagation()}/>}
  </div>
  )
}

export default OpenPopUps