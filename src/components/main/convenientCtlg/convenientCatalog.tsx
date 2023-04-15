import { cards } from "@/mocks/cards";
import { FC } from "react";
import {Container, Row} from "react-bootstrap";
import ImageLoader from '../../_finder/ImageLoader';
import { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import Link from "next/link";

export const ConvenientCatalog:FC = () => {
const {cardsLinkArrey} = cards || {};

if (!cardsLinkArrey) {
  
}

  return(
  <section>
    <Container style={{marginTop: "124px"}}>
      <Row> 
        <Link href="#" className="icon-box card card-body border-0 card-hover col-xl-6">
          <div className="icon-box-media text-primary mb-3 me-auto">
            <i className="fi-makeup"></i>
          </div>
          <h3 className="icon-box-title fs-base mb-0">Свадебные платья</h3>
          <p>Платья от А до Я для каждой невесты</p>
        </Link>

        <figure className="card border-0 align-items-center col-xl-6">
          <figcaption className="card-body p-0" >
            <h2 className="card-title mb-3">Удобный каталог</h2>
            <p className="card-text mb-4">Более подробное описание категории: важные фильтры, советы и др. We have the most comprehensive directory of estate agents to help you with all your property needs. Whether buying, selling or renting start your search.</p>
          </figcaption>
          <Swiper
            modules={[Navigation, Pagination]}
            navigation
            pagination={{clickable: true}}
            spaceBetween={16}
            loop
            grabCursor
            className='swiper-nav-onhover swiper-pagination-light'
          >
            <SwiperSlide className='d-flex'>
              <ImageLoader src='/img/card/convenient-ctlg/shoreSea.png' width={636} height={462} alt='Image' />
            </SwiperSlide>
          </Swiper>
        </figure>
      </Row>
    </Container>
  </section>
)}