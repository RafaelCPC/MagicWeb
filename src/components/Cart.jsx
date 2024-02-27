import Boton from "./Boton";

function Cart({ isOpen, setOpen }) {
  return (
    isOpen && (
      <div className="Cart Overlay">
        <div>
          <h3>Your Cart</h3>
          <Boton
            text="close"
            callback={() => {
              setOpen();
            }}
            isDisabled={false}
          />
          <ul>
            {contentNotifications.map((notification) => {
              return (
                <div key={notification.id} onClick={() => handleNotificationClick(notification.id)} >
                  <p>La imagen de la carta</p>
                  <Lists content={notification.titleAndText} />
                  <div>
                    <Boton />
                    <p></p>
                    <Boton />
                  </div>
                  <Boton className="svg-delete-item" text={"Delete"} callback={() => handleDeleteNotification(notification.id)}
                  />
                </div>
              );
            })}
          </ul>
          <div>
            <Boton />
            <Boton />
          </div>
        </div>
      </div>
    )
  );
}

export default Cart;
