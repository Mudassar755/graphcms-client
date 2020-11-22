import { Link } from 'gatsby'
import React, { Fragment } from 'react'

const Pricing = () => {
    return (
        // <!-- PRICING -->
        <Fragment>
            <section className="pt-9 pt-md-12 bg-gray-200">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-12 col-md-10 col-lg-8 text-center">
                            {/* <!-- Heading --> */}
                            <h1>
                                Fair, simple pricing for all.
                        </h1>
                            {/* <!-- Text --> */}
                            <p className="lead text-gray-700">
                                All types of businesses need access to development resources, so we give you the option to decide how much you need to use.
                        </p>
                            {/* <!-- Form --> */}
                            <form className="d-flex align-items-center justify-content-center mb-7 mb-md-9">

                                {/* <!-- Label --> */}
                                <span className="text-muted">
                                    Annual
                           </span>

                                {/* <!-- Switch --> */}
                                <div className="form-check form-switch mx-3">
                                    <input className="form-check-input" type="checkbox" id="billingSwitch" data-toggle="price" data-target=".price" />
                                </div>

                                {/* <!-- Label --> */}
                                <span className="text-muted">
                                    Monthly
                            </span>

                            </form>
                        </div>
                    </div>
                    <div className="row align-items-center gx-0">
                        <div className="col-12 col-md-6">
                            {/* <!-- Card --> */}
                            <div className="card rounded-lg shadow-lg mb-6 mb-md-0" style={{ zIndex: 1 }} >
                                {/* <!-- Body --> */}
                                <div className="card-body py-6 py-md-8">
                                    <div className="row justify-content-center">
                                        <div className="col-12 col-xl-9">

                                            {/* <!-- Badge --> */}
                                            <div className="text-center mb-5">
                                                <span className="badge rounded-pill bg-primary-soft">
                                                    <span className="h6 font-weight-bold text-uppercase">Standard</span>
                                                </span>
                                            </div>

                                            {/* <!-- Price --> */}
                                            <div className="d-flex justify-content-center">
                                                <span className="h2 mb-0 mt-2">$</span>
                                                <span className="price display-2 mb-0" data-annual="29" data-monthly="49">29</span>
                                                <span className="h2 align-self-end mb-1">/mo</span>
                                            </div>

                                            {/* <!-- Text --> */}
                                            <p className="text-center text-muted mb-6 mb-md-8">
                                                per seat
                                        </p>

                                            {/* <!-- Features --> */}
                                            <div className="d-flex">

                                                {/* <!-- Check --> */}
                                                <div className="badge badge-rounded-circle bg-success-soft mt-1 mr-4">
                                                    <i className="fe fe-check"></i>
                                                </div>

                                                {/* <!-- Text --> */}
                                                <p>
                                                    Rich, responsive landing pages
                                            </p>

                                            </div>

                                            <div className="d-flex">

                                                {/* <!-- Check --> */}
                                                <div className="badge badge-rounded-circle bg-success-soft mt-1 mr-4">
                                                    <i className="fe fe-check"></i>
                                                </div>

                                                {/* <!-- Text --> */}
                                                <p>
                                                    100+ styled components
                                            </p>

                                            </div>

                                            <div className="d-flex">

                                                {/* <!-- Check --> */}
                                                <div className="badge badge-rounded-circle bg-success-soft mt-1 mr-4">
                                                    <i className="fe fe-check"></i>
                                                </div>

                                                {/* <!-- Text --> */}
                                                <p>
                                                    Flexible, simple license
                                            </p>

                                            </div>

                                            <div className="d-flex">

                                                {/* <!-- Check --> */}
                                                <div className="badge badge-rounded-circle bg-success-soft mt-1 mr-4">
                                                    <i className="fe fe-check"></i>
                                                </div>

                                                {/* <!-- Text --> */}
                                                <p>
                                                    Speedy build tooling
                                            </p>

                                            </div>

                                            <div className="d-flex">

                                                {/* <!-- Check --> */}
                                                <div className="badge badge-rounded-circle bg-success-soft mt-1 mr-4">
                                                    <i className="fe fe-check"></i>
                                                </div>

                                                {/* <!-- Text --> */}
                                                <p className="mb-0">
                                                    6 months free support included
                                            </p>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* <!-- Button --> */}
                                <Link to="/" className="card-btn btn btn-block btn-lg btn-primary">
                                    Get it now
                            </Link>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 ml-md-n3">
                            {/* <!-- Card --> */}
                            <div className="card rounded-lg shadow-lg" >
                                {/* <!-- Body --> */}
                                <div className="card-body py-6 py-md-8">
                                    <div className="row justify-content-center">
                                        <div className="col-12 col-xl-10">

                                            {/* <!-- Badge --> */}
                                            <p className="text-center mb-8 mb-md-11">
                                                <span className="badge rounded-pill bg-primary-soft">
                                                    <span className="h6 font-weight-bold text-uppercase">Enterprise</span>
                                                </span>
                                            </p>

                                            {/* <!-- Text --> */}
                                            <p className="lead text-center text-muted mb-0 mb-md-10">
                                                We offer variable pricing with discounts for larger organizations. Get in touch with us and we’ll figure out something that works for everyone.
                                        </p>

                                        </div>
                                    </div>
                                </div>
                                <Link to="/" className="card-btn btn btn-block btn-lg btn-light bg-gray-300 text-gray-700">
                                    Contact us
                            </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- SHAPE --> */}
            <div className="position-relative mt-n15">
                <div className="shape shape-bottom shape-fluid-x svg-shim text-dark">
                    {/* {{> curves/curve-1}} */}
                    <svg viewBox="0 0 2880 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 48h2880V0h-720C1442.5 52 720 0 720 0H0v48z" fill="currentColor" /></svg>
                </div>
            </div>
        </Fragment>
    )
}

export default Pricing
