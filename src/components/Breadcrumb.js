import "../css/pdppage.css";
import home from '../images/home.png';

function Breadcrumb(props) {
    return (
        <div className="container">
            <div className="r2d2__breadcrumb">
                <a href="#">
                    <img src={home} alt="home icon" />
                </a>
                <span>
                    <a href="#">Electronics</a> {'>'} <a href="#">Laptop</a> {'>'} <span>Keyboard</span>
                </span>
            </div>
        </div>
    );
}

export default Breadcrumb;