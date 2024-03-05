import '../index.css'
function HowToCardTop() {
    return (
      <div className="HowToCardTop-container">
        <svg className='HowToCardTop-svg-right' xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 625 385" fill="none">
          <path d="M0 0H625L351.781 385H0V0Z" fill="url(#paint0_linear_399_722)" fillOpacity="0.7"/>
          <text  className="HowToCardTop-text" x="5%" y="40%"  fill="#050E15" fontSize={24}  color="#050E15">
            BUY 
          </text>
          <text className="HowToCardTop-text" x="10%" y="75%"  fill="#050E15"   color="#050E15">
            CARDS
          </text>
          <defs>
            <linearGradient id="paint0_linear_399_722" x1="312.5" y1="0" x2="312.5" y2="385" gradientUnits="userSpaceOnUse">
              <stop offset="0.0158706" stopColor="#F3D946"/>
              <stop offset="0.433286" stopColor="#F7B306"/>
              <stop offset="1" stopColor="#EEA100"/>
            </linearGradient>
          </defs>
        </svg>
        <svg className='HowToCardTop-svg-left' xmlns="http://www.w3.org/2000/svg"  fillOpacity="0.8" viewBox="0 0 672 385" fill="none">
            <path className="HowToCardTop-path" d="M246.25 0H672V385H0L246.25 0Z" fill="#050E15"/>
            <text className="HowToCardTop-text-2 text1" x="35%" y="14%"  fill="#EDB72D"   color="#EDB72D">
            Get the best deals  
          </text>
          <text className="HowToCardTop-text-2 text2" x="20%" y="55%"  fill="#EDB72D"   color="#EDB72D">
          Enjoy the Gathering!
          </text>
          <text className="HowToCardTop-text-2 text3" x="7%" y="95%"  fill="#EDB72D"   color="#EDB72D">
          Set your personalized deck
          </text>
        </svg>
      </div>
    )
  }
  
  export default HowToCardTop;
  