import { useInView } from "react-intersection-observer";
import TestimonailSlider from "./TestimonialSlider";
import { useEffect, useState } from "react";
import Portfolio from "./Portfolio";
import './Services.css'; 

const Services = () => {
    const [inViewClass, setInViewClass] = useState("");
    const { ref, inView, entry } = useInView({
        threshold: 0,
    });

    useEffect(() => {
        if (inView && inViewClass == "") {
            setInViewClass("in-view");
        }
    }, [inView]);

    return (
        <div className="container w-100 d-flex justify-content-center align-items-center flex-column">
            <div ref={ref} className={`row pt-5 animation ${inViewClass} w-100 fadeup`}>
                <div className="col-md-4 col-12 mb-4">
                    <a className="text-decoration-none p-2" href="#">
                        <div className="scale text-center p-4 rounded-3 service-box">
                            <img className="icon-service pb-4" src="/images/service-design.svg" alt="" />
                            <h3 className="color-text">AI Process and Business Automation</h3>
                            <p>We automate a wide range of tasks and processes for your departments. For example: customer support with AI-powered chatbots. We train these AI agents on your company's information so that you get the most value out of it.</p>
                        </div>
                    </a>
                </div>
                <div className="col-md-4 col-12 mb-4">
                    <a className="text-decoration-none p-2" href="#">
                        <div className="scale text-center p-4 rounded-3 service-box">
                            <img className="icon-service pb-4" src="/images/service-hosting.svg" alt="" />
                            <h3 className="color-text">AI-Powered Product Development</h3>
                            <p>Create digital products by leveraging the state-of-the-art GPT4 models. We'll help you all the way - from product designs to integrating cutting edge machine learning models and software development.</p>
                        </div>
                    </a>
                </div>
                <div className="col-md-4 col-12 mb-4">
                    <a className="text-decoration-none p-2" href="#">
                        <div className="scale text-center p-4 rounded-3 service-box">
                            <img className="icon-service pb-4" src="/images/service-social.svg" alt="" />
                            <h3 className="color-text">Internal AI-Powered Tools Development</h3>
                            <p>Create internal platforms embedded with AI helpers that can help you achieve goals, help make business decisions, create content, and integrate with your existing systems.</p>
                        </div>
                    </a>
                </div>
            </div>

            <div className="row why-choose py-5 w-100">
                <div className="text-center animation in-view fadeup">
                    <h2 className="color-text fw-normal">Why Choose Us</h2>
                    <p className="desc-choose">Unlock the full potential of AI with our expertise</p>
                </div>
                <div className="col-md-4 col-12">
                    <div className="d-flex mb-4 animation in-view fadeup">
                        <div className="text-end">
                            <h4>Expertise</h4>
                            <p>With years of experience in AI and machine learning, our team delivers innovative solutions tailored to your business needs.</p>
                        </div>
                        <div>
                            <img className="icon-choose ms-3" src="/images/icon-1.svg" alt="Expertise Icon" />
                        </div>
                    </div>
                    <div className="d-flex mb-4 animation in-view fadeup">
                        <div className="text-end">
                            <h4>Advanced Solutions</h4>
                            <p>We leverage cutting-edge AI technologies to develop advanced automation solutions that drive efficiency and growth.</p>
                        </div>
                        <div>
                            <img className="icon-choose ms-3" src="/images/icon-2.svg" alt="Advanced Solutions Icon" />
                        </div>
                    </div>
                    <div className="d-flex mb-4 animation in-view fadeup">
                        <div className="text-end">
                            <h4>Customized Approach</h4>
                            <p>Our tailored AI solutions are designed to meet your unique business challenges and objectives, ensuring optimal results.</p>
                        </div>
                        <div className="">
                            <img className="icon-choose ms-3" src="/images/icon-3.svg" alt="Customized Approach Icon" />
                        </div>
                    </div>
                </div>
                <div className="col-md-4 col-12 d-flex justify-content-center align-items-center">
                    <div className="icon-center animation in-view fadeup">
                        <img className="rounded-5" src="/images/features.jpg" alt="Features" />
                    </div>
                </div>
                <div className="col-md-4 col-12">
                    <div className="d-flex mb-4 animation in-view fadeup">
                        <div>
                            <img className="icon-choose me-3" src="/images/icon-4.svg" alt="Cost-Effective Icon" />
                        </div>
                        <div>
                            <h4>Cost-Effective</h4>
                            <p>Our AI solutions are designed to provide high value at competitive prices, ensuring you get the best return on your investment.</p>
                        </div>
                    </div>
                    <div className="d-flex mb-4 animation in-view fadeup">
                        <div>
                            <img className="icon-choose me-3" src="/images/icon-5.svg" alt="Timely Delivery Icon" />
                        </div>
                        <div>
                            <h4>Timely Delivery</h4>
                            <p>We prioritize timely delivery of our projects without compromising on quality, so you can achieve your goals faster.</p>
                        </div>
                    </div>
                    <div className="d-flex mb-4 animation in-view fadeup">
                        <div>
                            <img className="icon-choose me-3" src="/images/icon-6.svg" alt="Support Icon" />
                        </div>
                        <div>
                            <h4>24/7 Support</h4>
                            <p>Our dedicated support team is available 24/7 to assist you with any issues or queries, ensuring seamless operation of your AI systems.</p>
                        </div>
                    </div>
                </div>
            </div>

            <Portfolio />

            
        </div>
    );
};

export default Services;