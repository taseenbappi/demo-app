import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';

const WhatLocation = ({ handleClose, show, userLocation, setUserLocation }) => {

    return (
        <>


            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Your location</Modal.Title>
                </Modal.Header>
                <Modal.Body>

                    <div className="col-12">
                        <div className="mb-3">
                            <input type="text" className="form-control p-2 bg-light " id="City" placeholder="City"
                                value={userLocation?.city}
                                onChange={(e) => setUserLocation({ ...userLocation, city: e.target.value })} />
                        </div>

                    </div>

                    <div className="col-12">
                        <div className="mb-3">

                            <input type="text" className="form-control p-2 bg-light" id="Country" placeholder="Country"
                                value={userLocation?.country}
                                onChange={(e) => setUserLocation({ ...userLocation, country: e.target.value })} />
                        </div>
                    </div>

                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="success" onClick={handleClose}>
                        Save
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default WhatLocation;