
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const CompanySlider = () => {
    const CompanySlider = [
        {
            img: "images/client-5.png"
        },
        {
            img: "images/client-8.png"
        },
        {
            img: "images/client-5.png"
        },
        {
            img: "images/client-8.png"
        },
        {
            img: "images/client-5.png"
        },
        {
            img: "images/client-8.png"
        },
        {
            img: "images/client-5.png"
        },
    ]
    return (
        <div className="swiper py-5 animation in-view fadeup w-100">
                <div className="container">
                    <Swiper
                        className="Company"
                        spaceBetween={20}
                        loop={true}
                        slidesPerView={2}
                        onSlideChange={() => {}}
                        onSwiper={(swiper) => {}}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                        modules={[Autoplay]}
                        breakpoints={{
                            640: {
                            slidesPerView: 2,
                            spaceBetween: 20,
                            },
                            768: {
                            slidesPerView: 2,
                            spaceBetween: 40,
                            },
                            1024: {
                            slidesPerView: 4,
                            spaceBetween: 50,
                            }}}
                    >
                        {CompanySlider.map( (item ) => (
                            <SwiperSlide >
                                <div className="swiper-slide d-inline-block text-center  px-3 w-20">
                                    <img className="w-75 " src={item.img} alt="" />
                                </div>
                            </SwiperSlide>
                        ))}
                        
                    </Swiper>
                </div>

            </div>
    );
};

export default CompanySlider;