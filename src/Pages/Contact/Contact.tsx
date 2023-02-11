import React from 'react';
import {Button, Form} from "react-bootstrap";

const Contact = () => {
    return (
        <Form style={{margin: "auto", width: "40%", marginTop: "50px"}}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="name@example.com" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>Example textarea</Form.Label>
                <Form.Control as="textarea" rows={3} />

                <Button style={{marginTop: "10px"}} type={"submit"} variant="info">Send</Button>
            </Form.Group>
        </Form>
    );
};

export default Contact;