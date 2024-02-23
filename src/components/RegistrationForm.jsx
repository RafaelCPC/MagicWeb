import { useState } from "react"
import Boton from "./Boton"

function RegistrationForm() {

  const [newUserData,setNewUserData] = useState({
    email: "",
    confirmEmail: "",
    password: "",
    confirmPassword: "",
  })

  function handleUserEmail(event) {
    setNewUserData({email:event.target.value})
  }

  function handleClick() {
    console.log('enviado')
  }

  function handleRegistrationSubmit(e) {
    e.preventDefault()
  }

  return (
    <div>
        <h3>Registration</h3>
        <button>Close</button>
        <form onSubmit={handleRegistrationSubmit}>
            <label htmlFor="email">Email: </label>
            <input type="email" name="email"  value = {newUserData.email} onChange={handleUserEmail}/>
            <label htmlFor="confirm-email">Confirm Email: </label>
            <input type="email" name="confirm-email" />
            <label htmlFor="password">Password: </label>
            <input type="password" name="password"  />
            <label htmlFor="confirm-password">Confirm Password: </label>
            <input type="password" name="confirm-password" />
            <p>Minimum 8 characters containing 2 of the following: Capital Letter, Lowercase Letter, Number, Special Character !@#$%^&*{"()"}-=+|:;\',{"<"}.{">"}</p>
            <Boton callback={()=>handleClick()} text="Hola mundo" isDisabled={!newUserData.email}/>
        </form>
        {/* <div onClick={()=>{return (setIsExplore(false),setMessageIcon({isNotifications:false,isCart:false,isUser:false,isMenu:false}))}}>
          {isMessageIcon.isUser && <NavbarPopUp content={["Sign in","Not Registered?","Sign Up"]} onClick={(e)=>e.stopPropagation()}/>}
        </div> */}
    </div>
  )
}

export default RegistrationForm