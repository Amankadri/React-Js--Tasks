import useFetch from "./useFetch";
import RegisterData from "./registerdata";
import RegisterDetails from "./registerdetails";
import Create from "./create";

const Register = () => {
    
    const{data: register}= useFetch('http://localhost:8000/register')

    return (  
        <div className="signUp">


       { register && <RegisterData  data={register}/>}
       <RegisterDetails/>
       <Create/>
        </div>

        
    );
}
 
export default Register;