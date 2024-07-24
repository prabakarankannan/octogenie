import { useInView } from "react-intersection-observer";

const Banner = () => {
    const { ref, inView, entry } = useInView({
        /* Optional options */
        threshold: 0,
      });
    return (
        <>
            <div className="banner w-100">
            <div ref={ref} className="container">
                <div className="row banner-content w-100">
                    <div className="col-md-5"></div>
                    <div className="col-md-7 col-12 mt-3 ">
                        <div className={` ${inView ? 'in-view' : ''} animation fadeup  text-md-start text-center`}>
                            <h1  className="text-white">AI Automation Agency <br /> <span className="color-text">Make AI Work for Your Business</span></h1>
                            <p className="text-white pe-md-5 pe-0">
                            Automate your processes by leveraging the power of AI and No Code tools. Cut costs, earn more, and focus on the highest-value activities.
                            </p>
                        </div>
                        <div className={` ${inView ? 'in-view' : ''} animation fadeup pt-5 pb-3 `}>
                            <div className="color-text justify-content-md-start justify-content-center d-flex gap-4">
                                <a><i className="bi bi-twitter"></i></a>
                                <a><i className="bi bi-facebook"></i></a>
                                <a><i className="bi bi-linkedin"></i></a>
                                <a><i className="bi bi-instagram"></i></a>
                            </div>
                        </div>
                        <div className="">
                            <div className="justify-content-md-start justify-content-center d-flex">
                                <a className={` ${inView ? 'in-view' : ''} _p-4 animation fadeup bg-btn d-inline-block text-white text-decoration-none text-center rounded-5 me-3   `} href="#">Get Quotes</a>
                                <a className={` ${inView ? 'in-view' : ''} _p-4 delay animation fadeup  bg-btn d-inline-block text-white text-decoration-none text-center rounded-5 `} href="#">Get Started</a>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
        </>
    );
  };
  
  export default Banner;