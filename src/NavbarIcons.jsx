function NavbarIcons({onIconsClick}) {

  function handleIconClick(stateIcons) {
    onIconsClick(stateIcons)
    console.log(stateIcons)
  }
  
  return (
    <div>
      <button onClick={()=>handleIconClick({isNotifications:true,isCart:false,isUser:false,isMenu:false})}>notifications</button>
      <button onClick={()=>handleIconClick({isNotifications:false,isCart:true,isUser:false,isMenu:false})}>cart</button>
      <button onClick={()=>handleIconClick({isNotifications:false,isCart:false,isUser:true,isMenu:false})}>user</button>
      <button onClick={()=>handleIconClick({isNotifications:false,isCart:false,isUser:false,isMenu:true})}>menu</button>
    </div>
    
  )
}

export default NavbarIcons