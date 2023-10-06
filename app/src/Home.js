import {useState, React} from 'react';
import TodoList from './to_do';


const Changedetails = () => {

  const [data, setData]= useState({
    fname: "Aman",
    lname: "Kadri",
    email: "kadriaman2@gmail.com"
  })


  return ( 
       <div className='home'>
         FirstName: <input type="text"     onBlur={(e)=>
        setData({...data,
         fname: e.target.value})}/>
         <p>{data.fname}</p>

         Lastname: <input type="text"  value={data.lname} onChange={(e)=>
        setData({...data,
         lname: e.target.value})}/>
         <p>{data.lname}</p>

         Email: <input type="text"  value={data.email} onChange={(e)=>
        setData({...data,
         email: e.target.value})}/>
         <p>{data.email}</p>
         <TodoList/>
       </div>
   );
}
 
export default Changedetails;