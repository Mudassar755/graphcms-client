import { Link } from 'gatsby';
import React, { useEffect } from 'react';
import brand_img from '../assets/img/brand.svg';
import photo_3 from '../assets/img/photos/photo-3.jpg';
import { useMutation, useQuery, useLazyQuery } from '@apollo/client';
import { VerifyToken } from '../utils/authToken';
import gql from 'graphql-tag';


function loadDropDowns() {
    // navbar-dropdown.js
    // Theme module


    // Selectors
    const drops = document.querySelectorAll('.navbar-nav .dropdown, .navbar-nav .dropright');

    // Events
    const showEvents = ['mouseenter'];
    const hideEvents = ['mouseleave', 'click'];

    // Transition
    const transitionDuration = 200;

    // Breakpoint
    const desktopSize = 992;

    // Show drop
    function showDrop(menu) {
        if (window.innerWidth < desktopSize) {
            return;
        }

        menu.classList.add('showing');

        setTimeout(function () {
            menu.classList.remove('showing');
            menu.classList.add('show');
        }, 1);
    }

    // Hide drop
    function hideDrop(e, menu) {
        setTimeout(function () {
            if (window.innerWidth < desktopSize) {
                return;
            }

            if (!menu.classList.contains('show')) {
                return;
            }

            if (e.type === 'click' && e.target.closest('.dropdown-menu form')) {
                return;
            }

            menu.classList.add('showing');
            menu.classList.remove('show');

            setTimeout(function () {
                menu.classList.remove('showing');
            }, transitionDuration);
        }, 2);
    }

    drops.forEach(function (dropdown) {
        const menu = dropdown.querySelector('.dropdown-menu');

        // Show drop
        showEvents.forEach(function (event) {
            dropdown.addEventListener(event, function () {
                showDrop(menu);
            });
        });

        // Hide drop
        hideEvents.forEach(function (event) {
            dropdown.addEventListener(event, function (e) {
                hideDrop(e, menu);
            });
        });
    });
}

