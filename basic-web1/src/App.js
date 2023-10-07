import './App.css';
import Navbar from './Components/Navbar';
import{BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from './pages/Home';
import Menu from './pages/Menu';
import Footer from './Components/Footer';
import About from './pages/About';
import Contact from './pages/Contact';


function App() {
  return (
    <div className="App">
    <Router>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/menu' element={<Menu/>}></Route>
      <Route path='/about' element={<About/>}></Route>
      <Route path='/contact' element={<Contact/>}></Route>
    </Routes>
    <Footer/>
    </Router>
    </div>
  );
}

export default App;
