
import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import CardsStats from "./pages/CardsStats"

function App() {

  return (
    <>
    <Routes>
      <Route path="/" element={<Home />}/>
      
        <Route  path="/cardsinfo" element={<CardsStats />}>
          {/* <Route path=":id" element={<CardsStats />}/> */}
        </Route>      
      
    </Routes>
    </>
  )
}
    
export default App
