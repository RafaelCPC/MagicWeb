 
function Lists({content=[]}) {
  return (
    content.map((item,index)=>{
      return(
      <div className="ListOfLists" key={index}>{item}</div>
    )})
  )
}

export default Lists