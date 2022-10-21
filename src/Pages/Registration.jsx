import React from 'react';
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import "../styles/Registration.css";
import { userRegAction } from '../redux/actions/loginActions';

const Registration = () => {
    const navigate = useNavigate();

    const user = useSelector(state => console.log(state));
    // console.log(user_register);
    const dispatch = useDispatch();

    const registration_schema = yup.object().shape({
        username: yup.string().required(),
        password: yup.string().required(),
    });

    const { register, handleSubmit, watch, formState: { errors }, reset } = useForm({
        resolver: yupResolver(registration_schema)
    });
    const onSubmit = data => {
        console.log(data);
        dispatch(userRegAction(data))
        navigate("/login");
        // reset();
    };

    return (
        <div className='container-fluid'>
            <div className="container" id='registration-container'>
                <div className="row justify-content-center">
                    <div className="col-12 col-md-12 col-lg-9 border rounded-3 py-5 px-5">
                        <h1>Registration</h1>
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

                                    <input type="submit" className="auth-btn " id="submit" value={"Submit"} />
                                </div>
                            </div>

                        </form>
                        Already have an account?
                        <Link to={"/login"}>
                            login here
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Registration;