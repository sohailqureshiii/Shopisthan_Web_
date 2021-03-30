import './App.css';
import "../src/home.css";
import Navbar from './Components/navbar';
import HomeBanner from "./img/home-banner.jpg";
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Sidebar from './Components/Sidebar';


function App() {
  return (
    <>
      <div className = 'App__home'>
     
      <Navbar />
      <div></div>
      {/* Image Banner Starts here */}
      <div className="Home__imageBanner">
          <img
            alt="Home Banner"
            className="Home__imageBanner"
            src={HomeBanner}
          />
        </div>
        {/* Image Banner ends here */}

        {/*Filter */}
        <div className="Filter">
        <Router>
        <Sidebar />
        </Router>
        </div>
        {/*Filter */}
      </div>
    </>
  );
}

export default App;
