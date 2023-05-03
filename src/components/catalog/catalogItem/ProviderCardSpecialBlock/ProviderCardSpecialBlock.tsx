import { FC, useState } from "react";
import {Card } from 'react-bootstrap/';
import { Navigation} from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { providerCards } from "@/types/cardsType";
import ImageLoader from "@/components/_finder/ImageLoader";
import styles from "@/styles/catalog/places/Places.module.scss";
import 'swiper/css/bundle';


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
      </div>
    </div>
  )

  if (id % 2 == 0) {
    return(    
      <figure className={styles.text_territory}>
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
          className='swiper-nav-onhover m-0 card-img-top'
          style={{maxWidth: '26rem'}}
        >
          {pathImg && pathImg.map((path, index)=>
            (<SwiperSlide key={index}>
              <ImageLoader 
                src={path} 
                quality={100} 
                layout='fill'
                // objectFit='cover'
                alt='Image'
                className={styles.photo_spec_block_left}
                />
            </SwiperSlide>)
          )}
          <SlidesCount />
        </Swiper>
        <figcaption className='py-0 px-3'>
          <Card.Title as='h4' className='mb-3'>{title}</Card.Title>
          {description && description.map((text, index)=>(
            <Card.Text key={index} className='mb-3'>{text}</Card.Text>
          ))}
        </figcaption>
    </figure>
  )
}

  return(    
  <figure id="territory" className={styles.text_territory}>
    <figcaption className='py-0 px-3'>
      <Card.Title as='h4' className='mb-3'>{title}</Card.Title>
      {description && description.map((text, index)=>(
        <Card.Text key={index} className='mb-3'>{text}</Card.Text>
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
      className='swiper-nav-onhover m-0 card-img-bottom'
      style={{maxWidth: '26rem'}}
    >
      {pathImg && pathImg.map((path, index)=>
        (<SwiperSlide key={index}>
          <ImageLoader 
            src={path} 
            quality={100} 
            layout='fill'
            alt='Image' 
            className={styles.photo_spec_block}
          />
        </SwiperSlide>)
      )}
      <SlidesCount />
    </Swiper>
  </figure>    
)
}
