const Footer = () => {
    return (
        <>
            <footer className="bg-white py-5 bg-footer ">
                <div className="container">
                    <div className="mb-0">
                        <img
                            src="https://supreme-group.vercel.app/static/media/logo.68f5b8493efb88f7cd65756bf67a1f5b.svg"
                            alt="Supreme Group"
                            height="48"
                        />
                    </div>

                    <div className="row gy-4 mb-4">
                        <div className="col-md-3">
                            <h3 className="h6 fw-bold mb-3">APPLICATIONS</h3>
                            <ul className="list-unstyled text-secondary">
                                <li className="mb-2">Apparel</li>
                                <li className="mb-2">Automotive</li>
                                <li className="mb-2">Filtration</li>
                                <li className="mb-2">Customised Nonwoven</li>
                            </ul>
                        </div>

                        <div className="col-md-3">
                            <h3 className="h6 fw-bold mb-3">COMPANY</h3>
                            <ul className="list-unstyled text-secondary">
                                <li className="mb-2">Who We Are</li>
                                <li className="mb-2">Global Competency</li>
                                <li className="mb-2">Innovation</li>
                                <li className="mb-2">ESG Impact</li>
                            </ul>
                        </div>

                        <div className="col-md-3">
                            <h3 className="h6 fw-bold mb-3">MORE</h3>
                            <ul className="list-unstyled text-secondary">
                                <li className="mb-2">Contact Us</li>
                                <li className="mb-2">Careers</li>
                            </ul>
                        </div>

                        <div className="col-md-3">
                            <h3 className="h6 fw-bold mb-3">FOLLOW US</h3>
                            <ul className="list-unstyled text-secondary">
                                <li className="mb-2">LinkedIn</li>
                            </ul>
                        </div>
                    </div>

                    <div className="border-top pt-4">
                        <div className="row text-secondary small">
                            <div className="col-md-6 mb-3 mb-md-0">
                                ©2024. All Rights Reserved.
                            </div>
                            <div className="col-md-6 text-md-end">
                                Supreme house, 110, 16th Road Chembur, Mumbai - 400071.
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer
