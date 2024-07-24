// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import TestimonialItem from './TestimonialItem';
import { Autoplay, Pagination, A11y  } from 'swiper/modules';
import Icon from '../../components/Icon';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const TestimonailSlider = () => {

    const testimonialData = [
        {
            img: "images/testimonial-1.jpg",
            name: "Keena Lara",
            position: "Store Owner",
            quote: "Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam."
        },
        {
            img: "images/testimonial-2.jpg",
            name: "Afa Rose",
            position: "Web Designer",
            quote: "Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam."
        },
        {
            img: "images/testimonial-3.jpg",
            name: "Fizzi Brandon",
            position: "Freelancer",
            quote: "Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam."
        },
        {
            img: "images/testimonial-4.jpg",
            name: "Jhone Doe",
            position: "CFO",
            quote: "Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam."
        }
    ]

    return (
        <>
            <div className="swiper py-5 animation in-view fadeup w-100">
                <div className="text-center py-5">
                    <h2 className="color-text fw-normal ">Testimonials</h2>
                    <p className="desc-choose">Lorem ipsum dolor sit amet</p>
                </div>
                <Swiper
                    className='!_pb-[60px]'
                    spaceBetween={30}
                    pagination={{ clickable: true }}
                    loop={true}
                    slidesPerView={1}
                    onSlideChange={() => {}}
                    onSwiper={(swiper) => {}}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                      }}
                      modules={[Autoplay, Pagination, A11y]}
                    breakpoints={{
                        640: {
                          slidesPerView: 1,
                          spaceBetween: 20,
                        },
                        768: {
                          slidesPerView: 2,
                          spaceBetween: 40,
                        },
                        1024: {
                          slidesPerView: 3,
                          spaceBetween: 50,
                        }}}
                >
                    {testimonialData.map( (item ) => (
                        <SwiperSlide>
                            <TestimonialItem  {...item}  />
                        </SwiperSlide>
                    ))}
                    
                </Swiper>

            </div>
        </>
    );
}
export default TestimonailSlider; 