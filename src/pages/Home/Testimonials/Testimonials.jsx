import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { Swiper, SwiperSlide } from "swiper/react";
import comma from '../../../assets/home/left-quote.png';

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import { useEffect, useState } from "react";
import { Rating } from "@smastrom/react-rating";
import '@smastrom/react-rating/style.css'


const Testimonials = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/review')
            .then(res => res.json())
            .then(data => {
                setReviews(data)
            })
    } ,[])
    return (
        <div>
            <SectionTitle
                subHeading={"What Our Client Say"}
                heading={"Testimonials"}
            ></SectionTitle>
            <section className="my-12">
                <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                    
                    {
                        reviews.map(review => <SwiperSlide
                            key={review._id}
                        > <div className="flex flex-col items-center my-12 mx-24">
                            <Rating
                                style={{ maxWidth: 180 }}
                                value={review.rating}
                                readOnly
                                />
                                <img className="w-1/12 mt-5" src={comma} alt="" />
                                <p className="py-8">{review.details}</p>
                                <h3 className="text-2xl text-orange-500">{review.name}</h3>
                            </div></SwiperSlide>)
                    }
                </Swiper>
            </section>
        </div>
    );
};

export default Testimonials;