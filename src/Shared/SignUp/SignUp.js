import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useHistory } from 'react-router';
import useAuth from '../../Hooks/useAuth';
import './SignUp.css';


const SignUp = () => {
    const { googleSignIn,user,setUser,error,setError,signUp,setIsLoading } = useAuth();
    const history = useHistory();
    const [name,setName] = useState('')
    const [email,setEmail] = useState('')
    const [password, setPassword] = useState('');

    const hendelaccoutn = () => {
        history.push('/login');
    }

    const googleSignUp = () => {
        googleSignIn()
            .then(result => {
                setIsLoading(true)
            setUser(result.user)
            }).catch(err => {
                setError(error.message)
            })
            .finally(() => {
                setIsLoading(false)
            })
    }
     const hendelName = (e) => {
        setName (e.target.value)
    }
    const hendelEmail = (e) => {
        setEmail (e.target.value)
    }
    const hendelPassword = (e) => {
        setPassword (e.target.value)
    }
    const hendelSignUp = (e) => {
        e.preventDefault();
        signUp(email, password)
            .then(result => {
                setIsLoading(true)
                setUser(result.user)
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
            <Container>
                <Row className="d-flex justify-content-center align-items-center my-5">
                    <Col md={6}>

                        <div className="text-center signup">
                            <div><h2>Create a New Account</h2></div>
                        <form onClick={hendelSignUp}>
                            <input onBlur={hendelName} placeholder="Enter Name" type="text"  />
                            <input onBlur={hendelEmail} placeholder="Enter email" type="email"  />
                                <input onBlur={hendelPassword} placeholder="Enter password" type="password"  />
                                <p className='errors'>{error}</p>
                             <button className="all-btn" type="submit">Submit</button>
                            </form>
                            <div onClick={googleSignUp} className="google-signup d-flex justify-content-around signup-item my-3">
                                <h5>Sign Up With Google</h5>
                                <img src="https://i.ibb.co/xG1H7VS/google-symbol.png" alt="" />
                            </div>
                            <div className="d-flex justify-content-around signup-item my-3">
                                <h3>Forgot Password?</h3>
                                <h4 onClick={hendelaccoutn}>Allready have a account</h4>
                            </div>
                        </div>
                        
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default SignUp;