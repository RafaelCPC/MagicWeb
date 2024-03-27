import { useState } from "react";
import { cards1 } from "./Cards";
import { Link } from "react-router-dom";
export function TopPrices ({title}) { 
const [currentIndex, setCurrentIndex] = useState(0);
const scrollToCard = (direction) => {
    if(direction === "prev"){
        setCurrentIndex(curr => {
            const isFirstSlide = currentIndex === 0;
            return isFirstSlide ? 0: curr - 3;
        })
    } else {
        
        if(currentIndex < cards1.length-8) {
            setCurrentIndex( curr => curr + 3)
        }  else {
            setCurrentIndex(0)
        }
    }
} 

    return (
        <div className="top_prices">
            <p className="title_top"> {title} </p>
            
                <ul  className="price_list">
                {cards1.map((card) =>{
                return (  
                    <li style={{transform: `translateY(-${currentIndex*100}%)`, transition: "0.5s ease-out"}} className="top_box" key={card.id}> 
                        <div className="card_hover" > <img className="card" src={card.card} /> </div>
                        <button className="card_box" >
                        <p className="text_card"><Link to="/cardsinfo"> {card.cardname}</Link></p>
                        <p className="price">{card.price}</p>
                        </button>  
                    </li>)
                 })}
                </ul>
             
            <div className="arrows">
                <button onClick={()=>scrollToCard("prev")} className="arrowUp_button" >
                    <svg className="arrow_svg" fill="#000000" height="800px" width="800px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" 
                        viewBox="0 0 512 512" xmlSpace="preserve">
                        <g>
                        <g>
                        <path d="M256,0C114.837,0,0,114.837,0,256s114.837,256,256,256s256-114.837,256-256S397.163,0,256,0z M377.749,313.749
                        c-4.16,4.16-9.621,6.251-15.083,6.251c-5.462,0-10.923-2.091-15.083-6.251L256,222.165l-91.584,91.584
                        c-8.341,8.341-21.824,8.341-30.165,0c-8.341-8.341-8.341-21.824,0-30.165l106.667-106.667c8.341-8.341,21.824-8.341,30.165,0
                        L377.75,283.584C386.091,291.925,386.091,305.408,377.749,313.749z"/>
                        </g>
                        </g>
                        </svg>
                </button>
                <button  onClick={()=>scrollToCard("next")} className="arrowDown_button">
                    <svg className="arrow_svg" fill="#000000" height="800px" width="800px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" 
	                viewBox="0 0 512 512" xmlSpace="preserve">
                    <g>
	                <g>
		            <path d="M256,0C114.837,0,0,114.837,0,256s114.837,256,256,256s256-114.837,256-256S397.163,0,256,0z M377.749,228.416
			        L271.083,335.083c-4.16,4.16-9.621,6.251-15.083,6.251c-5.462,0-10.923-2.091-15.083-6.251L134.251,228.416
			        c-8.341-8.341-8.341-21.824,0-30.165s21.824-8.341,30.165,0L256,289.835l91.584-91.584c8.341-8.341,21.824-8.341,30.165,0
			        C386.091,206.592,386.091,220.075,377.749,228.416z"/>
	                </g>
                    </g>
                    </svg>
                </button>
            </div>
        </div>
    )
}