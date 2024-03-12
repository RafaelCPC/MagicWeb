import { useState } from "react"
import Lupa from "./Lupa.JSX"

function NavbarSearch({onExplore}) {


  const [inputSearch,setInputSearch]=useState("")

  function handleInputNavbarClick() {
    onExplore.CloseEverything();
    //onExplore.setInitOptions(`?name=${inputSearch}`)
  }
  
  function handleInputNavbarChange(e) {
    setInputSearch(e.target.value)
  } 

  function handleSubmit(e){
    e.preventDefault()
  }

  function handleClickButtonSearch(e) {
    console.log("búsqueda: "+ inputSearch)
    //onExplore.setInitOptions(`?name=${inputSearch}`)
  }

  return (
    <div className="navbar-search">
      <form onSubmit={handleSubmit} className="form-navbar">
        <input  className="input-search" value={inputSearch} type="text" name="" id="" onClick={handleInputNavbarClick} onChange={handleInputNavbarChange} placeholder="Search..."/>
        <button type="submit" onClick={handleClickButtonSearch}><Lupa/></button>
    </form>
    </div>
    
  )
}

export default NavbarSearch