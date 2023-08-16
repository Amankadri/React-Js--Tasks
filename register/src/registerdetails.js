import useFetch from "./useFetch";
import {useParams} from "react-router-dom";

const RegisterDetails = () => {
    const { id }= useParams();
    const{data: register} = useFetch('http://localhost:8000/register' + id)
    return (  
        <div className="detailsreg">
        <article>
        <p>{register.email}</p>
        <p>{register.password}</p>
        <p>{register.number}</p>
        </article>
        </div>
    );
}
 
export default RegisterDetails;