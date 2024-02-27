import Boton from "./Boton"

function Login({isOpen,setOpen}) {
    return (
        isOpen && <div className="Login Overlay">
            <div>
                <h3>Sign In</h3>
                <Boton text="close" callback={()=>{setOpen()}} isDisabled={false}/>
            </div>
        </div>
    )
}

export default Login