import { useState,useEffect } from "react"
import { initNotifications, initContentCart } from "../components/NavbarData"

export function useUserStates() {

    
    const [isMainContent,setIsMainContent] = useState(true)
    const [isUserLoggedIn,setIsUserLoggedIn] = useState(false)
    const [isExplore,setIsExplore] = useState(false)
    const [isMessageIcon, setMessageIcon] = useState({isNotifications:false,isCart:false,isUser:false,isMenu:false})
    const [isSectionOpen,setIsSectionOpen] = useState({
        openNotifications:false,
        openCart:false,
        openLogIn:false,
        openRegistration:false
      })
  
    const [numberOfNotifications,setNumberOfNotifications] = useState(localStorage.getItem("notifications")?JSON.parse(localStorage.getItem("notifications")).filter(item=>item.isRead==false).length:initNotifications.filter(item=>item.isRead==false).length)
    
    const [numberOfCartItems,setNumberOfCartItems] = useState(localStorage.getItem("cart")?JSON.parse(localStorage.getItem("cart")).map(item=>item.total).reduce((a,b)=>a+b,0):initContentCart.map(item=>item.total).reduce((a,b)=>a+b,0))
      
    const [initOptions,setInitOptions] = useState('?page=1')
        
    useEffect(()=>{
      if(localStorage.getItem("userLogged")){
        setIsUserLoggedIn(JSON.parse(localStorage.getItem("userLogged")))
      }
    },[])
  
    useEffect(()=>{
      if(isSectionOpen.openNotifications==true||isSectionOpen.openCart==true||isSectionOpen.openLogIn==true||isSectionOpen.openRegistration==true){
        setIsMainContent(false)
      }else if(isSectionOpen.openNotifications==false && isSectionOpen.openCart==false && isSectionOpen.openLogIn==false && isSectionOpen.openRegistration==false){
        setIsMainContent(true)
      }
    },[isSectionOpen])
  
    function CloseEverything() {
      setIsExplore(!isExplore);
      setMessageIcon({isNotifications:false,isCart:false,isUser:false,isMenu:false});
    }
  
    const states = {isExplore,isUserLoggedIn,isMainContent,isMessageIcon,isSectionOpen,initOptions}
    const callbacks = {
      CloseEverything,
      setIsExplore,
      setIsUserLoggedIn,
      setMessageIcon,
      setIsSectionOpen,
      setNumberOfCartItems,
      setNumberOfNotifications,
      setInitOptions
    }

    return{
        states:states,
        callbacks,callbacks,
        numberOfCartItems:numberOfCartItems,
        numberOfNotifications:numberOfNotifications
    }
}