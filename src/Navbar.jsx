import { useState } from "react"
import Explore from "./Explore"
import NavbarIcons from "./NavbarIcons"
import NavbarSearch from "./NavbarSearch"
import NavbarNotifications from "./NavbarNotifications"
import NavbarCart from "./NavbarCart"
import NavbarUser from "./NavbarUser"
import NavbarMenu from "./NavbarMenu"

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
      {isExplore && <Explore/>}
      {isMessageIcon.isNotifications && <NavbarNotifications/>}
      {isMessageIcon.isCart && <NavbarCart/>}
      {isMessageIcon.isUser && <NavbarUser/>}
      {(isUserLoggedIn && isMessageIcon.isMenu) && <NavbarMenu/>}
    </div>
  )
}

export default Navbar