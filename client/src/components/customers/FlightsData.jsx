import React from "react";
import { Row, Container } from "react-bootstrap";
import flightService from "../../services/FlightsService";
import SingleFlightData from "./SingleFlightData";

const FlightData = () => {

    const [flights, setFlights] = React.useState([]);

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


    return ( <div className="Row">
        <Container>
            <Row className="Col mt-5 mb-5">
                <h4 className="Center">Top Flights</h4>
            </Row>

            <div className="mt-5">
                {flights.length === 0 ? (
                    <p>There are no flights</p>
                ) : (
                    <div>
                        {flights.map((flight, index) => (
                            <SingleFlightData key={index} flight={flight} />
                        ))}
                    </div>
                )}
            </div>
        </Container>
    </div> );
}
 
export default FlightData;