import Logo from "./Logo"
import '../index.css';
import Boton from "./Boton"
import { Callbacks } from "jquery";


export const LoginFooterBar = ({callback}) => {
  
  return (
    <div className="LoginFooterBar">
        <Logo height={70}/>
        <div className="div2"><h2>Join Our Community log-in New</h2></div>
        <div><Boton className={"LoginFooterBar-button"} callback={callback} text="Log-in" isDisabled={false}/></div>
        
    </div>
  )
}
export default LoginFooterBar