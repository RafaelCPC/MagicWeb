import { Route, Routes } from 'react-router-dom'
import Banner from '../Components/Banner'
import { TopPrices } from '../components/TopPrices'
import GoogleApi from '../components/GoogleApi'

function App() {

  return (
    <div className='App'>
      <Banner />
      <TopPrices title="TOP PRICES" />
      <GoogleApi />
      <Routes>

      </Routes>
    </div>
  )
}

export default App

