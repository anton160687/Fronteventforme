import { Button, ButtonGroup, ToggleButton } from 'react-bootstrap';
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
import { FormEvent, useState } from 'react';
import Badge from 'react-bootstrap/Badge';
import DatePicker from 'react-datepicker';
import { addDays } from 'date-fns';
import 'react-datepicker/dist/react-datepicker.css';
import Form from 'react-bootstrap/Form';
import { Hall } from '@/types/catalog';

import Modal from 'react-bootstrap/Modal';
import CloseButton from 'react-bootstrap/CloseButton';
import { places } from '@/mocks/catalogitemsSlider';

export default function CatalogItemSlider(): JSX.Element {
  //отображение "Показать еще"
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);

  function detailsRender(description: string): JSX.Element {
    const new_description = description.slice(0, 100) + '...';
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

  //даты первого и последнего дня бронирования
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const onChange = (dates: any) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
  };

  const [isCalendarShown, setIsCalendarShown] = useState(false);
  //для отображения формы "рассчитать стоимость"
  const [isCalcShown, setIsCalcShown] = useState(false);
  const handleModalClose = () => setIsCalcShown(false);
  const handleModalShow = () => setIsCalcShown(true);

  // Form validation
  const [validated, setValidated] = useState(false);
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
    }
    setValidated(true);
  };

  return (
    <>
      {places.map((place: Hall, index) => (
        <section
          className={
            'card card-body h-100 border-0 shadow-sm card-hover ' +
            styles.catalog_item_slider
          }
          key={index}
        >
          <h4 className="h4 text-weight-bold">{place.title}</h4>
          <div className="d-flex mb-3" style={{ fontWeight: '500' }}>
            <button
              className={styles.calc_btn + ' btn btn-primary'}
              onClick={handleModalShow}
            >
              <i className="fi-calculator fs-lg me-1"></i>Рассчитать стоимость
            </button>
            {/* Property cost calculator modal */}
            <Modal centered show={isCalcShown} onHide={handleModalClose}>
              <Modal.Header className="d-block position-relative border-0 pb-0 px-sm-5 px-4">
                <Modal.Title as="h4" className="mt-4 text-center">
                  Рассчитать стоимость
                </Modal.Title>
                <CloseButton
                  onClick={handleModalClose}
                  aria-label="Закрыть окно"
                  className="position-absolute top-0 end-0 mt-3 me-3"
                />
              </Modal.Header>
              <Modal.Body className="px-sm-5 px-4">
                <Form noValidate validated={validated} onSubmit={handleSubmit}>
                  <Form.Group controlId="property-city" className="mb-3">
                    <Form.Label className="fw-bold mb-2">
                      Property location
                    </Form.Label>
                    <Form.Select required>
                      <option value="">Choose city</option>
                      <option value="Chicago">Chicago</option>
                      <option value="Dallas">Dallas</option>
                      <option value="Los Angeles">Los Angeles</option>
                      <option value="New York">New York</option>
                      <option value="San Diego">San Diego</option>
                    </Form.Select>
                    <Form.Control.Feedback type="invalid">
                      Please choose the city.
                    </Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Select required>
                      <option value="">Choose district</option>
                      <option value="Brooklyn">Brooklyn</option>
                      <option value="Manhattan">Manhattan</option>
                      <option value="Staten Island">Staten Island</option>
                      <option value="The Bronx">The Bronx</option>
                      <option value="Queens">Queens</option>
                    </Form.Select>
                    <Form.Control.Feedback type="invalid">
                      Please choose the district.
                    </Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group
                    controlId="property-address"
                    className="pt-2 mb-3"
                  >
                    <Form.Label className="fw-bold mb-2">Address</Form.Label>
                    <Form.Control placeholder="Enter your address" required />
                    <Form.Control.Feedback type="invalid">
                      Please provide your property&apos;s address.
                    </Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group controlId="property-area" className="pt-2 mb-4">
                    <Form.Label className="fw-bold mb-2">
                      Total area, sq.m.
                    </Form.Label>
                    <Form.Control
                      placeholder="Enter your property area"
                      required
                    />
                    <Form.Control.Feedback type="invalid">
                      Please enter your property&apos;s area.
                    </Form.Control.Feedback>
                  </Form.Group>
                  <Button type="submit" variant="primary d-block w-100 mb-4">
                    <i className="fi-calculator me-2"></i>
                    Рассчитать
                  </Button>
                </Form>
              </Modal.Body>
            </Modal>

            <div className={styles.calendar_wrapper}>
              <button
                onClick={() => setIsCalendarShown((prev) => !prev)}
                className={styles.busy_btn}
              >
                <i className="fi-calendar fs-lg me-1"></i>Проверить занятость
              </button>
              <div
                className={
                  isCalendarShown ? styles.calendar : styles.calendar_none
                }
              >
                <DatePicker
                  selected={startDate}
                  onChange={onChange}
                  minDate={new Date(Date.now())}
                  maxDate={new Date('02/29/2024')}
                  placeholderText="Select a date in Feb 2022"
                  className="rounded-1 pe-5"
                  endDate={endDate}
                  startDate={startDate}
                  // массив занятых дат, пока в качестве примера, будет приходить из бд
                  excludeDates={[
                    addDays(new Date(), 1),
                    addDays(new Date(), 5),
                    addDays(new Date(), 10),
                    addDays(new Date(), 11),
                    addDays(new Date(), 12),
                  ]}
                  selectsRange
                  inline
                />
              </div>
            </div>
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
                  setCurrentSlide(swiper.realIndex + 1 + 2);
                }}
                onInit={(swiper) => {
                  setCurrentSlide(swiper.realIndex + 1 + 2);
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

                {/* //! тут по ТЗ: при нажатии открывается карусель фото комнаты, но я пока сделала бэйдж до прояснения вопроса (дизайнер тоже бэйдж сделала) */}
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
