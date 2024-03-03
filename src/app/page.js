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
import { addItemToCart, isAlreadyInCart, selectCartItems, decreaseItemQuantity, increaseItemQuantity, selectTotalUniqueProductsInCart } from './redux/cartSlice';
import { createSelector } from '@reduxjs/toolkit';
import { clearFilter, selectAvailabilityFilter, selectCategoryFilter, selectFilteredProducts, selectMinRatingFilter, selectPriceRangeFilter, selectSearchKeywordFilter, selectTrendingOnlyFilter, setCategory, setTrendingOnly } from './redux/filterSlice';
import ProductCard from '@/components/ProductCard';
import Link from 'next/link';



export default function Home() {

  const Products = useSelector(selectAllItems)
  console.log("🚀 ~ Home ~ Products:", Products)
  const Categories = useSelector(selectAllCategories)
  const selectedCategory = useSelector(selectCategoryFilter)
  console.log("🚀 ~ Home ~ selectedCategories:", selectedCategory)
  const Carts = useSelector(selectCartItems)
  const totalCartProducLength = useSelector(selectTotalUniqueProductsInCart)
  console.log("🚀 ~ Home ~ Carts:", Carts)
  console.log("🚀 ~ Home ~ Categories:", Categories)
  // console.log("🚀 ~ Home ~ Products:", Products)

  const dispatch = useDispatch()

  const filteredProducts = useSelector(selectFilteredProducts);
  console.log("🚀 ~ Home ~ filteredProducts:", filteredProducts)



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
    { label: "Trending", value: "trending" },
    { label: "All", value: "all" },
  ]

  const [activeTab, setActiveTab] = useState("trending")



  const handleTab = (tab) => {
    if (tab === "trending") {
      setActiveTab(tab)
      dispatch(setTrendingOnly(true))
    } else if (tab === "all") {
      dispatch(clearFilter())
    }
    setActiveTab(tab)
  }

  const handleCategory = (item) => {
    dispatch(setCategory(item))
  }
  const handleAddToCart = (item) => {
    if (selectedOption.price) {
      alert("Xcsd")
    }
    console.log("🚀 ~ handleAddToCart ~ selectedOption:", selectedOption)
    console.log("🚀 ~ handleAddToCart ~ item:", item)
    dispatch(addItemToCart(item))
  }

  const handleIncreaseQuantity = (item) => {
    dispatch(increaseItemQuantity(item));
  };

  const handleDecreaseQuantity = (item) => {
    dispatch(decreaseItemQuantity(item));
  };

  const defaultOption = { size: "Select size", price: "Select size" };

  const [selectedOption, setSelectedOption] = useState(defaultOption);
  const [selectedOptionArray, setSelectedOptionArray] = useState([]);
  console.log("🚀 ~ Home ~ selectedOptionArray:", selectedOptionArray)

  const checkAvailability = (item1, item2) => {
    console.log("🚀 ~ checkAvailability ~ item2:", item2)
    console.log("🚀 ~ checkAvailability ~ item1, item2:", item1, item2);
    // if (item1.id !== item2.id) {
    //   return false;
    // }

    // const priceKeys1 = Object.keys(item1.price);
    // console.log("🚀 ~ checkAvailability ~ priceKeys1:", priceKeys1);
    // const priceKeys2 = Object.keys(item2.price);
    // console.log("🚀 ~ checkAvailability ~ priceKeys2:", priceKeys2);


    // for (const priceKey of priceKeys2) {
    //   if (priceKeys1.includes(priceKey)) {
    //     return true;
    //   }
    // }
    // if (JSON.stringify(item1.price) === JSON.stringify(item2)) {
    //   console.log("The objects are the same.");
    //   return true;
    // } else {
    //   console.log("The objects are different.");
    //   return false;
    // }

    return item2.some(option => {
      const { id, ...price } = option;
      return id === item1.id && Object.entries(price).every(([size, value]) => item1.price[size] === value);
  });

  };

  const isAlreadyInCart = (item) => {
    console.log("🚀 ~ isAlreadyInCart ~ item:", item)
    // console.log(isNaN(selectedOption.price))

    console.log(selectedOption)
    const existingItemIndex = Carts.findIndex(cartI => {
      return cartI.id === item.id &&
        (cartI.price === item.price ||
          checkAvailability(cartI, selectedOptionArray));
    });
    console.log("🚀 ~ existingItemIndex ~ existingItemIndex:", existingItemIndex)
    console.log("🚀 ~ existingItemIndex ~ Carts:", Carts)

    if (existingItemIndex !== -1) {

      console.log(Carts[existingItemIndex])
      return { isAlreadyInCart: true, quantity: Carts[existingItemIndex].quantity }
    } else {
      return false
    }
  };

  console.log(selectedOption)

  // console.log("🚀 ~ Home ~ selectFilteredProducts:", selectFilteredProducts())
  const props = { selectedOptionArray, setSelectedOptionArray }
  return (
    <main>
      <div className='p-4 flex justify-between items-center font-sans'>
        <Image className="rounded-full" width={50} height={50} src={"/images/profile-picture-5.jpg"} alt="Rounded avatar" />
        <div className='flex flex-col justify-center items-center'>
          <p className='font-bold text-gray-500'>Location</p>
          <div className='flex justify-center items-center gap-1 font-bold'>
            <FaLocationDot color='green' />
            <h1 className='text-blue-800'>Cafereria, LNMI</h1>
          </div>
        </div>
        <div className='relative'>
          <Link href={"/cart"}><FaShoppingCart color='blue' fontSize='35' /></Link>

          {totalCartProducLength !== 0 ? <div className="badge absolute font-bold -top-2 -right-2 flex justify-center items-center rounded-full bg-blue-200 w-6 h-6">
            {totalCartProducLength}
          </div> : null}
        </div>
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
        <h1 className='font-bold text-xl mb-4 text-blue-800'>Categories</h1>

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

          {[...Array(Math.ceil(Categories.length / itemsPerSlide))].map((_, index) => (
            <SwiperSlide key={index}>
              <div className='flex gap-4'>
                {Categories.slice(index * itemsPerSlide, (index + 1) * itemsPerSlide).map((item, subIndex) => (
                  <div onClick={() => handleCategory(item)} key={item} className='h-20'>
                    <div className='relative h-[50px] w-[50px] lg:h-[80px] lg:w-[80px]'>
                      <Image className={`rounded-full ${item === selectedCategory ? "border-4 border-blue-800 p-1" : ""}`} fill src={"/images/profile-picture-5.jpg"} alt="Rounded avatar 2" />
                      {item !== selectedCategory && <div className="absolute rounded-full inset-0 bg-black opacity-50"></div>}
                      {/* <p className="absolute  text-white text-sm inset-0 flex items-center justify-center">{item}</p> */}


                    </div>
                    <div>
                      <p className=" z-20 text-center mt-1  text-blue-800 font-bold text-[10px] -bottom-8 flex items-center justify-center">{item}</p>

                    </div>
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
                  <div key={t.value} onClick={() => { handleTab(t.value) }} className={`tab cursor-pointer p-2 flex justify-center bg-blue-100 w-24 rounded-md ${activeTab == t.value && (!selectedCategory || t.value === "trending") ? activeTabClass : " "}`}>{t.label}</div>

                )
              })
            }
            {selectedCategory &&
              <div className=''>
                <div className='relative h-[40px] w-[100px] lg:h-[80px] lg:w-[80px]'>
                  <Image className="" fill src={"/images/profile-picture-5.jpg"} alt="Rounded avatar 2" />
                  <div className="absolute  inset-0 bg-black opacity-60"></div>
                  <p className="absolute  text-white text-sm inset-0 flex items-center justify-center">{selectedCategory}</p>


                </div>
                {/* <div>
                  <p className=" z-20 text-center mt-1  text-blue-800 font-bold text-[10px] -bottom-8 flex items-center justify-center">{selectedCategory}</p>

                </div> */}
              </div>

            }
          </div>

          {/* Will use Grid For responsiveness */}

          {filteredProducts.map((item) => {
            return (
              // <div key={item.id} className='flex  rounded-md border-blue-800 relative my-4 gap-4 border-[1.8px] shadow-md'>
              //   <div className='relative rounded-xl h-[100px] w-32'>
              //     <Image
              //       src={item.image}
              //       alt="Pic"
              //       style={{ objectFit: "cover", borderRadiusLeft: "6px" }}
              //       loading="lazy"
              //       fill={true}
              //     />
              //   </div>

              //   <div className='flex flex-col items-end w-full mr-2 py-2'>
              //     <h1 className='font-bold h-[50px] text-md'>{item.name}</h1>
              //     {isAlreadyInCart([item]).isInCart ? (
              //       <div className="flex items-center">
              //         <button onClick={() => handleDecreaseQuantity(item)} className='bg-blue-200 font-sm gap-1 flex justify-center items-center w-8 h-8 rounded-md'><FaMinus /></button>
              //         <span className="mx-2 text-blue-800 w-8 text-xl font-semibold h-8 items-center flex justify-center">{isAlreadyInCart([item]).quantity}</span>
              //         <button onClick={() => handleIncreaseQuantity(item)} className='bg-blue-200 font-sm gap-1 flex justify-center items-center w-8 h-8 rounded-md'><FaPlus /></button>
              //       </div>
              //     ) : (
              //       <button onClick={() => handleAddToCart(item)} className='bg-blue-200 font-sm gap-1 flex justify-center items-center w-24 py-1 rounded-md'> <FaCartPlus color='green' /> Add </button>
              //     )}
              //   </div>
              // </div>

              <ProductCard
                key={item.id}
                item={item}
                handleAddToCart={handleAddToCart}
                handleIncreaseQuantity={handleIncreaseQuantity}
                handleDecreaseQuantity={handleDecreaseQuantity}
                // isInCart={isAlreadyInCart(item)}
                selectedOption={selectedOption}
                setSelectedOption={setSelectedOption}
                {...props}
              />
            )
          })
          }

        </section>

      </section>

    </main>
  )
}
