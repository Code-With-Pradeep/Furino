import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import '../HomeSlider/HomeSlider.css'
import {Link} from 'react-router-dom'
import { MdKeyboardArrowLeft } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";

// import required modules
import { Navigation,Autoplay } from 'swiper/modules';

const HomeSlider = () => {
  

    const bsimg = [
        {
            id:1,
            imglink:"https://raw.githubusercontent.com/Code-With-Pradeep/myproject/main/Percentage/Image/bg-1.png",
            imagetag:'offer-1',
            tag:'New Arrival',
            title:'Discover Our New Collection',
            para:'Get exclusive offers on our latest arrivals. Upgrade your home with stylish, modern furniture at unbeatable prices!'

        },
        {
            id:2,
            imglink:"https://img.freepik.com/free-photo/white-sideboard-living-room-interior-with-copy-space_43614-800.jpg?w=1060&t=st=1720265728~exp=1720266328~hmac=900b47198afb1a338513d51a236f51633898ef15b8b94f3ec7979b8cdb2f6d52",
            tag: 'Summer Sale',
            title: 'Hot Deals for Your Home',
            para: 'Enjoy up to 50% off on selected items this summer. Don’t miss out on these limited-time deals!'
        }
    ]
  return (
    <div className='banner-slider'>
        <Swiper
        dir="rtl"
        pagination={false}
        loop={true}
        speed={500}
        modules={[Navigation, Autoplay]}
        autoplay={{ delay: 10000 }}
        navigation={{ nextEl: ".arrow-left", prevEl: ".arrow-right" }}
        className="mySwiper"
      >
        {bsimg && bsimg.length>0 ?
             bsimg.map(bsimgs =>
                <SwiperSlide key ={bsimgs.id}>
                <div className='item-box'  style={{width:"100%",backgroundImage:`url(${bsimgs.imglink})`, backgroundSize: 'cover', backgroundPosition: 'center'}} key={bsimgs.id}>
                    <div className="container">
                       <div className="outer-box">
                       <div className="banner-details">
                            <p className='banner-tag'>{bsimgs.tag}</p>
                            <h3 className='banner-title'>{bsimgs.title}</h3>
                            <p className='banner-para'>{bsimgs.para}</p>
                            <Link to="/buy" className='banner-btn'>Buy Now</Link>
                            <div className="outer-line"></div>
                        </div>
                       </div>
                    </div>
                </div>
                </SwiperSlide>
                )
             :<div>no data</div>}
      </Swiper>
      <button className="arrow-left arrow"><MdKeyboardArrowLeft /></button>
      <button className="arrow-right arrow"><MdKeyboardArrowRight /></button>
    </div>
  )
}

export default HomeSlider