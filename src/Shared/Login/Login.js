import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../Hooks/useAuth';


const Login = () => {
    const { googleSignIn,setUser,error,setError,signIn,setIsLoading } = useAuth();
    const history = useHistory();
    const location = useLocation()
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const hendelaccoutn = () => {
        history.push('/signup');
    }
    const url = location.state?.from || '/home';
    const googleSignUp = () => {
        googleSignIn()
            .then(result => {
                setIsLoading(true)
                setUser(result.user)
                history.push(url)
            }).catch(error => {
                setError(error.message)
            })
            .finally(() => {
                setIsLoading(false)
         })
    }
   
    const hendelEmail = (e) => {
        setEmail (e.target.value)
    }
    const hendelPassword = (e) => {
        setPassword (e.target.value)
    }
    const hendelSignUp = (e) => {
        e.preventDefault()
        signIn(email, password)
            .then(result => {
                setIsLoading(true)
                setUser(result.user)
                history.push(url)
                setError('')
            }).catch(error => {
                setError(error.message)
            })
            .finally(() => {
                setIsLoading(false)
            })
    }
    return (
        <div>
             <div>
            <Container>
                <Row className="d-flex justify-content-center align-items-center my-5">
                    <Col md={6}>
                        <div className="text-center signup">
                                <div><h2>Welcome Back</h2></div>
                                <h1>Log In</h1>
                        
                        <form onSubmit={hendelSignUp}>
                            <input placeholder="Enter email" type="email" onBlur = {hendelEmail} />
                                <input placeholder="Enter password" type="password" onBlur={hendelPassword} />
                                <p className='errors'>{error}</p>
                             <button className="all-btn" type="submit">Submit</button>
                            </form>
                            <div onClick={googleSignUp}  className="google-signup d-flex justify-content-around signup-item my-3">
                                <h5>Sign Up With Google</h5>
                                <img src="https://i.ibb.co/xG1H7VS/google-symbol.png" alt="" />
                            </div>
                            <div className="d-flex justify-content-around signup-item my-3">
                                <h3>Forgot Password?</h3>
                                <h4 onClick={hendelaccoutn}>Create an Account</h4>
                            </div>
                    </div>
                    </Col>
                </Row>
            </Container>
        </div>
        </div>
    );
};

export default Login;