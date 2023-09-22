import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Success from "./success";

const Login = () => {
    const [email, setEmail] = useState("");
    const[password, setPassword]= useState('');
    const[number, setNumber] = useState('');
    const [failed, setFailed]= useState(false);
    const navigate = useNavigate();

    
    const handleSubmit = (e) => {
      e.preventDefault();
    
      fetch('http://localhost:8000/register')
        .then((res) => res.json())
        .then((users) => {
          console.log(users);
    
          const foundUser = users.find((user) => user.email === email);
    
          if (!foundUser) {
            setFailed(true); // No user found, show login failure
          } else {
            if (foundUser.password === password) {
              setFailed(false); // Password matches, reset login failure state
              navigate('/success'); // Navigate to the success page
            } else {
              setFailed(true); // Password doesn't match, show login failure
            }
          }
        });
    };
    
       
    

    // const handleSubmit = async (e) => {
    //   e.preventDefault();
  
    //   try {
    //      const response = await fetch('http://localhost:8000/register', 
    //      {
    //        method: 'POST',
    //        headers: {
    //         'Content-Type': 'application/json',
    //        },
    //        body: JSON.stringify({ email, password }),
    //     }
    //     );
  
    //     if (response.ok) {
    //       const data = await response.json();
    //       console.log('Login successful', data);
    //       // navigate('/success');
    //     } else {
    //       setFailed(true);
    //       console.log('Login failed');
    //     }
    //   } catch (error) {
    //     console.error('Error during login:', error);
    //     setFailed(true);
    //   }

    

    return (  
        
        <div className="login">
            {invalid && <div> Invalid Credentails</div>}
            <h1>Login </h1>
          <form  onSubmit={handleSubmit}>
    <tr>
        <td>Email Address:      
        <input type="email" 
        required
        value={email}
         onChange={(e) => setEmail(e.target.value)}
         /></td>
    </tr>
    <tr>
        <td> Password: 
        <input type="password" required
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        /></td>
    </tr>
    <tr>
        <td>Mobile Number: 
       <input type="text" required pattern="[0-9]+" 
       title="Numbers only"
       value={number}
        onChange={(e) => setNumber(e.target.value)}
        /></td>
    </tr>
    <tr>
        <input type="submit" value="Sign in" className="button"/>
    </tr>
           
         </form>

         {failed && <p>Invalid Credentails</p>}
        </div>
    );
}
 
export default Login;