import "../css/R2D2.css";

function get_supported_keycodes() {
  return [35, 36, 37, 38, 39, 40, 9];
}

function map_menu_items(menu) {
  var i, prev, curr, next;
  var item_classes = {
    forward: {},
    reverse: {},
  };
  for (i = 0; i < menu.length; i++) {
    curr = menu[i].classList[1];
    if (i === 0) {
      prev = menu[menu.length - 1].classList[1];
      next = menu[i + 1].classList[1];
    } else if (i === menu.length - 1) {
      prev = menu[i - 1].classList[1];
      next = menu[0].classList[1];
    } else {
      prev = menu[i - 1].classList[1];
      next = menu[i + 1].classList[1];
    }
    item_classes.forward[curr] = next;
    item_classes.reverse[curr] = prev;
  }
  return item_classes;
}

function get_menu() {
  return document.getElementsByClassName("navigation-links");
}

function get_next_destination(menu, event) {
  var map = map_menu_items(menu);
  var self = event.target.id;
  if (!get_supported_keycodes().includes(event.keyCode)) {
    return self;
  } else if (event.keyCode === 35) {
    return menu[menu.length - 1].classList[1] + "-anchor";
  } else if (event.keyCode === 36) {
    return menu[0].classList[1] + "-anchor";
  } else if (event.keyCode === 37) {
    return map.reverse[event.target.classList[1]] + "-anchor";
  } else if (event.keyCode === 38) {
    return map.reverse[event.target.classList[1]] + "-anchor";
  } else if (event.keyCode === 39) {
    return map.forward[event.target.classList[1]] + "-anchor";
  } else if (event.keyCode === 40) {
    return map.forward[event.target.classList[1]] + "-anchor";
  } else if (event.keyCode === 32) {
    return self;
  } else if (event.keyCode === 13) {
    return self;
  } else if (event.keyCode === 9) {
    var self_element = document.getElementById(self);
    self_element.classList.add("active");
    var tabbable = get_tabbable_items();
    var tabstops = find_previous_tabbable_item(event);
    if (event.shiftKey) {
      var focus_element = tabbable[tabstops.next];
    } else {
      var focus_element = tabbable[tabstops.prev];
    }
    return focus_element.id;
  }
}

function get_tabbable_items() {
  var raw_elements = document.querySelectorAll(
    'a:not([disabled]), button:not([disabled]), input[type=text]:not([disabled]), [tabindex]:not([disabled]):not([tabIndex="-1"]'
  );
  var visible_elements = [];
  for (var i = 0; i < raw_elements.length; i++) {
    if (
      raw_elements[i].offsetWidth === 0 &&
      raw_elements[i].offsetHeight === 0
    ) {
      continue;
    }
    visible_elements.unshift(raw_elements[i]);
  }
  return visible_elements;
}

function find_previous_tabbable_item(event) {
  var elements = get_tabbable_items();
  var i, prev, curr, next;
  var tabstops = {
    prev: 0,
    next: elements.length - 1,
  };
  for (i = 0; i < elements.length; i++) {
    if (elements[i].id !== event.target.id) {
      continue;
    }
    curr = i;
    break;
  }
  if (elements[curr - 1]) {
    tabstops.prev = curr - 1;
  } else {
    tabstops.prev = elements.length - 1;
  }
  if (elements[curr + 1]) {
    tabstops.next = curr + 1;
  } else {
    tabstops.next = 0;
  }
  return tabstops;
}

var el = document.getElementById("navigation-container");

if (el) {
  el.onkeydown = function (event) {
    event = event || window.event;
    event.preventDefault();
    var menu = get_menu();
    if (!event.shiftKey) {
      for (var i = 0; i < menu.length; i++) {
        menu[i].className = menu[i].className.replace(" active", "");
      }
    }
    if (get_supported_keycodes().includes(event.keyCode)) {
      var chosen_item = document.getElementById(
        get_next_destination(menu, event)
      );
    } else {
      var chosen_item = document.getElementById(event.target.id);
    }
    if (chosen_item) {
      chosen_item.click();
      chosen_item.focus();
    }
  };
}

