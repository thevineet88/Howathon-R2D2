import logo from './logo-main.png';
import './App.css';
import Menu from './components/Menu';
import BannerHomepage from './components/BannerHomepage';
import RecyclePage from './components/RecyclePage';
import PDPPage from './components/PDPPage';
import Breadcrumb from './components/Breadcrumb';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className='container'>
          <img src={logo} alt="logo" height={'200px'} />
          <Menu />
        </div>
        <BannerHomepage className="banner-homepage" />
        <Breadcrumb />
        {/* <RecyclePage /> */}
        <PDPPage />
      </header>
      <footer className='App-footer'>
      © 2022 R2-D2 LLC
      </footer>
    </div>
  );
}

export default App;
