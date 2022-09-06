import '../css/Menu.css'

function Menu(props) {
    return (
        <div className="flex-container">
            <div> <a href="http://www.google.com/">Mobile</a> </div>
            <div><a href="">Laptop</a></div>
            <div><a href="">Accessories</a></div>
        </div>
    );
  }

  export default Menu;