document.addEventListener(
  "click",
  function (event) {
    if (event.target.classList[0] !== "navigation-links") {
      return;
    }
    event.preventDefault();
    var i, menu, panel_content;
    menu = get_menu(); //document.getElementsByClassName("navigation-links");
    for (i = 0; i < menu.length; i++) {
      menu[i].className = menu[i].className.replace(" active", "");
      menu[i].parentElement.setAttribute("aria-selected", "false");
    }
    event.target.classList.add("active");
    event.target.parentNode.setAttribute("aria-selected", "true");
    panel_content = document.getElementsByClassName("panel-content");
    for (i = 0; i < panel_content.length; i++) {
      panel_content[i].style.display = "none";
    }
    document.getElementById(
      event.target.classList[1] + "-panel"
    ).style.display = "block";
  },
  false
);
var menu = get_menu();
if (menu && menu[0] && menu[0].id) {
  document.getElementById(menu[0].id).click();
}

setTimeout(() => {
  var addProductBtn = document.getElementById("r2d2-addProduct-btn");
  var arrayForProducts = [];
  if (addProductBtn) {
    addProductBtn.addEventListener("click", function (evt) {
      let value = this.previousSibling.value;
      var arrayItemlist = document.querySelector(".r2d2-allowListProducts");
      const li = document.createElement("LI");
      li.innerText = value;
      arrayItemlist.append(li);
      arrayForProducts.push(value);
      document.querySelector('.r2d2__input').value = '';
    });
  }
}, 1000);

