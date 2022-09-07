import '../css/BannerHomepage.css';
import bannerImage from "../images/e-waste-banner-no-link.png";
import { NavLink } from 'react-router-dom';

function recycleBanner(props) {
    return (
            <div className="banner-container">
            <img src={bannerImage} alt="banner image" />
            </div>
    );
  }

  export default recycleBanner;