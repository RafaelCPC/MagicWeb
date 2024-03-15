import Explore from "./ExploreCategories";
import ButtomBar from "./ButtomBar";
import LoginFooterBar from "./LoginFooterBar";
import '../index.css';
import ExploreEdi from "./ExploreCategoriesEdi";




function Footer() {
  return (
    <footer className="footer">
        <LoginFooterBar/>
        <hr className="footer-hr" />
        <Explore/>
        <ExploreEdi/>
        <ButtomBar />
        <hr className="footer-hr" />
    </footer>
  );
}

export default Footer;
