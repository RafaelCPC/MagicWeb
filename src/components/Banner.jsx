import React, { useState, useRef, useEffect} from 'react'

const Banner = () => {
  const listRef = useRef();
  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(()=> {
    const listNode = listRef.current;
    const imgNode= listNode.querySelectorAll("li > img")[currentIndex];
    if(imgNode){
      imgNode.scrollIntoView({
        behavior:"smooth"
      });
    }
  
    const timerId = setInterval(() => {
      if (currentIndex < items.length){
        setCurrentIndex(currentIndex => currentIndex + 1);
      } else{
        setCurrentIndex(0);
      }
      
    },30000);
    
    return () => clearInterval(timerId);
  },[currentIndex])

  const items = [
  {
    id:1,
    image: "src/assets/banner1.jpg"
  },
  {
    id:2,
    image: "src/assets/banner2.webp"
  },
  {
    id:3,
    image: "src/assets/banner3.jpg",
  }
  ];
  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex)
  };

  return (
    
    <div  className='Carousel'>
      <div className='inner'>
        <div  className='container-images'>
           <ul  class="img_group" ref={listRef}>
              {items.map((item) =>{
                return (
                <li   key={item.id}>
                  <img  className='img_banner' src={item.image}/>
                </li>
                )}
              )}
           </ul>
        </div>

      </div>
          <div className='indicators'>
          {
            items.map((_,index)=>{
              return(
                <button className={`button_indicator ${index === currentIndex ? "active": ""}`} 
                onClick={()=>goToSlide(index)}
                key={index} 
                ></button>
              )
            })
          }
        </div>
    </div>
  )
}

export default Banner
