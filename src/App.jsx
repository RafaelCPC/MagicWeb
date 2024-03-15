import ExplorePage from "./pages/ExplorePage"
import { useUserStates } from "./hooks/useUserStates"
import Home from "./pages/Home"
import { Route, Routes } from "react-router-dom"
import CardsStats from "./pages/CardsStats"

function App() {

  const {states,callbacks,numberOfCartItems,numberOfNotifications} = useUserStates()

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
