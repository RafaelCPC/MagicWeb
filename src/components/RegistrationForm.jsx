import { useState } from "react"
import Boton from "./Boton"
import Inputs from "./Inputs"

function RegistrationForm({setOpen}) {

  const [isRegistrationOpen, setIsRegistrationOpen]=useState(true)

  const [newUserData,setNewUserData] = useState({
    email: "",
    confirmEmail: "",
    password: "",
    confirmPassword: "",
  })

  function handleUserData(event) {
    name = event.target.name
    setNewUserData((prev)=>{return ({...prev,[name]:event.target.value})})
    console.log(event.target.value)
  }

  function handleClickSubmitForm() {
    console.log('enviado')
  }

  function handleRegistrationSubmit(e) {
    e.preventDefault()
  }

  return (
    isRegistrationOpen && <div>
      <div>
        <h3>Registration</h3>
        <Boton text="close" callback={()=>{setOpen()}} isDisabled={false}/>
        <form onSubmit={handleRegistrationSubmit}>
            <Inputs labelText={"Email"} name={"email"} type="email" dataInput={newUserData.email} handler={handleUserData} placeholder="user@example.com"/>
            <Inputs labelText={"Confirm Email"} name={"confirmEmail"} type="email" dataInput={newUserData.confirmEmail} handler={handleUserData} placeholder="user@example.com"/>
            <Inputs labelText={"Password"} name={"password"} type="password" dataInput={newUserData.password} handler={handleUserData}/>
            <Inputs labelText={"Confirm Password"} name={"confirmPassword"} type="password" dataInput={newUserData.confirmPassword} handler={handleUserData}/>
            <p>Minimum 8 characters containing 2 of the following: Capital Letter, Lowercase Letter, Number, Special Character !@#$%^&*{"()"}-=+|:;\',{"<"}.{">"}</p>
            <Boton callback={()=>handleClickSubmitForm()} text="Log in" isDisabled={!newUserData.email}/>
        </form>
      </div>
    </div>
  )
}

export default RegistrationForm