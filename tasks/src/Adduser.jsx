import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import { adduser } from './Reducer';

function Adduser() {

    const [name, SetName]= useState('')
    const [email, Setemail]= useState('')

    const users= useSelector(state=>state.ever)
    console.log(users)

    const dispatch =useDispatch()
    const navigate= useNavigate()

    const umergandu= (e)=>{
        e.preventDefault()
        dispatch (adduser({name,email}))  
       navigate('/')

    }
  return (
    <div className='row justify-content-center text-start'>
        <div className='col-6'>

       <form className='container mt-5' onSubmit={umergandu}>
     
            
            <h4>AddUsers</h4>
            <div className='col-12'>
                <label className='form-label'>ID</label>
                <input disabled className='form-control' ></input>
            </div>
            
            <div className='col-12'>
                <label className='form-label'>Name</label>
                <input className='form-control' value={name} onChange={(e)=>{SetName(e.target.value)}}></input>
            </div>

            <div className='col-12'>
                <label className='form-label'>Email</label>
                <input className='form-control' value={email} onChange={(e)=>{Setemail(e.target.value)}}></input>
            </div>

            <div className='col-12'>
                
                <button className='btn btn-success m-2'>Save</button>
                <Link to='/' className='btn btn-primary m-2'>Back</Link>

            </div>

            
       </form>
          </div>
    </div>
  )
}

export default Adduser