import PropertyCard from '@/components/_finder/PropertyCard';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import { Navigation } from 'swiper';
import { Hall, Place } from '@/types/catalog';
import { Button } from 'react-bootstrap';
import Link from 'next/link';
import ImageLoader from '@/components/_finder/ImageLoader';
import { selectPlaces } from '@/store/catalog/catalogSlice';
import { useSelector } from 'react-redux';

export function SimilarItemsSlider() {
  const places = useSelector(selectPlaces);
  console.log('places', places);

  return (
    <>
      <div className="d-flex align-items-center justify-content-between mb-3">
        <h2 className="h3 mb-0">Top offers</h2>
        <Link href="/catalog" className="link fw-normal ms-sm-3 p-0">
          Вернуться в каталог
          <i className="fi-arrow-long-right ms-2"></i>
        </Link>
      </div>
      {/* Swiper slider */}
      <div className="position-relative">
        <Swiper
          modules={[Navigation]}
          navigation={{
            prevEl: '#prevProperties',
            nextEl: '#nextProperties',
          }}
          autoHeight
          slidesPerView={1}
          data-carousel-options='{"loop": true}'
          spaceBetween={8}
          breakpoints={{
            0: { slidesPerView: 1 },
            500: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            992: { slidesPerView: 4 },
          }}
          className="pt-3 pb-4 mx-n2"
        >
          {places.map((place, indx: number) => (
            <SwiperSlide key={indx} className="h-auto">
              <PropertyCard
                // href={item.href}
                href="#"
                images={place.image_vendor}
                title={place.title}
                price={place.min_price}
                wishlistButton=""
                location=""
                badges=""
                category=""
                footer=""
                dropdown={false}
                horizontal={true}
                light={false}
                className="h-100 mx-2"
                width={416}
                height={231}
              />
              {/* <ImageLoader src={place?.image_vendor} width={416} height={231} /> */}
            </SwiperSlide>
          ))}
        </Swiper>

        {/* External Prev/Next buttons */}
        <Button
          id="prevProperties"
          variant="prev"
          className="d-none d-xxl-block mt-n5 ms-n5"
        />
        <Button
          id="nextProperties"
          variant="next"
          className="d-none d-xxl-block mt-n5 me-n5"
        />
      </div>
    </>
  );
}
