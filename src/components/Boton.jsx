function Boton({callback,text,isDisabled,className}) {

  return (
    <button onClick={callback} disabled={isDisabled} className={className}> 
      {text}
    </button>
  )
}

export default Boton