import React from "react";
import { Container, Button, Row, Col } from 'react-bootstrap';


const SingleFlightData = (props) => {
    const { flight } = props;

    return ( <Container>
        <Row>
            <Col sm={10}>
                <h3><strong>{flight.flightCompany}</strong> ({flight.flightNumber})</h3>
            </Col>
            <Col sm={2}>
                <Button variant="success">
                    Book Ticket
                </Button>
            </Col>
        </Row>
        <Row className="Bottom-border mb-3">
            <div className="MarginLeft">
                <p><strong>Departure City: </strong>{flight.departureCity}</p>
                <p><strong>Arrival City: </strong>{flight.arrivalCity}</p>
                <p><strong>Departure Date: </strong>{flight.departureDate}</p>
                <p><strong>Arrival Date: </strong>{flight.arrivalDate}</p>
            </div>
        </Row>
    </Container> );
}
 
export default SingleFlightData;