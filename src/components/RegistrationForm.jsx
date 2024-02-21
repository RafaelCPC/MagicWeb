import { useState } from "react"

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

  

  function handleRegistrationSubmit(e) {
    e.preventDefault()
  }

  return (
    <div>
        <h3>Registration</h3>
        <button>Close</button>
        <form action="">
            <label htmlFor="email">Email: </label>
            <input type="email" name="email" value={newUserData.email} onChange={handleUserEmail}/>
            <label htmlFor="confirm-email">Confirm Email: </label>
            <input type="email" name="confirm-email" value={newUserData.confirmEmail}/>
            <label htmlFor="password">Password: </label>
            <input type="password" name="password"  value={newUserData.password}/>
            <label htmlFor="confirm-password">Confirm Password: </label>
            <input type="password" name="confirm-password" value={newUserData.confirmPassword}/>
            <p>Minimum 8 characters containing 2 of the following: Capital Letter, Lowercase Letter, Number, Special Character !@#$%^&*{"()"}-=+|:;\',{"<"}.{">"}</p>
            <button type="submit" onClick={handleRegistrationSubmit}></button>
        </form>
    </div>
  )
}

export default RegistrationForm