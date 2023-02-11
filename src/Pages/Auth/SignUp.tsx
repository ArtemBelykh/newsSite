import React, {useEffect} from 'react';
import {useForm} from "react-hook-form";
import {Alert, Button, Form} from "react-bootstrap";
import {Link, useNavigate} from "react-router-dom";
import {useRegisterMutation} from "../../Services/AuthApi";

const SignUp = (): JSX.Element => {
    const {register, formState: {errors}, handleSubmit} = useForm()
    const [registration, {data, isSuccess: isRegistrationSuccess, isError: isRegistrationError, error: registrationError}] = useRegisterMutation()

    const navigate = useNavigate()

    function onSubmit(data: any) {
        registration(data)


        setTimeout(() => {
            navigate('/')
        }, 3500)

        alert("You are success sign up!")
    }

    return (
        <Form style={{margin: "auto", width: "30%", marginTop: "5%"}} onSubmit={handleSubmit(onSubmit)}>
                <h2 style={{textAlign: "center", marginBottom: "40px"}}>Sign Up your account</h2>

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>E-Mail: </Form.Label>
                <Form.Control {...register('email', {
                    required: true
                })} type="email" placeholder="Enter email"/>
                <Form.Text className="text-muted">
                    {errors?.email && <p style={{color: "red"}}>Email is required!</p>}
                </Form.Text>
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
                <Form.Label>Password: </Form.Label>
                <Form.Control {...register('password', {
                    required: true
                })} type="password" placeholder="Password"/>
            </Form.Group>
            <Form.Text className="text-muted">
                {errors?.password && <p style={{color: "red"}}>Password is required!</p>}
            </Form.Text>

            <Form.Group controlId="formBasicPassword">
                <Form.Label>Password: </Form.Label>
                <Form.Control {...register('password2', {
                    required: true
                })} type="password" placeholder="Password"/>
            </Form.Group>
            <Form.Text className="text-muted">
                {errors?.password2 && <p style={{color: "red"}}>Password is required!</p>}
            </Form.Text>

            <Form.Group className={"mt-3"}>
                <Button variant="primary" type="submit">
                    Sign Up
                </Button>
                <Link to={'/logIn'} style={{marginLeft: "10px"}}>
                    Log In
                </Link>
            </Form.Group>

        </Form>
    );
};

export default SignUp;