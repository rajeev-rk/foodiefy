"use client"
import Image from 'next/image'
import { selectAllCategories, selectAllItems, selectAllUniqueCategories } from './redux/productsSlice'
import { useDispatch, useSelector } from 'react-redux'
// import profileImg from '../public/images/profile-picture-5.jpg'
import { FaLocationDot } from "react-icons/fa6";
import { IoNotificationsCircleSharp } from "react-icons/io5";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
// import { Navigation } from "swiper";
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css/navigation';
import { FaCartPlus, FaPlus, FaMinus } from "react-icons/fa";
import { useState } from 'react';
import { FaShoppingCart } from "react-icons/fa";
import { addItemToCart, isAlreadyInCart, selectCartItems, decreaseItemQuantity, increaseItemQuantity } from './redux/cartSlice';



export default function Home() {

  const Products = useSelector(selectAllItems)
  console.log("🚀 ~ Home ~ Products:", Products)
  const Categories = useSelector(selectAllCategories)
  const Carts = useSelector(selectCartItems)
  console.log("🚀 ~ Home ~ Carts:", Carts)
  console.log("🚀 ~ Home ~ Categories:", Categories)
  // console.log("🚀 ~ Home ~ Products:", Products)

  const dispatch = useDispatch()

  const isAlreadyInCart = (items) => {
    const existingItem = Carts.find(cartItem => items.some(item => item.id === cartItem.id));
    const isInCart = !!existingItem;

    return {
      isInCart,
      quantity: existingItem ? existingItem.quantity : 0
    };
  };

  const items = [
    { name: "Burger" },
    { name: "Pizza" },
    { name: "Sandwiches" },
    { name: "Pasta" },
    { name: "Chinese" },
    { name: "Shakes" },
    { name: "Bread" },
    { name: "Snakes" },
    { name: "Momos" },
  ];

  const itemsPerSlide = 5;


  const activeTabClass = ` border-b-4 border-blue-700 `

  const Tabs = [
    { label: "All", value: "all" },
    { label: "Trending", value: "trending" }
  ]

  const [activeTab, setActiveTab] = useState("all")

  const handleTab = (tab) => {
    setActiveTab(tab)
  }
  const handleAddToCart = (item) => {
    console.log("🚀 ~ handleAddToCart ~ item:", item)
    dispatch(addItemToCart(item))
  }

  const handleIncreaseQuantity = (item) => {
    console.log("🚀 ~ handleIncreaseQuantity ~ item:", item)
    dispatch(increaseItemQuantity(item));
  };

  const handleDecreaseQuantity = (item) => {
    console.log("🚀 ~ handleDecreaseQuantity ~ item:", item)
    dispatch(decreaseItemQuantity(item));
  };
  const handleisAlreadyInCart = (item) => {
    console.log("🚀 ~ handleisAlreadyInCart ~ item:", item)
    isAlreadyInCart(item)
    // dispatch(isAlreadyInCart(item));
  };


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
        <FaShoppingCart color='green' fontSize='35' />
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
      <section className='categories p-4'>
        <h1 className='font-bold text-xl mb-4'>Categories</h1>

        <Swiper
          // slidesPerView={6}
          spaceBetween={0}
          modules={[Navigation]}
          className="mySwiper"
          pagination={true}
          loop={true}
          navigation={{
            prevEl: '.prev_button',
            nextEl: '.next_button',
          }}
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

          {[...Array(Math.ceil(items.length / itemsPerSlide))].map((_, index) => (
            <SwiperSlide key={index}>
              <div className='flex gap-4'>
                {items.slice(index * itemsPerSlide, (index + 1) * itemsPerSlide).map((item, subIndex) => (
                  <div key={subIndex} className='relative h-[50px] w-[50px] lg:h-[80px] lg:w-[80px]'>
                    <Image className="rounded-full" fill src={"/images/profile-picture-5.jpg"} alt="Rounded avatar 2" />
                    <div className="absolute rounded-full inset-0 bg-black opacity-50"></div>
                    <p className="absolute  text-white text-sm inset-0 flex items-center justify-center">{item.name}</p>
                  </div>
                ))}
              </div>
            </SwiperSlide>
          ))}


        </Swiper>

        <section className='categories my-8'>
          {/* <h1 className='font-bold text-xl mb-4'>All</h1> */}

          {/* TABS */}

          <div className='flex gap-4'>
            {
              Tabs.map((t) => {
                return (
                  <div key={t.value} onClick={() => { handleTab(t.value) }} className={`tab1 p-2 flex justify-center bg-blue-100 w-24 rounded-md ${activeTab == t.value ? activeTabClass : " "}`}>{t.label}</div>

                )
              })
            }
            {/* <div className="tab2  p-2 flex justify-center bg-blue-100  w-24  rounded-md">All</div> */}
          </div>

          {/* Will use Grid For responsiveness */}

          {Products.map((item) => {
            return (
              <div key={item.id} className='flex h-[94px] rounded-md border-black relative my-4 gap-4 border-[1.8px] shadow-md'>
                <div className=''>
                  <Image
                    src={item.image}
                    alt="Picture of the author"
                    width={150}
                    height={40}
                    className="rounded-sm object-cover"
                  />
                </div>
                <div className='flex flex-col items-end w-1/2 mr-2 py-2'>
                  <h1 className='font-bold h-[50px] text-md'>{item.name}</h1>
                  {isAlreadyInCart([item]).isInCart ? (
                    <div className="flex items-center">
                      <button onClick={() => handleDecreaseQuantity(item)} className='bg-blue-200 font-sm gap-1 flex justify-center items-center w-8 h-8 rounded-md'><FaMinus /></button>
                      <span className="mx-2 w-8 text-xl font-semibold h-8 items-center flex justify-center">{isAlreadyInCart([item]).quantity}</span>
                      <button onClick={() => handleIncreaseQuantity(item)} className='bg-blue-200 font-sm gap-1 flex justify-center items-center w-8 h-8 rounded-md'><FaPlus /></button>
                    </div>
                  ) : (
                    <button onClick={() => handleAddToCart(item)} className='bg-blue-200 font-sm gap-1 flex justify-center items-center w-24 py-1 rounded-md'> <FaCartPlus color='green' /> Add </button>
                  )}
                </div>
              </div>
            )
          })
          }

        </section>

      </section>

    </main>
  )
}
