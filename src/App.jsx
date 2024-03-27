import { Route, Routes } from 'react-router-dom'
import GoogleApi from './components/GoogleApi'
import Home from './pages/Home'
import ExplorePage from './pages/ExplorePage'
import CardsStats from './pages/CardsStats'
import { useUserStates } from "./hooks/useUserStates"

function App() {

  const {states,callbacks,numberOfCartItems,numberOfNotifications} = useUserStates()
  {/* <GoogleApi /> */}
  return (
    <Routes>
      <Route path="/" element={<Home  states={states} callbacks={callbacks} numberOfCartItems={numberOfCartItems} numberOfNotifications={numberOfNotifications}/>}/>
      <Route path="explore" element={<ExplorePage states={states} callbacks={callbacks} numberOfCartItems={numberOfCartItems} numberOfNotifications={numberOfNotifications}/>}/>
      <Route  path="/cardsinfo" element={<CardsStats states={states} callbacks={callbacks} numberOfCartItems={numberOfCartItems} numberOfNotifications={numberOfNotifications}/>}>
          {/* <Route path=":id" element={<CardsStats />}/> */}
        </Route> 
    </Routes>
  )
  }

export default App

