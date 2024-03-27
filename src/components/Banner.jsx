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
    image: "src/assets/Banner_1.png"
  },
  {
    id:2,
    image: "src/assets/Banner_2.png"
  },
  {
    id:3,
    image: "src/assets/Banner_3.png",
  }
  ];
  const itemsMob = [
    {
      id:1,
      image: "src/assets/Banner_1_mob.png"
    },
    {
      id:2,
      image: "src/assets/Banner_2_mob.png"
    },
    {
      id:3,
      image: "src/assets/Banner_3_mob.png",
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
           <ul  className="img_group_mob" >
              {itemsMob.map((item) =>{
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
                > 
                </button>
              )
            })
          }
        </div>
    </div>
  )
}

export default Banner
