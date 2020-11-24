import React from 'react'
import Layout from '../components/Layout';
import cover_8 from '../assets/img/covers/cover-8.jpg'
import avatar_1 from '../assets/img/avatars/avatar-1.jpg'
import instagram from '../assets/img/icons/social/instagram.svg'
import facebook from '../assets/img/icons/social/facebook.svg'
import twitter from '../assets/img/icons/social/twitter.svg'
import photo_27 from '../assets/img/photos/photo-27.jpg'
import avatar_2 from '../assets/img/avatars/avatar-2.jpg'
import photo_15 from '../assets/img/photos/photo-15.jpg'
import photo_14 from '../assets/img/photos/photo-14.jpg'
import photo_7 from '../assets/img/photos/photo-7.jpg'
import { graphql, Link } from 'gatsby';
import GraphImg from "graphcms-image";
import blogs from '../pages/blogs';

const BlogTemplate = ({ data: { graphCmsData: { blog, blogs } } }) => {
    // let blog = data.graphCmsData.blog
    // let blog = data.graphCmsData.blog
    console.log("blog===>>>", blog)
    console.log("blogs===>>>", blogs)
    return (
        <Layout>
            {/* IMAGE */}
            <section data-jarallax data-speed=".8" className="py-12 py-md-15 bg-cover jarallax" style={{ backgroundImage: `url(${cover_8})` }} />
            {/* HEADER */}
            <section className="pt-8 pt-md-11">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-12 col-md-10 col-lg-9 col-xl-8">

                            <h1 className="display-4 text-center">
                                {blog.title}
                            </h1>

                            <p className="lead mb-7 text-center text-muted">
                                {blog.description}
                            </p>

                            <div className="row align-items-center py-5 border-top border-bottom">
                                <div className="col-auto">

                                    <div className="avatar avatar-lg">
                                        <img src={avatar_1} alt="..." className="avatar-img rounded-circle" />
                                    </div>
                                </div>
                                <div className="col ml-n5">

                                    <h6 className="text-uppercase mb-0">
                                        Ab Hadley
                    </h6>

                                    <time className="font-size-sm text-muted" dateTime="2019-05-20">
                                        Published on May 20, 2019
                               </time>
                                </div>
                                <div className="col-auto">

                                    <span className="h6 text-uppercase text-muted d-none d-md-inline mr-4">
                                        Share:
                                   </span>

                                    <ul className="d-inline list-unstyled list-inline list-social">
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
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* SECTION */}
            <section className="pt-6 pt-md-8">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-12 col-md-10 col-lg-9 col-xl-8">

                            <figure className="figure mb-7">
                                <GraphImg image={blog.image} maxWidth={300} className="figure-img img-fluid rounded lift lift-lg" />
                                {/* <img className="figure-img img-fluid rounded lift lift-lg" src={photo_27} alt="..." /> */}

                                <figcaption className="figure-caption text-center">
                                    This is a caption on this photo for reference
                  </figcaption>
                            </figure>

                            {/* <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi reiciendis odio perferendis libero saepe voluptatum fugiat dolore voluptates aut, ut quas doloremque quo ad quis ipsum molestias neque pariatur commodi.
                            </p>
                            <p className="mb-0">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus, quidem, earum! Quo fugiat voluptates similique quidem dolorem ex non quibusdam odio suscipit error, maiores, itaque blanditiis vel, sed, cum velit?
                            </p> */}
                        </div>
                    </div>
                </div>
            </section>
            {/* SECTION */}
            <section className="pt-6 pt-md-8">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-12 col-md-10 col-lg-9 col-xl-8 blog-content">
                            <div dangerouslySetInnerHTML={{ __html: blog.content.html }} />
                            {/* {blog.content.html} */}
                            {/* {blog.content.markdown} */}
                            {/* <h2 className="font-weight-bold">
                                Big heading for a new topic
                            </h2>
                            
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi reiciendis odio perferendis libero saepe voluptatum fugiat dolore voluptates aut, ut quas doloremque quo ad quis ipsum molestias neque pariatur commodi.
                            </p>
                            <ul className="mb-0">
                                <li>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis voluptatem nihil labore, recusandae, at nobis cumque repellendus saepe maiores aperiam fuga vel tenetur placeat. Officia, natus, cupiditate! Natus facere, explicabo?
                                </li>
                                <li className="mt-4">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio dolorem modi corrupti excepturi quo enim odit deserunt culpa blanditiis quidem doloribus, iusto aspernatur quisquam quod numquam consequatur asperiores? Sint, dolor!
                                </li>
                            </ul> */}
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION */}
            {/* <section className="pt-6 pt-md-8">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-12 col-md-10 col-lg-9 col-xl-8">
                           
                            <h3 className="font-weight-bold">
                                Small heading for a smaller transition
                </h3>
                            
                            <p className="mb-7">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi reiciendis odio perferendis libero saepe voluptatum fugiat dolore voluptates aut, ut quas doloremque quo ad quis ipsum molestias neque pariatur commodi.
                </p>
                            
                            <hr className="hr-md mb-7" />
                            
                            <blockquote className="blockquote mb-7">
                                <p className="h2 mb-0 text-center text-primary-desat">
                                    “So many teams struggle to make their onboarding experience anywhere near as good as their core product, so the results of this is poor retention”
                  </p>
                            </blockquote>
                           
                            <hr className="hr-md mb-7" />
                            
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam ducimus provident, quos sint hic, quidem voluptatibus. Quasi, distinctio cupiditate, omnis vitae maxime nisi eum similique libero ad dolore sint tempora.
                </p>
                           
                            <ul className="list-unstyled mb-7">
                                <li className="d-flex">
                                    
                                    <div className="badge badge-rounded-circle bg-success-soft mt-1 mr-4">
                                        <i className="fe fe-check" />
                                    </div>
                                   
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis quo labore, deleniti optio non, voluptate illo doloribus odio iure molestiae eos tempora nobis.
                    </p>
                                </li>
                                <li className="d-flex">
                                    
                                    <div className="badge badge-rounded-circle bg-success-soft mt-1 mr-4">
                                        <i className="fe fe-check" />
                                    </div>
                                   
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis quo labore, deleniti optio non, voluptate illo doloribus odio iure molestiae eos tempora nobis.
                    </p>
                                </li>
                                <li className="d-flex">
                                   
                                    <div className="badge badge-rounded-circle bg-success-soft mt-1 mr-4">
                                        <i className="fe fe-check" />
                                    </div>
                                   
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis quo labore, deleniti optio non, voluptate illo doloribus odio iure molestiae eos tempora nobis.
                    </p>
                                </li>
                            </ul>

                        </div>
                    </div> 
                </div> 
            </section> */}
            {/* SECTION */}
            {/* <section className="pt-6 pt-md-8">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-12 col-md-10 col-lg-9 col-xl-8">

                            <h3 className="font-weight-bold">
                                Small heading for a smaller transition
                            </h3>

                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi reiciendis odio perferendis libero saepe voluptatum fugiat dolore voluptates aut, ut quas doloremque quo ad quis ipsum molestias neque pariatur commodi.
                            </p>
                            <p className="mb-0">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim quos, commodi fugiat? Repellat accusantium error quisquam autem magni. Placeat ea dolorem voluptatem sequi veritatis, fugit nisi omnis, aspernatur sint quidem.
                            </p>
                        </div>
                    </div>
                </div>
            </section> */}
            {/* SECTION */}
            {/* <section className="pt-6 pt-md-8">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-12 col-lg-11 col-xl-10">

                            <div className="card card-row shadow-light-lg">
                                <div className="row gx-0">
                                    <div className="col-12 col-md-6 bg-cover card-img-left" style={{ backgroundImage: `url(${photo_15})` }}>

                                        <img src={photo_15} alt="..." className="img-fluid d-md-none invisible" />
                                       
                                        <div className="shape shape-right shape-fluid-y svg-shim text-white d-none d-md-block">
                                            <svg viewBox="0 0 112 690" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M116 0H51v172C76 384 0 517 0 517v173h116V0z" fill="currentColor" /></svg>
                                        </div>
                                    </div>
                                    <div className="col-12 col-md-6">
                                        <div className="card-body">
                                           
                                            <h3 className="font-weight-bold">
                                                Freelance guide
                                            </h3>
                                            
                                            <p className="text-muted">
                                                Find out the best tricks and tips to living life anywhere you want.
                                            </p>
                                        
                                            <form>
                                                <div className="form-label-group">
                                                    <input type="text" className="form-control form-control-flush" id="cardName" placeholder="Name" />
                                                    <label htmlFor="cardName">Name</label>
                                                </div>
                                                <div className="form-label-group">
                                                    <input type="email" className="form-control form-control-flush" id="cardEmail" placeholder="Email" />
                                                    <label htmlFor="cardEmail">Email</label>
                                                </div>
                                                <div className="mt-6">
                                                    <button className="btn btn-block btn-success lift" type="submit">
                                                        Download the Guide
                                                    </button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section> */}
            {/* SECTION */}
            <section className="pt-6 pt-md-8 pb-8 pb-md-11">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-12 col-md-10 col-lg-9 col-xl-8">
                            {/* Text */}
                            {/* <p className="mb-7">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad, quod a illum, cumque recusandae quae ea tempore, fugit, expedita vero natus aliquam nulla accusamus! Commodi culpa quibusdam accusamus aspernatur eveniet.
                            </p> */}
                            {/* Meta */}
                            <div className="row align-items-center py-5 border-top border-bottom">
                                <div className="col-auto">
                                    {/* Avatar */}
                                    <div className="avatar avatar-lg">
                                        <img src={avatar_1} alt="..." className="avatar-img rounded-circle" />
                                    </div>
                                </div>
                                <div className="col ml-n5">
                                    {/* Name */}
                                    <h6 className="text-uppercase mb-0">
                                        Ab Hadley
                                    </h6>
                                    {/* Date */}
                                    <time className="font-size-sm text-muted" dateTime="2019-05-20">
                                        Published on May 20, 2019
                                    </time>
                                </div>
                                <div className="col-auto">
                                    {/* Share */}
                                    <span className="h6 text-uppercase text-muted d-none d-md-inline mr-4">
                                        Share:
                                    </span>
                                    {/* Icons */}
                                    <ul className="d-inline list-unstyled list-inline list-social">
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
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* SHAPE */}
            <div className="position-relative">
                <div className="shape shape-bottom shape-fluid-x svg-shim text-light">
                    <svg viewBox="0 0 2880 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 48h2880V0h-720C1442.5 52 720 0 720 0H0v48z" fill="currentColor" /></svg>
                </div>
            </div>
            {/* ARTICLES */}
            {/* <section className="pt-7 pt-md-10">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                           
                            <div className="card card-row shadow-light-lg mb-6 lift lift-lg">
                                <div className="row gx-0">
                                    <div className="col-12">
                                       
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
            </section> */}
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

                            <Link to="/blogs" className="btn btn-sm btn-outline-gray-300 d-none d-md-inline">
                                View all
                             </Link>
                        </div>
                    </div>
                    <div className="row">
                        {blogs.map(latestBlog => (

                            <div className="col-12 col-md-6 col-lg-4 d-flex" key={latestBlog.id}>

                                <div className="card mb-6 mb-lg-0 shadow-light-lg lift lift-lg">

                                    <Link className="card-img-top" to={`/blogs/${latestBlog.slug}`}>
                                        <GraphImg image={latestBlog.image} maxWidth={300} className="card-img-top" />
                                        {/* <img src={photo_15} alt="..." className="card-img-top" /> */}

                                        <div className="position-relative">
                                            <div className="shape shape-bottom shape-fluid-x svg-shim text-white">
                                                <svg viewBox="0 0 2880 480" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M2160 0C1440 240 720 240 720 240H0v240h2880V0h-720z" fill="currentColor" /></svg>
                                            </div>
                                        </div>
                                    </Link>

                                    <Link className="card-body" to={`/blogs/${latestBlog.slug}`}>

                                        <h3>
                                            {latestBlog.title}
                                        </h3>

                                        <p className="mb-0 text-muted">
                                            {latestBlog.description}
                                        </p>
                                    </Link>

                                    <a className="card-meta mt-auto" href="#!">

                                        <hr className="card-meta-divider" />

                                        <div className="avatar avatar-sm mr-2">
                                            <img src={avatar_1} alt="..." className="avatar-img rounded-circle" />
                                        </div>

                                        <h6 className="text-uppercase text-muted mr-2 mb-0">
                                            Ab Hadley
                                    </h6>

                                        <p className="h6 text-uppercase text-muted mb-0 ml-auto">
                                            <time dateTime="2019-05-02">{latestBlog.createdAt}</time>
                                        </p>
                                    </a>
                                </div>
                            </div>
                        ))}
                        {/* <div className="col-12 col-md-6 col-lg-4 d-flex">

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
                        </div> */}
                        {/* <div className="col-12 col-md-6 col-lg-4 d-flex">

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
                        </div> */}
                    </div>
                </div>
            </section>
            {/* CTA */}
            {/* <section className="pt-7 pt-md-10 bg-light">
                <div className="container py-6 py-md-8 border-top border-bottom border-gray-300">
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
            </section> */}
        </Layout>
    )
}


export const query = graphql`
  query GetSingleBlog($slug: String) {
    graphCmsData{
        blog(where: { slug: $slug }) {
          id
          title
          description
          content {
              html
              markdown
          }
          image {
            handle
            url
            width
            height
          }
        }
        blogs(orderBy: createdAt_DESC, first: 3) {
            title
            description
            slug
            image {
              handle
              url
              width
              height
            }
            createdAt
            id
          }
    }
  }
`
export default BlogTemplate;
