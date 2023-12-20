import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from './Home';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import Adduser from './Adduser';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/add' element={<Adduser/>}></Route>
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
