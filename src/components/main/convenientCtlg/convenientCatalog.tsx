import Link from 'next/link';
import { Button, Col, Row } from 'react-bootstrap';
import ImageLoader from '../../_finder/ImageLoader';
import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import ConCatCard from './convenientCatalogCard';
import 'swiper/css/bundle';
import styles from './convenientCatalog.module.scss';
import { Paths } from '@/constant';

const cardsConCat = [
  {
    id: 1,
    title: 'Свадебные платья',
    description: 'Платья от А до Я для каждой невесты',
    nameImg: 'fi-makeup',
    color: 'primary',
    path: Paths.Catalog,
  },
  {
    id: 2,
    title: 'Название категории',
    description: 'Длинное описание услуги на несколько строчек',
    nameImg: 'fi-dots-horisontal',
    color: 'danger',
    path: Paths.Catalog,
  },
  {
    id: 3,
    title: 'Исполнители',
    description: 'Все нужные люди для свадьбы: ведущие, фотографы, хореографы',
    nameImg: 'fi-disco-ball',
    color: 'info',
    path: Paths.Catalog,
  },
  {
    id: 4,
    title: 'Название категории',
    description: 'Длинное описание услуги на несколько строчек',
    nameImg: 'fi-calculator',
    color: 'accent',
    path: Paths.Catalog,
  },
  {
    id: 5,
    title: 'Площадки',
    description: 'Локации на любой вкус: на природе, вершине небоскреба и другие',
    nameImg: 'fi-shopping-bag',
    color: 'success',
    path: Paths.Places,
  },
  {
    id: 6,
    title: 'Название категории',
    description: 'Длинное описание услуги на несколько строчек',
    nameImg: 'fi-pie-chart',
    color: 'warning',
    path: Paths.Catalog,
  },
]
const slides = [
  {
    id: 1,
    title: 'Photo',
    pathImg: '/img/card/convenient-ctlg/shoreSea.png',
  },
  {
    id: 2,
    title: 'Photo',
    pathImg: '/img/card/convenient-ctlg/marriageProposal.png',
  },
  { id: 3, title: 'Photo', pathImg: '/img/card/convenient-ctlg/house.png' },
]

function ConvenientCatalog() {
  function renderCards() {
    return cardsConCat.map((card) => (
      <ConCatCard key={card.id} card={card}/>
    ))
  }

  return (
    <section className={styles.top}>
      <Row>
        <Col className={`${styles.concat__links} col-6`}>
          {renderCards()}
        </Col>

        <Col className='col-6'>
          <h2>Удобный каталог</h2>
          <p className="mt-3 mb-5">
            Более подробное описание категории: важные фильтры, советы и др.
            We have the most comprehensive directory of estate agents to
            help you with all your property needs. Whether buying, selling
            or renting start your search.
          </p>

          <Swiper
            modules={[Pagination]}
            spaceBetween={16}
            pagination={{
              el: '#bullets',
              clickable: true,
            }}
            grabCursor
          >
            {slides &&
              slides.map((slide) => (
                <SwiperSlide key={slide.id}>
                  <ImageLoader
                    src={slide.pathImg}
                    width={636}
                    height={462}
                    alt={slide.title}
                    className="rounded-3"
                  />
                </SwiperSlide>
              ))}
          </Swiper>
          <div
            id="bullets"
            className="swiper-pagination position-relative bottom-0 pt-2 pb-2 mt-4 mb-4"
          ></div>

          <div className='d-flex'>
            <Button
              // @ts-ignore: bootstrap bag*
              as={Link}
              href="/catalog"
              variant="primary"
              className="text-decoration-none col-xl-3 col-sm-4 me-5"
              size="lg"
            >
              Попробовать
            </Button>
            <Button
              // @ts-ignore: bootstrap bag*
              as={Link}
              href="/catalog"
              variant="outline-primary"
              className="text-decoration-none col-xl-3 col-sm-4"
              size="lg"
            >
              Подробнее
            </Button>
          </div>

        </Col>

      </Row>
    </section>
  );
};

export default ConvenientCatalog;