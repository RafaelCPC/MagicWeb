import Explore from "./ExploreCategories";
import ButtomBar from "./ButtomBar";
import LoginFooterBar from "./LoginFooterBar";
import '../index.css';
import ExploreEdi from "./ExploreCategoriesEdi";




function Footer({callbacks}) {
  return (
    <footer className="footer">
        <LoginFooterBar callback={callbacks}/>
        <hr className="footer-hr" />
        <Explore/>
        <ExploreEdi/>
        <ButtomBar />
        <hr className="footer-hr" />
    </footer>
  );
}

export default Footer;
