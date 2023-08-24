import { useState } from "react";

const TodoList = () => {

    const[data, setData]= useState("");
    const[update, setUpdate]= useState(data);
    const[edit, setEdit]= useState();
    const[reset, setDelete]= useState("");

    const handleChange= (e)=>
    {
        setData(e.target.value)
    }

    const handleClick = ()=>
    {
           setUpdate(data)
    }

    const handleEdit = ()=>
    {
        setEdit("21")
    }

    const handleDelete = ()=>
    {
        setDelete(reset)
    }
    return ( 
      <div>
         <input value={data} 
       onChange={handleChange}/>
       {/* <h3>{data}</h3> */}

       <button onClick={handleClick}> Submit</button>
       <p>{update}{edit} {reset}</p>
       <button onClick={handleEdit}> Edit</button>
       {/* <p>{edit}</p> */}
     
       <button onClick={handleDelete}>Delet</button>

       </div>
       
     );
}
 
export default TodoList;