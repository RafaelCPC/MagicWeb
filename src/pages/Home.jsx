import MainContent from '../components/MainContent'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { initNotifications, initContentCart } from "../components/NavbarData"

function Home({states,callbacks,numberOfCartItems,numberOfNotifications}) {

  return (
    <>
      <Navbar states={states} callbacks={callbacks} numberOfNotifications={numberOfNotifications} numberOfCartItems={numberOfCartItems} initContentCart={initContentCart} initNotifications={initNotifications}/>
      {states.isMainContent && <MainContent states={states} callbacks={callbacks} numberOfNotifications={numberOfNotifications} numberOfCartItems={numberOfCartItems}/>}
      {states.isMainContent && <Footer callbacks={()=>{callbacks.setMessageIcon(prev=>{return({...prev,["isUser"]:true})})}}/>}
    </>
  )
}

export default Home