function R2D2Dashboard() {
  return (
    <div className="r2d2__body">
      <div className="container">
        <div className="r2d2__dashboard">
          <div className="row">
            <div className="col-md-auto">
              <div className="r2d2__links">
                <ul
                  role="tablist"
                  aria-orientation="vertical"
                  id="navigation-container"
                  tabIndex="-1"
                >
                  <li
                    role="tab"
                    aria-controls="Overview-panel"
                    aria-selected="false"
                  >
                    <a
                      href="#"
                      id="Overview-anchor"
                      className="navigation-links Overview"
                      tabIndex="0"
                    >
                      Overview
                    </a>
                  </li>
                  <li
                    role="tab"
                    aria-controls="Product-cycle-panel"
                    aria-selected="false"
                  >
                    <a
                      href="#"
                      id="Product-cycle-anchor"
                      className="navigation-links Product-cycle"
                      tabIndex="0"
                    >
                      Product cycle
                    </a>
                  </li>
                  <li
                    role="tab"
                    aria-controls="Recycleing-partner-panel"
                    aria-selected="false"
                  >
                    <a
                      href="#"
                      id="Recycleing-partner-anchor"
                      className="navigation-links Recycleing-partner"
                      tabIndex="0"
                    >
                      Recycling Partner
                    </a>
                  </li>
                  <li
                    role="tab"
                    aria-controls="Loyalti-panel"
                    aria-selected="false"
                  >
                    <a
                      href="#"
                      id="Loyalti-anchor"
                      className="navigation-links Loyalti"
                      tabIndex="0"
                    >
                      Loyalty
                    </a>
                  </li>
                  <li
                    role="tab"
                    aria-controls="Leaderboard-panel"
                    aria-selected="false"
                  >
                    <a
                      href="#"
                      id="Leaderboard-anchor"
                      className="navigation-links Leaderboard"
                      tabIndex="0"
                    >
                      Leaderboard
                    </a>
                  </li>
                  <li
                    role="tab"
                    aria-controls="Options-panel"
                    aria-selected="false"
                  >
                    <a
                      href="#"
                      id="Options-anchor"
                      className="navigation-links Options"
                      tabIndex="0"
                    >
                      Options
                    </a>
                  </li>
                  <li
                    role="tab"
                    aria-controls="Setting-panel"
                    aria-selected="false"
                  >
                    <a
                      href="#"
                      id="Setting-anchor"
                      className="navigation-links Setting"
                      tabIndex="0"
                    >
                      Setting
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md">
              <div className="r2d2__board" id="content-container">
                <ul role="tabpanellist" aria-orientation="vertical">
                  <li
                    role="tabpanel"
                    id="Overview-panel"
                    className="panel-content"
                    aria-labelledby="Overview-anchor"
                  >
                    <div className="r2d2__board--upper">
                      <h2>Welcome, User !</h2>
                      <p>Carbon credits</p>
                      <p>
                        Pending e-waste dispatch
                        <br />
                        Average marketing reach
                        <br />
                        Cost Optimization
                      </p>
                      <p className="allowed-products-header">Allowed Products:</p>
                      <ul className="r2d2-allowListProducts">
                        <li>Keyboard</li>
                        <li>Monitor</li>
                      </ul>

                      <label htmlFor="r2d2-addProduct">Add a product</label>
                      <input
                        type="text"
                        className="r2d2__input"
                        id="r2d2-addProduct"
                      />
                      <button className="r2d2__btn" id="r2d2-addProduct-btn">
                        Add
                      </button>
                      <ul id="arrayItemlist"></ul>
                    </div>
                    <div className="r2d2__board--bottom">
                      <h3>Dashboard</h3>
                      <div className="r2d2__board--grid">
                        <div className="r2d2__grid">
                          <h4>Carbon offset​</h4>
                          <span>Total: Last 30 days</span>
                        </div>
                        <div className="r2d2__grid">
                          <h4>Highest recycler</h4>
                        </div>
                        <div className="r2d2__grid">
                          <h4>Recycle KPIs</h4>
                        </div>
                        <div className="r2d2__grid">
                          <p>Fiscal KPIs​</p>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li
                    role="tabpanel"
                    id="Product-cycle-panel"
                    className="panel-content"
                    aria-labelledby="Product-cycle-anchor"
                  >
                    <div className="r2d2__board--upper">
                      <h2>Product Cycle</h2>
                      <p>Carbon credits</p>
                      <p>
                        Pending e-waste dispatch
                        <br />
                        Average marketing reach
                        <br />
                        Cost Optimization
                      </p>
                      <p>Keyboard</p>
                    </div>
                    <div className="r2d2__board--bottom">
                      <h3>Dashboard</h3>
                      <div className="r2d2__board--grid">
                        <div className="r2d2__grid">
                          <h4>Carbon offset​</h4>
                          <span>Total: Last 30 days</span>
                        </div>
                        <div className="r2d2__grid">
                          <h4>Highest recycler</h4>
                        </div>
                        <div className="r2d2__grid">
                          <h4>Recycle KPIs</h4>
                        </div>
                        <div className="r2d2__grid">
                          <p>Fiscal KPIs​</p>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li
                    role="tabpanel"
                    id="Recycleing-partner-panel"
                    className="panel-content"
                    aria-labelledby="Recycleing-partner-anchor"
                  >
                    <div className="r2d2__board--upper">
                      <h2>Recycleing partner</h2>
                      <p>Carbon credits</p>
                      <p>
                        Pending e-waste dispatch
                        <br />
                        Average marketing reach
                        <br />
                        Cost Optimization
                      </p>
                      <p>Keyboard</p>
                    </div>
                    <div className="r2d2__board--bottom">
                      <h3>Dashboard</h3>
                      <div className="r2d2__board--grid">
                        <div className="r2d2__grid">
                          <h4>Carbon offset​</h4>
                          <span>Total: Last 30 days</span>
                        </div>
                        <div className="r2d2__grid">
                          <h4>Highest recycler</h4>
                        </div>
                        <div className="r2d2__grid">
                          <h4>Recycle KPIs</h4>
                        </div>
                        <div className="r2d2__grid">
                          <p>Fiscal KPIs​</p>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li
                    role="tabpanel"
                    id="Loyalti-panel"
                    className="panel-content"
                    aria-labelledby="Loyalti-anchor"
                  >
                    <div className="r2d2__board--upper">
                      <h2>Loyalty</h2>
                      <p>Carbon credits</p>
                      <p>
                        Pending e-waste dispatch
                        <br />
                        Average marketing reach
                        <br />
                        Cost Optimization
                      </p>
                      <p>Keyboard</p>
                    </div>
                    <div className="r2d2__board--bottom">
                      <h3>Dashboard</h3>
                      <div className="r2d2__board--grid">
                        <div className="r2d2__grid">
                          <h4>Carbon offset​</h4>
                          <span>Total: Last 30 days</span>
                        </div>
                        <div className="r2d2__grid">
                          <h4>Highest recycler</h4>
                        </div>
                        <div className="r2d2__grid">
                          <h4>Recycle KPIs</h4>
                        </div>
                        <div className="r2d2__grid">
                          <p>Fiscal KPIs​</p>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li
                    role="tabpanel"
                    id="Leaderboard-panel"
                    className="panel-content"
                    aria-labelledby="Leaderboard-anchor"
                  >
                    <div className="r2d2__board--upper">
                      <h2>Leaderboard</h2>
                      <p>Carbon credits</p>
                      <p>
                        Pending e-waste dispatch
                        <br />
                        Average marketing reach
                        <br />
                        Cost Optimization
                      </p>
                      <p>Keyboard</p>
                    </div>
                    <div className="r2d2__board--bottom">
                      <h3>Dashboard</h3>
                      <div className="r2d2__board--grid">
                        <div className="r2d2__grid">
                          <h4>Carbon offset​</h4>
                          <span>Total: Last 30 days</span>
                        </div>
                        <div className="r2d2__grid">
                          <h4>Highest recycler</h4>
                        </div>
                        <div className="r2d2__grid">
                          <h4>Recycle KPIs</h4>
                        </div>
                        <div className="r2d2__grid">
                          <p>Fiscal KPIs​</p>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li
                    role="tabpanel"
                    id="Options-panel"
                    className="panel-content"
                    aria-labelledby="Options-anchor"
                  >
                    <div className="r2d2__board--upper">
                      <h2>Options</h2>
                      <p>Carbon credits</p>
                      <p>
                        Pending e-waste dispatch
                        <br />
                        Average marketing reach
                        <br />
                        Cost Optimization
                      </p>
                      <p>Keyboard</p>
                    </div>
                    <div className="r2d2__board--bottom">
                      <h3>Dashboard</h3>
                      <div className="r2d2__board--grid">
                        <div className="r2d2__grid">
                          <h4>Carbon offset​</h4>
                          <span>Total: Last 30 days</span>
                        </div>
                        <div className="r2d2__grid">
                          <h4>Highest recycler</h4>
                        </div>
                        <div className="r2d2__grid">
                          <h4>Recycle KPIs</h4>
                        </div>
                        <div className="r2d2__grid">
                          <p>Fiscal KPIs​</p>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li
                    role="tabpanel"
                    id="Setting-panel"
                    className="panel-content"
                    aria-labelledby="Setting-anchor"
                  >
                    <div className="r2d2__board--upper">
                      <h2>Settings</h2>
                      <p>Carbon credits</p>
                      <p>
                        Pending e-waste dispatch
                        <br />
                        Average marketing reach
                        <br />
                        Cost Optimization
                      </p>
                      <p>Keyboard</p>
                    </div>
                    <div className="r2d2__board--bottom">
                      <h3>Dashboard</h3>
                      <div className="r2d2__board--grid">
                        <div className="r2d2__grid">
                          <h4>Carbon offset​</h4>
                          <span>Total: Last 30 days</span>
                        </div>
                        <div className="r2d2__grid">
                          <h4>Highest recycler</h4>
                        </div>
                        <div className="r2d2__grid">
                          <h4>Recycle KPIs</h4>
                        </div>
                        <div className="r2d2__grid">
                          <p>Fiscal KPIs​</p>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default R2D2Dashboard;
