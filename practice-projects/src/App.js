import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/js/bootstrap.bundle.min";
import Form from 'react-bootstarp/Form'
import Butt


function App() {
  return (
    <div className="App">
    
     <div className="container">
     <h1>Contact Filter</h1>
      <form >
        <InputGroup className='my-3'>
          <Form.Control placeholder='Search Contacts'/>
        </InputGroup>
      </form>
      <table stripped bordered hovered>
      <tr>
        <th>First Name</th>
        <th>Last Name</th>
        <th>Email</th>
        <th>Phone</th>
      </tr>
      </table>
     </div>
    </div>
  );
}

export default App;
