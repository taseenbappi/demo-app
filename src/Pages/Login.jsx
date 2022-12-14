import React from 'react';
import { useState } from 'react';
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import "../styles/Login.css";
import { useSelector } from 'react-redux';

const Login = () => {

    const navigate = useNavigate();
    const { user } = useSelector(state => (state));

    const login_schema = yup.object().shape({
        username: yup.string().required(),
        password: yup.string().required(),
    });

    const { register, handleSubmit, watch, formState: { errors }, reset } = useForm({
        resolver: yupResolver(login_schema)
    });

    const onSubmit = data => {

        if (data.username === user?.username && data.password === user?.password) {
            navigate("/");
            reset();

        } else {
            alert("username and password error!!")
        }

    };

    return (
        <div className='container-fluid'>
            <div className="container" id='login-container'>
                <div className="row justify-content-center">
                    <div className="col-12 col-md-12 col-lg-9 border rounded-3 py-5 px-5">
                        <h1>Login</h1>
                        <form className='row' onSubmit={handleSubmit(onSubmit)}>

                            <div className="col-12">
                                <div className="mb-3">
                                    <input type="text" className="form-control p-2 bg-light " id="username" placeholder="User name" {...register("username")} required />
                                </div>
                                <p className='text-danger fs-6'>{errors.username?.message}</p>
                            </div>

                            <div className="col-12">
                                <div className="mb-3">

                                    <input type="password" className="form-control p-2 bg-light" id="password" placeholder="Password" {...register("password")} required />
                                </div>
                                <p className='text-danger fs-6'>{errors.password?.message}</p>
                            </div>

                            <div className=" text-center">
                                <div className="mb-3">

                                    <input type="submit" className="auth-btn " id="submit" value={"login"} />
                                </div>
                            </div>

                        </form>
                        Don???t have an account?
                        <Link to={"/registration"}>
                            Create an account
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;