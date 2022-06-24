import React from "react";
import { Container, Form, Modal, Button, Row } from 'react-bootstrap';
import SingleFlight from "./SingleFlight";
import flightService from "./../../services/FlightsService";

const Flights = (props) => {
    const [show, setShow] = React.useState(true);
    const handleClose = () => {setShow(false)};
    const handleShow = () => {setShow(true)};

    const [flights, setFlights] = React.useState([]);

    const [flightCompany, setFlightCompany] = React.useState("");
    const [flightNumber, setFlightNumber] = React.useState("");
    const [departureCity, setDepartureCity] = React.useState("");
    const [arrivalCity, setArrivalCity] = React.useState("");
    const [departureDate, setDepartureDate] = React.useState("");
    const [arrivalDate, setArrivalDate] = React.useState("");
    const [passengerCapacity, setPassengerCapacity] = React.useState("");

    const getData = () => {
        flightService
          .getFlights()
          .then((data) => {
            setFlights(data);
          })
          .catch((err) => {
            console.log(err);
          });
    };
    React.useEffect(getData, []);
    console.log("Inside Users Component");



    return ( <div>
        <Container className="mb-5 mt-5">
            <Button className="mt-5" variant="dark" onClick={handleShow}>
                Add New Flight
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                <Modal.Title>Add New Flight</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <Form>
                    <Form.Group className="mb-3" controlId="">
                        <Form.Label>Company</Form.Label>
                        <Form.Control type="alphaNumeric" placeholder="Enter Company" value={flightCompany}
                            onChange={(e) => {
                                setFlightCompany(e.target.value);
                        }} />
                        <Form.Label>Flight Number</Form.Label>
                        <Form.Control type="alphaNumeric" placeholder="Enter Flight Number" value={flightNumber}
                            onChange={(e) => {
                                setFlightNumber(e.target.value);
                        }} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Departure City Or Airport</Form.Label>
                        <Form.Control type="text" placeholder="Departure City Or Airport" value={departureCity}
                            onChange={(e) => {
                                setDepartureCity(e.target.value);
                        }} />
                        <Form.Label>Arrival City Or Airport</Form.Label>
                        <Form.Control type="text" placeholder="Arrival City Or Airport" value={arrivalCity}
                            onChange={(e) => {
                                setArrivalCity(e.target.value);
                        }} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Departure Date</Form.Label>
                        <Form.Control type="date" placeholder="Departure Date" value={departureDate}
                            onChange={(e) => {
                                setDepartureDate(e.target.value);
                        }} />
                        <Form.Label>Arrival Date</Form.Label>
                        <Form.Control type="date" placeholder="Arrival Date" value={arrivalDate}
                            onChange={(e) => {
                                setArrivalDate(e.target.value);
                        }} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Passenger Capacity</Form.Label>
                        <Form.Control type="number" placeholder="Enter Passenger Capacity" value={passengerCapacity}
                            onChange={(e) => {
                                setPassengerCapacity(e.target.value);
                        }} />
                    </Form.Group>

                </Form>
                </Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="dark" type="submit" onClick={e=>{
                    console.log("Send API call");
                    flightService
                        .addFlight({ flightCompany, flightNumber, arrivalCity, departureCity, arrivalDate, departureDate, passengerCapacity })
                        .then((data) => {
                            console.log(data);
                            window.location.reload();
                            // props.history.push("/admin");
                        })
                        .catch((err) => {
                            console.log(err);
                    });
                    e.preventDefault();
                    handleClose();
                    window.location.reload();
                }} >
                        Add New Flight
                </Button>
                </Modal.Footer>
            </Modal>

            <Row className="Col mt-5 Center">
                <h4>Flights Record</h4>
            </Row>


            <div className="mt-5">
                {flights.length === 0 ? (
                    <p>There are no flights</p>
                ) : (
                    <div>
                        {flights.map((flight, index) => (
                            <SingleFlight key={index} flight={flight} onDelete={getData} />
                        ))}
                    </div>
                )}
            </div>
        </Container> 
    </div> );
}
 
export default Flights;