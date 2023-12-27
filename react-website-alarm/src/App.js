import './App.css';
import System from "./components/webpages/System"
import About from "./components/webpages/About"
import User from "./components/webpages/User"
import 'bootstrap/dist/css/bootstrap.css'
import {Router, Routes, Route, BrowserRouter} from 'react-router-dom';
import { NavBarBootstrap } from './components/navbarBS.js';

/*The image src is currently temporary */
/*System logs page will be considered the home page with both the logs + status
  User Options will allow users to modify light/dark mode on the website?
  About us is self explanatory
*/
function App() {
  return (
    <BrowserRouter>
      <NavBarBootstrap/>
      <Routes>
        <Route exact path="./webpages/System" element ={<System />}/>
        <Route exact path="./webpages/About" element ={<About />}/>
        <Route exact path="./webpages/User" element ={<User />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
