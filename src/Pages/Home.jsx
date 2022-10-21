import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import Gallery from '../components/Gallery';
import WhatLocation from '../components/WhatLocation';

const Home = () => {
    const [userLocation, setUserLocation] = useState({
        city: "",
        country: ""
    });

    const [show, setShow] = useState(true);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <div className="container-fluid">
                <div className="container py-5">
                    <div className="d-flex justify-content-center">
                        <h3 className='text-center me-2'>You're from <b>{userLocation?.city}, {userLocation?.country}</b></h3>
                        <Button variant="primary" onClick={handleShow}>
                            Set Location
                        </Button>
                    </div>
                    <Gallery></Gallery>
                </div>
            </div>
            <WhatLocation
                handleClose={handleClose}
                show={show}
                userLocation={userLocation}
                setUserLocation={setUserLocation}
            ></WhatLocation>
        </>
    );
};

export default Home;