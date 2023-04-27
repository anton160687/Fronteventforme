import { Button, Container } from 'react-bootstrap';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper';
import ImageLoader from '@/components/_finder/ImageLoader';
import Link from 'next/link';

const places = [
  // {
  //   href: '/city-guide/single',
  //   imgSrc: '/img/locations/1.png',
  //   title: 'Berlin Business Hotel',
  //   rating: [5.0, 48],
  //   price: '$$',
  //   location: '1.4 km from center',
  // },
  // {
  //   href: '/city-guide/single',
  //   imgSrc: '/img/locations/1.png',
  //   title: 'Berlin Business Hotel',
  //   rating: [5.0, 48],
  //   price: '$$',
  //   location: '1.4 km from center',
  // },
  {
    href: '/city-guide/single',
    imgSrc: '/img/locations/1.png',
    title: 'Berlin Business Hotel',
    rating: [5.0, 48],
    price: '$$',
    location: '1.4 km from center',
  },
  {
    href: '/city-guide/single',
    imgSrc: '/img/locations/1.png',
    title: 'Big Tree Cottage',
    rating: [4.8, 24],
    price: '$$$',
    location: '0.5 km from center',
  },
  {
    href: '/city-guide/single',
    imgSrc: '/img/locations/1.png',
    title: 'Grand Resort & Spa',
    rating: [4.9, 43],
    price: '$$$',
    location: '1.8 km from center',
  },
  {
    href: '/city-guide/single',
    imgSrc: '/img/locations/1.png',
    title: 'Merry Berry Motel',
    rating: [4.5, 12],
    price: '$$',
    location: '0.4 km from center',
  },
];

export default function CatalogItemSlider(): JSX.Element {
  return (
    <div className="position-relative">
      <Swiper
        modules={[Navigation]}
        navigation={{
          prevEl: '#prev',
          nextEl: '#next',
        }}
        spaceBetween={24}
        // breakpoints={{
        //   0: { slidesPerView: 1 },
        //   500: { slidesPerView: 2 },
        //   850: { slidesPerView: 3 },
        // }}
        breakpoints={{
          0: { slidesPerView: 1 },
          420: { slidesPerView: 1 },
          700: { slidesPerView: 2 },
          850: { slidesPerView: 3 },
          1300: { slidesPerView: 4 },
        }}
        data-carousel-options='{"loop": true}'
        className="mx-n2"
      >
        {places.map((place, index) => (
          <SwiperSlide key={index}>
            <Link href={place.href} className="position-relative">
              <div className="rounded-3">
                <div className="d-inline-block mx-2">
                  <ImageLoader
                    src={place.imgSrc}
                    width={313}
                    height={230}
                    alt={place.title}
                  />
                </div>
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* External Prev/Next buttons */}
      <Button
        id="prev"
        variant="prev"
        className="d-none  d-sm-block mt-n5 ms-n5"
      />
      <Button
        id="next"
        variant="next"
        className="d-none d-sm-block mt-n5 me-n5"
      />
    </div>
  );
}
