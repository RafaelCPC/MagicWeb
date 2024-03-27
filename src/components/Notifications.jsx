import { useEffect, useState } from "react"
import Boton from "./Boton"
import Lists from "./Lists"
import NotificationRead from "./NotificationRead"
import DeleteIcon from "./DeleteIcon"
import CloseIcon from "./CloseIcon"
import ManaSvg from "./ManaSvg"
import { event } from "jquery"

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
    isOpen && <>
    <div className="sections-overlay notifications-menu" onClick={()=>setOpen()}>
        <div onClick={(event)=>event.stopPropagation()}>
            <div>
                <h3>Notifications</h3>
                <Boton text={<CloseIcon/>} callback={()=>setOpen()} isDisabled={false}/>
            </div>
            <ul>
            {
            contentNotifications.map((notification)=>{
                return(
                <div key={notification.id} onClick={()=>handleNotificationClick(notification.id)}>
                    {<NotificationRead read={notification.isRead}/>}
                    <div>
                        <Lists content={notification.titleAndText}/>
                        {notification.toggle && <p>{notification.content}</p>}
                    </div>
                    <Boton className="svg-delete-item" text={<DeleteIcon/>} callback={()=>handleDeleteNotification(notification.id)}/>
                </div>
                )
            })
            }
            </ul>
        </div>
    </div>
    <ManaSvg/>
    </>
  )
}

export default Notifications