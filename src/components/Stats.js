import React from 'react';
import illustarion_8 from '../assets/img/illustrations/illustration-8.png'

const Stats = () => {
    return (
        // <!-- STATS -->
        <section className="pt-12 pt-md-13 bg-gray-200">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-12 col-md-5 col-lg-6 order-md-2">

                        {/* <!-- Image --> */}
                        <img src={illustarion_8} alt="..." className="img-fluid mb-6 mb-md-0" />

                    </div>
                    <div className="col-12 col-md-7 col-lg-6 order-md-1">

                        {/* <!-- Heading --> */}
                        <h2>
                            Stay focused on your business. <br />
                            <span className="text-primary">Let us handle the design</span>.
                </h2>

                        {/* <!-- Text --> */}
                        <p className="font-size-lg text-gray-700 mb-6">
                            You have a business to run. Stop worring about cross-browser bugs, designing new pages, keeping your components up to date. Let us do that for you.
                </p>

                        {/* <!-- Stats --> */}
                        <div className="d-flex">
                            <div className="pr-5">
                                <h3 className="mb-0">
                                    <span data-countup='{"startVal": 0}' data-to="100" data-aos data-aos-id="countup:in"></span>%
                    </h3>
                                <p className="text-gray-700 mb-0">
                                    Satisfaction
                    </p>
                            </div>
                            <div className="border-left border-gray-300"></div>
                            <div className="px-5">
                                <h3 className="mb-0">
                                    <span data-countup='{"startVal": 0}' data-to="24" data-aos data-aos-id="countup:in"></span>/
                      <span data-countup='{"startVal": 0}' data-to="7" data-aos data-aos-id="countup:in"></span>
                                </h3>
                                <p className="text-gray-700 mb-0">
                                    Support
                    </p>
                            </div>
                            <div className="border-left border-gray-300"></div>
                            <div className="pl-5">
                                <h3 className="mb-0">
                                    <span data-countup='{"startVal": 0}' data-to="100" data-aos data-aos-id="countup:in"></span>k+
                    </h3>
                                <p className="text-gray-700 mb-0">
                                    Sales
                    </p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default Stats
