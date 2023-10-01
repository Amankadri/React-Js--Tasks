import React, { useState } from 'react';
import "bootstrap/dist/css/bootstrap.css";
import { data } from './data';
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

function SearchFilter() {
  const [search,setSearch] = useState("")
  console.log(data)
  return (
    <div>
      <Container>
      <h1 className='text-center mt-4'>Contact Keeper</h1>
        <Form>
          <InputGroup className='my-3'>

            {/* onChange for search */}
            <Form.Control
              onChange={(e) => setSearch(e.target.value)}
              placeholder='Search contacts'
            />
          </InputGroup>
        </Form>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Phone</th>
            </tr>
          </thead>
          <tbody>
            {data.filter((item)=>{
              return search.toLowerCase()===''? item : item.first_name.toLowerCase().includes(search); 
            })
            .map((item)=>(
              <tr>
                <td> {item.first_name} </td>
                <td> {item.last_name} </td>
                <td> {item.email} </td>
                <td> {item['Phone number']} </td>
              </tr>
            ))}
      
      
          </tbody>
        </Table>
      </Container>
    </div>
      
  )
}

export default SearchFilter