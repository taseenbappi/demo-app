import React from 'react';
import image1 from "../assets/product-img/bag-1.jpg";
import image2 from "../assets/product-img/bag-2.jpg";
import image3 from "../assets/product-img/bag-3.jpg";
import image4 from "../assets/product-img/bag-4.jpg";
import image5 from "../assets/product-img/bag-5.jpg";
import image6 from "../assets/product-img/bag-6.jpg";
import image7 from "../assets/product-img/bag-7.jpg";
import image8 from "../assets/product-img/bag-8.jpg";

const Gallery = () => {
    return (
        <div className="container-fluid pt-5">
            <h3 className='pb-2'>Gallery</h3>
            <div className="row row-cols-2 row-cols-md-3 row-cols-lg-4 g-4 ">

                <div className="col">
                    <div className="card h-100">
                        <img src={image1} className="card-img-top" alt="..." />

                    </div>
                </div>
                <div className="col">
                    <div className="card h-100">
                        <img src={image2} className="card-img-top" alt="..." />

                    </div>
                </div>
                <div className="col">
                    <div className="card h-100">
                        <img src={image3} className="card-img-top" alt="..." />

                    </div>
                </div>
                <div className="col">
                    <div className="card h-100">
                        <img src={image4} className="card-img-top" alt="..." />

                    </div>
                </div>
                <div className="col">
                    <div className="card h-100">
                        <img src={image5} className="card-img-top" alt="..." />

                    </div>
                </div>
                <div className="col">
                    <div className="card h-100">
                        <img src={image6} className="card-img-top" alt="..." />

                    </div>
                </div>
                <div className="col">
                    <div className="card h-100">
                        <img src={image7} className="card-img-top" alt="..." />

                    </div>
                </div>
                <div className="col">
                    <div className="card h-100">
                        <img src={image8} className="card-img-top" alt="..." />

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Gallery;