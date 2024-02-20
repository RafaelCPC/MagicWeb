function NavbarUser() {
    function handleButtonSignInClick() {
        console.log("Sign In")
    }

    function handleButtonSignUpClick() {
        console.log("Sign Up")
    }

  return (
    <div>
        <button onClick={handleButtonSignInClick}>Sign In</button> 
        <p>Not Registered?</p>
        <button onClick={handleButtonSignUpClick}>Sign Up</button> 
    </div>
  )
}

export default NavbarUser