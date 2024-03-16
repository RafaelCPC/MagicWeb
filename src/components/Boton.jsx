function Boton({callback,text,isDisabled,className}) {

  return (
    <button className={className} onClick={callback} disabled={isDisabled}> 
      {text}
    </button>
  )
}

export default Boton