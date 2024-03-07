import { useEffect, useState } from 'react';
import { useGetCards } from '../hooks/useGetCards'
import { Item } from './itemCard'


function GetCards() {
  

//   const {data,error} = useGetCards("macaicedoa")

  const data = {"name":"Ancestor's Chosen","manaCost":"{5}{W}{W}","cmc":7,"colors":["W"],"colorIdentity":["W"],"type":"Creature — Human Cleric","types":["Creature"],"subtypes":["Human","Cleric"],"rarity":"Uncommon","set":"10E","setName":"Tenth Edition","text":"First strike (This creature deals combat damage before creatures without first strike.)\nWhen Ancestor's Chosen enters the battlefield, you gain 1 life for each card in your graveyard.","artist":"Pete Venters","number":"1","power":"4","toughness":"4","layout":"normal","multiverseid":"130550","imageUrl":"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=130550&type=card","variations":["b7c19924-b4bf-56fc-aa73-f586e940bd42"],"foreignNames":[{"name":"Ausgewählter der Ahnfrau","text":"Erstschlag (Diese Kreatur fügt Kampfschaden vor Kreaturen ohne Erstschlag zu.)\nWenn der Ausgewählte der Ahnfrau ins Spiel kommt, erhältst du 1 Lebenspunkt für jede Karte in deinem Friedhof dazu.","type":"Kreatur — Mensch, Kleriker","flavor":"„Es ist der Wille aller, und meine Hand, die ihn ausführt.\"","imageUrl":"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=148411&type=card","language":"German","multiverseid":148411},{"name":"Elegido de la Antepasada","text":"Daña primero. (Esta criatura hace daño de combate antes que las criaturas sin la habilidad de dañar primero.)\nCuando el Elegido de la Antepasada entre en juego, ganas 1 vida por cada carta en tu cementerio.","type":"Criatura — Clérigo humano","flavor":"\"La voluntad de todos, realizada por mi mano.\"","imageUrl":"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=150317&type=card","language":"Spanish","multiverseid":150317},{"name":"Élu de l'Ancêtre","text":"Initiative (Cette créature inflige des blessures de combat avant les créatures sans l'initiative.)\nQuand l'Élu de l'Ancêtre arrive en jeu, vous gagnez 1 point de vie pour chaque carte dans votre cimetière.","type":"Créature : humain et clerc","flavor":"« La volonté de tous passe par ma main. »","imageUrl":"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=149934&type=card","language":"French","multiverseid":149934},{"name":"Prescelto dell'Antenata","text":"Attacco improvviso (Questa creatura infligge danno da combattimento prima delle creature senza attacco improvviso.)\nQuando il Prescelto dell'Antenata entra in gioco, guadagni 1 punto vita per ogni carta nel tuo cimitero.","type":"Creatura — Chierico Umano","flavor":"\"La volontà di tutti, eseguita per mano mia.\"","imageUrl":"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=148794&type=card","language":"Italian","multiverseid":148794},{"name":"祖神に選ばれし者","text":"先制攻撃 （このクリーチャーは先制攻撃を持たないクリーチャーよりも先に戦闘ダメージを与える。）\n祖神に選ばれし者が場に出たとき、あなたはあなたの墓地にあるカード１枚につき１点のライフを得る。","type":"クリーチャー — 人間・クレリック","flavor":"すべての意思を、この手で成そう。","imageUrl":"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=148028&type=card","language":"Japanese","multiverseid":148028},{"name":"Eleito da Ancestral","text":"Iniciativa (Esta criatura causa dano de combate antes de criaturas sem a habilidade de iniciativa.)\nQuando Eleito da Ancestral entra em jogo, você ganha 1 ponto de vida para cada card em seu cemitério.","type":"Criatura — Humano Clérigo","flavor":"\"A vontade de todos pelas minhas mãos realizada.\"","imageUrl":"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=149551&type=card","language":"Portuguese (Brazil)","multiverseid":149551},{"name":"Избранник Прародителя","text":"Первый удар (Это существо наносит боевые повреждения раньше существ без Первого удара.)\nКогда Избранник Прародителя входит в игру, вы получаете 1 жизнь за каждую карту на вашем кладбище.","type":"Существо — Человек Священник","flavor":"\"Общая воля моей рукой вершится\".","imageUrl":"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=149168&type=card","language":"Russian","multiverseid":149168},{"name":"祖灵的爱民","text":"先攻（此生物会比不具先攻异能的生物提前造成战斗伤害。）\n当祖灵的爱民进场时，你坟墓场中每有一张牌，你便获得1点生命。","type":"生物～人类／僧侣","flavor":"「众生所愿，吾手所圆。」","imageUrl":"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=147645&type=card","language":"Chinese Simplified","multiverseid":147645}],"printings":["10E","JUD","UMA"],"originalText":"First strike (This creature deals combat damage before creatures without first strike.)\nWhen Ancestor's Chosen comes into play, you gain 1 life for each card in your graveyard.","originalType":"Creature - Human Cleric","legalities":[{"format":"Commander","legality":"Legal"},{"format":"Duel","legality":"Legal"},{"format":"Legacy","legality":"Legal"},{"format":"Modern","legality":"Legal"},{"format":"Oathbreaker","legality":"Legal"},{"format":"Paupercommander","legality":"Restricted"},{"format":"Penny","legality":"Legal"},{"format":"Predh","legality":"Legal"},{"format":"Premodern","legality":"Legal"},{"format":"Vintage","legality":"Legal"}],"id":"5f8287b1-5bb6-5f4c-ad17-316a40d5bb0c"}
    const error =false

    const [startIndex,setStartIndex] = useState(0)

    function getCards(data,start,end) {

        const cardUrl = data.img?data.img:data.imageUrl;
        const cardContent = data.content?data.content:[data.name,data.artist,"Language: ENG"]
        const cardPrice = data.price?data.price:5+10*Math.random().toFixed(2);

        const card = new Item(cardUrl,cardContent,cardPrice)
        
        console.log(card) 
    }

    useEffect(()=>{
        getCards(data,startIndex,startIndex+5)
    },[])
    

  return (
    <div>
        <Boton/>
      {/* {(data && !error) && <h3>{data.name}{` (${data.login})`}</h3>}
      {(data && !error) && <img src={cardUrl} width="50" height="50"></img>}
      {error && <h3>Oops! something went wrong... {error.message}</h3>} */}
      
    </div>
  )
}
export default GetCards