const Navbar = () => {
    useEffect(() => {
        let token = localStorage.getItem("token")
        loadDropDowns()
        let authUser = VerifyToken(token);
        if (authUser !== undefined) {
            getUser({ variables: { id: authUser.id } })
        }
    }, [])

    let user;
    const [getUser, { loading, data }] = useLazyQuery(GET_USER);
    if (data && data.register) {
        user = data.register
        console.log("userrrr", user)
    }

    const logout = () => {
        localStorage.removeItem("token")
    }

    // const handleNav = () => {
    //     // console.log("menu==>>"

    // }

    return (
        // NAVBAR
        <nav className="navbar navbar-expand-lg navbar-light bg-white">
            <div className="container">


                <Link to="/" className="navbar-brand">
                    <img src={brand_img} className="navbar-brand-img" alt="..." />
                </Link>


                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>


                <div className="collapse navbar-collapse" id="navbarCollapse">


                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                        <i className="fe fe-x"></i>
                    </button>


                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle"
                                id="navbarLandings"
                                data-toggle="dropdown"
                                href="#" aria-haspopup="true"
                                aria-expanded="false"
                            // onMouseEnter={handleNav} onMouseLeave={handleNav}
                            >
                                Services
                            </a>
                            <div className={`dropdown-menu dropdown-menu-xl p-0 showing`} aria-labelledby="navbarLandings">
                                <div className="row gx-0">
                                    <div className="col-12 col-lg-6">
                                        <div className="dropdown-img-left" style={{ backgroundImage: `url(${photo_3})` }}>

                                            {/* <!-- Heading --> */}
                                            <h4 className="font-weight-bold text-white mb-0">
                                                Want to see an overview?
                                            </h4>

                                            {/* <!-- Text --> */}
                                            <p className="font-size-sm text-white">
                                                See all the pages at once.
                                            </p>

                                            {/* <!-- Button --> */}
                                            <a href="{{webRoot}}/overview.html" className="btn btn-sm btn-white shadow-dark fonFt-size-sm">
                                                View all pages
                                            </a>

                                        </div>
                                    </div>
                                    <div className="col-12 col-lg-6">
                                        <div className="dropdown-body">
                                            <div className="row gx-0">
                                                <div className="col-6">

                                                    {/* <!-- Heading --> */}
                                                    <h6 className="dropdown-header">
                                                        Services
                                                    </h6>

                                                    {/* <!-- List --> */}
                                                    <a className="dropdown-item" href="{{webRoot}}/coworking.html">
                                                        Coworking
                                                    </a>
                                                    <a className="dropdown-item" href="{{webRoot}}/rental.html">
                                                        Rental
                                                    </a>
                                                    <a className="dropdown-item mb-5" href="{{webRoot}}/job.html">
                                                        Job Listing
                                                    </a>

                                                    {/* <!-- Heading --> */}
                                                    <h6 className="dropdown-header">
                                                        Apps
                                                    </h6>

                                                    {/* <!-- List --> */}
                                                    <a className="dropdown-item" href="{{webRoot}}/desktop-app.html">
                                                        Desktop
                                                    </a>
                                                    <a className="dropdown-item" href="{{webRoot}}/mobile-app.html">
                                                        Mobile
                                                    </a>

                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>

                        <li className="nav-item ">
                            <Link className="nav-link" id="navbarAccount" to="/" aria-haspopup="true" aria-expanded="false">
                                duphub
                            </Link>

                        </li>
                        <li className="nav-item dropdown" >
                            <a className="nav-link dropdown-toggle" id="navbarDocumentation" data-toggle="dropdown" href="#" aria-haspopup="true" aria-expanded="false">
                                FAQs
                            </a>
                            <div className="dropdown-menu dropdown-menu-md" aria-labelledby="navbarDocumentation">
                                <div className="list-group list-group-flush">
                                    <a className="list-group-item" href="./docs/index.html">

                                        {/* Icon */}
                                        <div className="icon icon-sm text-primary">
                                            <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g fill="none" fillRule="evenodd"><path d="M0 0h24v24H0z" /><path d="M8 3v.5A1.5 1.5 0 009.5 5h5A1.5 1.5 0 0016 3.5V3h2a2 2 0 012 2v16a2 2 0 01-2 2H6a2 2 0 01-2-2V5a2 2 0 012-2h2z" fill="#335EEA" opacity=".3" /><path d="M11 2a1 1 0 012 0h1.5a.5.5 0 01.5.5v1a.5.5 0 01-.5.5h-5a.5.5 0 01-.5-.5v-1a.5.5 0 01.5-.5H11z" fill="#335EEA" /><rect fill="#335EEA" opacity=".3" x="7" y="10" width="5" height="2" rx="1" /><rect fill="#335EEA" opacity=".3" x="7" y="14" width="9" height="2" rx="1" /></g></svg>                </div>

                                        {/* Content */}
                                        <div className="ml-4">

                                            {/* Heading */}
                                            <h6 className="font-weight-bold text-uppercase text-primary mb-0">
                                                Technologie
                                            </h6>

                                            {/* Text */}
                                            <p className="font-size-sm text-gray-700 mb-0">
                                                Customizing and building
                                            </p>

                                        </div>

                                    </a>
                                    <a className="list-group-item" href="./docs/alerts.html">

                                        {/* Icon */}
                                        <div className="icon icon-sm text-primary">
                                            <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g fill="none" fillRule="evenodd"><path d="M0 0h24v24H0z" /><rect fill="#335EEA" x="4" y="4" width="7" height="7" rx="1.5" /><path d="M5.5 13h4a1.5 1.5 0 011.5 1.5v4A1.5 1.5 0 019.5 20h-4A1.5 1.5 0 014 18.5v-4A1.5 1.5 0 015.5 13zm9-9h4A1.5 1.5 0 0120 5.5v4a1.5 1.5 0 01-1.5 1.5h-4A1.5 1.5 0 0113 9.5v-4A1.5 1.5 0 0114.5 4zm0 9h4a1.5 1.5 0 011.5 1.5v4a1.5 1.5 0 01-1.5 1.5h-4a1.5 1.5 0 01-1.5-1.5v-4a1.5 1.5 0 011.5-1.5z" fill="#335EEA" opacity=".3" /></g></svg>                </div>

                                        {/* Content */}
                                        <div className="ml-4">

                                            {/* Heading */}
                                            <h6 className="font-weight-bold text-uppercase text-primary mb-0">
                                                Service
                                            </h6>

                                            {/* Text */}
                                            <p className="font-size-sm text-gray-700 mb-0">
                                                Full list of components
                                            </p>

                                        </div>

                                    </a>
                                    <a className="list-group-item" href="./docs/changelog.html">

                                        {/* Icon */}
                                        <div className="icon icon-sm text-primary">
                                            <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g fill="none" fillRule="evenodd"><path d="M0 0h24v24H0z" /><path d="M5.857 2h7.88a1.5 1.5 0 01.968.355l4.764 4.029A1.5 1.5 0 0120 7.529v12.554c0 1.79-.02 1.917-1.857 1.917H5.857C4.02 22 4 21.874 4 20.083V3.917C4 2.127 4.02 2 5.857 2z" fill="#335EEA" opacity=".3" /><rect fill="#335EEA" x="6" y="11" width="9" height="2" rx="1" /><rect fill="#335EEA" x="6" y="15" width="5" height="2" rx="1" /></g></svg>                </div>

                                        {/* Content */}
                                        <div className="ml-4">

                                            {/* Heading */}
                                            <h6 className="font-weight-bold text-uppercase text-primary mb-0">
                                                Changelog
                                            </h6>

                                            {/* Text */}
                                            <p className="font-size-sm text-gray-700 mb-0">
                                                Keep track of changes
                                            </p>

                                        </div>

                                        {/* Badge */}
                                        <span className="badge rounded-pill bg-primary-soft ml-auto">
                                            2.0.0-alpha
                                        </span>

                                    </a>
                                </div>
                            </div>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" id="navbarAccount" data-toggle="dropdown" href="#" aria-haspopup="true" aria-expanded="false">
                                Account
          </a>
                            <ul class="dropdown-menu" aria-labelledby="navbarAccount">
                                <li class="dropdown-item dropright">
                                    <a class="dropdown-link dropdown-toggle" data-toggle="dropdown" href="#">
                                        Settings
              </a>
                                    <div class="dropdown-menu">
                                        <a class="dropdown-item" href="{{webRoot}}/account-general.html">
                                            General
                </a>
                                        <a class="dropdown-item" href="{{webRoot}}/account-security.html">
                                            Security
                </a>
                                        <a class="dropdown-item" href="{{webRoot}}/account-notifications.html">
                                            Notifications
                </a>
                                        <a class="dropdown-item" href="{{webRoot}}/billing-plans-and-payment.html">
                                            Plans & Payment
                </a>
                                        <a class="dropdown-item" href="{{webRoot}}/billing-users.html">
                                            Users
                </a>
                                    </div>
                                </li>
                                <li class="dropdown-item dropright">
                                    <a class="dropdown-link dropdown-toggle" data-toggle="dropdown" href="#">
                                        Sign In
              </a>
                                    <div class="dropdown-menu">
                                        <a class="dropdown-item" href="{{webRoot}}/signin-cover.html">
                                            Side Cover
                </a>
                                        <a class="dropdown-item" href="{{webRoot}}/signin-illustration.html">
                                            Illustration
                </a>
                                        <a class="dropdown-item" href="{{webRoot}}/signin.html">
                                            Basic
                </a>
                                        <a class="dropdown-item" data-toggle="modal" href="#modalSigninHorizontal">
                                            Modal Horizontal
                </a>
                                        <a class="dropdown-item" data-toggle="modal" href="#modalSigninVertical">
                                            Modal Vertical
                </a>
                                    </div>
                                </li>
                                <li class="dropdown-item dropright">
                                    <a class="dropdown-link dropdown-toggle" data-toggle="dropdown" href="#">
                                        Sign Up
              </a>
                                    <div class="dropdown-menu">
                                        <a class="dropdown-item" href="{{webRoot}}/signup-cover.html">
                                            Side Cover
                </a>
                                        <a class="dropdown-item" href="{{webRoot}}/signup-illustration.html">
                                            Illustration
                </a>
                                        <a class="dropdown-item" href="{{webRoot}}/signup.html">
                                            Basic
                </a>
                                        <a class="dropdown-item" data-toggle="modal" href="#modalSignupHorizontal">
                                            Modal Horizontal
                </a>
                                        <a class="dropdown-item" data-toggle="modal" href="#modalSignupVertical">
                                            Modal Vertical
                </a>
                                    </div>
                                </li>
                                <li class="dropdown-item dropright">
                                    <a class="dropdown-link dropdown-toggle" data-toggle="dropdown" href="#">
                                        Password Reset
              </a>
                                    <div class="dropdown-menu">
                                        <a class="dropdown-item" href="{{webRoot}}/password-reset-cover.html">
                                            Side Cover
                </a>
                                        <a class="dropdown-item" href="{{webRoot}}/password-reset-illustration.html">
                                            Illustration
                </a>
                                        <a class="dropdown-item" href="{{webRoot}}/password-reset.html">
                                            Basic
                </a>
                                    </div>
                                </li>
                                <li class="dropdown-item dropright">
                                    <a class="dropdown-link dropdown-toggle" data-toggle="dropdown" href="#">
                                        Error
              </a>
                                    <div class="dropdown-menu">
                                        <a class="dropdown-item" href="{{webRoot}}/error-cover.html">
                                            Side Cover
                </a>
                                        <a class="dropdown-item" href="{{webRoot}}/error-illustration.html">
                                            Illustration
                </a>
                                        <a class="dropdown-item" href="{{webRoot}}/error.html">
                                            Basic
                </a>
                                    </div>
                                </li>
                            </ul>
                        </li>
                    </ul>
                    {user ?
                        <ul className="navbar-nav ml-auto">


                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" id="navbarAccount" data-toggle="dropdown" href="#" aria-haspopup="true" aria-expanded="false" onClick={loadDropDowns}>
                                    Account
                                </a>
                                <ul class="dropdown-menu" aria-labelledby="navbarAccount">
                                    <li class="dropdown-item">
                                        <a class="dropdown-link" href="#" onClick={logout}>
                                            Logout
                                    </a>

                                    </li>
                                    {/* <li class="dropdown-item ">
                                        <a class="dropdown-link" href="#">
                                            Sign In
                                    </a>

                                    </li>
                                    <li class="dropdown-item">
                                        <a class="dropdown-link" href="#">
                                            Sign Up
                                    </a>

                                    </li>
                                    <li class="dropdown-item">
                                        <a class="dropdown-link" href="#">
                                            Password Reset
                                    </a>

                                    </li>
                                    <li class="dropdown-item">
                                        <a class="dropdown-link" href="#">
                                            Error
                                    </a>

                                    </li> */}
                                </ul>
                            </li>
                        </ul> : <ul className="navbar-nav ml-auto"> <Link className="navbar-btn btn btn-sm btn-primary lift ml-2" to="/login" target="_blank">
                            Sign In
                    </Link></ul>}

                    {/* <Link className="navbar-btn btn btn-sm btn-primary lift ml-auto" to="/signup" target="_blank">
                        Sign Up
                    </Link>
                    <Link className="navbar-btn btn btn-sm btn-primary lift ml-2" to="/login" target="_blank">
                        Sign In
                    </Link> */}

                </div>

            </div>
        </nav>
    )
}

export const GET_USER = gql`
  query register($id: ID!){
      register(where: {id: $id}) {
        id
        email
        password
      }
    
  }`;

export default Navbar
