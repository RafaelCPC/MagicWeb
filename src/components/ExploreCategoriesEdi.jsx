import { useState } from 'react';
import Lists from './Lists';
import '../index.css';

function ExploreEdi() {
  const [expandedCategory, setExpandedCategory] = useState(null);

  const exploreCategories = [
    { name: 'About', id: 'footer1', content: ['About us', 'Blog', 'Careers', 'Jobs', 'In Press'] },
    { name: 'Support', id: 'footer2', content: ['Contact us', 'Online Chat', 'Whatsapp', 'Telegram', 'Ticketing'] },
    { name: 'Feedback', id: 'footer3', content: ['Trust-pilot', 'website-rate', 'Reviews.web', 'kards-Reviews', 'Customer'] },
    { name: 'Cards', id: 'footer4', content: ['Trending', 'New', 'Popular', 'Best', 'Premium'] },
    { name: 'Payments', id: 'footer5', content: ['paypal', 'VISA', 'MasterCard', 'American Express', 'Discover'] },
    { name: 'FAQ', id: 'footer6', content: ['Account', 'Manage', 'Orders', 'Payments', 'Returns'] },
  ];

  const toggleCategory = (categoryId) => {
    setExpandedCategory(expandedCategory === categoryId ? null : categoryId);
  };

  return (
    <ul className="Footer-explore ExploreEdi">
      {exploreCategories.map((category) => (
        <li key={category.id} className="Explore-category">
          <h3 onClick={() => toggleCategory(category.id)}>
            {category.name} <span className="Arrow">{expandedCategory === category.id ? '▲' : '▼'}</span>
          </h3>
          {expandedCategory === category.id && <Lists content={category.content} />}
        </li>
      ))}
    </ul>
  );
}

export default ExploreEdi;