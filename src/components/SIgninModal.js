// import React from 'react';
// import photo_1 from '../assets/img/photos/photo-1.jpg'

// const SIgninModal = () => {

//     const modals = document.querySelectorAll('.modal');
//     function getScrollbarWidth() {
//         return window.innerWidth - document.documentElement.clientWidth;
//     }

//     function overflowHide() {
//         const scrollbarWidth = getScrollbarWidth();

//         document.documentElement.style.overflow = 'hidden';
//         document.body.style.paddingRight = scrollbarWidth + 'px';
//     }

//     function overflowShow() {
//         document.documentElement.style.overflow = '';
//         document.body.style.paddingRight = '';
//     }

//     modals.forEach(function (modal) {
//         modal.addEventListener('show.bs.modal', function () {
//             overflowHide();
//         });

//         modal.addEventListener('hidden.bs.modal', function () {
//             overflowShow();
//         });
//     });

//     return (
//         <div className="modal fade" id="modalSigninHorizontal" tabIndex="-1" role="dialog" aria-labelledby="modalSigninHorizontalTitle" aria-hidden="true">
//             <div className="modal-dialog modal-lg modal-dialog-centered" role="document">
//                 <div className="modal-content">
//                     <div className="card card-row">
//                         <div className="row gx-0">
//                             <div className="col-12 col-md-6 bg-cover card-img-left" style={{ backgroundImage: `url(${photo_1})` }}>

//                                 {/* <!-- Image (placeholder) --> */}
//                                 <img src={photo_1} alt="..." className="img-fluid d-md-none invisible" />

//                                 {/* <!-- Shape --> */}
//                                 <div className="shape shape-right shape-fluid-y svg-shim text-white d-none d-md-block">
//                                     {/* {{> curves/curve-4}} */}
//                                 </div>

//                             </div>
//                             <div className="col-12 col-md-6">
//                                 <div className="card-body">

//                                     {/* <!-- Close --> */}
//                                     <button type="button" className="modal-close close" data-dismiss="modal" aria-label="Close">
//                                         <span aria-hidden="true">×</span>
//                                     </button>

//                                     {/* <!-- Heading --> */}
//                                     <h2 className="mb-0 font-weight-bold text-center" id="modalSigninHorizontalTitle">
//                                         Sign In
//                     </h2>

//                                     {/* <!-- Text --> */}
//                                     <p className="mb-6 text-center text-muted">
//                                         Simplify your workflow in minutes.
//                     </p>

//                                     {/* <!-- Form --> */}
//                                     <form className="mb-6">

//                                         {/* <!-- Email --> */}
//                                         <div className="form-group">
//                                             <label className="sr-only" htmlFor="modalSigninHorizontalEmail">
//                                                 Your email
//                         </label>
//                                             <input type="email" className="form-control" id="modalSigninHorizontalEmail" placeholder="Your email" />
//                                         </div>

//                                         {/* <!-- Password --> */}
//                                         <div className="form-group mb-5">
//                                             <label className="sr-only" htmlFor="modalSigninHorizontalPassword">
//                                                 Enter your password
//                         </label>
//                                             <input type="password" className="form-control" id="modalSigninHorizontalPassword" placeholder="Enter your password" />
//                                         </div>

//                                         {/* <!-- Submit --> */}
//                                         <button className="btn btn-block btn-primary" type="submit">
//                                             Sign in
//                       </button>

//                                     </form>

//                                     {/* <!-- Text --> */}
//                                     <p className="mb-0 font-size-sm text-center text-muted">
//                                         Don't have an account yet? <a href="{{webRoot}}/signin-illustration.html">Sign up</a>.
//                     </p>

//                                 </div>
//                             </div>

//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>

//     )
// }

// export default SIgninModal
