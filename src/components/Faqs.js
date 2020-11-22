import React from 'react'

const Faqs = () => {
    return (
        // <!-- FAQ -->
        <section className="pt-15 bg-dark">
            <div className="container pt-8 pt-md-11">
                <div className="row">
                    <div className="col-12 col-md-6">

                        {/* <!-- Item --> */}
                        <div className="d-flex">

                            {/* <!-- Badge --> */}
                            <div className="badge badge-lg badge-rounded-circle bg-success">
                                <span>?</span>
                            </div>

                            <div className="ml-5">

                                {/* <!-- Heading --> */}
                                <h4 className="text-white">
                                    Can I use Landkit for my clients?
                    </h4>

                                {/* <!-- Text --> */}
                                <p className="text-muted mb-6 mb-md-8">
                                    Absolutely. The Bootstrap Themes license allows you to build a website for personal use or for a client.
                    </p>

                            </div>

                        </div>

                        {/* <!-- Item --> */}
                        <div className="d-flex">

                            {/* <!-- Badge --> */}
                            <div className="badge badge-lg badge-rounded-circle bg-success">
                                <span>?</span>
                            </div>

                            <div className="ml-5">

                                {/* <!-- Heading --> */}
                                <h4 className="text-white">
                                    Do I get free updates?
                    </h4>

                                {/* <!-- Text --> */}
                                <p className="text-muted mb-6 mb-md-0">
                                    Yes. We update all of our themes with each Bootstrap update, plus are constantly adding new components, pages, and features to our themes.
                    </p>

                            </div>

                        </div>

                    </div>
                    <div className="col-12 col-md-6">

                        {/* <!-- Item --> */}
                        <div className="d-flex">

                            {/* <!-- Badge --> */}
                            <div className="badge badge-lg badge-rounded-circle bg-success">
                                <span>?</span>
                            </div>

                            <div className="ml-5">

                                {/* <!-- Heading --> */}
                                <h4 className="text-white">
                                    Is there a money back guarantee?
                    </h4>

                                {/* <!-- Text --> */}
                                <p className="text-muted mb-6 mb-md-8">
                                    Yup! Bootstrap Themes come with a satisfaction guarantee. Submit a return and get your money back.
                    </p>

                            </div>

                        </div>

                        {/* <!-- Item --> */}
                        <div className="d-flex">

                            {/* <!-- Badge --> */}
                            <div className="badge badge-lg badge-rounded-circle bg-success">
                                <span>?</span>
                            </div>

                            <div className="ml-5">

                                {/* <!-- Heading --> */}
                                <h4 className="text-white">
                                    Does it work with Rails? React? Laravel?
                    </h4>

                                {/* <!-- Text --> */}
                                <p className="text-muted mb-6 mb-md-0">
                                    Yes. Landkit has basic CSS/JS files you can include. If you want to enable deeper customization, you can integrate it into your assets pipeline or build processes.
                    </p>

                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </section>

    )
}

export default Faqs
