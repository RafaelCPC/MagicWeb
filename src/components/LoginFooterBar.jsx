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
        <div className="div2"><h2>Join Our Community log-in Naw</h2></div>
        <div><Boton className={"LoginFooterBar-button"} callback={() => handleFuction()} text="Log-in" isDisabled={false}/></div>
        
    </div>
  )
}
export default LoginFooterBar