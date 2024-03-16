import Tabla from "../components/Tabla";

function CardsInfo() {

    const set={"sets":[  
        {  
        "code":"KTK",
        "name":"Sombras sobre Innistrad",
        "type":"expansion",
        "border":"black",
        "mkm_id":1495,
        "booster":[  
            [  
            "rare",
            "mythic rare"
            ],
            "uncommon",
            "uncommon",
            "uncommon",
            "common",
            "common",
            "common",
            "common",
            "common",
            "common",
            "common",
            "common",
            "common",
            "common",
            "land",
            "marketing"
        ],
        "mkm_name":"Khans of Tarkir",
        "releaseDate":"2014-09-26",
        "magicCardsInfoCode":"ktk",
        "block":"Khans of Tarkir"
        },
       
    ]
    }
      const card={  
        "cards":[  
            {  
            "name":"Archangel Avacyn",
            "names":[  
                "Archangel Avacyn",
                "Avacyn, the Purifier"
            ],
            "manaCost":"{3}{W}{W}",
            "cmc":5,
            "colors":[  
                "White"
            ],
            "colorIdentity":[
                "W"
            ],
            "type":"Legendary Creature — Angel",
            "supertypes":[  
                "Legendary"
            ],
            "types":[  
                "Creature"
            ],
            "subtypes":[  
                "Angel"
            ],
            "rarity":"Mythic Rare",
            "set":"SOI",
            "text":"Flash\nFlying, vigilance\nWhen Archangel Avacyn enters the battlefield, creatures you control gain indestructible until end of turn.\nWhen a non-Angel creature you control dies, transform Archangel Avacyn at the beginning of the next upkeep.",
            "artist":"James Ryman",
            "number":"5a",
            "power":"4",
            "toughness":"4",
            "layout":"double-faced",
            "multiverseid":409741,
            "imageUrl":"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=409741&type=card",
            "rulings":[  
                {  
                "date":"2016-04-08",
                "text":"Archangel Avacyn’s delayed triggered ability triggers at the beginning of the next upkeep regardless of whose turn it is."
                },
                {  
                "date":"2016-04-08",
                "text":"Archangel Avacyn’s delayed triggered ability won’t cause it to transform back into Archangel Avacyn if it has already transformed into Avacyn, the Purifier, perhaps because several creatures died in one turn."
                },
                {  
                "date":"2016-04-08",
                "text":"For more information on double-faced cards, see the Shadows over Innistrad mechanics article (http://magic.wizards.com/en/articles/archive/feature/shadows-over-innistrad-mechanics)."
                }
            ],
            "foreignNames":[  
                {  
                "name":"大天使艾维欣",
                "language":"Chinese Simplified",
                "multiverseid":410071
                },
                {  
                "name":"大天使艾維欣",
                "language":"Chinese Traditional",
                "multiverseid":410401
                },
                {  
                "name":"Archange Avacyn",
                "language":"French",
                "multiverseid":411061
                },
                {  
                "name":"Erzengel Avacyn",
                "language":"German",
                "multiverseid":410731
                },
                {  
                "name":"Arcangelo Avacyn",
                "language":"Italian",
                "multiverseid":411391
                },
                {  
                "name":"大天使アヴァシン",
                "language":"Japanese",
                "multiverseid":411721
                },
                {  
                "name":"대천사 아바신",
                "language":"Korean",
                "multiverseid":412051
                },
                {  
                "name":"Arcanjo Avacyn",
                "language":"Portuguese (Brazil)",
                "multiverseid":412381
                },
                {  
                "name":"Архангел Авацина",
                "language":"Russian",
                "multiverseid":412711
                },
                {  
                "name":"Arcángel Avacyn",
                "language":"Spanish",
                "multiverseid":413041
                }
            ],
            "printings":[  
                "SOI"
            ],
            "originalText":"Flash\nFlying, vigilance\nWhen Archangel Avacyn enters the battlefield, creatures you control gain indestructible until end of turn.\nWhen a non-Angel creature you control dies, transform Archangel Avacyn at the beginning of the next upkeep.",
            "originalType":"Legendary Creature — Angel",
            "id":"02ea5ddc89d7847abc77a0fbcbf2bc74e6456559"
            },
            
        ]
        }
       
        const getRandomNumber = (min, max) => {
          return (Math.random() * (max - min) + min).toFixed(2);
        };
      
        const basePrice = getRandomNumber(1, 20);
        
    
        // para ver si tiene doble cara o no 
        const showNames = card.cards[0].layout === "double-faced";
        const cardNames = showNames ? card.cards[0].names.join(" // ") : card.cards[0].name;
        const averagePrice30Days = Math.floor(basePrice * (1 + Math.random() * 0.15));
      const averagePrice7Days = Math.floor(basePrice * (1 + Math.random() * 0.20));
      const averagePrice1Day = Math.floor(basePrice * (1 + Math.random() * 0.10));
      const historicalMaxPrice = Math.floor(basePrice * (1 + Math.random() * 2.30));
      const historicalMinPrice = Math.floor(basePrice * (1 + Math.random() * -0.40));
    
    
      
      
      return (
          <div className="CardsStats-container">
            <div className="title-card-container">
            <h1 className="title-card">{cardNames}</h1>
              <p>{set.sets[0].name}-{cardNames}-{set.sets[0].type}</p>
            </div>
            
            <div className="CardsStatsInfo-container">
                <div className="img-card">
                <img src={card.cards[0].imageUrl} alt="" />
              </div>
              <div className="ul-card-container">
                <div className="ul-card-section">
                  <ul className="ul-card">
                  <div className="ul-card-container">
                <div className="ul-card-section">
                  <ul className="ul-card">
                    <li>Rarity: <span className="rarity-li">{card.cards[0].rarity}</span> </li>
                    <li>Number: <span className="rarity-li">{card.cards[0].number}</span></li>
                    <li>Power: <span className="rarity-li">{card.cards[0].power}</span></li>
                    <li>Impress: <span className="rarity-li">{card.cards[0].set}</span></li>
                    <li>Available Items: <span className="rarity-li">{Math.floor(getRandomNumber(10, 10000))}</span></li>
                    <li>Price: <span className="rarity-li">{basePrice}</span></li>
                    <li>Colors: <span className="rarity-li">{card.cards[0].colors.join(" // ")}</span></li>
                  </ul>
                </div>
                <div className="scroll-bar"></div>
                <div className="ul-card-section">
                  <ul className="ul-card">
                    <li>Tendencia de precios:</li>
                    <li>Average Price 30 days: <span className="rarity-li">{averagePrice30Days}</span></li>
                    <li>Average Price 7 days: <span className="rarity-li">{averagePrice7Days}</span></li>
                    <li>Average Price 1 day: <span className="rarity-li">{averagePrice1Day}</span></li>
                    <li>Historical Max. Price: <span className="rarity-li">{historicalMaxPrice}</span></li>
                    <li>Historical Min. Price: <span className="rarity-li">{historicalMinPrice}</span></li>
                  </ul>
                </div>
              </div>
              </ul>
            </div>
          </div>
          <div className="ul-card-container">
                <div className="ul-card-section">
                  <ul className="ul-card">
                  <div className="ul-card-container">
                <div className="ul-card-section">
                  <ul className="ul-card">
                    <li>Rarity: <span className="rarity-li">{card.cards[0].rarity}</span> </li>
                    <li>Number: <span className="rarity-li">{card.cards[0].number}</span></li>
                    <li>Power: <span className="rarity-li">{card.cards[0].power}</span></li>
                    <li>Impress: <span className="rarity-li">{card.cards[0].set}</span></li>
                    <li>Available Items: <span className="rarity-li">{Math.floor(getRandomNumber(10, 10000))}</span></li>
                    <li>Price: <span className="rarity-li">{basePrice}</span></li>
                    <li>Colors: <span className="rarity-li">{card.cards[0].colors.join(" // ")}</span></li>
                  </ul>
                </div>
                <div className="scroll-bar"></div>
                <div className="ul-card-section">
                  <ul className="ul-card">
                    <li>Tendencia de precios:</li>
                    <li>Average Price 30 days: <span className="rarity-li">{averagePrice30Days}</span></li>
                    <li>Average Price 7 days: <span className="rarity-li">{averagePrice7Days}</span></li>
                    <li>Average Price 1 day: <span className="rarity-li">{averagePrice1Day}</span></li>
                    <li>Historical Max. Price: <span className="rarity-li">{historicalMaxPrice}</span></li>
                    <li>Historical Min. Price: <span className="rarity-li">{historicalMinPrice}</span></li>
                  </ul>
                </div>
              </div>
              </ul>
            </div>
          </div>
    
    
    
            </div>
            <section className="vendededores-cards">
              <h3 className="title-market">Magic Market Watch</h3>
            <Tabla price={basePrice} />
            </section>
            
          </div>
        );
      }
      
      

export default CardsInfo