import { useState } from "react"

function NavbarSearch({onExplore}) {

  const [inputSearch,setInputSearch]=useState("")

  function handleInputNavbarClick() {
    onExplore()
  }
  
  function handleInputNavbarChange(e) {
    setInputSearch(e.target.value)
  } 

  function handleSubmit(e){
    e.preventDefault()
  }

  function handleClickButtonSearch(e) {
    console.log("búsqueda: "+ inputSearch)
  }

  return (
    <form onSubmit={handleSubmit}>
        <input value={inputSearch} type="text" name="" id="" onClick={handleInputNavbarClick} onChange={handleInputNavbarChange}/>
        <button type="submit" onClick={handleClickButtonSearch}></button>
    </form>
  )
}

export default NavbarSearch