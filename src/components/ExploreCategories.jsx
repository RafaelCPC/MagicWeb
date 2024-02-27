
import Lists from "./Lists";
import '../index.css';

function Explore() {
  const exploreCategories = [
    { name: "About", id: "foter1", content: ["About us", "Blog", "Careers", "Jobs", "In Press", ] },
    { name: "Support", id: "footer2", content: ["Contact us", "Online Chat", "Whatsapp", "Telegram", "Ticketing"] },
    { name: "Feddback", id: "footer3", content: ["Trust-pilot", "website-rate", "Reviews.web", "kards-Reviews", "Customer"] },
    { name: "Cards", id: "footer4", content: ["Trending", "New", "Popular", "Best", "Premium", ] },
    { name: "Payments", id: "footer5", content: ["paypal", "VISA", "MasterCard", "American Express", "Discover"] },
    { name: "FAQ", id: "footer6", content: ["Account", "Manage", "Orders", "Payments", "Returns"] },
  ];

  return (
    <ul className="Footer-explore">
      {exploreCategories.map((category) => (
        <li key={category.id} className="Explore-category">
          <h3>{category.name} <span className="Arrow">&#9662;</span></h3>
          <Lists content={category.content} />
        </li>
      ))}
    </ul>
  );
}

export default Explore;
