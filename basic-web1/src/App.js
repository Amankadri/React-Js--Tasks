import './App.css';
import Navbar from './Components/Navbar';
import{BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
    <Router>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
    </Routes>
    </Router>
    </div>
  );
}

export default App;
