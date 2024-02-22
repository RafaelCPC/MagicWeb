import Logo from "./Logo"
import './index.css';

export const LoginFooterBar = () => {
  return (
    <div className="LoginFooterBar">
        <Logo/>
        <h2>Join Our Community log-in Naw</h2>
        <button className="LoginFooterBar-button">Log-in</button>
    </div>
  )
}
export default LoginFooterBar