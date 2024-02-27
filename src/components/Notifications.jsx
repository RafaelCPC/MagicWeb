import { useState } from "react"
import Boton from "./Boton"
import Lists from "./Lists"

function Notifications({isOpen,setOpen}) {

    const [contentNotifications,setContentNotifications] = useState([
        {id:"notif1",isRead:false,toggle:false,titleAndText:["gdgdg","dfsdfsfd"],content:["dfilughdoiflghjdlfkjgldfj"]},
        {id:"notif2",isRead:false,toggle:false,titleAndText:["gdgdg"],content:["dfilughdoiflghjdlfkjgldfj"]},
        {id:"notif3",isRead:false,toggle:false,titleAndText:["gdgdg"],content:["dfilughdoiflghjdlfkjgldfj"]},
        {id:"notif4",isRead:false,toggle:false,titleAndText:["gdgdg"],content:["dfilughdoiflghjdlfkjgldfj"]},
    ])

    function handleNotificationClick(id){
        setContentNotifications((prev)=>prev.map(item=>item.id==id?({...item,["isRead"]:true,["toggle"]:!item.toggle}):{...item}))
    }
    
    function handleDeleteNotification(id) {
        setContentNotifications((prev)=>prev.filter(item=>item.id!==id))
    }

  return (
    isOpen && <div className="notifications-overlay">
        <div>
            <h3>Notifications</h3>
            <Boton text="close" callback={()=>setOpen()} isDisabled={false}/>
            <ul>
            {
            contentNotifications.map((notification)=>{
                return(
                <div key={notification.id} onClick={()=>handleNotificationClick(notification.id)}>
                    {notification.isRead?<p>notification Read</p>:<p>notification not Read</p>}
                    <Lists content={notification.titleAndText}/>
                    {notification.toggle && <p>{notification.content}</p>}
                    <div onClick={()=>handleDeleteNotification(notification.id)}>notif trash</div>
                </div>
                )
            })
            }
            </ul>
        </div>
    </div>
  )
}

export default Notifications