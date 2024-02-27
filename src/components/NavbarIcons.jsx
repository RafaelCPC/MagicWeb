import Boton from "./Boton"

function NavbarIcons({onIconsClick}) {

  function handleIconClick(stateIcons) {
    onIconsClick(stateIcons)
    console.log(stateIcons)
  }
  
  return (
    <div>
      <Boton callback={()=>handleIconClick({isNotifications:true,isCart:false,isUser:false,isMenu:false})} text="Notifications"/>
      <Boton callback={()=>handleIconClick({isNotifications:false,isCart:true,isUser:false,isMenu:false})} text="Cart"/>
      <Boton callback={()=>handleIconClick({isNotifications:false,isCart:false,isUser:true,isMenu:false})} text="User"/>
      <Boton callback={()=>handleIconClick({isNotifications:false,isCart:false,isUser:false,isMenu:true})} text="Menu"/>
    </div>
    
  )
}

export default NavbarIcons