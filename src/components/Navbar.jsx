import { useState } from "react"
import Explore from "./Explore"
import NavbarIcons from "./NavbarIcons"
import NavbarSearch from "./NavbarSearch"
import NavbarMenu from "./NavbarMenu"
import RegistrationForm from "./RegistrationForm"
import NavbarPopUp from "./NavbarPopUp"

function Navbar() {

  const [isExplore,setIsExplore] = useState(false)
  const [isMessageIcon, setMessageIcon] = useState({isNotifications:false,isCart:false,isUser:false,isMenu:false})
  const [isUserLoggedIn,setIsUserLoggedIn] = useState(false)

  
  
  return (
    <div>
      <div>
        <span>Logo</span>
        <NavbarSearch onExplore={()=>{return (setIsExplore(!isExplore),setMessageIcon({isNotifications:false,isCart:false,isUser:false,isMenu:false}))}}/>
        <NavbarIcons onIconsClick={(stateIcons)=>{return (setIsExplore(false),setMessageIcon(stateIcons))}}/>
      </div>
      <div onClick={()=>{return (setIsExplore(false),setMessageIcon({isNotifications:false,isCart:false,isUser:false,isMenu:false}))}}>
        {isExplore && <Explore />}
      </div>
      <div onClick={()=>{return (setIsExplore(false),setMessageIcon({isNotifications:false,isCart:false,isUser:false,isMenu:false}))}}>
        {isMessageIcon.isNotifications && <NavbarPopUp content={["There are no notifications today!","See Notifications"]} onClick={(e)=>e.stopPropagation()}/>}
      </div>
      <div onClick={()=>{return (setIsExplore(false),setMessageIcon({isNotifications:false,isCart:false,isUser:false,isMenu:false}))}}>
        {isMessageIcon.isCart && <NavbarPopUp content={["You have 3 items in your Cart","See Cart"]} onClick={(e)=>e.stopPropagation()}/>}
      </div>
      <div onClick={()=>{return (setIsExplore(false),setMessageIcon({isNotifications:false,isCart:false,isUser:false,isMenu:false}))}}>
        {isMessageIcon.isUser && <NavbarPopUp content={["Sign in","Not Registered?","Sign Up"]} onClick={(e)=>e.stopPropagation()}/>}
      </div>
      <div onClick={()=>{return (setIsExplore(false),setMessageIcon({isNotifications:false,isCart:false,isUser:false,isMenu:false}))}}>
        {(isUserLoggedIn && isMessageIcon.isMenu) && <NavbarMenu onClick={(e)=>e.stopPropagation()}/>}
      </div>
      
      
      {/* <RegistrationForm/> */}
    </div>
  )
}

export default Navbar