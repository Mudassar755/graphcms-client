import { graphql, Link } from 'gatsby';
import React, { useState } from 'react';
import cover_14 from '../assets/img/covers/cover-14.jpg'
import gql from 'graphql-tag';
import { useMutation, useQuery } from '@apollo/client';
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const Login = ({ data }) => {
    const [formData, setFormData] = useState({
        email: "",
        password: ""
    })
    const { email, password } = formData;
    // const [createRegister] = useMutation(CREATE_USER);
    // const [register] = useQuery(GET_USER);
    const handleChange = e => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        // const { data } = await register({ variables: { email: email } });

        // let user = await User.findOne({ email });

        // if (!user) {
        //     return res
        //         .status(400)
        //         .json({ errors: [{ msg: "User does not exist" }] });
        // }
        // const salt = await bcrypt.genSalt(10);
        // let hash_password = await bcrypt.hash(password, salt);

        // const { data } = await createRegister({ variables: { email: email, password: hash_password } });
        // const payload = {
        //     user: {
        //         id: data.createRegister.id
        //     }
        // };
        // jwt.sign(
        //     payload,
        //     "JwtSecret",
        //     { expiresIn: 3600 },
        //     (err, token) => {
        //         if (err) throw err;
        //         localStorage.setItem("token", token);
        //     }
        // );

    }
    console.log("data", data)
    return (
        // <!-- CONTENT -->
        <section>
            <div className="container d-flex flex-column">
                <div className="row align-items-center justify-content-center gx-0 min-vh-100">
                    <div className="col-12 col-md-6 col-lg-4 py-8 py-md-11">

                        {/* <!-- Heading --> */}
                        <h1 className="mb-0 font-weight-bold">
                            Sign In
                </h1>

                        {/* <!-- Text --> */}
                        <p className="mb-6 text-muted">
                            Simplify your workflow in minutes.
                </p>

                        {/* <!-- Form --> */}
                        <form className="mb-6" onSubmit={handleSubmit}>

                            {/* <!-- Email --> */}
                            <div className="form-group">
                                <label className="form-label" htmlFor="email">
                                    Email Address
                    </label>
                                <input
                                    type="email"
                                    className="form-control"
                                    id="email"
                                    placeholder="name@address.com"
                                    name="email"
                                    value={email}
                                    onChange={handleChange}
                                />
                            </div>

                            {/* <!-- Password --> */}
                            <div className="form-group mb-5">
                                <label className="form-label" htmlFor="password">
                                    Password
                    </label>
                                <input
                                    type="password"
                                    className="form-control"
                                    id="password"
                                    placeholder="Enter your password"
                                    name="password"
                                    value={password}
                                    onChange={handleChange}
                                />
                            </div>

                            {/* <!-- Submit --> */}
                            <button className="btn btn-block btn-primary" type="submit">
                                Sign In
                  </button>

                        </form>

                        {/* <!-- Text --> */}
                        <p className="mb-0 font-size-sm text-muted">
                            Don't have an account yet? <Link to="/signup">Sign Up</Link>.
                </p>

                    </div>
                    <div className="col-lg-7 offset-lg-1 align-self-stretch d-none d-lg-block">

                        {/* <!-- Image --> */}
                        <div className="h-100 w-cover bg-cover" style={{ backgroundImage: `url(${cover_14})` }}></div>

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

export const GET_USER = graphql`
  query{
    graphCmsData {
      register(where: {email: "admin@contentarcade.com"}) {
        email
        password
      }
    }
  }`;

export const AUTH_USER = gql`
 mutation createRegister($email: String!, $password: String!) {
        createRegister(
          data: {
            email: $email
            password: $password

          }
        ) {
          id
          email
          password
        }
      }
`;
export default Login;
