function Inputs({labelText,name,type="text",placeholder="",dataInput,handler}) {
  return (
    <>
      <label htmlFor={name}>{labelText}</label>
      <input type={type} name={name}  value = {dataInput} onChange={handler} placeholder={placeholder}/>
    </>
  )
}

export default Inputs