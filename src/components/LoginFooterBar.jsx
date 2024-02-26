import Logo from "./Logo"
import '../index.css';
import Boton from "./Boton"

const handleFuction = () => {
  console.log("hola")
}
export const LoginFooterBar = () => {
  
  return (
    <div className="LoginFooterBar">
        <Logo height={70}/>
        <h2>Join Our Community log-in Naw</h2>
        <Boton className={"LoginFooterBar-button"} callback={() => handleFuction()} text="Log-in" isDisabled={false}/>
    </div>
  )
}
export default LoginFooterBar