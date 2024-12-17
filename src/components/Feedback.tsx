"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const testimonials = [
  {
    name: "Sarah M.",
    rating: 5,
    review:
      "I am so impressed with the quality and speed of the service. It exceeded my expectations!",
  },
  {
    name: "Alex K.",
    rating: 4,
    review:
      "Great experience! Their team was professional, and I couldn't be happier with the outcome.",
  },
  {
    name: "James L.",
    rating: 5,
    review:
      "Amazing service! The results were better than I expected. Highly recommend to everyone.",
  },
  {
    name: "Burak.",
    rating: 5,
    review:
      "Amazing service! The results were better than I expected. Highly recommend to everyone.",
  },{
    name: "Mary.",
    rating: 4,
    review:
      "Amazing service! The results were better than I expected. Highly recommend to everyone.",
  },{
    name: "Leena.",
    rating: 5,
    review:
      "Amazing service! The results were better than I expected. Highly recommend to everyone.",
  },
];

const Testimonials = () => {
  return (
    <div className="max-w-6xl mx-auto p-6">
      <h2 className="text-3xl font-bold text-center mb-8">
        OUR HAPPY CUSTOMERS
      </h2>

      <Swiper
        modules={[Navigation, Pagination]}
        navigation
        pagination={{ clickable: true }}
        spaceBetween={30}
        slidesPerView={1}
        breakpoints={{
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="w-full"
      >
        {testimonials.map((testimonial, index) => (
          <SwiperSlide key={index} className="p-4">
            <div className="bg-white shadow-md rounded-lg p-6 text-center">
              <div className="text-yellow-400 mb-2">
                {"★".repeat(testimonial.rating)}{" "}
                {"☆".repeat(5 - testimonial.rating)}
              </div>
              <h3 className="font-semibold text-lg">{testimonial.name}</h3>
              <p className="text-gray-600 mt-2">{testimonial.review}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Testimonials;
