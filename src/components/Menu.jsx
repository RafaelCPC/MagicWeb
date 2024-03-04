import { useState } from "react"
import Lists from "./Lists"
import UserMenuIcons from "./UserMenuIcons"

function Menu({isOpen,logOut}) {

  const menuItems = [
    {id:"item1",svg:"url",nombreItem:"Profile"},
    {id:"item2",svg:"url",nombreItem:"Friends"},
    {id:"item3",nombreItem:"Favorites"},
    {id:"item4",nombreItem:"My Wallet",subItems:["Earnings","Pending","History"]},
  ]

  const [openSubMenu,setOpenSubMenu] = useState(false)

  function handleLogOut() {
    logOut()
    localStorage.setItem("userLogged","false")
  }

  return (
    isOpen && <>
    <div className="user-menu">
        <div className="user-menu-photo">
          <img src="src\assets\User.png" alt="foto usuario" width={150}/>
          <h3>Jace Beleren</h3>
        </div>
        <div className="user-menu-content">
          <ul>
              {
              menuItems.map((menuItem,index)=>{
                  return( 
                      <div key={menuItem.id}>
                        <div  className="user-menu-list-item"  onClick={()=>menuItem.subItems?setOpenSubMenu(!openSubMenu):setOpenSubMenu(openSubMenu)}>
                        
                          <UserMenuIcons index={index}/>
                          <p>{menuItem.nombreItem}</p>
                        </div>
                          {(menuItem.subItems && openSubMenu) && <div className="user-menu-submenu">
                            <Lists content={menuItem.subItems}/></div>
                          }
                      </div>
                  )
              })
              }
            </ul>
          </div>
          <div className="user-menu-settings">
            <div>
              <UserMenuIcons index={menuItems.length}/>
              <p>Settings</p>
            </div>
          </div>
          <div className="user-menu-last">
            <div>
              <UserMenuIcons index={menuItems.length+1}/>
              <p>Help</p>
            </div>
            <div onClick={handleLogOut}>
              <UserMenuIcons index={menuItems.length+2}/>
              <p>Log Out</p>
            </div>
          </div>
    </div>
    </>
  )
}

export default Menu