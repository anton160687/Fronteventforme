import { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/bundle';
import Button from 'react-bootstrap/Button';
import Image from "next/image";
import Link from "next/link";
import { cards } from "@/mocks/cards";
import styles from "@/styles/catalog/places/Places.module.scss";


function TypeAreaSlider () {
  const {iconSlides} = cards || {};

  return(
  <div className='position-relative px-3'>
    <Swiper
      modules={[Navigation, Pagination]}
      slidesPerView={10}
      navigation={{
        prevEl: '#prev',
        nextEl: '#next'
      }}
      grabCursor
      spaceBetween={16}
    >
      {iconSlides && iconSlides.map(({icon, src, text}, index)=> {
        
        const iconEl = icon ? 
          <i className={icon}></i> :
          <Image src={src || ''} alt='photo' width={20} height={20}/>

        return(
        <SwiperSlide key={index} className='p-2'>
          <Link href="#" className={`${styles.icon} icon-box card card-hover text-center border-0 p-2`}>
            <div className='icon-box-media mx-auto fs-5'>
              {iconEl}
            </div>
            <p className="fs-sm my-1">{text}</p>
          </Link>          
        </SwiperSlide>
      )})}      
    </Swiper>
    <Button id='prev' variant='prev' />
    <Button id='next' variant='next' />
  </div>
)}

export default TypeAreaSlider;