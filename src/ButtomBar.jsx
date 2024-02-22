import SocialMedia from "./SocialMedia"
import Logo from "./Logo";
import './index.css'
function ButtomBar() {
  return (
    <div className="footer-bar">
        <Logo/>
        <p>&copy; 2000-2024, All Rights Reserved.</p>
        <SocialMedia/>
        
    </div>
  )
}

export default ButtomBar