 
function Lists({content=[],className}) {
  return (
    content.map((item,index)=>{
      return(
      <div className={className} key={index}>{item}</div>
    )})
  )
}

export default Lists