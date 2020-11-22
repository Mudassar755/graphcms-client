import { Link } from 'gatsby';
import React from 'react';
import cover_16 from '../assets//img/covers/cover-16.jpg'

const Error = () => {
    return (
        // <!-- CONTENT -->
        <section>
            <div className="container d-flex flex-column">
                <div className="row align-items-center justify-content-center gx-0 min-vh-100">
                    <div className="col-12 col-md-6 col-lg-4 py-8 py-md-11">

                        {/* <!-- Heading --> */}
                        <h1 className="display-3 font-weight-bold">
                            Uh Oh.
                        </h1>

                        {/* <!-- Text --> */}
                        <p className="mb-5 text-muted">
                            We ran into an issue, but don’t worry, we’ll take care of it for sure.
                        </p>

                        {/* <!-- Link --> */}
                        <Link className="btn btn-primary" to="/">
                            Back to safety
                        </Link>

                    </div>
                    <div className="col-lg-7 offset-lg-1 align-self-stretch d-none d-lg-block">

                        {/* <!-- Image --> */}
                        <div className="h-100 w-cover bg-cover" style={{ backgroundImage: `url(${cover_16})` }}></div>

                        {/* <!-- Shape --> */}
                        <div className="shape shape-left shape-fluid-y svg-shim text-white">
                            {/* {{> angles/angle-left}} */}
                            <svg viewBox="0 0 100 1544" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 0h100v386l-50 772v386H0V0z" fill="currentColor" /></svg>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default Error
