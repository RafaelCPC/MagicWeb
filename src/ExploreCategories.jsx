
import Lists from "./Lists";
import './index.css';

function Explore() {
  const exploreCategories = [
    { name: "About", id: "Nav3", content: ["About us", "Blog", "Careers", "Jobs", "In Press", "FAQ"] },
    { name: "Support", id: "Nav5", content: ["Contact us", "Online Chat", "Whatsapp", "Telegram", "Ticketing"] },
    { name: "FAQ", id: "Nav4", content: ["Account", "Manage Deliveries", "Orders", "Payments", "Returns"] },
    { name: "About", id: "Nav3", content: ["About us", "Blog", "Careers", "Jobs", "In Press", "FAQ"] },
    { name: "Support", id: "Nav5", content: ["Contact us", "Online Chat", "Whatsapp", "Telegram", "Ticketing"] },
    { name: "FAQ", id: "Nav4", content: ["Account", "Manage Deliveries", "Orders", "Payments", "Returns"] },
  ];

  return (
    <ul className="Footer-explore">
      {exploreCategories.map((category) => (
        <li key={category.id}>
          <h3>{category.name}</h3>
          <Lists content={category.content} />
        </li>
      ))}
    </ul>
  );
}

export default Explore;
