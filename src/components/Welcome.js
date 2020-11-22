import { Link } from 'gatsby';
import React, { useEffect } from 'react';
import illustration_2 from '../assets/img/illustrations/illustration-2.png';


const Welcome = () => {
    return (
        <section className="pt-4 pt-md-11">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-12 col-md-5 col-lg-6 order-md-2">

                        {/* <!-- Image --> */}
                        <img src={illustration_2} className="img-fluid mw-md-150 mw-lg-130 mb-6 mb-md-0" alt="..." data-aos="fade-up" data-aos-delay="100" />

                    </div>
                    <div className="col-12 col-md-7 col-lg-6 order-md-1" data-aos="fade-up" >

                        {/* <!-- Heading --> */}
                        <h1 className="display-3 text-center text-md-left">
                            Welcome to <span className="text-primary">Landkit</span>. <br />
              Develop anything.
                        </h1>

                        {/* <!-- Text --> */}
                        <p className="lead text-center text-md-left text-muted mb-6 mb-lg-8">
                            Build a beautiful, modern website with flexible Bootstrap components built from scratch.
                        </p>

                        {/* <!-- Buttons --> */}
                        <div className="text-center text-md-left">
                            <Link to="/" className="btn btn-primary shadow lift mr-1">
                                View all pages <i className="fe fe-arrow-right d-none d-md-inline ml-3"></i>
                            </Link>
                            <Link to="/" className="btn btn-primary-soft lift">
                                Documentation
                             </Link>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default Welcome
