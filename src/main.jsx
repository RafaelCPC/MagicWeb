import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { SWRConfig } from "swr";

const fetcher = (type) => {if(type){ return fetch(`https://api.magicthegathering.io/v1/${type}`).then((res) => res.json())}};

ReactDOM.createRoot(document.getElementById('root')).render(
  <SWRConfig value={{fetcher}}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </SWRConfig>,
)
