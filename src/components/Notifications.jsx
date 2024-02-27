import { useEffect, useState } from "react"
import Boton from "./Boton"
import Lists from "./Lists"

function Notifications({isOpen,setOpen,setTotalNotifications,initNotifications}) {

    const [contentNotifications,setContentNotifications] = useState([])

    useEffect(()=>{
        if(localStorage.getItem("notifications")){
            setContentNotifications(JSON.parse(localStorage.getItem("notifications")))
        }else{
            setContentNotifications(initNotifications)  
        }
    },[])

    useEffect(()=>{
        console.log(contentNotifications[0])
        if(!!contentNotifications[0]){
            localStorage.setItem("notifications", JSON.stringify(contentNotifications));  
        }
        setTotalNotifications(contentNotifications.filter(item=>item.isRead==false).length)
    },[contentNotifications])

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
                    <Boton className="svg-delete-notifications" text={"Delete"} callback={()=>handleDeleteNotification(notification.id)}/>
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