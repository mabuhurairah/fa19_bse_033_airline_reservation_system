import React from "react";
import { Container, Button } from "react-bootstrap";
import { Form, Row, Col, FloatingLabel } from "react-bootstrap";
import image1 from '../../src/public/images/image1.jpg';
import flight5 from '../../src/public/images/flights5.png';
import logo1 from '../../src/public/images/Logo1.png';
import logo2 from '../../src/public/images/Logo2.png';
import logo3 from '../../src/public/images/Logo3.png';
import logo4 from '../../src/public/images/Logo4.png';

const LandingPage = () => {
    return ( <Container>

        <Row className='mt-3'>
            <Col lg={7} md={7} className='Col Row'>
                <h4 className="mb-4">Search and Book Flight</h4>
                <Form>
                    <Row className="g-0 mb-3">
                        <Col sm={2}>
                            <Button variant="success">One-way</Button>
                        </Col>
                        <Col sm={3}>
                            <Button variant="secondary">Round-trip</Button>
                        </Col>
                    </Row>

                    <Row className="g-2 mb-3">
                        <Col md>
                            <FloatingLabel controlId="floatingInputGrid" label="Departure City or Airport">
                                <Form.Select aria-label="Floating label select example">
                                    <option></option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </Form.Select>
                            </FloatingLabel>
                        </Col>
                        <Col md>
                            <FloatingLabel controlId="floatingInputGrid" label="Arrival City or Airport">
                                <Form.Select aria-label="Floating label select example">
                                    <option></option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </Form.Select>
                            </FloatingLabel> 
                        </Col>
                    </Row>

                    <Row className="g-2 mb-3">
                        <Col md>
                            <FloatingLabel controlId="floatingInputGrid" label="Departure Date">
                                <Form.Control type="date" name="dob" placeholder="Date of Birth" />
                            </FloatingLabel>
                        </Col>

                        <Col md>
                            <FloatingLabel controlId="floatingInputGrid" label="Arrival Date">
                                <Form.Control type="date" name="dob" placeholder="Date of Birth" />
                            </FloatingLabel>
                        </Col>
                    </Row>

                    {/*<Row className="mt-4 mb-4">
                        <Col sm={6} className="">
                            <Form.Group>
                                <Form.Check
                                not-required
                                label="Direct flight only"
                                feedbackType="invalid"
                                />
                            </Form.Group>
                        </Col>
                    </Row>*/}

                    <Form.Group className="mb-3 mt-5">
                        <Form.Check
                        required
                        label="Agree to terms and conditions"
                        feedback="You must agree before submitting."
                        feedbackType="invalid"
                        />
                    </Form.Group>

                    <Button type="submit" variant="dark">Search Flight</Button>
                </Form>
            </Col>
            <Col lg={5} md={5} className="Row">
                <img src={image1} alt="img" width="100%" height="100%" />
            </Col>
        </Row>

        <Row className="mt-4">
            <h1 className="Center m-3">bookFlight</h1>
            <p className="Center">bookFlight has satisfied its customers with authentic online flight bookings for both domestic and 
                international destinations. Peace of mind means changing your travel dates as often as you need. We understand your plans 
                change, and that is why Bookme offers a fee-free policy to change your booking details before 48 hours of your flight. 
                Now book your online flight ticket with Bookme and relax knowing that you are in safe hands.
            </p>
        </Row>

        {/*<Row className='LandingPageRow3'>
            <h2>Destinations Open for Travel</h2>
            <Col sm={3}>
                <img src={logo1} alt="img" width="60%" height="60%" />
            </Col>
            <Col sm={3}>
                <img src={logo1} alt="img" width="60%" height="60%" />
            </Col>
            <Col sm={3}>
                <img src={logo1} alt="img" width="60%" height="60%" />
            </Col>
            <Col sm={3}>
                <img src={logo1} alt="img" width="60%" height="60%" /> 
            </Col>
        </Row>*/}

        <Row className='Row mb-5'>
            <Col sm={3} className="LandingPageRow2">
                <img src={logo1} alt="img" width="60%" height="60%" className="pt-4" />
                <h5>Look no further</h5>
                <p>Search all online travel deals in one go</p>
            </Col>
            <Col sm={3} className="LandingPageRow2">
                <img src={logo2} alt="img" width="60%" height="60%" className="pt-4" />
                <h5>Shop with confidence</h5>
                <p>No hidden fees, taxes or other nasty surprises</p>
            </Col>
            <Col sm={3} className="LandingPageRow2">
                <img src={logo3} alt="img" width="60%" height="60%" className="pt-4" />
                <h5>Pay the way you want</h5>
                <p>See only sellers who support your preferred methods</p>
            </Col>
            <Col sm={3} className="LandingPageRow2">
                <img src={logo4} alt="img" width="60%" height="60%" className="pt-4" />
                <h5>Instant booking</h5>
                <p>For selected sellers, book with just a couple of clicks</p>
            </Col>
        </Row>

        <Row className="LandingPageRow4 mt-5">
            <Col sm={12}>
                <h2>Real time flight bookings</h2>
                <p className="mb-5">Aggregated with multiple flights API's for real-time booking</p>
                <img src={flight5} alt="img" width="80%" height="80%" />
            </Col>
        </Row>
        
        <Row className='LandingPageRow3'>
            <h4 className="mt-5">Fly Well</h4>
            <p>
                We all know Covid-19 is causing unprecedented change and uncertainty in our world, but Bookme is taking extra 
                measures to help protect you and your booking. Bookme is focused on giving protected, reliable, and convenient 
                procedures for online flight tickets booking. Whether you are taking a business trip, returning to your home city,
                or exploring nature’s wonders, you can schedule and book your flights online through Bookme for a seamless travel experience.
            </p>

            <h4>Manage Your Airline Booking</h4>
            <p>
                Peace of mind means changing your travel dates as often as you need. We understand your plans change, and that is why Bookme offers a fee-free policy to change your booking details before 48 hours of your flight.
                Now book your online flight ticket with Bookme and relax knowing that you are in safe hands.
            </p>

            <h4>Fly Wherever You Want</h4>
            <p className="mb-5">
                Bookme has satisfied its customers with authentic online flight bookings for both domestic and international destinations.
            </p>
        </Row>
    </Container> );
}
 
export default LandingPage;