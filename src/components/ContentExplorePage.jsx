import explorerI1 from '../assets/explorerI1.png'
import Boton from './Boton'

function ContentExplorePage({callbackCards,callbackSets,isTheCards,isTheSets}) {
  return (
    <div className='content-explore-page'>
        <div className='content-explore-page-title'>
            <h3>What are You looking for?</h3>
            <img src={explorerI1} alt="character of the cards" />
        </div>
        <div className='content-explore-page-buttons'>
            <Boton text={"The Cards"} callback={()=>{callbackCards()}} className={isTheCards?"explore-button explore-button-active":"explore-button"}/>
            <Boton text={"The Sets"} callback={()=>{callbackSets()}} className={isTheSets?"explore-button explore-button-active":"explore-button"}/>
        </div>
        <div className='content-explore-page-svg'>
            <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="19" viewBox="0 0 1173 19" fill="none">
                <path fillRule="evenodd" d="M9.53818 18.1594L0.87793 9.49912L9.53818 0.838867L16.6984 7.99912H1156.38L1163.54 0.838867L1172.2 9.49912L1163.54 18.1594L1156.38 10.9991H16.6984L9.53818 18.1594Z" fill="#9DE148"/>
            </svg>
        </div>
        
    </div>
    
  )
}

export default ContentExplorePage