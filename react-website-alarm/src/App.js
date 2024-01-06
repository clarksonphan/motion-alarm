import './App.css';
import System from "./System.js"
import About from "./About.js"
import AboutV2 from "./About.js"
import User from "./User.js"
import 'bootstrap/dist/css/bootstrap.css'
import {Router, Routes, Route, BrowserRouter} from 'react-router-dom';
import { NavBarBootstrap } from './navbarBS.js';
import "./App.css"

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
        <Route path="/" element={<System />} />
        <Route path="/System" element ={<System />}/>
        <Route path="/About" element ={<About/>}/>
        <Route path="/User" element ={<User />}/>
      </Routes>

    </BrowserRouter>
  );
}

export default App;
