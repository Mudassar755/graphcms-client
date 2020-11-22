import React from 'react';
import cover_13 from '../assets/img/covers/cover-13.jpg';
import photo_27 from '../assets/img/photos/photo-27.jpg'
import avatar_1 from '../assets/img/avatars/avatar-1.jpg'
import avatar_2 from '../assets/img/avatars/avatar-2.jpg'
import photo_15 from '../assets/img/photos/photo-15.jpg'
import photo_14 from '../assets/img/photos/photo-14.jpg'
import photo_7 from '../assets/img/photos/photo-7.jpg'
import Layout from '../components/Layout';

import GraphImg from "graphcms-image";
import { graphql, Link, useStaticQuery } from 'gatsby';


const blogs = ({ data }) => {
    // console.log("images==>>", data)
    let blogs = data.graphCmsData.blogs

    return (

        <Layout>
            {/* WELCOME */}
            <section data-jarallax data-speed=".8" className="py-10 py-md-14 overlay overlay-black overlay-60 bg-cover jarallax" style={{ backgroundImage: `url(${cover_13})` }}>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-12 col-md-10 col-lg-7 text-center">
                            {/* Heading */}
                            <h1 className="display-2 font-weight-bold text-white">
                                Our Newsroom
                            </h1>
                            {/* Text */}
                            <p className="lead mb-0 text-white-75">
                                Keep up to date with what we're working on! Landkit is an ever evolving theme with regular updates.
                            </p>
                        </div>
                    </div> {/* / .row */}
                </div> {/* / .container */}
            </section>
            {/* SHAPE */}
            <div className="position-relative">
                <div className="shape shape-bottom shape-fluid-x svg-shim text-light">
                    <svg viewBox="0 0 2880 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 48h2880V0h-720C1442.5 52 720 0 720 0H0v48z" fill="currentColor" /></svg>
                </div>
            </div>
            {/* SEARCH */}
            <section className="mt-n6">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            {/* Form */}
                            <form className="rounded shadow mb-4">
                                <div className="input-group input-group-lg">

                                    <span className="input-group-text border-0 pr-1">
                                        <i className="fe fe-search" />
                                    </span>

                                    <input className="form-control border-0 px-1" type="text" aria-label="Search our blog..." placeholder="Search our blog..." />

                                    <span className="input-group-text border-0 py-0 pl-1 pr-3">
                                        <a className="btn btn-sm btn-primary" href="#">
                                            Search
                                        </a>
                                    </span>
                                </div>
                            </form>
                            {/* Badges */}
                            <div className="row align-items-center">
                                <div className="col-auto">
                                    {/* Heading */}
                                    <h6 className="font-weight-bold text-uppercase text-muted mb-0">
                                        Tags:
                                    </h6>
                                </div>
                                <div className="col ml-n5">
                                    {/* Badges */}
                                    <a className="badge rounded-pill bg-secondary-soft" href="#">
                                        <span className="h6 text-uppercase">Design</span>
                                    </a>
                                    <a className="badge rounded-pill bg-secondary-soft" href="#">
                                        <span className="h6 text-uppercase">Product</span>
                                    </a>
                                    <a className="badge rounded-pill bg-secondary-soft" href="#">
                                        <span className="h6 text-uppercase">UX</span>
                                    </a>
                                    <a className="badge rounded-pill bg-secondary-soft" href="#">
                                        <span className="h6 text-uppercase">Resources</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* ARTICLES */}
            <section className="pt-7 pt-md-10">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            {/* Card */}
                            <div className="card card-row shadow-light-lg mb-6 lift lift-lg">
                                <div className="row gx-0">
                                    <div className="col-12">
                                        {/* Badge */}
                                        <span className="badge rounded-pill bg-light badge-float badge-float-inside">
                                            <span className="h6 text-uppercase">Featured</span>
                                        </span>
                                    </div>
                                    <a className="col-12 col-md-6 order-md-2 bg-cover card-img-right" style={{ backgroundImage: `url(${photo_27})` }} href="#!">

                                        <img src={photo_27} alt="..." className="img-fluid d-md-none invisible" />

                                        <div className="shape shape-left shape-fluid-y svg-shim text-white d-none d-md-block">
                                            <svg viewBox="0 0 112 690" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 0h62.759v172C38.62 384 112 517 112 517v173H0V0z" fill="currentColor" /></svg>
                                        </div>
                                    </a>
                                    <div className="col-12 col-md-6 order-md-1">

                                        <a className="card-body" href="#!">

                                            <h3>
                                                Travel Can Keep You Creatively Inspired.
                                             </h3>

                                            <p className="mb-0 text-muted">
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nec condimentum quam. Fusce pellentesque faucibus lorem at viverra. Integer at feugiat odio. In placerat euismod risus proin erat purus.
                                            </p>
                                        </a>

                                        <a className="card-meta" href="#!">

                                            <hr className="card-meta-divider" />

                                            <div className="avatar avatar-sm mr-2">
                                                <img src={avatar_1} alt="..." className="avatar-img rounded-circle" />
                                            </div>

                                            <h6 className="text-uppercase text-muted mr-2 mb-0">
                                                Ab Hadley
                                            </h6>

                                            <p className="h6 text-uppercase text-muted mb-0 ml-auto">
                                                <time dateTime="2019-05-02">May 02</time>
                                            </p>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* ARTICLES */}
            <section className="pt-7 pt-md-10">
                <div className="container">
                    <div className="row align-items-center mb-5">
                        <div className="col-12 col-md">

                            <h3 className="mb-0">
                                Latest Stories
                            </h3>

                            <p className="mb-0 text-muted">
                                Here’s what we've been up to recently.
                            </p>
                        </div>
                        <div className="col-12 col-md-auto">

                            <a href="#!" className="btn btn-sm btn-outline-gray-300 d-none d-md-inline">
                                View all
                             </a>
                        </div>
                    </div>
                    <div className="row">
                        {blogs.map(blog => (
                            <div className="col-12 col-md-6 col-lg-4 d-flex" key={blog.id}>

                                <div className="card mb-6 mb-lg-0 shadow-light-lg lift lift-lg">

                                    <Link className="card-img-top" to={`/blogs/${blog.slug}`}>
                                        <GraphImg image={blog.image} maxWidth={300} className="card-img-top" />


                                        <div className="position-relative">
                                            <div className="shape shape-bottom shape-fluid-x svg-shim text-white">
                                                <svg viewBox="0 0 2880 480" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M2160 0C1440 240 720 240 720 240H0v240h2880V0h-720z" fill="currentColor" /></svg>
                                            </div>
                                        </div>
                                    </Link>

                                    <Link className="card-body" to={`/blogs/${blog.slug}`}>

                                        <h3>
                                            {blog.title}
                                        </h3>

                                        <p className="mb-0 text-muted">
                                            {blog.description}
                                        </p>
                                    </Link>

                                    <Link className="card-meta mt-auto" to="#">

                                        <hr className="card-meta-divider" />

                                        <div className="avatar avatar-sm mr-2">
                                            <img src={avatar_1} alt="..." className="avatar-img rounded-circle" />
                                        </div>

                                        <h6 className="text-uppercase text-muted mr-2 mb-0">
                                            Ab Hadley
                                    </h6>

                                        <p className="h6 text-uppercase text-muted mb-0 ml-auto">
                                            <time dateTime="2019-05-02">{blog.createdAt}</time>
                                        </p>
                                    </Link>
                                </div>
                            </div>
                        ))}
                        <div className="col-12 col-md-6 col-lg-4 d-flex">

                            <div className="card mb-6 mb-lg-0 shadow-light-lg lift lift-lg">

                                <a className="card-img-top" href="#!">

                                    <img src={photo_15} alt="..." className="card-img-top" />

                                    <div className="position-relative">
                                        <div className="shape shape-bottom shape-fluid-x svg-shim text-white">
                                            <svg viewBox="0 0 2880 480" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M2160 0C1440 240 720 240 720 240H0v240h2880V0h-720z" fill="currentColor" /></svg>
                                        </div>
                                    </div>
                                </a>

                                <a className="card-body" href="#!">

                                    <h3>
                                        Cafe Coworking Has Become the Norm.
                                    </h3>

                                    <p className="mb-0 text-muted">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nec condimentum quam.
                                    </p>
                                </a>

                                <a className="card-meta mt-auto" href="#!">

                                    <hr className="card-meta-divider" />

                                    <div className="avatar avatar-sm mr-2">
                                        <img src={avatar_1} alt="..." className="avatar-img rounded-circle" />
                                    </div>

                                    <h6 className="text-uppercase text-muted mr-2 mb-0">
                                        Ab Hadley
                                    </h6>

                                    <p className="h6 text-uppercase text-muted mb-0 ml-auto">
                                        <time dateTime="2019-05-02">May 02</time>
                                    </p>
                                </a>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-4 d-flex">

                            <div className="card mb-6 mb-lg-0 shadow-light-lg lift lift-lg">

                                <a className="card-img-top" href="#!">

                                    <img src={photo_14} alt="..." className="card-img-top" />

                                    <div className="position-relative">
                                        <div className="shape shape-bottom shape-fluid-x svg-shim text-white">
                                            <svg viewBox="0 0 2880 480" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M2160 0C1440 240 720 240 720 240H0v240h2880V0h-720z" fill="currentColor" /></svg>
                                        </div>
                                    </div>
                                </a>

                                <a className="card-body" href="#!">

                                    <h3>
                                        Weekly Roundtable Meetings Saved Us.
                                    </h3>

                                    <p className="mb-0 text-muted">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nec condimentum quam.
                                    </p>
                                </a>

                                <a className="card-meta mt-auto" href="#!">

                                    <hr className="card-meta-divider" />

                                    <div className="avatar avatar-sm mr-2">
                                        <img src={avatar_2} alt="..." className="avatar-img rounded-circle" />
                                    </div>

                                    <h6 className="text-uppercase text-muted mr-2 mb-0">
                                        Adolfo Hess
                                    </h6>

                                    <p className="h6 text-uppercase text-muted mb-0 ml-auto">
                                        <time dateTime="2019-05-02">May 02</time>
                                    </p>
                                </a>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-4 d-flex">

                            <div className="card mb-6 mb-md-0 shadow-light-lg lift lift-lg">

                                <a className="card-img-top" href="#!">

                                    <img src={photo_7} alt="..." className="card-img-top" />

                                    <div className="position-relative">
                                        <div className="shape shape-bottom shape-fluid-x svg-shim text-white">
                                            <svg viewBox="0 0 2880 480" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M2160 0C1440 240 720 240 720 240H0v240h2880V0h-720z" fill="currentColor" /></svg>
                                        </div>
                                    </div>
                                </a>

                                <a className="card-body" href="#!">

                                    <h3>
                                        Nature Can Save Your Creative Side.
                                    </h3>

                                    <p className="mb-0 text-muted">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nec condimentum quam.
                                    </p>
                                </a>

                                <a className="card-meta mt-auto" href="#!">

                                    <hr className="card-meta-divider" />

                                    <div className="avatar avatar-sm mr-2">
                                        <img src={avatar_1} alt="..." className="avatar-img rounded-circle" />
                                    </div>

                                    <h6 className="text-uppercase text-muted mr-2 mb-0">
                                        Ab Hadley
                                   </h6>

                                    <p className="h6 text-uppercase text-muted mb-0 ml-auto">
                                        <time dateTime="2019-05-02">May 02</time>
                                    </p>
                                </a>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-4 d-flex">

                            <div className="card d-lg-none shadow-light-lg lift lift-lg">

                                <a className="card-img-top" href="#!">

                                    <img src="assets/img/photos/photo-5.jpg" alt="..." className="card-img-top" />

                                    <div className="position-relative">
                                        <div className="shape shape-bottom shape-fluid-x svg-shim text-white">
                                            {'{'}{'{'}&gt; curves/curve-3{'}'}{'}'}
                                        </div>
                                    </div>
                                </a>

                                <a className="card-body" href="#!">

                                    <h3>
                                        Coffee Can Keep You Going, But At What Cost?
                                    </h3>

                                    <p className="mb-0 text-muted">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nec condimentum quam.
                                   </p>
                                </a>

                                <a className="card-meta mt-auto" href="#!">

                                    <hr className="card-meta-divider" />

                                    <div className="avatar avatar-sm mr-2">
                                        <img src="assets/img/avatars/avatar-1.jpg" alt="..." className="avatar-img rounded-circle" />
                                    </div>

                                    <h6 className="text-uppercase text-muted mr-2 mb-0">
                                        Ab Hadley
                                    </h6>

                                    <p className="h6 text-uppercase text-muted mb-0 ml-auto">
                                        <time dateTime="2019-05-02">May 02</time>
                                    </p>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>



            <section className="py-7 py-md-10">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-12 col-md-9 col-lg-8 col-xl-7">

                            <a href="#!" className="btn btn-block btn-outline-gray-300 d-flex align-items-center">
                                <span className="mx-auto">Load more</span> <i className="fe fe-arrow-right" />
                            </a>
                        </div>
                    </div>
                </div>
            </section>
            {/* SHAPE */}
            <div className="position-relative">
                <div className="shape shape-bottom shape-fluid-x svg-shim text-gray-200">
                    <svg viewBox="0 0 2880 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 48h2880V0h-720C1442.5 52 720 0 720 0H0v48z" fill="currentColor" /></svg>
                </div>
            </div>

            <section className="pt-6 pt-md-8 bg-gray-200">
                <div className="container pb-6 pb-md-8 border-bottom border-gray-300">
                    <div className="row align-items-center">
                        <div className="col-12 col-md">

                            <h3 className="mb-1 font-weight-bold">
                                Get our stories delivered
                             </h3>

                            <p className="font-size-lg text-muted mb-6 mb-md-0">
                                From us to your inbox weekly.
                            </p>
                        </div>
                        <div className="col-12 col-md-5">

                            <form>
                                <div className="row">
                                    <div className="col">

                                        <input type="email" className="form-control" placeholder="Enter your email" />
                                    </div>
                                    <div className="col-auto ml-n5">

                                        <button className="btn btn-primary" type="submit">
                                            Subscribe
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </Layout >
    )
}

export const query = graphql`
     {
    graphCmsData {
      blogs {
        id
        title
        description
        slug
        content{
            html
        }
        image {
          handle
          url
          width
          height
        }
        createdAt
      }
    }
  }
`

export default blogs
