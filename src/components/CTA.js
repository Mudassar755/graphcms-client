import React from 'react'

const CTA = () => {
    return (
        // <!-- CTA -->
        <>
            <section className="py-8 py-md-11 bg-dark">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-12 col-md-10 col-lg-8 text-center">

                            {/* <!-- Badge --> */}
                            <span className="badge rounded-pill bg-gray-700-soft mb-4">
                                <span className="h6 font-weight-bold text-uppercase">Get started</span>
                            </span>

                            {/* <!-- Heading --> */}
                            <h1 className="display-4 text-white">
                                Get Landkit and save your time.
            </h1>

                            {/* <!-- Text --> */}
                            <p className="font-size-lg text-muted mb-6 mb-md-8">
                                Stop wasting time trying to do it the "right way" and build a site from scratch. Landkit is faster, easier, and you still have complete control.
            </p>

                            {/* <!-- Button --> */}
                            <a href="https://themes.getbootstrap.com/product/landkit/" target="_blank" className="btn btn-success lift">
                                Buy it now <i className="fe fe-arrow-right"></i>
                            </a>

                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- SHAPE --> */}
            <div className="position-relative">
                <div className="shape shape-bottom shape-fluid-x svg-shim text-gray-200">
                    <svg viewBox="0 0 2880 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 48h2880V0h-720C1442.5 52 720 0 720 0H0v48z" fill="currentColor" /></svg>
                    {/* {{> curves/curve-1}} */}
                </div>
            </div>
        </>
    )
}

export default CTA
