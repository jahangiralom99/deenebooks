// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import img1 from "../../assets/IMG-20240626-WA0000-300x300.jpg";
import img2 from "../../assets/IMG-20240626-WA0001-300x300.jpg";
import img3 from "../../assets/IMG-20240626-WA0002-300x300.jpg";
import { FaCheck, FaRegArrowAltCircleRight } from "react-icons/fa";
// import required modules
import { FreeMode, Pagination } from "swiper/modules";

const Banner = () => {
  return (
    <div className="max-w-screen-xl mx-auto px-4">
      {/* Banner section */}
      <div className="flex flex-col md:flex-row p-3 md:p-8 gap-8 justify-center ">
        <div className="md:flex-1">
          {/* Banner text */}
          <h1 className="font-bold text-2xl  ">
            কেয়ামতের কঠিন সময়ের আজাব থেকে বাঁচাতে এই কোরআন আপনার জন্য
            সুপারিশকারী হিসেবে থাকবে !!
          </h1>
          <button className="px-5 text-sm flex items-center gap-3 py-2 bg-[#F16200] text-white font-bold mt-5 rounded">
            অর্ডার করতে ক্লিক করুন <FaRegArrowAltCircleRight />
          </button>
        </div>
        <div className="md:flex-1">
          {/* youtube links  */}
          <iframe
            className="w-full h-[400px]"
            src="https://www.youtube.com/embed/hFw8-EAA11k?si=94lfHiVbRrBQBzAp"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
      </div>
      {/* swiper Section */}
      <div className="mt-12">
        <h1 className="text-4xl font-bold">আপনার প্রিয়জনকে উপহার দিন</h1>
        <div className="flex flex-col md:flex-row p-5 mt-6 gap-6">
          <div className="md:w-[50%]">
            <Swiper
              slidesPerView={3}
              spaceBetween={30}
              freeMode={true}
              pagination={{
                clickable: true,
              }}
              modules={[FreeMode, Pagination]}
              className="mySwiper"
            >
              <SwiperSlide>
                <img src={img1} alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={img2} alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={img3} alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={img1} alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={img2} alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={img3} alt="" />
              </SwiperSlide>
            </Swiper>
          </div>
          <div className="flex-1">
            <h1 className="text-3xl font-bold">
              আল্লাহর সন্তুষ্টির জন্য কাউকে দান করা অথবা প্রিয়জনের বিয়ে অথবা
              অন্য কোন অনুষ্ঠানে কোরআন হতে পারে শ্রেষ্ঠ উপহার। এই উপহার আপনার
              জন্য সতকায়ে জারিয়া হয়ে থাকবে কেয়ামত পর্যন্ত, যা আপনার মৃতুরপরও
              চলমান থাকবে।
            </h1>
            <div className="font-semibold">
              <p className="flex items-center gap-3 text-sm mt-8">
                <FaCheck className="text-[#ffc400]" />
                প্রতিটি আয়াতের নিচে বাংলা উচ্চারণ ও সরল অনুবাদ আছে।
              </p>
              <p className="flex items-center gap-3 text-sm mt-3">
                <FaCheck className="text-[#ffc400]" />
                ফোর কালার তাজবিদ কালারকোড এবং তাজবিদের নিয়মাবলি উল্লেখ করা আছে।
              </p>
              <p className="flex items-center gap-3 text-sm mt-3">
                <FaCheck className="text-[#ffc400]" />
                বড় অক্ষর বলে যেকোনো বয়সের মানুষই ভালো ভাবে দেখতে
                পারবেন,ইন-শা-আল্লাহ্‌।
              </p>
              <p className="flex items-center gap-3 text-sm mt-3">
                <FaCheck className="text-[#ffc400]" />
                পবিত্র মক্কার অনুরুপ ডিজাইনে তৈরি কভার।
              </p>
              <p className="flex items-center gap-3 text-sm mt-3">
                <FaCheck className="text-[#ffc400]" />
                প্রতিটি পৃষ্ঠা 100 জি এস এম আর্ট পেপার দিয়ে ছাপা।
              </p>
            </div>
            <button className="px-5 text-sm flex items-center gap-3 py-2 bg-[#F16200] text-white font-bold mt-5 rounded">
              অর্ডার করতে ক্লিক করুন <FaRegArrowAltCircleRight />
            </button>
          </div>
        </div>
      </div>
      {/* Price details  */}
      <div className="mt-12">
        <h1 className="relative text-3xl md:text-5xl text-[#110C61] font-bold text-center lg:leading-loose">
          কালার কোডেড সহজ কোরআন (সম্পূর্ণ ৩০ পারা) বড় সাইজ হাদিয়া মাত্র ১৪৫০{" "}
          <span className="absolute left-36 lg:left-[560px] lg:top-[120px]">
            <svg
              className="md:w-44 w-28 "
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 500 150"
              preserveAspectRatio="none"
            >
              <path
                d="M497.4,23.9C301.6,40,155.9,80.6,4,144.4"
                fill="red"
              ></path>
              <path
                d="M14.1,27.6c204.5,20.3,393.8,74,467.3,111.7"
                fill="red"
              ></path>
            </svg>
          </span>
          <span>১৩৫০ টাকায়।</span>
        </h1>
      </div>

      {/* প্রয়োজনে কল করুন */}
      <div className="border-2 p-4 rounded-lg border-[#F16200] mt-8 text-center">
        <h2 className="md:text-3xl  font-bold text-[#F16200]">
          প্রয়োজনে কল করুনঃ 01878180006
        </h2>
      </div>
    </div>
  );
};

export default Banner;
