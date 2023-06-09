import React, { useState } from 'react';
import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import GalleryItem from '@/components/_finder/GalleryItem';
import LightGallery from 'lightgallery/react';
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';
import lgFullScreen from 'lightgallery/plugins/fullscreen';
import ImageLoader from '@/components/_finder/ImageLoader';
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-thumbnail.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-fullscreen.css';
import 'swiper/css/bundle';
import styles from '@/styles/catalog/places/Places.module.scss';

type AlbumCardProps = {
  id: number;
  title: string;
  description: string;
  images: string[];
};

function AlbumCard({ id, title, description, images }: AlbumCardProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [totalSlides, setTotalSlides] = useState(0);

  const SlidesCount = () => (
    <div className="swiper-slides-count text-dark bg-light rounded-2 p-1">
      <i className="fi-image fs-lg me-2"></i>
      <div className="fs-6 fw-bold ps-1 me-2">
        <span>{currentSlide}</span>
        <span>/</span>
        <span>{totalSlides}</span>
      </div>
    </div>
  );

  return (
    <>
      {(description || images?.length > 0) && (
        <figure
          className={
            id % 2 === 0 ? styles.text_territory_reverse : styles.text_territory
          }
        >
          <figcaption>
            <h4 className="mb-3">{title}</h4>
            <p className="mb-2">{description}</p>
          </figcaption>

          <div className="w-md-50 w-75">
            {images?.length > 1 ? (
              <LightGallery
                plugins={[lgThumbnail, lgZoom, lgFullScreen]}
                selector=".gallery-item"
                zoomFromOrigin={false}
                exThumbImage="data-external-thumb-image"
              >
                <Swiper
                  modules={[Navigation]}
                  onSlideChange={(swiper) => {
                    setCurrentSlide(swiper.realIndex + 1);
                  }}
                  onInit={(swiper) => {
                    setCurrentSlide(swiper.realIndex + 1);
                    setTotalSlides(swiper.slides.length - 2);
                  }}
                  navigation
                  spaceBetween={12}
                  loop
                  grabCursor
                  className="swiper-nav-onhover m-0"
                >
                  {images.map((img, index) => (
                    <>
                      <SwiperSlide key={index + (id % 2)}>
                        <GalleryItem
                          href={img}
                          thumb={[img, 500, 270]}
                          data-external-thumb-image={img}
                          imgAlt={title}
                          quality={100}
                          className={
                            id % 2 === 0
                              ? styles.rounded_left
                              : styles.rounded_right
                          }
                          light="false"
                          caption=""
                          video={false}
                        />
                      </SwiperSlide>
                      <SlidesCount />
                    </>
                  ))}
                </Swiper>
              </LightGallery>
            ) : (
              <ImageLoader
                src={images?.length === 1 ? images[0] : '/img/emptyPhoto.png'}
                height={270}
                width={500}
                imgalt={images?.length === 1 ? title : 'No image'}
                quality={100}
                className={
                  id % 2 === 0 ? styles.rounded_left : styles.rounded_right
                }
                light="false"
                caption=""
                video={false}
              />
            )}
          </div>
        </figure>
      )}
    </>
  );
}

export default AlbumCard;
