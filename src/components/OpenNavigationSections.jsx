import React from 'react'
import Notifications from './Notifications'
import Cart from './Cart'
import Login from './Login'
import RegistrationForm from './RegistrationForm'
import Menu from './Menu'

function OpenNavigationSections({states,callbacks,initContentCart,initNotifications,setNumberOfCartItems,setNumberOfNotifications}) {

    function handleCloseSection(popUpName) {
        const newStates = {}
        const prev = Object.keys(states.isSectionOpen).filter(item=>item!={popUpName});
        prev.forEach(item=>newStates[`${item}`]=false);
        newStates[`${popUpName}`]=false
        callbacks.setIsSectionOpen(()=>
            newStates
        )
    }


  return (
    <>
    {states.isSectionOpen.openNotifications && <Notifications isOpen={true} setOpen={()=>{handleCloseSection("openNotifications")}} setTotalNotifications={N=>callbacks.setNumberOfNotifications(N)} initNotifications={initNotifications}/>}
       
    {states.isSectionOpen.openCart && <Cart isOpen={true} setOpen={()=>{handleCloseSection("openCart")}} setTotalCart={N=>callbacks.setNumberOfCartItems(N)} initContentCart={initContentCart}/>} 
      
    {states.isSectionOpen.openLogIn && <Login isOpen={true} setOpen={()=>{handleCloseSection("openLogIn")}} logged={()=>callbacks.setIsUserLoggedIn(true)}/>}
       
    {states.isSectionOpen.openRegistration && <RegistrationForm isOpen={true} setOpen={()=>{handleCloseSection("openRegistration")}}/>}
      
    {(states.isUserLoggedIn && states.isMessageIcon.isMenu) && <Menu onClick={(e)=>e.stopPropagation()} isOpen={true} logOut={()=>callbacks.setIsUserLoggedIn(false)}/>}
    
    </>
  )
}

export default OpenNavigationSections