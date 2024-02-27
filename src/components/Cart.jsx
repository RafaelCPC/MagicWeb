import Boton from "./Boton"

function Cart({isOpen,setOpen}) {
    return (
      isOpen && <div className="Cart Overlay">
          <div>
              <h3>Your Cart</h3>
              <Boton text="close" callback={()=>{setOpen()}} isDisabled={false}/>
          </div>
      </div>
    )
  }

export default Cart