import { useEffect, useState } from "react"
import NavbarIcons from "./NavbarIcons"
import NavbarSearch from "./NavbarSearch"
import Logo from "./Logo"
import { initNotifications, initContentCart } from "./NavbarData"
import OpenPopUps from "./OpenPopUps"
import OpenNavigationSections from "./OpenNavigationSections"
import { Link } from "react-router-dom"

function Navbar({states,callbacks,initContentCart,initNotifications,numberOfCartItems,numberOfNotifications}) {

  return (
    <div className="navbar-container">
      <div className="navbar">
        <div className="logo-navbar">
          <Link to={"/"}> 
            <Logo height={42} />
          </Link>
        </div>
        <NavbarSearch onExplore={callbacks}/>
        <NavbarIcons numberOfCartItems={numberOfCartItems} numberOfNotifications={numberOfNotifications} stateIcons={states.isMessageIcon} onIconsClick={(stateIcons)=>{return (callbacks.setIsExplore(false),callbacks.setMessageIcon(stateIcons))}} userLogged={states.isUserLoggedIn}/>
      </div>

      <OpenPopUps states={states} callbacks={callbacks} numberOfNotifications={numberOfNotifications} numberOfCartItems={numberOfCartItems}/>
      <OpenNavigationSections states={states} callbacks={callbacks} numberOfNotifications={numberOfNotifications} numberOfCartItems={numberOfCartItems} initContentCart={initContentCart} initNotifications={initNotifications}/>
      
    </div>
  )
}

export default Navbar