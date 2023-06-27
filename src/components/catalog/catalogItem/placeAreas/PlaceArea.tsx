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
import React, { useEffect, useState } from 'react';
import Badge from 'react-bootstrap/Badge';
import DatePicker from 'react-datepicker';

import 'react-datepicker/dist/react-datepicker.css';
import { AreaReceived } from '@/types/areaType';
import { COLOR_HALL, SCHEME_OF_PAYMENT, TYPE_AREA } from '@/constant';
import { SlidesCount, capitalize, showMoreRender } from '@/components/helpers';
import CalculateCost from './CalculateCost';

type PlaceAreaProps = {
  area: AreaReceived;
  average_check: number;
};

function PlaceArea({ area, average_check }: PlaceAreaProps): JSX.Element {
  //отображение "Показать еще"
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);
  //показать календарь
  const [isCalendarShown, setIsCalendarShown] = useState(false);

  //для отображения кол-ва фото и на какой фото находится пользователь
  const [currentSlide, setCurrentSlide] = useState(0);
  const [totalSlides, setTotalSlides] = useState(0);

  //для красивого вывода данных из дропдаунов формы добавления
  const findTitle = (dictionary: string[][], value: string): string => {
    const title = dictionary.find((item: string[]) => item[0] === value);

    if (title === undefined) return 'Не указано';

    return title[1];
  };

  const typeArea = TYPE_AREA.find((value) => value[0] === area.type_area.id);
  const typeAreaName: string = typeArea ? typeArea[1] : 'Не указано';

  // преобразование фото
  const [photos, setPhotos] = useState<string[]>([]);
  useEffect(() => {
    combinePhotos();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const combinePhotos = () => {
    const emptyPhoto = '/img/emptyPhoto.png';
    // if ('images_area' in area && area.images_area) {
    // const imageArray = area.images_area.map((img) =>
    //   typeof img === 'string' ? emptyPhoto : img.image
    // );
    const imageArray = area.images_area.map((img) => img.image);
    if (area.cover_area) imageArray.unshift(area.cover_area);
    if (imageArray.length === 2) setPhotos([...imageArray, emptyPhoto]);
    else setPhotos(imageArray);
    // }
  };

  // const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
  //   event.preventDefault();
  // };

  const galleryRender = () => {
    return (
      <>
        {photos.length === 1 ? (
          <GalleryItem
            href={photos[0]}
            thumb={[photos[0], 1000, 230]}
            data-external-thumb-image={photos[0]}
            imgAlt={area.title}
            light=""
            caption=""
            video={false}
            className="w-100"
          />
        ) : (
          photos.map((img, indx) => (
            <SwiperSlide key={indx}>
              <GalleryItem
                href={img}
                thumb={[img, 313, 230]}
                data-external-thumb-image={img}
                imgAlt={area.title}
                className={`${indx === 0 ? styles.rounded_left : ''}${
                  indx === photos.length - 1 ? styles.rounded_right : ''
                }  `}
                light=""
                caption=""
                video={false}
              />
            </SwiperSlide>
          ))
        )}
      </>
    );
  };

  const descriptionRender = (name: string, value: string | number) => {
    return (
      <div className={styles.slider_text}>
        <p>{name}</p>
        <p className={styles.slider_text_data}>{value}</p>
      </div>
    );
  };

  return (
    <>
      <section
        className={'card card-body border-0 shadow-sm card-hover mb-xl-5 mb-4'}
      >
        <h4 className="h4 text-weight-bold">{capitalize(area.title)}</h4>
        <div className="d-flex mb-3" style={{ fontWeight: '500' }}>
          <CalculateCost average_check={average_check} area={area} />

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
                onChange={() => {}}
                minDate={new Date(Date.now())}
                //на год от сегодняшней даты
                //maxDate={new Date(Date.now() + 3.156e10)}
                placeholderText="Select a date"
                className="rounded-1 pe-5"
                excludeDates={
                  [new Date(area.reserved_days)]
                  //	[  addDays(new Date(), 1),
                  // addDays(new Date(), 10),]
                }
                inline
              />
            </div>
          </div>
        </div>
        {/* иначе видно 0 */}
        {photos.length > 0 && (
          <LightGallery
            selector=".gallery-item"
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
                {galleryRender()}
                {photos.length > 3 && (
                  <SlidesCount
                    currentSlide={currentSlide}
                    totalSlides={totalSlides}
                  />
                )}
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
        )}

        {/* Описание */}
        <div className={styles.slider_text_wrapper}>
          <div className="d-md-flex">
            <div className={styles.left_block + ' me-0 me-md-4'}>
              {/* <div className={styles.slider_text}>
                <p>Вместимость</p>
                <p className={styles.slider_text_data}>
                  {area.min_capacity}-{area.max_capacity} человек
                </p>
              </div> 
              <div className={styles.slider_text}>
                <p>Схема оплаты</p>
                <p className={styles.slider_text_data}>
                  {findTitle(SCHEME_OF_PAYMENT, area.scheme_of_payment)}
                </p>
              </div>
              <div className={styles.slider_text}>
                <p>Стоимость</p>
                <p className={styles.slider_text_data}>
                  Аренда от {area.min_price_rent}₽ + от {area.deposit}₽/чел
                </p>
              </div>
              <div className={styles.slider_text}>
                <p>Цвет зала</p>
                <p className={styles.slider_text_data}>
                  {findTitle(COLOR_HALL, area.color_hall)}
                </p>
              </div>*/}
              {descriptionRender(
                'Вместимость',
                `${area.min_capacity}-${area.max_capacity} человек`
              )}
              {descriptionRender(
                'Схема оплаты',
                findTitle(SCHEME_OF_PAYMENT, area.scheme_of_payment)
              )}
              {descriptionRender(
                'Стоимость',
                `Аренда от ${area.min_price_rent}₽ + от ${area.deposit}₽/чел`
              )}
              {descriptionRender(
                'Цвет зала',
                findTitle(COLOR_HALL, area.color_hall)
              )}
            </div>
            <div className={styles.right_block}>
              {/* <div className={styles.slider_text}>
                <p>Тип</p>
                <p className={styles.slider_text_data}>{typeAreaName}</p>
              </div>
              <div className={styles.slider_text}>
                <p>Отдельный вход</p>
                <p className={styles.slider_text_data}>
                  {area.separate_entrance ? 'Да' : 'Нет'}
                </p>
              </div>
              <div className={styles.slider_text}>
                <p>Минимальная стоимость банкета</p>
                <p className={styles.slider_text_data}>
                  {area.min_price_banquet
                    ? `${area.min_price_banquet}₽`
                    : 'Не указано'}
                </p>
              </div>
              <div className={styles.slider_text}>
                <p>Возможна аренда без еды</p>
                //! Заглушка 
                <p className={styles.slider_text_data}>Да</p>
              </div> */}

              {descriptionRender('Тип', typeAreaName)}
              {descriptionRender(
                'Отдельный вход',
                area.separate_entrance ? 'Да' : 'Нет'
              )}
              {descriptionRender(
                'Минимальная стоимость банкета',
                area.min_price_banquet
                  ? `${area.min_price_banquet}₽`
                  : 'Не указано'
              )}
              {/* //! Заглушка  */}
              {descriptionRender('Возможна аренда без еды', 'Да')}
            </div>
          </div>

          {/* Акция и детали */}
          <div className={styles.slider_text_bottom + ' d-md-flex'}>
            {area.sale && (
              <div
                className={
                  styles.sale + ' order-2 my-4 ms-md-3 mx-auto w-75 w-md-auto'
                }
              >
                {/* //! в форме заполнения помещения нет соответствующего поля */}
                {/* <p className="fw-semibold">{place.sale.condition}</p> */}

                {/* //! тут по ТЗ: при нажатии открывается карусель фото комнаты, но я пока сделала бэйдж до прояснения вопроса (дизайнер тоже бэйдж сделала) */}
                <Badge className="bg-faded-primary fw-bold fs-sm py-2 px-3">
                  <i className="fi-gift fs-lg me-1"></i>
                  {area.sale}
                </Badge>
              </div>
            )}
            {area.detail_location.length > 0 && (
              <div className={styles.slider_details + ' order-1 mt-5 mt-md-0'}>
                <h4 className="h4">Детали</h4>
                {showMoreRender(
                  area.detail_location,
                  100,
                  isDetailsOpen,
                  setIsDetailsOpen
                )}
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
}

export default PlaceArea;
