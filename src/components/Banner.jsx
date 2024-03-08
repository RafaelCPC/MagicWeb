import React, { useState, useEffect} from 'react'

const Banner = () => {
 
  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(()=> {
    const timerId = setInterval(() => {
      if (currentIndex < items.length-1){
        setCurrentIndex(currentIndex => currentIndex + 1);
      } else{
        setCurrentIndex(0);
      }
      
    },3000);
    
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
           <ul  className="img_group" >
              {items.map((item) =>{
                return (
                <li    key={item.id}>
                  <img style={{transform: `translate(-${currentIndex*100}%)`}} className='img_banner' src={item.image}/>
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
