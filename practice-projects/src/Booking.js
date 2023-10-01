import React from 'react';
import "bootstrap/dist/css/bootstrap.css"
import { Col, Container, Row } from 'react-bootstrap'
import indiaLogo from "./img/indiaLogo.png"

function Booking() {
  return (
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
        <Row className='w'>
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
        <Row className='text'>
            <Col className='col-12  align-items-center text-start' >
                <p className='display-5 fw-bold'>Find your next stay</p>
            </Col>
            <Col className='col-12  align-items-center text-start'>
                <p className='fs-4'>Search low prices on hotels, homes and much more...</p>
            </Col>
        </Row>
    </Container>
    <Container>
        <Row className='rounded-2 d-flex bg-warning text-start'>
            <Col className='booking my-1'>
                <button className='px-5 border-0 me-1 py-2 w-25 rounded-2'>Novalija</button>
                <button className='px-5 border-0 py-2 me-1 rounded-2'>Check-in date - Check-out date</button>
                <button className='px-5 border-0 py-2 me-1 rounded-2'>2 adults - 0 children - 1 room</button>
                <button className='px-5 border-0 py-2 rounded-2'>Search</button>
            </Col>
        </Row>
    </Container>
</Container>

)
}

export default Booking