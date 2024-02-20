function NavbarCart() {

    function handleButtonCartClick() {
        console.log("See Cart")
    }

  return (
    <div>
        <p>You have 3 items in your Cart</p>
        <button onClick={handleButtonCartClick}>See Cart</button> 
    </div>
  )
}

export default NavbarCart