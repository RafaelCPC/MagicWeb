import Lists from "./Lists"


function NavbarPopUp({content,className}) {

  return (
    <div className="popup-overlay">
      <div className={className}>
        <Lists content={content}/>
      </div>
    </div>
  )
}

export default NavbarPopUp