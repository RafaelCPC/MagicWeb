import Boton from "./Boton"
import CartIcon from "./CartIcon"
import NotificationsIcon from "./NotificationsIcon"
import UserIcon from "./UserIcon"
import BurguerMenuIcon from "./BurguerMenuIcon"

function NavbarIcons({onIconsClick,stateIcons,userLogged}) {

  function handleIconClick(stateIcons) {
    onIconsClick(stateIcons)
  }
  
  return (
    <div className="navbar-icons">
      <Boton callback={()=>handleIconClick({isNotifications:!stateIcons.isNotifications,isCart:false,isUser:false,isMenu:false})} text={<NotificationsIcon/>}/>
      <Boton callback={()=>handleIconClick({isNotifications:false,isCart:!stateIcons.isCart,isUser:false,isMenu:false})} text={<CartIcon/>}/>
      {!userLogged && <Boton callback={()=>handleIconClick({isNotifications:false,isCart:false,isUser:!stateIcons.isUser,isMenu:false})} text={<UserIcon/>}/>}
      {userLogged && <Boton callback={()=>handleIconClick({isNotifications:false,isCart:false,isUser:false,isMenu:!stateIcons.isMenu})} text={<BurguerMenuIcon/>}/>}
    </div>
    
  )
}

export default NavbarIcons