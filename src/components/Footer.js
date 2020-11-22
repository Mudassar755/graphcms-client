import React, { useEffect } from 'react';
import brand_img from '../assets/img/brand.svg';
import instagram from '../assets/img/icons/social/instagram.svg';
import facebook from '../assets/img/icons/social/facebook.svg';
import twitter from '../assets/img/icons/social/twitter.svg';
import painterest from '../assets/img/icons/social/pinterest.svg';
import { Link } from 'gatsby';

const Footer = () => {
    let path;
    useEffect(() => {
        path = window.location.pathname;
    })

    return (
        <footer className={`py-8 py-md-11 ${path === "/contact" ? "bg-dark" : 'bg-gray-200'}`}>
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-4 col-lg-3">

                        {/* <!-- Brand --> */}
                        <img src={brand_img} alt="brand" className="footer-brand img-fluid mb-2" />

                        {/* <!-- Text --> */}
                        <p className="text-gray-700 mb-2">
                            Connecting realities.
        </p>

                        {/* <!-- Social --> */}
                        <ul className="list-unstyled list-inline list-social mb-6 mb-md-0">
                            <li className="list-inline-item list-social-item mr-3">
                                <a href="#!" className="text-decoration-none">
                                    <img src={instagram} className="list-social-icon" alt="..." />
                                </a>
                            </li>
                            <li className="list-inline-item list-social-item mr-3">
                                <a href="#!" className="text-decoration-none">
                                    <img src={facebook} className="list-social-icon" alt="..." />
                                </a>
                            </li>
                            <li className="list-inline-item list-social-item mr-3">
                                <a href="#!" className="text-decoration-none">
                                    <img src={twitter} className="list-social-icon" alt="..." />
                                </a>
                            </li>
                            <li className="list-inline-item list-social-item">
                                <a href="#!" className="text-decoration-none">
                                    <img src={painterest} className="list-social-icon" alt="..." />
                                </a>
                            </li>
                        </ul>

                    </div>
                    <div className="col-6 col-md-4 col-lg-2">

                        {/* <!-- Heading --> */}
                        <h6 className="font-weight-bold text-uppercase text-gray-700">
                            Products
        </h6>

                        {/* <!-- List --> */}
                        <ul className="list-unstyled text-muted mb-6 mb-md-8 mb-lg-0">
                            <li className="mb-3">
                                <a href="#!" className="text-reset">
                                    Page Builder
            </a>
                            </li>
                            <li className="mb-3">
                                <a href="#!" className="text-reset">
                                    UI Kit
            </a>
                            </li>
                            <li className="mb-3">
                                <a href="#!" className="text-reset">
                                    Styleguide
            </a>
                            </li>
                            <li className="mb-3">
                                <a href="#!" className="text-reset">
                                    Documentation
            </a>
                            </li>
                            <li>
                                <a href="#!" className="text-reset">
                                    Changelog
            </a>
                            </li>
                        </ul>

                    </div>
                    <div className="col-6 col-md-4 col-lg-2">

                        {/* <!-- Heading --> */}
                        <h6 className="font-weight-bold text-uppercase text-gray-700">
                            Services
        </h6>

                        {/* <!-- List --> */}
                        <ul className="list-unstyled text-muted mb-6 mb-md-8 mb-lg-0">
                            <li className="mb-3">
                                <a href="#!" className="text-reset">
                                    Documentation
            </a>
                            </li>
                            <li className="mb-3">
                                <a href="#!" className="text-reset">
                                    Changelog
            </a>
                            </li>
                            <li className="mb-3">
                                <a href="#!" className="text-reset">
                                    Pagebuilder
            </a>
                            </li>
                            <li>
                                <a href="#!" className="text-reset">
                                    UI Kit
            </a>
                            </li>
                        </ul>

                    </div>
                    <div className="col-6 col-md-4 offset-md-4 col-lg-2 offset-lg-0">

                        {/* <!-- Heading --> */}
                        <h6 className="font-weight-bold text-uppercase text-gray-700">
                            Connect
        </h6>

                        {/* <!-- List --> */}
                        <ul className="list-unstyled text-muted mb-0">
                            <li className="mb-3">
                                <a href="#!" className="text-reset">
                                    Page Builder
            </a>
                            </li>
                            <li className="mb-3">
                                <a href="#!" className="text-reset">
                                    UI Kit
            </a>
                            </li>
                            <li className="mb-3">
                                <a href="#!" className="text-reset">
                                    Styleguide
            </a>
                            </li>
                            <li className="mb-3">
                                <a href="#!" className="text-reset">
                                    Documentation
            </a>
                            </li>
                            <li className="mb-3">
                                <a href="#!" className="text-reset">
                                    Changelog
            </a>
                            </li>
                            <li className="mb-3">
                                <a href="#!" className="text-reset">
                                    Documentation
            </a>
                            </li>
                            <li>
                                <a href="#!" className="text-reset">
                                    Changelog
            </a>
                            </li>
                        </ul>

                    </div>
                    <div className="col-6 col-md-4 col-lg-2">

                        {/* <!-- Heading --> */}
                        <h6 className="font-weight-bold text-uppercase text-gray-700">
                            DUPHUB
        </h6>

                        {/* <!-- List --> */}
                        <ul className="list-unstyled text-muted mb-0">
                            <li className="mb-3">
                                <Link to="/about" className="text-reset">
                                    About
                                </Link>
                            </li>
                            <li className="mb-3">
                                <Link to="/contact" className="text-reset">
                                    Contact
                                </Link>
                            </li>
                            <li>
                                <Link to="/" className="text-reset">
                                    Impressum
                                </Link>
                            </li>
                        </ul>

                    </div>
                </div>
            </div>
        </footer>

    )
}

export default Footer
