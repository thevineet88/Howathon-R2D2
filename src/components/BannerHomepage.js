import '../css/BannerHomepage.css';
import bannerImage from "../images/e-waste-banner.png";
import { NavLink } from 'react-router-dom';

function BannerHomepage(props) {
    return (
        <NavLink to="/recycle" className="header__nav-link">
            <div className="banner-container">
            <img src={bannerImage} alt="banner image" />
            </div>
        </NavLink>
    );
  }

  export default BannerHomepage;