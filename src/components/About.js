import React from 'react';
import photo_2 from '../assets/img/photos/photo-2.jpg';
import dashkit from '../assets/img/screenshots/desktop/dashkit.jpg';
import Blur4 from '../assets/partials/shapes/blurs/blur-4.svg'

const About = () => {
    return (
        // <!-- ABOUT -->
        <section className="pt-8 pt-md-11 bg-gradient-light">
            <div className="container">
                <div className="row align-items-center justify-content-between mb-8 mb-md-11">
                    <div className="col-12 col-md-6 order-md-2" data-aos="fade-left">

                        {/* <!-- Heading --> */}
                        <h2>
                            The most useful resource <br />
                            <span className="text-success">ever created for <span data-typed='{"strings": ["developers.", "founders.", "designers."]}'></span></span>
                        </h2>

                        {/* <!-- Text --> */}
                        <p className="font-size-lg text-muted mb-6">
                            Using Landkit to build your site means never worrying about designing another page or cross browser compatibility. Our ever-growing library of components and pre-designed layouts will make your life easier.
            </p>

                        {/* <!-- List --> */}
                        <div className="row">
                            <div className="col-12 col-lg-6">

                                {/* <!-- Item --> */}
                                <div className="d-flex">

                                    {/* <!-- Check --> */}
                                    <div className="badge badge-rounded-circle bg-success-soft mt-1 mr-4">
                                        <i className="fe fe-check"></i>
                                    </div>

                                    {/* <!-- Text --> */}
                                    <p className="text-success">
                                        Lifetime updates
                  </p>

                                </div>

                                {/* <!-- Item --> */}
                                <div className="d-flex">

                                    {/* <!-- Check --> */}
                                    <div className="badge badge-rounded-circle bg-success-soft mt-1 mr-4">
                                        <i className="fe fe-check"></i>
                                    </div>

                                    <p className="text-success mb-lg-0">
                                        Tons of assets
                  </p>

                                </div>

                            </div>
                            <div className="col-12 col-lg-6 mb-6 mb-md-0">

                                {/* <!-- Item --> */}
                                <div className="d-flex">

                                    {/* <!-- Check --> */}
                                    <span className="badge badge-rounded-circle bg-success-soft mt-1 mr-4">
                                        <i className="fe fe-check"></i>
                                    </span>

                                    {/* <!-- Text --> */}
                                    <p className="text-success">
                                        Tech support
                  </p>

                                </div>

                                {/* <!-- Item --> */}
                                <div className="d-flex">

                                    {/* <!-- Check --> */}
                                    <div className="badge badge-rounded-circle bg-success-soft mr-1 mr-4">
                                        <i className="fe fe-check"></i>
                                    </div>

                                    {/* <!-- Text --> */}
                                    <p className="text-success mb-0">
                                        Integration ready
                  </p>

                                </div>

                            </div>
                        </div>

                    </div>
                    <div className="col-12 col-md-6 col-lg-5 order-md-1" data-aos="fade-right">

                        {/* <!-- Card --> */}
                        <div className="card shadow-light-lg lift lift-lg">

                            {/* <!-- Image --> */}
                            <img src={photo_2} alt="..." className="card-img-top" />

                            {/* <!-- Shape --> */}
                            <div className="position-relative">
                                <div className="shape shape-bottom shape-fluid-x svg-shim text-white">
                                    {/* {{> curves/curve-1}} */}
                                    <svg viewBox="0 0 2880 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 48h2880V0h-720C1442.5 52 720 0 720 0H0v48z" fill="currentColor" /></svg>
                                </div>
                            </div>

                            {/* <!-- Body --> */}
                            <div className="card-body">

                                {/* <!-- Form --> */}
                                <form>
                                    <div className="form-label-group">
                                        <input type="text" className="form-control form-control-flush" id="cardName" placeholder="Name" />
                                        <label htmlFor="cardName">Name</label>
                                    </div>
                                    <div className="form-label-group">
                                        <input type="email" className="form-control form-control-flush" id="cardEmail" placeholder="Email" />
                                        <label htmlFor="cardEmail">Email</label>
                                    </div>
                                    <div className="form-label-group">
                                        <input type="password" className="form-control form-control-flush" id="cardPassword" placeholder="Password" />
                                        <label htmlFor="cardPassword">Password</label>
                                    </div>
                                    <div className="mt-6">
                                        <button className="btn btn-block btn-success lift" type="submit">
                                            Download a sample
                                        </button>
                                    </div>
                                </form>

                            </div>

                        </div>

                    </div>
                </div>
                <div className="row align-items-center">
                    <div className="col-12 col-md-7 col-lg-6" data-aos="fade-right">

                        {/* <!-- Heading --> */}
                        <h2>
                            We have lots of experience <br />
                            <span className="text-primary">building Bootstrap themes</span>.
            </h2>

                        {/* <!-- Text --> */}
                        <p className="font-size-lg text-muted mb-6">
                            We've built well over a dozen Bootstrap themes and sold tens of thousands of copies.
            </p>

                        {/* <!-- List --> */}
                        <div className="d-flex">

                            {/* <!-- Icon --> */}
                            <div className="icon text-primary">
                                {/* {{> media/repeat}} */}
                                <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g fill="none" fillRule="evenodd"><path d="M0 0h24v24H0z" /><path d="M12 8H8a4 4 0 00-4 4v1a3 3 0 003 3v2a5 5 0 01-5-5v-1a6 6 0 016-6h4V4.728a.5.5 0 01.8-.4l2.856 2.133a.5.5 0 01-.001.802l-2.857 2.121A.5.5 0 0112 8.983V8z" fill="#335EEA" /><path d="M12.058 16H16a4 4 0 004-4v-1a3 3 0 00-3-3V6a5 5 0 015 5v1a6 6 0 01-6 6h-3.942v.983a.5.5 0 01-.798.401l-2.857-2.12a.5.5 0 010-.803l2.856-2.134a.5.5 0 01.8.401V16z" fill="#335EEA" opacity=".3" /></g></svg>
                            </div>

                            <div className="ml-5">

                                {/* <!-- Heading --> */}
                                <h4 className="mb-1">
                                    Bootstrap users since the beginning
                </h4>

                                {/* <!-- Text --> */}
                                <p className="text-muted mb-6">
                                    We've been developing with Bootstrap since it was publicly released in 2011.
                </p>

                            </div>

                        </div>
                        <div className="d-flex">

                            {/* <!-- Icon --> */}
                            <div className="icon text-primary">
                                {/* {{> code/code}} */}
                                <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g fill="none" fillRule="evenodd"><path d="M0 0h24v24H0z" /><path d="M17.272 8.685a1 1 0 111.456-1.37l4 4.25a1 1 0 010 1.37l-4 4.25a1 1 0 01-1.456-1.37l3.355-3.565-3.355-3.565zm-10.544 0L3.373 12.25l3.355 3.565a1 1 0 01-1.456 1.37l-4-4.25a1 1 0 010-1.37l4-4.25a1 1 0 011.456 1.37z" fill="#335EEA" /><rect fill="#335EEA" opacity=".3" transform="rotate(15 12 12)" x="11" y="4" width="2" height="16" rx="1" /></g></svg>
                            </div>

                            <div className="ml-5">

                                {/* <!-- Heading --> */}
                                <h4 className="mb-1">
                                    Deep understanding of Bootstrap
                </h4>

                                {/* <!-- Text --> */}
                                <p className="text-muted mb-6 mb-md-0">
                                    We've watched Bootstrap grow up over the years and understand it better than almost anyone.
                </p>

                            </div>

                        </div>

                    </div>
                    <div className="col-12 col-md-5 col-lg-6">

                        <div className="w-md-150 w-lg-130 position-relative" data-aos="fade-left">

                            {/* <!-- Shape --> */}
                            <div className="shape shape-fluid-y shape-blur-4 svg-shim text-gray-200">
                                {/* <Blur4 /> */}
                                {/* {{> blurs/blur-4}} */}
                            </div>

                            {/* <!-- Image --> */}
                            <div className="img-skewed img-skewed-left">

                                {/* <!-- Image --> */}
                                <img src={dashkit} className="screenshot img-fluid img-skewed-item" alt="..." />

                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default About
