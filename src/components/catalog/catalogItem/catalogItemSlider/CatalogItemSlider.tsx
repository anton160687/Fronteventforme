import { Button } from 'react-bootstrap';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper';
import styles from '@/styles/catalog/places/Places.module.scss';
import GalleryItem from '@/components/_finder/GalleryItem';
import LightGallery from 'lightgallery/react';
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';
import lgFullScreen from 'lightgallery/plugins/fullscreen';
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-thumbnail.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-fullscreen.css';
import 'lightgallery/css/lg-video.css';
import { useState } from 'react';
import Badge from 'react-bootstrap/Badge';

import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Form from 'react-bootstrap/Form';
import { Hall } from '@/types/catalog';

const places: Hall[] = [
  {
    imgSrc: [
      'https://picsum.photos/369/224',
      'https://picsum.photos/350/200',
      'https://picsum.photos/150/400',
      'https://picsum.photos/500/250',
      'https://picsum.photos/700/400',
    ],
    title: 'Berlin Business Hotel',
    price: 'Аренда 10 000 ₽ + от 4 000 ₽/чел',
    description:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt temporibus non, magnam praesentium eum assumenda ad ex doloremque, harum, vero eveniet numquam voluptatibus. Ipsa, enim ipsum provident iure veritatis laudantium totam eum eligendi laboriosam! Dolorem quam necessitatibus, unde laudantium ut, est, assumenda quasi expedita iure maiores deleniti repellendus? Earum sequi non rerum incidunt nostrum, architecto, autem doloribus assumenda quibusdam debitis ea corporis sint dolores nihil tenetur vitae odio necessitatibus reiciendis corrupti exercitationem. Tempora, ullam eius odio dolore, neque nesciunt nihil corrupti, excepturi ex sequi cumque culpa nisi in laborum sapiente minus distinctio ducimus necessitatibus quas quis ipsum. Hic culpa iusto ducimus, ipsum labore libero. Veniam eos quasi adipisci officia assumenda, vel qui voluptatibus atque odit deleniti iusto! Quasi aliquid animi laborum repellat illo quod temporibus, sunt atque at fugiat officiis delectus doloremque id consequatur qui impedit ipsa cumque earum consequuntur vitae exercitationem. Consectetur tenetur quasi beatae dignissimos porro explicabo dolorum aperiam, modi maiores molestiae corrupti maxime nobis architecto, ipsam necessitatibus, dolores hic. Excepturi, placeat. Hic ipsa nam molestiae nihil ullam nemo harum modi excepturi ad ex! Modi vitae hic ut ab corrupti sequi laboriosam officiis ex! Officia ex error, illo eum quisquam deleniti dignissimos quae molestiae in assumenda incidunt, veniam molestias voluptatum odit doloribus voluptatem numquam officiis dicta, soluta tenetur blanditiis voluptas vero repellat adipisci. Dolore ea dolor modi, vitae aperiam in consequuntur dicta eaque, amet iusto nisi voluptatum esse odit excepturi non laborum libero earum sed pariatur nobis, quia enim? Facilis odio expedita autem omnis unde aliquam iusto in.',
    capacity: '30-80 человек',
    payment: 'За аренду зала + еда и напитки',
    lightHall: true ? 'Да' : 'Нет',
    type: 'Помещение',
    addEntrance: true ? 'Да' : 'Нет',
    withoutFood: true ? 'Да' : 'Нет',
    minBanketPrice: 100000,
    sale: {
      btn: 'Номер для молодоженов',
      condition: 'При аренде панорамного шатра',
    },
  },
];

