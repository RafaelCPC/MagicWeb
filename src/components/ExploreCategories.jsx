
import Lists from "./Lists";
import '../index.css';

function Explore() {
  const exploreCategories = [
    
      { name: "About", id: "footer1", content: ["About us", "Blog", "Careers", "Jobs", "In Press"] },
      { name: "Support", id: "footer2", content: ["Contact us", "Online Chat", "WhatsApp", "Telegram", "Ticketing"] },
      { name: "Feedback", id: "footer3", content: ["Trustpilot", "Website Rate", "Reviews Web", "Cards Reviews"] },
      { name: "Cards", id: "footer4", content: ["Trending", "New", "Popular", "Best", "Premium"] },
      { name: "Payments", id: "footer5", content: ["PayPal", "VISA", "MasterCard", "American Express"] },
      { name: "FAQ", id: "footer6", content: ["Account", "Manage", "Orders", "Payments", "Returns"] }
    
  ];

  return (
    <ul className="Footer-explore displayFooterExplore">
      {exploreCategories.map((category) => (
        <li key={category.id} className="Explore-category">
          <h3>{category.name} <span className="Arrow">&#9662;</span></h3>
          <Lists content={category.content} className={"ListOfLists"}/>
        </li>
      ))}
    </ul>
  );
}

export default Explore;
