import React, {useEffect} from 'react';
import {useForm} from "react-hook-form";
import {useLoginMutation} from "../../Services/AuthApi";
import {Link, useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {setUser} from "../../redux/authSlice";
import {Button, Form} from "react-bootstrap";


const SignIn = () => {
    const {register, formState: {errors}, handleSubmit} = useForm()
    const [login, {data, isSuccess: isLoginSuccess, isError: isLoginError, error: loginError}] = useLoginMutation()
    // const {data} = useRefreshQuery()
    const navigate = useNavigate()
    let dispatch = useDispatch()

    const onSubmit = async (dat: any) => {
        await login(dat)
    }

    useEffect(() => {
        if (isLoginSuccess) {
            navigate("/")
            dispatch(setUser({token: data.accessToken}))
        }

    }, [isLoginSuccess])

    return (
        <Form style={{margin: "auto", width: "30%", marginTop: "5%"}} onSubmit={handleSubmit(onSubmit)}>

            <h2 style={{textAlign: "center", marginBottom: "40px"}}>Log In your account</h2>


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
            <Form.Group className={"mt-3"}>
                <Button variant="primary" type="submit">
                    Log In
                </Button>
                <Link to={'/signup'} style={{marginLeft: "10px"}}>
                    Sign Up
                </Link>
            </Form.Group>
        </Form>
    );
};

export default SignIn;