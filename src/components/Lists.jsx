function Lists({content=[]}) {
  return (
    content.map((item,index)=>{
      return(
      <div key={index}>{item}</div>
    )})
  )
}

export default Lists