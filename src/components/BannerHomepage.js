import '../css/BannerHomepage.css'
import { NavLink } from 'react-router-dom';

function BannerHomepage(props) {
    return (
        <NavLink to="/contact" className="header__nav-link">
            <div className="banner-container">
            </div>
        </NavLink>
    );
  }

  export default BannerHomepage;