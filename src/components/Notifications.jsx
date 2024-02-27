import { useEffect, useState } from "react"
import Boton from "./Boton"
import Lists from "./Lists"

function Notifications({isOpen,setOpen}) {

    const initNotifications = [
        {id:"notif1",isRead:false,toggle:false,titleAndText:["Doctor Who edition! Now available","MTG Masters team"],content:["Explore the magic of the Doctor Who edition! Unleash the power of iconic characters. Limited stock. Dive into the enchantment now!"]},
        {id:"notif2",isRead:false,toggle:false,titleAndText:["I'd like to buy some of your singles","Yawgmoth"],content:["Your collection caught my eye! I'm interested in buying singles. Let's discuss a deal. Turn your cards into cash effortlessly!"]},
        {id:"notif3",isRead:false,toggle:false,titleAndText:["Scars of Mirrodin Booster Box has been sent!","MTG Masters shipping team"],content:["Exciting news! Your Scars of Mirrodin Booster Box is on its way. Get ready for a thrilling unboxing experience. Happy gaming!"]},
        {id:"notif4",isRead:false,toggle:false,titleAndText:["Boost your earnings! Sell us your cards","MTG Masters team"],content:["Ready to upgrade your deck? Sell your cards to us and boost your earnings. Turn your collection into profit today!"]},
        {id:"notif5",isRead:false,toggle:false,titleAndText:["New arrivals! Strixhaven Mystical Archive now in stock","MTG Masters team"],content:["Dive into the magical world of Strixhaven Mystical Archive. Fresh arrivals just landed – explore the enchantment and upgrade your deck!"]},
        {id:"notif6",isRead:false,toggle:false,titleAndText:["Special Offer: Trade with us and get a bonus booster!","MTG Masters team"],content:["Unlock extra value! Trade with us today and receive a bonus booster pack with your transaction. Elevate your collection now!"]},
        {id:"notif7",isRead:false,toggle:false,titleAndText:["Order Shipped: Modern Horizons 2 Set Booster Box en route!","MTG Masters team"],content:["Exciting news! Your Modern Horizons 2 Set Booster Box is on its way. Get ready for a powerful addition to your card collection."]},
        {id:"notif8",isRead:false,toggle:false,titleAndText:["Exclusive Flash Sale! Limited-time discounts on select foils","MTG Masters team"],content:["Don't miss out! Exclusive flash sale on select foils. Limited-time discounts to enhance your deck. Upgrade your strategy with premium cards now!"]},
    ];

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