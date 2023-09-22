import useFetch from "./useFetch";
import RegisterData from "./registerdata";
import RegisterDetails from "./registerdetails";
import Create from "./create";
import Success from "./success";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


const Register = () => {
    
    const{data: register, failed}= useFetch('http://localhost:8000/register')

    return (  
    // <Router>
    //        <div className="signUp">


    //             { register && <RegisterData  data={register}/>}
    //             {/* {failed && <p>Invalid Credentials</p>} */}
    //             <Routes>
    //             <RegisterDetails/>
    //             <Create/>
    //                 <Route path="/success" element={<Success/>}> </Route>
    //             </Routes>
    //             </div>
    // </Router>
    <>
     { register && <RegisterData  data={register}/>}
     <Create/>
     </>

        
    );
}
 
export default Register;