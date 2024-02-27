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

  const [isExplore,setIsExplore] = useState(false)
  const [isMessageIcon, setMessageIcon] = useState({isNotifications:false,isCart:false,isUser:false,isMenu:false})
  

  const [openNotifications, setOpenNotifications] = useState(false) 
  const [openCart, setOpenCart] = useState(false) 
  const [openLogIn, setOpenLogIn] = useState(false) 
  const [openRegistration, setOpenRegistration] = useState(false) 

  const [numberOfNotifications,setNumberOfNotifications] = useState(initNotifications.filter(item=>item.isRead==false).length)
  const [numberOfCartItems,setNumberOfCartItems] = useState(initContentCart.length)

  useEffect(()=>{
    if(localStorage.length>0){
      setNumberOfNotifications(JSON.parse(localStorage.getItem("notifications"))?.filter(item=>item.isRead==false).length)
      setNumberOfCartItems(JSON.parse(localStorage.getItem("cart"))?.length)
    }
  },[numberOfNotifications,numberOfCartItems])
  
  
  return (
    <div>
      <div>
        <Logo height={50}/>
        <NavbarSearch onExplore={()=>{return (setIsExplore(!isExplore),setMessageIcon({isNotifications:false,isCart:false,isUser:false,isMenu:false}))}}/>
        <NavbarIcons stateIcons={isMessageIcon} onIconsClick={(stateIcons)=>{return (setIsExplore(false),setMessageIcon(stateIcons))}}/>
      </div>
      <div onClick={()=>{return (setIsExplore(false),setMessageIcon({isNotifications:false,isCart:false,isUser:false,isMenu:false}))}}>
        {isExplore && <Explore />}
        {isMessageIcon.isNotifications && <NavbarPopUp content={[`You have ${numberOfNotifications?numberOfNotifications:"no"} unread notifications!`,<Boton text={"See Notifications"} callback={()=>{return (setOpenNotifications(true),setOpenCart(false),setOpenRegistration(false))}}/>]} onClick={(e)=>e.stopPropagation()}/>}
        {isMessageIcon.isCart && <NavbarPopUp content={[`You have ${numberOfCartItems?numberOfCartItems:"no"} items in your Cart`,<Boton text={"See Cart"} callback={()=>{return (setOpenNotifications(false),setOpenCart(true),setOpenRegistration(false))}}/>]} onClick={(e)=>e.stopPropagation()}/>}
        {isMessageIcon.isUser && <NavbarPopUp content={[<Boton text={"Sign in"} callback={()=>setOpenLogIn(true)}/>,"Not Registered?",<Boton text={"Sign Up"} callback={()=>{return (setOpenNotifications(false),setOpenCart(false),setOpenRegistration(true))}}/>]} onClick={(e)=>e.stopPropagation()}/>}
        {(isUserLoggedIn && isMessageIcon.isMenu) && <NavbarMenu onClick={(e)=>e.stopPropagation()}/>}
      </div>
      
      {openNotifications && <Notifications isOpen={true} setOpen={()=>{setOpenNotifications(false)}} setTotalNotifications={N=>setNumberOfNotifications(N)} initNotifications={initNotifications}/>}
      {openCart && <Cart isOpen={true} setOpen={()=>setOpenCart(false)} setTotalCart={N=>setNumberOfCartItems(N)} initContentCart={initContentCart}/>} 
      {openLogIn && <Login isOpen={true} setOpen={()=>setOpenLogIn(false)}/>}
      {openRegistration && <RegistrationForm isOpen={true} setOpen={()=>setOpenRegistration(false)}/>}

    </div>
  )
}

export default Navbar