import { cards } from "@/mocks/cards";
import { FC } from "react";
import {Container, Row} from "react-bootstrap";
import ImageLoader from '../../_finder/ImageLoader';
import { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { CardConCat } from "./cardConCat";

export const ConvenientCatalog:FC = () => {
const {CardsConCat} = cards || {};

if (!CardsConCat) {
  
}

  return(
  <section>
    <Container style={{marginTop: "124px"}}>
      <Row> 
        <Row className="col-xl-6">
          {CardsConCat && CardsConCat.map(item =>
            ( <CardConCat
              key={item.id} 
              title={item.title} 
              description={item.description} 
              nameImg={item.nameImg}
              color={item.color}
              />          
            )
          )}
        </Row>
        
        <figure className="card border-0 align-items-center col-xl-6 ms-3">
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