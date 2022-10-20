import React from 'react';
import { FloatingLabel, Form } from 'react-bootstrap';
import "../styles/login.css";

const Login = () => {

    return (
        <div className='container-fluid'>
            <div className="container" id='login-container'>
                <div className="">
                    <h1>Login</h1>
                    <form className='row'>
                        <div className="col-12">
                            <div class="form-floating mb-3">
                                <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" />
                                <label for="floatingInput">Email address</label>
                            </div>
                        </div>
                        <div className="col-12">
                            <div class="form-floating">
                                <input type="password" class="form-control" id="floatingPassword" placeholder="Password" />
                                <label for="floatingPassword">Password</label>
                            </div>
                        </div>

                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;