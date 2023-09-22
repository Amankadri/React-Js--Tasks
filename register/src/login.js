import useFetch from "./useFetch";

const Login = () => {
    const{data: register, invalid} = useFetch('http://localhost:8000/register')
    return (  
        
        <div className="login">
            {invalid && <div> Invalid Credentails</div>}
            <h1>Login </h1>
        {register &&
          <form  >
          <tr>
              <td>Email Address:      
              <input type="email" 
              required
              // value={email}
              //  onChange={(e) => setEmail(e.target.value)}
               /></td>
          </tr>
          <tr>
              <td> Password: 
              <input type="password" required
              // value={password}
              // onChange={(e) => setPassword(e.target.value)}
              /></td>
          </tr>
          <tr>
              <td>Mobile Number: 
             <input type="text" required pattern="[0-9]+" 
             title="Numbers only"
          //    value={number}
          //     onChange={(e) => setNumber(e.target.value)}
              /></td>
          </tr>
          <tr>
              <input type="submit" value="Sign in" className="button"/>
          </tr>
               </form>}
        </div>
    );
}
 
export default Login;