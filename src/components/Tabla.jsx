import  { useState } from 'react';
import ModalTable from './ModalTable';
import Boton from "../components/Boton";
import ArrowUp from "../components/ArrowUp";

const Table = () => {
  // Lista de nombres de vendedores
  const vendorNames = [
    "John", "Emma", "Michael", "Sophia", "William", "Olivia", "James", "Ava", "Alexander", "Isabella",
    "Robert", "Mia", "David", "Charlotte", "Joseph", "Amelia", "Daniel", "Harper", "Matthew", "Evelyn",
    "Jackson", "Abigail", "Ethan", "Emily", "Andrew", "Elizabeth", "Anthony", "Sofia", "Christopher", "Grace",
    "Gabriel", "Chloe", "Samuel", "Ella", "Ryan", "Scarlett", "Benjamin", "Victoria", "Nicholas", "Avery",
    "Jonathan", "Lily", "Nathan", "Addison", "William", "Eleanor", "Christian", "Natalie", "Logan", "Hannah",
    "Sophie", "Liam", "Charlotte", "Mason", "Amelia", "Ethan", "Isabella", "Mia", "Aiden", "Ella",
    "Elijah", "Madison", "Evelyn", "Grayson", "Harper", "Scarlett", "Lucas", "Avery", "Oliver", "Aria",
    "Carter", "Sofia", "Sebastian", "Camila", "Jack", "Luna", "Gabriel", "Layla", "Jayden", "Chloe",
    "Emma", "Zoe", "Lily", "Henry", "Grace", "Wyatt", "Aubrey", "Owen", "Penelope", "Evan", "Riley",
    "Dylan", "Leah", "Nathan", "Nora", "Matthew", "Amelia", "David", "Emma", "William", "Sophia", "Daniel", "Mia",
    "Oliver", "Isabella", "Benjamin", "Charlotte", "Lucas", "Ava", "Jacob", "Emily", "James", "Grace",
    "Alexander", "Harper", "Michael", "Chloe", "Ethan", "Ella", "Ryan", "Lily", "Jackson", "Zoe",
    "David", "Avery", "Joseph", "Mila", "Gabriel", "Sofia", "Samuel", "Camilla", "Christopher", "Luna",
    "Nicholas", "Layla", "Logan", "Scarlett", "Christian", "Natalie", "Nathan", "Aria", "William", "Eleanor",
    "John", "Hannah", "Andrew", "Madison", "Jonathan", "Aubrey", "Evan", "Penelope", "Joshua", "Nora",
    "Caleb", "Victoria", "Luke", "Addison", "Isaac", "Evelyn", "Dylan", "Zoey", "Owen", "Brooklyn",
    "Liam", "Aurora", "Jackson", "Natalia", "Carter", "Savannah", "Wyatt", "Elizabeth", "Hunter", "Stella",
    "Sophia", "William", "Charlotte", "Michael", "Emily", "Jacob", "Amelia", "James", "Sophia", "Elijah"
  ];

  // Lista de países
  const countries = ["ESP", "ITA", "FRA", "USA", "GER", "UK", "JPN", "CHN", "RUS", "BRA", "CAN", "AUS", "IND", "MEX", "ARG", "SWE", "NOR", "DEN", "NED", "FIN"];

  // Función para obtener un estado aleatorio
  const getRandomState = () => {
    const states = ['MT', 'NM', 'EX', 'GD','LP','PL','PO'];
    // const states = ['Mint', 'Near Mint', 'Excellent', 'Good','Light Played','Played','Poor'];
    return states[Math.floor(Math.random() * states.length)];
  };

  // Función para obtener un país aleatorio
  const getRandomCountry = () => {
    return countries[Math.floor(Math.random() * countries.length)];
  };

  // Generar vendedores con nombres de la lista de nombres de vendedores
  const generateSellers = (count) => {
    return Array.from({ length: count }, () => ({
      name: vendorNames[Math.floor(Math.random() * vendorNames.length)],
      number: Math.floor(Math.random() * (1000 - 10 + 1)) + 10,
      state: getRandomState(),
      country: getRandomCountry(),
      price: (Math.random() * (13 - 1) + 1).toFixed(2),
      quantity: Math.floor(Math.random() * 17) + 1
    }));
  };

  // Estado para controlar el número de vendedores mostrados
  const [shownSellers, setShownSellers] = useState(generateSellers(100));

  // Función para cargar más vendedores
  const loadMoreSellers = () => {
    const newSellers = [...shownSellers, ...generateSellers(100)];
    setShownSellers(newSellers);
  };
  const stateNames = {
    'MT': 'Mint',
    'NM': 'Near Mint',
    'EX': 'Excellent',
    'GD': 'Good',
    'LP': 'Light Played',
    'PL': 'Played',
    'PO': 'Poor'
  };

  const stateColors = {
    'MT': '#14A2B8',
    'NM': '#3DAF56',
    'EX': '#82891D',
    'GD': '#FFC009',
    'LP': '#FD8B2B',
    'PL': '#E66874',
    'PO': '#DC3545'
  };

  const [hoveredRow, setHoveredRow] = useState(null);
  const [showLegend, setShowLegend] = useState(false);

  const toggleLegend = () => {
    setShowLegend(!showLegend);
  };
  const [isOpen, setIsOpen] = useState(false);
  
  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);
  return (
    <div id="table-section" className="table-container">
      <table>
        <thead>
          <tr>
            <th>Nº Sells & Sellers</th>
            <th  onClick={toggleLegend}> <p id='th2child' > Product state <svg onClick={openModal} id='modalOpen' xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 16 16" width="20" height="20"><path d="M8,0c-4.41113,0 -8,3.58887 -8,8c0,4.41113 3.58887,8 8,8c4.41113,0 8,-3.58887 8,-8c0,-4.41113 -3.58887,-8 -8,-8Zm0.520386,12.7466c-0.380066,0.0633545 -1.13635,0.221619 -1.52039,0.253418c-0.325073,0.0269165 -0.631836,-0.15918 -0.818848,-0.42627c-0.1875,-0.26709 -0.232422,-0.608887 -0.121094,-0.915527l1.51221,-4.1582h-1.57227c-0.0013428,-0.866455 0.64856,-1.50354 1.4798,-1.74805c0.396667,-0.116699 1.13574,-0.276428 1.5202,-0.251953c0.230347,0.0146484 0.631836,0.15918 0.818848,0.42627c0.1875,0.26709 0.232422,0.608887 0.121094,0.915527l-1.51221,4.1582h1.57178c0.0003052,0.865479 -0.625366,1.60431 -1.47913,1.74658Zm0.479614,-7.74658c-0.552307,0 -1,-0.447754 -1,-1c0,-0.552307 0.447693,-1 1,-1c0.552307,0 1,0.447693 1,1c0,0.552246 -0.447693,1 -1,1Z" fill="#FFFFFF"></path></svg> </p>  </th>
            
            <th>Offers</th>
          </tr>
        </thead>
        <tbody>
          <ModalTable isOpen={isOpen} closeModal={closeModal}/> 
          {shownSellers.map((seller, index) => (
            <tr className='table-row'
              key={index} 
              style={{ backgroundColor: stateColors[seller.state] || 'transparent' }}
              onMouseEnter={() => setHoveredRow(index)}
              onMouseLeave={() => setHoveredRow(null)}
            >
              <td> {seller.number} - {seller.name}<svg xmlns="http://www.w3.org/2000/svg" className='svg-persons' fill="none" viewBox="0 0 48 48" width="30" height="30"><path fill="#edb72d" fill-rule="evenodd" d="M24 24C28.4204 24 32 20.4204 32 16 32 11.5796 28.4204 8 24 8 19.5796 8 16 11.5796 16 16 16 20.4204 19.5796 24 24 24zM34 16C34 21.525 29.525 26 24 26 18.475 26 14 21.525 14 16 14 10.475 18.475 6 24 6 29.525 6 34 10.475 34 16zM9.22348 34.2119C8.22038 35.0211 8 35.6291 8 36V40H40V36C40 35.6291 39.7796 35.0211 38.7765 34.2119 37.7958 33.4207 36.3341 32.6669 34.5622 32.015 31.0199 30.7117 26.7532 30 24 30 21.2468 30 16.9801 30.7117 13.4378 32.015 11.6659 32.6669 10.2042 33.4207 9.22348 34.2119zM24 28C17.9925 28 6 31.0347 6 36V42H42V36C42 31.0347 30.0075 28 24 28z"  ></path></svg></td>
              <td>
                {hoveredRow === index ? stateNames[seller.state] : seller.state} - {seller.country}<svg className='svg-state' xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 128 128" width="30" height="30"><path d="M78.823 64.709c0 4.019 2.517 7.167 5.729 7.167s5.729-3.148 5.729-7.167-2.517-7.167-5.729-7.167-5.729 3.148-5.729 7.167Zm5.729-3.167c.8 0 1.729 1.383 1.729 3.167s-.929 3.167-1.729 3.167-1.729-1.383-1.729-3.167.929-3.167 1.728-3.167Zm-20.56-6.209c3.212 0 5.729-3.148 5.729-7.167S67.2 41 63.992 41s-5.728 3.148-5.728 7.167 2.516 7.166 5.728 7.166Zm0-10.334c.8 0 1.729 1.383 1.729 3.167s-.929 3.167-1.729 3.167-1.728-1.383-1.728-3.167S63.193 45 63.992 45Zm1.174 20.12 15.623-20.626a2 2 0 0 1 3.189 2.415L68.355 67.534a2.025 2.025 0 0 1-2.8.387 2 2 0 0 1-.389-2.802Zm51.082 18.55a7.4 7.4 0 0 0-8.709-2.991c-.534.185-1.078.381-1.629.584l1.124-4.22a5.024 5.024 0 0 1 1.3-2.256l4.246-4.256a7.056 7.056 0 0 0 1.812-6.793l-1.564-5.805a5.042 5.042 0 0 1 0-2.6l1.549-5.808a7.049 7.049 0 0 0-1.828-6.789l-4.255-4.245a5.042 5.042 0 0 1-1.306-2.254l-1.563-5.805a7.051 7.051 0 0 0-4.977-4.965l-5.81-1.549a5.051 5.051 0 0 1-2.256-1.3l-4.256-4.246a7.1 7.1 0 0 0-4.976-2.051 6.985 6.985 0 0 0-1.816.24l-5.8 1.562a5.016 5.016 0 0 1-2.605 0l-5.809-1.549a7.008 7.008 0 0 0-1.8-.236 7.089 7.089 0 0 0-4.994 2.063l-4.246 4.256a5.038 5.038 0 0 1-2.254 1.305l-5.8 1.563a7.046 7.046 0 0 0-4.969 4.976l-1.549 5.809a5.026 5.026 0 0 1-1.3 2.256l-4.246 4.255a7.048 7.048 0 0 0-1.811 6.794l1.563 5.805a5.04 5.04 0 0 1 0 2.6l-1.549 5.808A7.05 7.05 0 0 0 36 70.622l4.256 4.246a5.036 5.036 0 0 1 1.305 2.254l.954 3.543c-1.231.952-2.361 1.911-3.427 2.815a102.32 102.32 0 0 1-2.187 1.822 16.422 16.422 0 0 1-2.828 1.821V84.7a2 2 0 0 0-2-2H12.5a2 2 0 0 0-2 2v25.986a2 2 0 0 0 2 2h19.569a2 2 0 0 0 2-2v-1.415l3.759-.1c.874-.037 6.556.584 12.013 1.173 7.248.782 15.464 1.667 19.7 1.894a42.18 42.18 0 0 0 21.509-4.618c13.626-7.032 21.863-12.044 24.481-14.9a7.3 7.3 0 0 0 .717-9.051ZM45.69 56.452a28.582 28.582 0 1 1 28.778 28.576C79.142 81.46 80.2 78.182 80.3 76.2a6.914 6.914 0 0 0-3.725-6.473c-3.872-2.149-9.936.365-14.787 2.8a15.752 15.752 0 0 1-4.521 1.421 30.253 30.253 0 0 0-4.629 1.137 28.431 28.431 0 0 1-6.948-18.633Zm66.895 33.566c-2.234 2.435-10.533 7.424-23.368 14.048a37.984 37.984 0 0 1-19.462 4.178c-4.129-.221-12.287-1.1-19.485-1.877-7.259-.783-11.415-1.231-12.546-1.195l-3.654.1V91.483a19.494 19.494 0 0 0 5.33-3.058 90.26 90.26 0 0 0 2.277-1.9c4.092-3.471 8.729-7.4 16.244-8.637a19.749 19.749 0 0 0 5.663-1.788c7.046-3.534 9.9-3.515 11.05-2.875a2.97 2.97 0 0 1 1.674 2.762c-.065 1.23-1.15 5.61-12.344 10.343a2 2 0 0 0-1.19 2.187c.854 4.886 5.021 5.684 13.485 5.538 8.63-.143 17.513-3.692 25.35-6.824 2.574-1.028 5.006-2 7.237-2.771a3.378 3.378 0 0 1 4.058 1.4 3.277 3.277 0 0 1-.319 4.158Z" fill="#edb72d" ></path></svg>
              </td>
              <td>{seller.price}€ - Available: {seller.quantity} <svg className='svg-state' xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 512 512" viewBox="0 0 512 512" width="30" height="30"><path fill="#fdcb4d" d="M181,38.5c-91.13,0-165,73.87-165,165s73.87,165,165,165c27.02,0,52.53-6.5,75.04-18.01
				l86.28-112.19C364.446,135.286,285.868,38.5,181,38.5z" class="colorfde44d svgShape"></path><path fill="#fdd367" d="M496,353.5c0,66.27-53.73,120-120,120c-67.657,0-121.967-56.117-119.96-123.01
				c1.31-53.25,37.32-97.91,86.28-112.19C418.779,215.892,496,273.31,496,353.5z" class="colorfd6767 svgShape"></path><path fill="#edb72d" d="M181,188.5c-8.271,0-15-6.729-15-15s6.729-15,15-15h30c8.284,0,15-6.716,15-15s-6.716-15-15-15
				h-15V121c0-8.284-6.716-15-15-15s-15,6.716-15,15v10.08c-17.459,6.192-30,22.865-30,42.42c0,24.813,20.187,45,45,45
				c8.271,0,15,6.729,15,15s-6.729,15-15,15h-30c-8.284,0-15,6.716-15,15s6.716,15,15,15h15v7.5c0,8.284,6.716,15,15,15
				s15-6.716,15-15v-10.08c17.459-6.192,30-22.865,30-42.42C226,208.687,205.813,188.5,181,188.5z" class="colorfdb900 svgShape"></path><path fill="#edb72d" d="M181,383.5c-99.252,0-180-80.748-180-180s80.748-180,180-180
				c114.413,0,200.073,105.836,175.985,217.95c-1.74,8.099-9.719,13.257-17.815,11.515c-8.1-1.739-13.255-9.716-11.515-17.815
				C347.766,141.53,276.162,53.5,181,53.5c-82.71,0-150,67.29-150,150s67.29,150,150,150c24.024,0,46.974-5.506,68.211-16.365
				c7.378-3.771,16.413-0.849,20.185,6.526c3.771,7.376,0.85,16.413-6.526,20.185C237.723,376.704,209.413,383.5,181,383.5z" class="colorfdb900 svgShape"></path><path fill="#fdc840" d="M376,488.5c-74.439,0-135-60.561-135-135s60.561-135,135-135s135,60.561,135,135
				S450.439,488.5,376,488.5z M376,248.5c-57.897,0-105,47.103-105,105s47.103,105,105,105s105-47.103,105-105
				S433.897,248.5,376,248.5z" class="colorfd4040 svgShape"></path><path fill="#e9e2d0" d="M322.967,406.533c-5.858-5.857-5.858-15.355,0-21.213l84.854-84.854
				c5.857-5.857,15.355-5.857,21.213,0c5.858,5.857,5.858,15.355,0,21.213l-84.854,84.854
				C338.321,412.392,328.824,412.391,322.967,406.533z" class="colord0e4e9 svgShape"></path><circle cx="333.588" cy="311.076" r="14.967" fill="#e9e2d0" class="colord0e4e9 svgShape"></circle><circle cx="418.428" cy="395.924" r="14.967" fill="#e9e2d0" class="colord0e4e9 svgShape"></circle></svg></td>
              
            </tr>
          ))}
        </tbody>
      </table>
      <Boton callback={()=>window.scrollTo({ top: 0, behavior: 'smooth' })} text={<ArrowUp />} className='back-to-top-button HowTo-button'/> 

      <button className='load-more HowTo-button' onClick={loadMoreSellers}>Show more sellers</button>
    </div>
  );
  
}

export default Table;
