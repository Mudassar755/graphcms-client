import React, { Fragment } from 'react';
import pohoto_1 from '../assets/img/photos/photo-1.jpg'
import pohoto_26 from '../assets/img/photos/photo-26.jpg';
// import { ReactComponent as Curve } from '../assets/partials/shapes/curves/curve-3.svg';

const Testimonials = () => {
    return (
        <Fragment>
            {/* // <!-- TESTIMONIALS --> */}
            <section className="pt-10 pt-md-12">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-12 col-md-10 col-lg-8 text-center">

                            {/* <!-- Heading --> */}
                            <h2>
                                Our customers are our biggest fans.
            </h2>

                            {/* <!-- Text --> */}
                            <p className="font-size-lg text-muted mb-7 mb-md-9">
                                We don't like to brag, but we don't mind letting our customers do it for us. Here are a few nice things folks have said about our themes over the years.
            </p>

                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">

                            {/* <!-- Card --> */}
                            <div className="card card-row shadow-light-lg mb-6">
                                <div className="row gx-0">
                                    <div className="col-12 col-md-6">

                                        {/* <!-- Slider --> */}
                                        <div className="card-img-slider" data-flickity='{"fade": true, "imagesLoaded": true, "pageDots": false, "prevNextButtons": false, "asNavFor": "#blogSlider", "draggable": false}'>
                                            <a className="card-img-left w-100 bg-cover" style={{ backgroundImage: `url(${pohoto_1})` }} href="#!">

                                                {/* <!-- Image (placeholder) --> */}
                                                <img src={pohoto_1} alt="..." className="img-fluid d-md-none invisible" />

                                            </a>
                                            <a className="card-img-left w-100 bg-cover" style={{ backgroundImage: `url(${pohoto_26})` }} href="#!">

                                                {/* <!-- Image (placeholder) --> */}
                                                <img src={pohoto_26} alt="..." className="img-fluid d-md-none invisible" />

                                            </a>
                                        </div>

                                        {/* <!-- Shape --> */}
                                        <div className="shape shape-right shape-fluid-y svg-shim text-white d-none d-md-block">
                                            {/* {{> curves/curve-4}} */}
                                        </div>

                                    </div>
                                    <div className="col-12 col-md-6 position-md-static">

                                        {/* <!-- Slider --> */}
                                        <div className="position-md-static" data-flickity='{"wrapAround": true, "pageDots": false, "adaptiveHeight": true}' id="blogSlider">
                                            <div className="w-100">

                                                {/* <!-- Body --> */}
                                                <div className="card-body">
                                                    <blockquote className="blockquote text-center mb-0">

                                                        {/* <!-- Brand --> */}
                                                        <div className="row justify-content-center mb-5 mb-md-7">
                                                            <div className="col-6 col-sm-4 col-md-7 col-lg-5">

                                                                {/* <!-- Logo --> */}
                                                                <div className="img-fluid svg-shim" style={{ color: '#FF5A5F' }}>
                                                                    {/* {{> logotype/airbnb}} */}
                                                                </div>

                                                            </div>
                                                        </div>

                                                        {/* <!-- Text --> */}
                                                        <p className="mb-5 mb-md-7">
                                                            “Landkit is hands down the most useful front end Bootstrap theme I've ever used. I can't wait to use it again for my next project.”
                          </p>

                                                        {/* <!-- Footer --> */}
                                                        <footer className="blockquote-footer">
                                                            <span className="h6 text-uppercase">Dave Gamache</span>
                                                        </footer>

                                                    </blockquote>
                                                </div>

                                            </div>
                                            <div className="w-100">

                                                {/* <!-- Body --> */}
                                                <div className="card-body">
                                                    <blockquote className="blockquote text-center mb-0">

                                                        {/* <!-- Brand --> */}
                                                        <div className="row justify-content-center mb-5 mb-md-7">
                                                            <div className="col-6 col-sm-4 col-md-7 col-lg-5">

                                                                {/* <!-- Logo --> */}
                                                                <div className="img-fluid svg-shim" style={{ color: '#3F5D87' }}>
                                                                    {/* {{> logotype/instagram}} */}
                                                                </div>

                                                            </div>
                                                        </div>

                                                        {/* <!-- Text --> */}
                                                        <p className="mb-5 mb-md-7">
                                                            “I've never used a theme as versatile and flexible as Landkit. It's my go to for building landing sites on almost any project.”
                          </p>

                                                        {/* <!-- Footer --> */}
                                                        <footer className="blockquote-footer">
                                                            <span className="h6 text-uppercase">Russ D'Sa</span>
                                                        </footer>

                                                    </blockquote>
                                                </div>

                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- SHAPE --> */}
            <div className="position-relative mt-n8">
                <div className="shape shape-bottom shape-fluid-x svg-shim text-gray-200">
                    {/* {{> curves/curve-3}} */}
                    <svg viewBox="0 0 2880 480" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M2160 0C1440 240 720 240 720 240H0v240h2880V0h-720z" fill="currentColor" /></svg>
                </div>
            </div>
        </Fragment>
    )
}

export default Testimonials
