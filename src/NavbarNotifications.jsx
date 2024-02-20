function NavbarNotifications() {

    function handleButtonNotificationsClick() {
        console.log("See Notifications")
    }

  return (
    <div>
        <p>There are no notifications today!</p>
        <button onClick={handleButtonNotificationsClick}>See History</button> 
    </div>
  )
}

export default NavbarNotifications