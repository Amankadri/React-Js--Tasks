// import logo from './logo.svg';
import './App.css';
import Changedetails from './Home';

import { BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import SearchFilter from './SearchFilter';


function App() {
  return (
  <Router>
      <div className="App">
        <Link to='/'><span>Home</span></Link>
        <Link to='/search'><span>Search Filter</span></Link>
     <Routes>
     
     <Route  path="/" element={<Changedetails/> }></Route>
     <Route  path="/search" element={<SearchFilter/> }></Route>
     </Routes>
    </div>
  </Router>
  );
}

export default App;
