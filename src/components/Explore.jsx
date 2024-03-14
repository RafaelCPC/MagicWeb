import { Link } from "react-router-dom"
import CardsIcons from "./CardsIcons"
import Lists from "./Lists"

function Explore({states,callback}) {

    console.log(callback)

    const exploreCategories=[
        {name: "Formats",
        id:"NavCat1",
        content: ["Standard","Pauper","Pioneer","Commander"]},
        {name: "Last Editions",
        id:"NavCat2",
        content: ["Murders at Karlov Manor","Ravnica Remastered","The Lost Caverns of Ixalan","The Lord Of The Rings: Tales Of Middle-earth","Universes Beyond: Doctor Who"]},
        {name: "Buy Cards",
        id:"NavCat3",
        content: ["How to Buy","Shop Sealed","Shop Singles","Build your Deck"]},
        {name: "Sell your Cards",
        id:"NavCat4",
        content: ["How to Sell","Sell your sealed/sets","Sell your singles"]},
        {name: "Deals",
        id:"NavCat5",
        content: ["Today’s deals","Exclusive sets"]},
    ]
    
  return (
    <div className="search-explore-overlay">
        <div className="search-explore-container" onClick={(e)=>e.stopPropagation()}>
            <div>
                <Link to={"/explore"}><h2 onClick={()=>callback.setIsExplore(false)}>Explore</h2></Link>
                <CardsIcons/>
            </div>
            <ul>
                {
                exploreCategories.map((category)=>{
                    return(
                    <li key={category.id}>
                        <h3>{category.name}</h3>
                        <Lists content={category.content}/>
                    </li>
                    )
                })
            }
            </ul>
        </div>
    </div>
  )
}

export default Explore