import Boton from "./Boton"

function NavbarIcons({onIconsClick,stateIcons}) {

  function handleIconClick(stateIcons) {
    onIconsClick(stateIcons)
  }
  
  return (
    <div>
      <Boton callback={()=>handleIconClick({isNotifications:!stateIcons.isNotifications,isCart:false,isUser:false,isMenu:false})} text="Notifications"/>
      <Boton callback={()=>handleIconClick({isNotifications:false,isCart:!stateIcons.isCart,isUser:false,isMenu:false})} text="Cart"/>
      <Boton callback={()=>handleIconClick({isNotifications:false,isCart:false,isUser:!stateIcons.isUser,isMenu:false})} text="User"/>
      <Boton callback={()=>handleIconClick({isNotifications:false,isCart:false,isUser:false,isMenu:!stateIcons.isMenu})} text="Menu"/>
    </div>
    
  )
}

export default NavbarIcons