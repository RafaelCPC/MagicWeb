import { useEffect, useState } from "react"
import Explore from "./Explore"
import NavbarIcons from "./NavbarIcons"
import NavbarSearch from "./NavbarSearch"
import NavbarMenu from "./Menu"
import RegistrationForm from "./RegistrationForm"
import NavbarPopUp from "./NavbarPopUp"
import Logo from "./Logo"
import Boton from "./Boton"
import Notifications from "./Notifications"
import Cart from "./Cart"
import Login from "./Login"
import { initNotifications, initContentCart } from "./NavbarData"

function Navbar() {

  const [isUserLoggedIn,setIsUserLoggedIn] = useState(false)
  
  useEffect(()=>{
    if(localStorage.getItem("userLogged")){
      setIsUserLoggedIn(JSON.parse(localStorage.getItem("userLogged")))
    }
  },[])

  const [isExplore,setIsExplore] = useState(false)
  const [isMessageIcon, setMessageIcon] = useState({isNotifications:false,isCart:false,isUser:false,isMenu:false})
  

  const [openNotifications, setOpenNotifications] = useState(false) 
  const [openCart, setOpenCart] = useState(false) 
  const [openLogIn, setOpenLogIn] = useState(false) 
  const [openRegistration, setOpenRegistration] = useState(false) 

  const [numberOfNotifications,setNumberOfNotifications] = useState(initNotifications.filter(item=>item.isRead==false).length)
  const [numberOfCartItems,setNumberOfCartItems] = useState(initContentCart.length)

  useEffect(()=>{
    if(localStorage.getItem("notifications")>0){
      setNumberOfNotifications(JSON.parse(localStorage.getItem("notifications"))?.filter(item=>item.isRead==false).length)
    }else{
      setNumberOfNotifications(prev=>prev)
    }
    
    if(localStorage.getItem("cart")>0){
      setNumberOfCartItems(JSON.parse(localStorage.getItem("cart"))?.length)
    }else{
      setNumberOfCartItems(prev=>prev)
    }
  },[numberOfNotifications,numberOfCartItems])

  function CloseEverything() {
    setIsExplore(!isExplore);
    setMessageIcon({isNotifications:false,isCart:false,isUser:false,isMenu:false});
  }

  return (
    <div className="navbar-container">
      <div className="navbar">
        <div className="logo-navbar">
          <Logo height={42} />
        </div>
        <NavbarSearch onExplore={()=>CloseEverything()}/>
        <NavbarIcons stateIcons={isMessageIcon} onIconsClick={(stateIcons)=>{return (setIsExplore(false),setMessageIcon(stateIcons))}} userLogged={isUserLoggedIn}/>
      </div>
      <div className="elements-overlay" onClick={()=>{return (setIsExplore(false),setMessageIcon({isNotifications:false,isCart:false,isUser:false,isMenu:false}))}}>
        {isExplore && <Explore />}
        {isMessageIcon.isNotifications && <NavbarPopUp className="popup notifications-popup" content={[`You have ${numberOfNotifications?numberOfNotifications:"no"} unread notifications!`,<Boton text={"See Notifications"} callback={()=>{return (setOpenNotifications(true),setOpenCart(false),setOpenRegistration(false),setOpenLogIn(false))}}/>]} onClick={(e)=>e.stopPropagation()}/>}
        {isMessageIcon.isCart && <NavbarPopUp className="popup cart-popup" content={[`You have ${numberOfCartItems?numberOfCartItems:"no"} items in your Cart!`,<Boton text={"See Cart"} callback={()=>{return (setOpenNotifications(false),setOpenCart(true),setOpenRegistration(false),setOpenLogIn(false))}}/>]} onClick={(e)=>e.stopPropagation()}/>}
        {isMessageIcon.isUser && <NavbarPopUp className="popup user-popup" content={[<Boton text={"Sign in"} callback={()=>(setOpenNotifications(false),setOpenCart(false),setOpenRegistration(false),setOpenLogIn(true))}/>,"Not Registered?",<Boton text={"Sign Up"} callback={()=>{return (setOpenNotifications(false),setOpenCart(false),setOpenRegistration(true),setOpenLogIn(false))}}/>]} onClick={(e)=>e.stopPropagation()}/>}
      </div>
      
      {openNotifications && <Notifications isOpen={true} setOpen={()=>{setOpenNotifications(false)}} setTotalNotifications={N=>setNumberOfNotifications(N)} initNotifications={initNotifications}/>}
      {openCart && <Cart isOpen={true} setOpen={()=>setOpenCart(false)} setTotalCart={N=>setNumberOfCartItems(N)} initContentCart={initContentCart}/>} 
      {openLogIn && <Login isOpen={true} setOpen={()=>setOpenLogIn(false)} logged={()=>setIsUserLoggedIn(true)}/>}
      {openRegistration && <RegistrationForm isOpen={true} setOpen={()=>setOpenRegistration(false)}/>}
      {(isUserLoggedIn && isMessageIcon.isMenu) && <NavbarMenu onClick={(e)=>e.stopPropagation()} isOpen={true} logOut={()=>setIsUserLoggedIn(false)}/>}

    </div>
  )
}

export default Navbar