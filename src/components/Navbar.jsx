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

function Navbar() {

  const [isExplore,setIsExplore] = useState(false)
  const [isMessageIcon, setMessageIcon] = useState({isNotifications:false,isCart:false,isUser:false,isMenu:false})
  const [isUserLoggedIn,setIsUserLoggedIn] = useState(false)

  const [openNotifications, setOpenNotifications] = useState(false) 
  const [openCart, setOpenCart] = useState(false) 
  const [openLogIn, setOpenLogIn] = useState(false) 
  const [openRegistration, setOpenRegistration] = useState(false) 

  const initNotifications = [
    {id:"notif1",isRead:false,toggle:false,titleAndText:["Doctor Who edition! Now available","MTG Masters team"],content:["Explore the magic of the Doctor Who edition! Unleash the power of iconic characters. Limited stock. Dive into the enchantment now!"]},
    {id:"notif2",isRead:false,toggle:false,titleAndText:["I'd like to buy some of your singles","Yawgmoth"],content:["Your collection caught my eye! I'm interested in buying singles. Let's discuss a deal. Turn your cards into cash effortlessly!"]},
    {id:"notif3",isRead:false,toggle:false,titleAndText:["Scars of Mirrodin Booster Box has been sent!","MTG Masters shipping team"],content:["Exciting news! Your Scars of Mirrodin Booster Box is on its way. Get ready for a thrilling unboxing experience. Happy gaming!"]},
    {id:"notif4",isRead:false,toggle:false,titleAndText:["Boost your earnings! Sell us your cards","MTG Masters team"],content:["Ready to upgrade your deck? Sell your cards to us and boost your earnings. Turn your collection into profit today!"]},
    {id:"notif5",isRead:false,toggle:false,titleAndText:["New arrivals! Strixhaven Mystical Archive now in stock","MTG Masters team"],content:["Dive into the magical world of Strixhaven Mystical Archive. Fresh arrivals just landed – explore the enchantment and upgrade your deck!"]},
    {id:"notif6",isRead:false,toggle:false,titleAndText:["Special Offer: Trade with us and get a bonus booster!","MTG Masters team"],content:["Unlock extra value! Trade with us today and receive a bonus booster pack with your transaction. Elevate your collection now!"]},
    {id:"notif7",isRead:false,toggle:false,titleAndText:["Order Shipped: Modern Horizons 2 Set Booster Box en route!","MTG Masters team"],content:["Exciting news! Your Modern Horizons 2 Set Booster Box is on its way. Get ready for a powerful addition to your card collection."]},
    {id:"notif8",isRead:false,toggle:false,titleAndText:["Exclusive Flash Sale! Limited-time discounts on select foils","MTG Masters team"],content:["Don't miss out! Exclusive flash sale on select foils. Limited-time discounts to enhance your deck. Upgrade your strategy with premium cards now!"]},
  ];
  const [numberOfNotifications,setNumberOfNotifications] = useState(initNotifications.filter(item=>item.isRead==false).length)

  useEffect(()=>{
    setNumberOfNotifications(JSON.parse(localStorage.getItem("notifications"))?.filter(item=>item.isRead==false).length)
  },[numberOfNotifications])
  
  
  return (
    <div>
      <div>
        <Logo height={50}/>
        <NavbarSearch onExplore={()=>{return (setIsExplore(!isExplore),setMessageIcon({isNotifications:false,isCart:false,isUser:false,isMenu:false}))}}/>
        <NavbarIcons stateIcons={isMessageIcon} onIconsClick={(stateIcons)=>{return (setIsExplore(false),setMessageIcon(stateIcons))}}/>
      </div>
      <div onClick={()=>{return (setIsExplore(false),setMessageIcon({isNotifications:false,isCart:false,isUser:false,isMenu:false}))}}>
        {isExplore && <Explore />}
        {isMessageIcon.isNotifications && <NavbarPopUp content={[`You have ${numberOfNotifications?numberOfNotifications:"no"} unread notifications!`,<Boton text={"See Notifications"} callback={()=>setOpenNotifications(true)}/>]} onClick={(e)=>e.stopPropagation()}/>}
        {isMessageIcon.isCart && <NavbarPopUp content={["You have 3 items in your Cart",<Boton text={"See Cart"} callback={()=>setOpenCart(true)}/>]} onClick={(e)=>e.stopPropagation()}/>}
        {isMessageIcon.isUser && <NavbarPopUp content={[<Boton text={"Sign in"} callback={()=>setOpenLogIn(true)}/>,"Not Registered?",<Boton text={"Sign Up"} callback={()=>setOpenRegistration(true)}/>]} onClick={(e)=>e.stopPropagation()}/>}
        {(isUserLoggedIn && isMessageIcon.isMenu) && <NavbarMenu onClick={(e)=>e.stopPropagation()}/>}
      </div>
      
      {openNotifications && <Notifications isOpen={true} setOpen={()=>{setOpenNotifications(false)}} setTotalNotifications={N=>setNumberOfNotifications(N)} initNotifications={initNotifications}/>}
      {openCart && <Cart isOpen={true} setOpen={()=>setOpenCart(false)}/>} 
      {openLogIn && <Login isOpen={true} setOpen={()=>setOpenLogIn(false)}/>}
      {openRegistration && <RegistrationForm isOpen={true} setOpen={()=>setOpenRegistration(false)}/>}

    </div>
  )
}

export default Navbar