export default function CatalogItemSlider(): JSX.Element {
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);

  function detailsRender(description: string): JSX.Element {
    const new_description = description.slice(0, 100);
    const rest = description.slice(100);
    return (
      <>
        <p style={isDetailsOpen ? { display: 'none' } : {}}>
          {new_description}
        </p>
        <p style={!isDetailsOpen ? { display: 'none' } : {}}>{description}</p>
        <p
          onClick={() => setIsDetailsOpen((prev) => !prev)}
          className={'mb-0 text-primary cursor-pointer ' + styles.summary}
        >
          {isDetailsOpen ? 'Свернуть' : 'Показать еще'}
        </p>
      </>
    );
  }

  //для отображения кол-ва фото и на какой фото находится пользователь
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
  const [startDate, setStartDate] = useState(null);

  return (
    <>
      {places.map((place: Hall, index) => (
        <section
          className={
            'card card-body h-100 border-0 shadow-sm card-hover' +
            styles.catalog_item_slider
          }
          key={index}
        >
          <h4 className="h4 text-weight-bold">{place.title}</h4>

          <div className="d-flex" style={{ fontWeight: '500' }}>
            <button>
              <i className="fi-calculator fs-lg me-1"></i>Рассчитать стоимость
            </button>
            <Form.Group controlId="date-min-max-input">
              <Form.Label>
                <i className="fi-calendar fs-lg me-1"></i>Проверить занятость
              </Form.Label>
              <Form.Control
                style={{ display: 'none' }}
                as={DatePicker}
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                minDate={new Date('02/01/2022')}
                maxDate={new Date('02/29/2022')}
                placeholderText="Select a date in Feb 2022"
                className="rounded pe-5"
              />
            </Form.Group>
            {/* <button>
              <i className="fi-calendar fs-lg me-1"></i>Проверить занятость
            </button> */}
          </div>
          <LightGallery
            selector=".gallery-item"
            licenseKey="D4194FDD-48924833-A54AECA3-D6F8E646"
            plugins={[lgThumbnail, lgZoom, lgFullScreen]}
            zoomFromOrigin={true}
            exThumbImage="data-external-thumb-image"
          >
            <div className="position-relative">
              <Swiper
                modules={[Navigation]}
                navigation={{
                  prevEl: '#prev',
                  nextEl: '#next',
                }}
                spaceBetween={12}
                breakpoints={{
                  0: { slidesPerView: 1 },
                  500: { slidesPerView: 2 },
                  850: { slidesPerView: 3 },
                }}
                data-carousel-options='{"loop": true}'
                onSlideChange={(swiper) => {
                  setCurrentSlide(swiper.realIndex + 1);
                }}
                onInit={(swiper) => {
                  setCurrentSlide(swiper.realIndex + 1);
                  setTotalSlides(swiper.slides.length);
                }}
              >
                {place.imgSrc.map((img, indx) => (
                  <SwiperSlide key={indx}>
                    <GalleryItem
                      href={img}
                      thumb={[img, 313, 230]}
                      data-external-thumb-image={img}
                      imgAlt={place.title}
                      className={`${indx === 0 ? styles.rounded_left : ''}${
                        indx === place.imgSrc.length - 1
                          ? styles.rounded_right
                          : ''
                      }  `}
                      light={false}
                      caption=""
                      video={false}
                    />
                  </SwiperSlide>
                ))}
                <SlidesCount />
              </Swiper>

              {/* External Prev/Next buttons */}
              <Button
                id="prev"
                variant="prev"
                className="d-none d-sm-block ms-4"
              />
              <Button
                id="next"
                variant="next"
                className="d-none d-sm-block me-4"
              />
            </div>
          </LightGallery>

          <div className={styles.slider_text_wrapper}>
            <div className="d-flex">
              <div className={styles.left_block}>
                <div className={styles.slider_text}>
                  <p>Вместимость</p>
                  <p className={styles.slider_text_data}>{place.capacity}</p>
                </div>
                <div className={styles.slider_text}>
                  <p>Схема оплаты</p>
                  <p className={styles.slider_text_data}>{place.payment}</p>
                </div>
                <div className={styles.slider_text}>
                  <p>Стоимость</p>
                  <p className={styles.slider_text_data}>{place.price}</p>
                </div>
                <div className={styles.slider_text}>
                  <p>Светлый зал</p>
                  <p className={styles.slider_text_data}>{place.lightHall}</p>
                </div>
              </div>
              <div className={styles.right_block}>
                <div className={styles.slider_text}>
                  <p>Тип</p>
                  <p className={styles.slider_text_data}>{place.type}</p>
                </div>
                <div className={styles.slider_text}>
                  <p>Отдельный вход</p>
                  <p className={styles.slider_text_data}>{place.addEntrance}</p>
                </div>
                <div className={styles.slider_text}>
                  <p>Минимальная стоимость банкета</p>
                  <p className={styles.slider_text_data}>
                    {place.minBanketPrice} ₽
                  </p>
                </div>
                <div className={styles.slider_text}>
                  <p>Возможна аренда без еды</p>
                  <p className={styles.slider_text_data}>{place.withoutFood}</p>
                </div>
              </div>
            </div>

            <div className={styles.slider_text_bottom}>
              <div className={styles.slider_details}>
                <h4 className="h4">Детали</h4>
                {detailsRender(place.description)}
              </div>
              <div className={styles.sale}>
                <p style={{ fontWeight: '500' }}>{place.sale.condition}</p>
                <Badge className={styles.badge}>
                  <i className="fi-gift fs-lg me-1"></i>
                  {place.sale.btn}
                </Badge>
              </div>
            </div>
          </div>
        </section>
      ))}
    </>
  );
}
