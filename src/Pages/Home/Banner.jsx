/* eslint-disable no-unused-vars */
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import img1 from "../../assets/IMG-20240626-WA0000-300x300.jpg";
// import img2 from "../../assets/IMG-20240626-WA0001-300x300.jpg";
// import img3 from "../../assets/IMG-20240626-WA0002-300x300.jpg";
import { FaCheck, FaRegArrowAltCircleRight } from "react-icons/fa";
// import required modules
import { FreeMode, Pagination } from "swiper/modules";
// import { useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { ItemContext } from "../../App";
import { base_url } from "../../utilities/dataPanel";

const Banner = () => {
  // const {name} = useParams();
  const itemData = useContext(ItemContext);
  const [loader, setLoader] = useState(true);
  const [landing, setLanding] = useState([]);

  useEffect(() => {
    let itmFind = itemData?.find((item) => item.name === "4567");
    setLanding([itmFind]);
    setLoader(false);
  }, [itemData]);

  const formatStyle = (params) => {
    if (landing[0] && landing[0][params]) {
      return landing[0][params].split("<br>").map((part, index, parts) => (
        <span key={index}>
          {part}
          {index < parts.length - 1 && <br />}
        </span>
      ));
    }
  };

  return (
    <>
      {loader ? (
        "loading "
      ) : (
        <div className="max-w-screen-xl mx-auto px-4">
          {/* Banner section */}
          <div className="flex flex-col md:flex-row p-3 md:p-8 gap-8 justify-center ">
            <div className="md:flex-1">
              {/* Banner text */}
              <h1 className="font-bold text-2xl  ">
                {formatStyle("custom_text_1")}
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
            <h1 className="text-4xl font-bold">
              {formatStyle("custom_text_2")}
            </h1>
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
                    <img
                      src={`${
                        base_url + landing[0]?.custom_upload_head_text_1
                      }`}
                      alt=""
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img
                      src={`${
                        base_url + landing[0]?.custom_upload_head_text_2
                      }`}
                      alt=""
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img
                      src={`${
                        base_url + landing[0]?.custom_upload_head_text_3
                      }`}
                      alt=""
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img
                      src={`${
                        base_url + landing[0]?.custom_upload_head_text_1
                      }`}
                      alt=""
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img
                      src={`${
                        base_url + landing[0]?.custom_upload_head_text_2
                      }`}
                      alt=""
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img
                      src={`${
                        base_url + landing[0]?.custom_upload_head_text_3
                      }`}
                      alt=""
                    />
                  </SwiperSlide>
                </Swiper>
              </div>
              <div className="flex-1">
                <h1 className="text-3xl font-bold">
                  {formatStyle("custom_head1_text_3")}
                </h1>
                <div className="font-semibold">
                  <p className="flex items-center gap-3 text-sm mt-8">
                    <FaCheck className="text-[#ffc400]" />
                    {formatStyle("custom_head_text_4")}
                  </p>
                  <p className="flex items-center gap-3 text-sm mt-3">
                    <FaCheck className="text-[#ffc400]" />
                    {formatStyle("custom_head_text_5")}
                  </p>
                  <p className="flex items-center gap-3 text-sm mt-3">
                    <FaCheck className="text-[#ffc400]" />
                    {formatStyle("custom_head_text_6")}
                  </p>
                  <p className="flex items-center gap-3 text-sm mt-3">
                    <FaCheck className="text-[#ffc400]" />
                    {formatStyle("custom_head_text_7")}
                  </p>
                  <p className="flex items-center gap-3 text-sm mt-3">
                    <FaCheck className="text-[#ffc400]" />
                    {formatStyle("custom_head_text_8")}
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
              {formatStyle("custom_head_text_9")}
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
            </h1>
          </div>

          {/* প্রয়োজনে কল করুন */}
          <div className="border-2 p-4 rounded-lg border-[#F16200] mt-8 text-center">
            <h2 className="md:text-3xl  font-bold text-[#F16200]">
              {formatStyle("custom_head_text_10")}
            </h2>
          </div>
        </div>
      )}
    </>
  );
};

export default Banner;
