const Contact = () => {
    return (
        <>
        <div className="container">
            <div className="text-center py-5">
                <h2 className="color-text fw-normal ">Contact Us</h2>
                
            </div>
            <div className="row">
                <div className="col-md-4 col-12">
                    <div className="mb-4 address">
                        <p className="m-0">Address:</p>
                        <p className="m-0">31/4 Borewell Road</p>
                        <p className="m-0">Whitefield, Bangalore</p>
                    </div>
                    <div className="mb-4 phone">
                        <p className="m-0">Phone:</p>
                        <p className="m-0">+91 9739711141</p>
                    </div>
                    <div className="mb-4 email">
                        <p className="m-0">Mail:</p>
                        <p className="m-0">contact@octogenie.com</p>
                    </div>
                    
                </div>
                <div className="col-md-8 col-12">
                    <form action="#" method="POST">
                        <div className="row">
                            <div className="col-md-6 col-12 py-3 ">
                                <input type="text" placeholder="Name*"  className="form-input w-100" />
                            </div>
                            <div className="col-md-6 col-12 py-3 ">
                                <input type="text" placeholder="Email*"  className="form-input w-100" />
                            </div>
                            <div className="col-12 mt-4">
                                <input type="text" placeholder="Subject"  className="form-input w-100" />
                            </div>
                            <div className="col-12 mt-4">
                                <textarea rows="6" placeholder="Write your messages*" name="message" id="message" className="form-input w-100"></textarea>
                            </div>
                            <div className="">
                                <button className=" _px-[45px] _py-[13px] bg-btn border-0 text-white  text-center rounded-5 mt-4 d-inline-block">Send Message</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        </>
    )
}

export default Contact;