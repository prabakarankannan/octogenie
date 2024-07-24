import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

const SubBanner = () => {
    const [inViewClassName, setInViewClassName] = useState("");
    const { ref, inView, entry } = useInView({
        /* Optional options */
        threshold: 0,
      });

      useEffect(() => {
        if(inView && inViewClassName == "") {
            setInViewClassName("in-view");
            counterUp();

        }
      }, [inView])

      const counterUp = () => {
        const counters = document.querySelectorAll('[data-toggle="counter-up"]');

        counters.forEach(counter => {
            const target = +counter.innerText;
            const duration = 1500; 
            const delay = 10; 
            const increment = target / (duration / delay);
            let count = 0;

            const updateCount = () => {
                count += increment;
                if (count < target) {
                    counter.innerText = Math.ceil(count);
                    setTimeout(updateCount, delay);
                } else {
                    counter.innerText = target;
                }
            };

            updateCount();
        });
      }

    return (
        <>
        <div ref={ref} className=" sub-banner mt-5 w-100">
            <div className="container">
                <div className="row animation in-view fadeup w-100">
                    <div className="col-md-4 col-12 position-relative">
                        <div className="text-center">
                            <img src="/images/happy-clients.svg" alt="" />
                            <h3 className="counter color-text" data-toggle="counter-up"> 20</h3>
                            <h3 className="color-text">Happy Clients</h3>
                            
                        </div>
                    </div>
                    <div className="col-md-4 col-12 position-relative">
                        <div className="text-center">
                            <img src="/images/complete-projects.svg" alt="" />
                            <h3 className="counter color-text" data-toggle="counter-up"> 52</h3>
                            <h3 className="color-text">Completed Projects</h3>
                            
                            
                        </div>
                    </div>
                    <div className="col-md-4 col-12 position-relative">
                        <div className="text-center">
                            <img src="/images/hours-support.svg" alt="" />
                            <h3 className="counter color-text" data-toggle="counter-up"> 153</h3>
                            <h3 className="color-text">Hours Of Support</h3>
                            
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}
export default SubBanner;