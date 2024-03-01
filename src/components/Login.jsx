import { useState } from "react"
import Boton from "./Boton"
import Inputs from "./Inputs"
import CloseIcon from "./CloseIcon"
import ManaSvg from "./ManaSvg"

function Login({isOpen,setOpen}) {

    const [newUserData,setNewUserData] = useState({
        email: "",
        password: "",
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
        <div className="sections-overlay registration-overlay">
            <div>
                <div>
                   <h3>Sign In</h3>
                    <Boton text={<CloseIcon/>} callback={()=>{setOpen()}} isDisabled={false}/> 
                </div>
                <form onSubmit={handleRegistrationSubmit}>
                    <Inputs labelText={"Email"} name={"email"} type="email" dataInput={newUserData.email} handler={handleUserData} placeholder="user@example.com"/>
                    <Inputs labelText={"Password"} name={"password"} type="password" dataInput={newUserData.password} handler={handleUserData}/>
                    <Boton className="LoginFooterBar-button" callback={()=>handleClickSubmitForm()} text="Log-in" isDisabled={!newUserData.email}/>
                </form>
            </div>
        </div>
        <ManaSvg/>
        </>
    )
}

export default Login