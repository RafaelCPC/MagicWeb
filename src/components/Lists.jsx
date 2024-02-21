function Lists({content=[],links=[]}) {
  return (
    content.map((item,index)=>{
      return(
      <p key={index}>{item}</p>
    )})
  )
}

export default Lists