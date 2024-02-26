import { useState } from "react"
import Explore from "./Explore"
import NavbarIcons from "./NavbarIcons"
import NavbarSearch from "./NavbarSearch"
import NavbarMenu from "./NavbarMenu"
import RegistrationForm from "./RegistrationForm"
import NavbarPopUp from "./NavbarPopUp"
import Logo from "./Logo"
import Boton from "./Boton"

function Navbar() {

  const [isExplore,setIsExplore] = useState(false)
  const [isMessageIcon, setMessageIcon] = useState({isNotifications:false,isCart:false,isUser:false,isMenu:false})
  const [isUserLoggedIn,setIsUserLoggedIn] = useState(false)

  const [openNotifications, setOpenNotifications] = useState(false) 
  const [openCart, setOpenCart] = useState(false) 
  const [openLogIn, setOpenLogIn] = useState(false) 
  const [openRegistration, setOpenRegistration] = useState(false) 

  
  
  return (
    <div>
      <div>
        <Logo/>
        <NavbarSearch onExplore={()=>{return (setIsExplore(!isExplore),setMessageIcon({isNotifications:false,isCart:false,isUser:false,isMenu:false}))}}/>
        <NavbarIcons onIconsClick={(stateIcons)=>{return (setIsExplore(false),setMessageIcon(stateIcons))}}/>
      </div>
      <div onClick={()=>{return (setIsExplore(false),setMessageIcon({isNotifications:false,isCart:false,isUser:false,isMenu:false}))}}>

        {isExplore && <Explore />}
        {isMessageIcon.isNotifications && <NavbarPopUp content={["There are no notifications today!",<Boton text={"See Notifications"} callback={()=>setOpenNotifications(true)}/>]} onClick={(e)=>e.stopPropagation()}/>}
        {isMessageIcon.isCart && <NavbarPopUp content={["You have 3 items in your Cart",<Boton text={"See Cart"} callback={()=>setOpenCart(true)}/>]} onClick={(e)=>e.stopPropagation()}/>}
        {isMessageIcon.isUser && <NavbarPopUp content={[<Boton text={"Sign in"} callback={()=>setOpenLogIn(true)}/>,"Not Registered?",<Boton text={"Sign Up"} callback={()=>setOpenRegistration(true)}/>]} onClick={(e)=>e.stopPropagation()}/>}
        {(isUserLoggedIn && isMessageIcon.isMenu) && <NavbarMenu onClick={(e)=>e.stopPropagation()}/>}
      </div>
      
      {/* {openNotifications && <RegistrationForm setOpen={()=>setOpenNotifications(false)}/>}
      {openCart && <RegistrationForm setOpen={()=>setOpenCart(false)}/>} */}
      {/* {openLogIn && <RegistrationForm setOpen={()=>setOpenLogIn(false)}/>} */}
      {openRegistration && <RegistrationForm setOpen={()=>setOpenRegistration(false)}/>}

    </div>
  )
}

export default Navbar