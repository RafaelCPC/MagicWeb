import { useEffect, useState } from 'react'
import MainContent from '../components/MainContent'
import Navbar from '../components/Navbar'
import { initNotifications, initContentCart } from "../components/NavbarData"

function Home() {

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

  const [numberOfNotifications,setNumberOfNotifications] = useState(initNotifications.filter(item=>item.isRead==false).length)
  const [numberOfCartItems,setNumberOfCartItems] = useState(initContentCart.length)

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

  const states = {isExplore,isUserLoggedIn,isMessageIcon,isSectionOpen}
  const callbacks = {
    CloseEverything,
    setIsExplore,
    setIsUserLoggedIn,
    setMessageIcon,
    setIsSectionOpen,
    setNumberOfCartItems,
    setNumberOfNotifications
  }

  return (
    <>
      <Navbar states={states} callbacks={callbacks} numberOfNotifications={numberOfNotifications} numberOfCartItems={numberOfCartItems} initContentCart={initContentCart} initNotifications={initNotifications}/>
      {isMainContent && <MainContent states={states} callbacks={callbacks} numberOfNotifications={numberOfNotifications} numberOfCartItems={numberOfCartItems}/>}
    </>
  )
}

export default Home