import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

function Home() {
  const users= useSelector(state=>state.ever)
  console.log(users)
  return (
    <div className="container text-center">
      <h3>User Data</h3>
            <Link className='btn btn-primary my-2' to='/add'>Add new(+)</Link>

            <table className='table'>
              <thead className='table-dark'>
                <tr>
                  <td>ID</td>
                  <td>Name</td>
                  <td>Email</td>
                  <td>Action</td>
                </tr>

              </thead>

              <tbody>
             {users.map((model)=>(
              <tr>
              <td>{model.id}</td>
              <td>{model.name}</td>
              <td>{model.email}</td>
              <td>
                <button className='btn btn-success me-2'>Edit</button>
                <button className='btn btn-danger me-2'>Delete</button>
              </td>
            </tr>
             ))}

              </tbody>
            </table>
    </div>
  )
}

export default Home