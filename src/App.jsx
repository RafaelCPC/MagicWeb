import { Route, Routes } from 'react-router-dom'
import Banner from './Components/Banner'
import { TopPrices } from './components/TopPrices'

function App() {

  return (
    <div className='App'>
      <Banner />
      <TopPrices title="TOP PRICES" />

      <Routes>

      </Routes>
    </div>
  )
}

export default App
