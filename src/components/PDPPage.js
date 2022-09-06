import "../css/pdppage.css";
import home from "../images/home.png";
import image from "../images/image.jpg";
import image2 from "../images/image2.jpg";
import image3 from "../images/image3.jpg";

function PDPPage(props) {

  return (
        <div className="r2d2__body">
            <div className="container">
                <div className="r2d2pdp">
                    <div className="row">
                        <div className= "col-md-6">
                            <div className="r2d2pdp__slider">
                                <div className="row">
                                    <div className="col-md-auto">
                                        <div className="r2d2pdp__thumb">
                                            <ul>
                                                <li><img src={image} alt="slide first image" /></li>
                                                <li><img src={image2} alt="slide second image" /></li>
                                                <li><img src={image3} alt="slide third image" /></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-auto">
                                        <div className="r2d2pdp__images">
                                            <ul>
                                                <li><img src={image2} alt="slide first image" /></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className= "col-md-6">
                            <div className="r2d2pdp__details">
                                <div className="r2d2pdp__attribute">
                                    <h2>Title product</h2>
                                    <p>Fiodio Mechanical Gaming Keyboard, LED Rainbow Gaming Backlit, 104 Anti-ghosting Keys, Quick-Response Black Switches, Multimedia Control for PC and Desktop Computer....</p>
                                    <div className="rating">
                                        <span className="fa fa-star checked"></span>
                                        <span className="fa fa-star checked"></span>
                                        <span className="fa fa-star-o"></span>
                                        <span className="fa fa-star-o"></span>
                                        <span className="fa fa-star-o"></span>
                                        <span>(12)</span>
                                    </div>
                                    <div className="r2d2pdp__scope">
                                        <span className="r2d2pdp__price">$399.99</span><span className="r2d2pdp__discount">$299.99</span><span className="r2d2pdp__aviablity">IN STOCK</span>
                                        <div className="r2d2pdp__cart">
                                            <select name="quantity" id="add-to-cart" className="r2d2__input">
                                                <option value="1">1</option>
                                                <option value="2">2</option>
                                                <option value="3">3</option>
                                                <option value="4">4</option>
                                                <option value="5">5</option>
                                                <option value="6">6</option>
                                                <option value="7">7</option>
                                                <option value="8">8</option>
                                                <option value="9">9</option>
                                            </select>
                                            <button className="r2d2__btn">Add to cart</button>
                                        </div>
                                    </div>
                                </div>
                                <div className="r2d2pdp__offer">
                                    <p><strong>Trash for Cash month: </strong>Get <strong>$5.00</strong> off if you exchange your old electronics while purchasing this product!</p>
                                    <div className="r2d2pdp__recycle">
                                        <select name="product" id="product-list" className="r2d2__input">
                                            <option value="laptop">Laptop</option>
                                            <option value="keyboard">Keyboard</option>
                                            <option value="mouse">Mouse</option>
                                            <option value="pendrive">PenDrive</option>
                                            <option value="moniter">Moniter</option>
                                        </select>
                                        <button className="r2d2__btn">Recycle</button>
                                    </div>
                                    <p className="know-more-r2d2">
                                        <a href="">Know more</a> about the recycling and waste management
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="r2d2pdp-description">
                    <h3>PRODUCT DESCRIPTION</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
            </div>
        </div>
  );
}

export default PDPPage;
