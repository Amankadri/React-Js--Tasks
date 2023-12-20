import React, { useState } from 'react';
import "bootstrap/dist/css/bootstrap.css"
import { Col, Container,Button, Row } from 'react-bootstrap'
import indiaLogo from "./img/indiaLogo.png";
import 'react-date-range/dist/styles.css';
import { DateRange } from 'react-date-range'
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { format } from 'date-fns';
import 'react-date-range/dist/theme/default.css';
import { userdata } from './Users';


function Booking() {
    const [openDate, setOpenDate] = useState(false)
    const [date, setDate] = useState([
        {
            startDate: new Date(),
            endDate: new Date(),
            key: 'selection',
        }
    ])
    const [query,setquery] = useState();
    
    function Filtercard() {
        
        return (
         <>
         <Container className='mt-5'>
        <Row>
        {/* <Col xl={3} className='border border-2 border-Secondary rounded mt-3 g-1'></Col> */}
        <Col xl={9}>
         {userdata.filter((i1)=>i1.title.includes(query)).map((i1) =>
                  <Row className='border border-2 border-Secondary rounded p-1 mt-3'>
                  <Col xl={4}>
                      <img src={i1.url} alt="" style={{height:"200px",width:"200px"}} className='rounded-3'/></Col>
                  <Col xl={5} className='fs-6'>
                      <h3>{i1.title}</h3>
                  <Button>Featured</Button>
                  <p><label htmlFor="Late Escape Deal" className='bg-success rounded-2 px-1 text-white'>Late Escape Deal</label></p>
                  <ul>
                  <li><b>Deluxe Room</b></li>
                  <li>1 double bed</li>
                  <li>Free Cancellation</li>
                  <li>No prepayment needed - pat at the property</li>
                  </ul>
                  </Col>
                  <Col xl={3} className='text-end'>
                  <h1>Good</h1>
                  <span>27 reviews</span>
                  <label htmlFor="new" className='fs-6 bg-warning rounded-3 px-1'>New to Booking.com</label>
                  <p>9 nights, 2 adults</p>
                  <p><strike>38,497</strike><h1>28,873</h1></p>
                  <p>+ 3,465 taxes and charges</p>
                  <Button>See availability</Button>
                  </Col>
                  </Row>
                  )}
                  </Col>
                  </Row>
          
         </Container>
        
         </>
        )
        }
    return (

      <>
        <Container className='section-1 text-white' fluid>
            <Container className='a'>
                <Row className='text-start py-3'>
                    <Col>
                        <h2 className='fs-4 fw-bold'>Booking.com</h2>
                    </Col>
                    <Col className='d-flex align-items-center justify-content-evenly text-start ps-1'>
                        <span className='fw-bold'>INR</span>
                        <img className=' rounded-circle' src={indiaLogo} height={"24px"} width={"24px"} alt="" />
                        <span className='question-mark rounded-circle px-2 border border-2'>?</span>
                        <span className='fw-bold'>List your property</span>
                        <button className='button-1'>Register</button>
                        <button className='button-1'>Sign in</button>
                    </Col>
                </Row>
                <Row className='w' style={{ marginBottom: "-20px" }}>
                    <Col className='d-flex buttons gap-1 align-items-center text-start mb-2'>
                        <span className='active'>Stays</span>
                        <span>Flights</span>
                        <span>Flights + Hotel</span>
                        <span>Car rental</span>
                        <span>Attractions</span>
                        <span>Airport taxis</span>
                    </Col>
                </Row>
            </Container>
            <Container>
                <Row className='text' style={{ marginBottom: "40px" }}>
                    <Col className='col-12  align-items-center text-start' >
                        <p className='display-5 fw-bold'>Find your next stay</p>
                    </Col>
                    <Col className='col-12  align-items-center text-start'>
                        <p className='fs-4'>Search low prices on hotels, homes and much more...</p>
                    </Col>
                </Row>
            </Container>
            <Container>
                <Row className='rounded-2 d-flex  text-start' style={{ margin: "-37px", transform: "translateY(22px)", }}>
                    <Col className='booking my-1'>
                        <button className='px-5 border-0 me-1 py-2 w-25 rounded-2 border1' value={query} onChange={(e)=>{setquery(e.target.value)}}>Where are you going</button>

                        <button className='px-5 border-0 py-2 me-1 rounded-2 border1' onClick={() => setOpenDate(!openDate)}  >{`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(date[0].endDate, "MM/dd/yyy")}`}</button>
                        {openDate && <DateRange editableDateInputs={true} onChange={(item) => setDate([item.selection])} moveRangeOnFirstSelection={false} ranges={date} className="date" />}
                        <button className='px-5 border-0 py-2 me-1 rounded-2 border1'>2 adults - 0 children - 1 room</button>
                        <button className='px-5 border-0 py-2 rounded-2 border1' style={{ backgroundColor: "blue", color: "white" }}  onClick={Filtercard}>Search</button>
                    </Col>
                </Row>
            </Container>

        </Container>
        <Filtercard/>
</>

    )
}

export default Booking