import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import TopBar from './containers/top/TopBar';
import { AppLeft } from './containers/app/AppLeft';
import Home from './pages/Home';
import Cities from './pages/Cities';
import CityDetails from './pages/CityDetails';
import { Login } from './pages/Login';

function App() {
  return (
    <div className="App">
      <TopBar />
      <div className="AppCenter">
        <BrowserRouter>
          <AppLeft />
          <div className="AppMiddle-left-expanded">
            <Routes>
              <Route path="/" element={ <Home /> } />
              <Route path="/login" element={ <Login /> } />
              <Route path="/cities" element={ <Cities /> } />
              <Route path="/cities/:cityId" element={ <CityDetails /> } />
            </Routes>
          </div>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
 