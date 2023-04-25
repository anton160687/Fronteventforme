import { FC, useState } from "react";
import { providerCards } from "@/types/cardsType";
import ImageLoader from "@/components/_finder/ImageLoader";
import { Navigation} from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/bundle'
import Link from "next/link";


export const ProviderCardSpecialBlock:FC<providerCards> = ({id, title, description, pathImg}) => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [totalSlides, setTotalSlides] = useState(0)

  const SlidesCount = () => (
    <div className='swiper-slides-count text-dark bg-light rounded-2 p-1'>
      <i className='fi-image fs-lg me-2'></i>
      <div className='fs-6 fw-bold ps-1 me-2'>
        <span>{currentSlide}</span>
        <span>/</span>
        <span>{totalSlides}</span>
        <span className='mx-2'>|</span>
        <Link href='#' className='text-decoration-none text-dark'>Все фото</Link>
      </div>
    </div>
  )

  if (id % 2 == 0) {
    return(    
      <figure className='d-flex justify-content-between mb-xl-4 mb-md-3 mb-sm-2 card-hover'>
        <Swiper
          modules={[Navigation]}
          onSlideChange={(swiper) => {
            setCurrentSlide(swiper.realIndex + 1)
          }}
          onInit={(swiper) => {
            setCurrentSlide(swiper.realIndex + 1)
            setTotalSlides(swiper.slides.length - 2)
          }}
          navigation
          spaceBetween={12}
          loop
          grabCursor
          className='swiper-nav-onhover rounded-3 m-0'
          style={{maxWidth: '26rem'}}
        >
          {pathImg && pathImg.map((path, index)=>
            (<SwiperSlide key={index}>
              <ImageLoader 
                src={path} 
                quality={100} 
                width={416} 
                height={280} 
                objectFit='cover' 
                alt='Image' 
                className='rounded-3' />
            </SwiperSlide>)
          )}
          <SlidesCount />
        </Swiper>
        <figcaption className='py-0 px-3 rounded-5'>
          <h5>{title}</h5>
          {description && description.map((text, index)=>(
            <p key={index} className='fs-sm'>{text}</p>
          ))}
        </figcaption>
    </figure>
  )
}

  return(    
  <figure className='d-flex justify-content-between mb-xl-4 mb-md-3 mb-sm-2 card-hover'>
    <figcaption className='py-0 px-3 rounded-5'>
      <h5>{title}</h5>
      {description && description.map((text, index)=>(
        <p key={index} className='fs-sm'>{text}</p>
      ))}
    </figcaption>

    <Swiper
      modules={[Navigation]}
      onSlideChange={(swiper) => {
        setCurrentSlide(swiper.realIndex + 1)
      }}
      onInit={(swiper) => {
        setCurrentSlide(swiper.realIndex + 1)
        setTotalSlides(swiper.slides.length - 2)
      }}
      navigation
      spaceBetween={12}
      loop
      grabCursor
      className='swiper-nav-onhover rounded-3 m-0'
      style={{maxWidth: '26rem'}}
    >
      {pathImg && pathImg.map((path, index)=>
        (<SwiperSlide key={index}>
          <ImageLoader 
            src={path} 
            quality={100} 
            width={416} 
            height={280} 
            objectFit='cover' 
            alt='Image' 
            className='rounded-3' />
        </SwiperSlide>)
      )}
      <SlidesCount />
    </Swiper>
  </figure>    
)
}
