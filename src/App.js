import logo from "./logo-main.png";
import "./App.css";
import Menu from "./components/Menu";
import RecyclePage from "./components/RecyclePage";
import PDPPage from "./components/PDPPage";
import Breadcrumb from "./components/Breadcrumb";
import { BrowserRouter as Router, Routes, Route, Link, NavLink } from "react-router-dom";
import R2D2Dashboard from "./components/R2D2Dashboard";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="container">
          <img src={logo} alt="logo" height={"100px"} />
          <Menu />
        </div>
        <Breadcrumb />
      </header>
        <Routes>
          <Route exact path="/" element={<PDPPage />} />
          <Route path="/recycle" element={<RecyclePage />} />
          <Route path="/dashboard" element={<R2D2Dashboard />} />
        </Routes>

      <footer className="App-footer">© 2022 R2-D2 LLC
            <NavLink to="/dashboard" style={{float:'right'}}>
              Official Portal
            </NavLink></footer>
    </div>
  );
}

export default App;
