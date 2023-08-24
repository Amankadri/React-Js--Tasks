import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Register from "./register";

const Login = () => {
    const [email, setEmail] = useState("");
    const[password, setPassword]= useState('');
    const[number, setNumber] = useState('');
    const [failed, setFailed]= useState(false);
    const navigate = useNavigate;

    
        const handleSubmit =  async(e) => {
            e.preventDefault();
            try {
                const response = await fetch('http://localhost:8000/register', {
                  method: 'Get',
                  headers: { 'Content-Type': 'application/json' },
                //   body: JSON.stringify({ email, password }),
                });
          
                if (response.ok) {
                  const register = await response.json();
                  console.log("Logged in")
                  navigate('/success')
                  // Handle successful login, store token, update state, etc.
                } else {
                    console.log("false in")
                  // Handle login error, show an error message, etc.
                }
              } catch (error) {
                console.error('Error during login:', error);
              }

           
       
        // const register = {email, password, number};

        // fetch('http://localhost:8000/register', {
        //     method: "Get",
        //     headers: {"Content-Type": "application/json" },
        //     body: JSON.stringify(register)   
        //   }).then(()=> {
        //     console.log('new blog added')
        //     navigate('/success')
          
        //   })
        //   .catch(()=>
        //   {
        //     console.log('Invalid credentials'); 
        //     setFailed(true)  
        //   })
    }

    return (  
        <div className="login">
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

         {/* {failed && <p>Invalid Credentails</p>} */}
        </div>
    );
}
 
export default Login;