import Boton from "./Boton"
import HowToCardButtom from "./HowToCardButtom"
import HowToCardTop from "./HowToCardTop"


function HowTo() {

  return (
    <section className="HowTo-container">
        <HowToCardTop />
        <div className="HowTo-button-container">
            <Boton className={"HowTo-button"} callback={() => handleFuction()} text="Sign Up" isDisabled={false}/>
        </div>
        <HowToCardButtom />
    </section>
  )
}

export default HowTo