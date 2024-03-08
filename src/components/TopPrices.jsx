import { useState } from "react"
export function TopPrices ({title}) {
    
    const [currentIndex, setCurrentIndex] = useState(0);

    
 const cards = [
    {
        id: 1,
        card: "src/assets/ganga1.png",
        cardname: "Assemble the Players",
        price: "1,09 €"
    },
    {
        id: 2,
        card: "src/assets/ganga2.png",
        cardname: "Yarok",
        price: "1,05 €"
    },
    {
        id: 3,
        card: "src/assets/ganga3.png",
        cardname: "Druid Elf",
        price: "1,16 €"
    },
    {
        id: 4,
        card: "src/assets/ganga4.webp",
        cardname: "Tassa",
        price: "1,13 €"
    },
    {
        id: 5,
        card: "src/assets/ganga5.jpg",
        cardname: "Teferi",
        price: "1,15 €"
    },
    {
        id: 6,
        card: "src/assets/ganga6.webp",
        cardname: "Ajani",
        price: "1,19 €"
    },
    {
        id: 7,
        card: "src/assets/ganga7.webp",
        cardname: "Nissa",
        price: "2,09 €"
    },
    {
        id: 8,
        card: "src/assets/ganga8.webp",
        cardname: "Tasha",
        price: "0,09 €"
    },
    {
        id: 9,
        card: "src/assets/ganga9.webp",
        cardname: "Ruin Crab",
        price: "1,19 €"
    },
    {
        id: 10,
        card: "src/assets/ganga10.jpg",
        cardname: "Chupacabras",
        price: "2,09 €"
    },
    {
        id: 11,
        card: "src/assets/ganga11.jpg",
        cardname: "Vivien",
        price: "0,13 €"
    },
    {
        id: 12,
        card: "src/assets/ganga1.png",
        cardname: "Counter",
        price: "0,15 €"
    },
    {
        id: 13,
        card: "src/assets/ganga1.png",
        cardname: "Dispell",
        price: "1,20 €"
    },
    {
        id: 14,
        card: "src/assets/ganga1.png",
        cardname: "Niv-mizzet",
        price: "2,59 €"
    },
    {
        id: 15,
        card: "src/assets/ganga1.png",
        cardname: "Liliana",
        price: "0,19 €"
    },
 ]
const scrollToCard = (direction) => {
    if(direction === "prev"){
        setCurrentIndex(curr => {
            const isFirstSlide = currentIndex === 0;
            return isFirstSlide ? 0: curr - 3;
        })
    } else {
        
        if(currentIndex < cards.length-8) {
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
                {cards.map((card) =>{
                return (  
                    <li style={{transform: `translateY(-${currentIndex*100}%)`}} className="top_box" key={card.id}> 
                        <button className="card_box" >
                        <p className="text_card"> {card.cardname}</p>
                        <p className="price">{card.price}</p>
                        </button>
                        <div className="card_hover" > <img className="card" src={card.card} /> </div>
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