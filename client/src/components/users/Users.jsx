import React from "react";
import { Container, Form, Modal, Button, Row } from 'react-bootstrap';
import SingleUser from "./SingleUser";
import userService from "./../../services/UsersService";

const Users = (props) => {
    const [show, setShow] = React.useState(false);
    const handleClose = () => {setShow(false)};
    const handleShow = () => {setShow(true)};

    
    const [users, setUsers] = React.useState([]);

    const [fullName, setFullName] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [contactNumber, setContactNumber] = React.useState("");
    const [password, setPassword] = React.useState("");
    

    const getData = () => {
        userService
          .getUsers()
          .then((data) => {
            setUsers(data);
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
                Add New User
            </Button>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                <Modal.Title>Add New User</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <Form>
                    <Form.Group className="mb-3" controlId="">
                        <Form.Label>Full Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter Full Name" value={fullName}
                            onChange={(e) => {
                                setFullName(e.target.value);
                            }} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="">
                        <Form.Label>Contact Number</Form.Label>
                        <Form.Control type="number" placeholder="Enter Contact Number" value={contactNumber}
                            onChange={(e) => {
                                setContactNumber(e.target.value);
                            }} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="">
                        <Form.Label>Email Address</Form.Label>
                        <Form.Control type="email" placeholder="Enter Email" value={email}
                            onChange={(e) => {
                                setEmail(e.target.value);
                            }} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" value={password}
                            onChange={(e) => {
                                setPassword(e.target.value);
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
                    userService
                        .addUser({ fullName, contactNumber, email, password })
                        .then((data) => {
                            console.log(data);
                            window.location.reload();
                            // props.history.push("/admin");
                        })
                        .catch((err) => {
                            console.log(err);
                    });
                    handleClose();
                }} >
                        Add New User
                </Button>
                </Modal.Footer>
            </Modal>

            <Row className="Col mt-5 Center">
                <h4>Users Record</h4>
            </Row>

            <div className="mt-5">
                {users.length === 0 ? (
                    <p>There are no users</p>
                ) : (
                    <div>
                        {users.map((user, index) => (
                            <SingleUser key={index} user={user} onDelete={getData} />
                        ))}
                    </div>
                )}
            </div>

        </Container> 
    </div> );
}
 
export default Users;