"use client"
import Image from 'next/image'
import { selectAllItems } from './redux/productsSlice'
import { useSelector } from 'react-redux'
// import profileImg from '../public/images/profile-picture-5.jpg'
import { FaLocationDot } from "react-icons/fa6";
import { IoNotificationsCircleSharp } from "react-icons/io5";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
// import { Navigation } from "swiper";
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css/navigation';

export default function Home() {

  const Products = useSelector(selectAllItems)
  // console.log("🚀 ~ Home ~ Products:", Products)
  return (
    <main>
      <div className='p-4 flex justify-between items-center font-sans'>
        <Image className="rounded-full" width={50} height={50} src={"/images/profile-picture-5.jpg"} alt="Rounded avatar" />
        <div className='flex flex-col justify-center items-center'>
          <p className='font-bold text-gray-500'>Location</p>
          <div className='flex justify-center items-center gap-1 font-bold'>
            <FaLocationDot color='green' />
            <h1>Cafereria, LNMI</h1>
          </div>
        </div>
        <IoNotificationsCircleSharp fontSize='40' />
      </div>
      <div className=' mx-4 h-44 rounded-lg'>
        <Swiper
          // slidesPerView={6}
          spaceBetween={0}
          modules={[Navigation, Pagination]}
          className="mySwiper"
          pagination={true}
          loop={true}
          // navigation={{
          //   prevEl: '.prev_button',
          //   nextEl: '.next_button',
          // }}
          breakpoints={{
            300: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 1,
            },
            1280: {
              slidesPerView: 1,
            },
          }}
        >

          <SwiperSlide >
            <div className="h-44 w-full relative rounded-lg">
              <Image
                src={"/banner/bannerImg_2.jpg"}
                alt="Picture of the author"
                fill
                className="rounded-lg  object-cover"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide >
            <div className="h-44 w-full relative rounded-lg">
              <Image
                src={"/banner/bannerImg_3.jpg"}
                alt="Picture of the author"
                fill
                className="rounded-lg object-cover"
              />
            </div>
          </SwiperSlide>

        </Swiper>
      </div>


    </main>
  )
}
