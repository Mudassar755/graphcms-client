import { Link } from 'gatsby';
import React from 'react';
import cover_17 from '../assets/img/covers/cover-17.jpg'

const resetpassword = () => {
    return (
        // <!-- CONTENT -->
        <section>
            <div className="container d-flex flex-column">
                <div className="row align-items-center justify-content-center gx-0 min-vh-100">
                    <div className="col-12 col-md-6 col-lg-4 py-8 py-md-11">

                        {/* <!-- Heading --> */}
                        <h1 className="mb-0 font-weight-bold">
                            Password Reset
                </h1>

                        {/* <!-- Text --> */}
                        <p className="mb-6 text-muted">
                            Enter your email to reset your password.
                </p>

                        {/* <!-- Form --> */}
                        <form className="mb-6">

                            {/* <!-- Email --> */}
                            <div className="form-group">
                                <label className="form-label" htmlFor="email">
                                    Email Address
                    </label>
                                <input type="email" className="form-control" id="email" placeholder="name@address.com" />
                            </div>

                            {/* <!-- Submit --> */}
                            <button className="btn btn-block btn-primary" type="submit">
                                Reset Password
                  </button>

                        </form>

                        {/* <!-- Text --> */}
                        <p className="mb-0 font-size-sm text-muted">
                            Remember your password? <Link to="/login">Log in</Link>.
                </p>

                    </div>
                    <div className="col-lg-7 offset-lg-1 align-self-stretch d-none d-lg-block">

                        {/* <!-- Image --> */}
                        <div className="h-100 w-cover bg-cover" style={{ backgroundImage: `url(${cover_17})` }}></div>

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

export default resetpassword
