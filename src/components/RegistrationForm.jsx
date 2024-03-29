import { useState } from "react"
import Boton from "./Boton"
import Inputs from "./Inputs"
import CloseIcon from "./CloseIcon"
import ManaSvg from "./ManaSvg"

function RegistrationForm({isOpen,setOpen}) {

  const [newUserData,setNewUserData] = useState({
    email: "",
    confirmEmail: "",
    password: "",
    confirmPassword: "",
  })

  function handleUserData(event) {
    name = event.target.name
    setNewUserData((prev)=>{return ({...prev,[name]:event.target.value})})
  }

  function handleClickSubmitForm() {
    console.log('enviado')
  }

  function handleRegistrationSubmit(e) {
    e.preventDefault()
  }

  return (
    isOpen && 
    <>
      <div className="sections-overlay registration-overlay" onClick={()=>setOpen()}>
        <div onClick={(event)=>event.stopPropagation()}>
          <div>
            <h3>Sign Up</h3>
            <Boton text={<CloseIcon/>} callback={()=>{setOpen()}} isDisabled={false}/>
          </div>
          <form onSubmit={handleRegistrationSubmit}>
              <Inputs labelText={"Email"} name={"email"} type="email" dataInput={newUserData.email} handler={handleUserData} placeholder="user@example.com"/>
              <Inputs labelText={"Confirm Email"} name={"confirmEmail"} type="email" dataInput={newUserData.confirmEmail} handler={handleUserData} placeholder="user@example.com"/>
              <Inputs labelText={"Password"} name={"password"} type="password" dataInput={newUserData.password} handler={handleUserData}/>
              <Inputs labelText={"Confirm Password"} name={"confirmPassword"} type="password" dataInput={newUserData.confirmPassword} handler={handleUserData}/>
              <p>Minimum 8 characters containing 2 of the following: Capital Letter, Lowercase Letter, Number, Special Character !@#$%^&*{"()"}-=+|:;\',{"<"}.{">"}</p>
              <Boton className="LoginFooterBar-button" callback={()=>handleClickSubmitForm()} text="Sign up" isDisabled={!newUserData.email}/>
          </form>
        </div>
      </div>
    <ManaSvg/>
		</>
  )
}

export default RegistrationForm