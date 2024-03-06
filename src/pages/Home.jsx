import MainContent from '../components/MainContent'
import Navbar from '../components/Navbar'
import { initNotifications, initContentCart } from "../components/NavbarData"
import { useUserStates } from '../hooks/useUserStates'

function Home() {

  const {states,callbacks,numberOfCartItems,numberOfNotifications} = useUserStates()

  return (
    <>
      <Navbar states={states} callbacks={callbacks} numberOfNotifications={numberOfNotifications} numberOfCartItems={numberOfCartItems} initContentCart={initContentCart} initNotifications={initNotifications}/>
      {states.isMainContent && <MainContent states={states} callbacks={callbacks} numberOfNotifications={numberOfNotifications} numberOfCartItems={numberOfCartItems}/>}
    </>
  )
}

export default Home