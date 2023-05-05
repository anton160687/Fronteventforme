import Link from 'next/link';
import { GetServerSideProps } from 'next';
import { Place } from '@/types/catalog';
import { URL } from '@/constant';
import { Breadcrumb, Col, Row } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import AnchorBtns from '@/components/catalog/catalogItem/anchorBtns/AnchorBtns';
import BookingForm from '@/components/bookingForm/BookingForm';
import ContactForm from '@/components/bookingForm/ContactForm';
import LocationPhotos from '@/components/catalog/catalogItem/locationPhotos/locationsPhotos';
import RatingStars from '@/components/catalog/catalogItem/ratingStars/RatingStar';
import YaComments from '../../../components/catalog/catalogItem/yaComments/YaComments';
import YaMap from '../../../components/catalog/catalogItem/yaMap/yaMap';
import styles from '@/styles/catalog/places/Places.module.scss';
import { Card } from 'react-bootstrap/';
import {
  ProviderCardSpecialBlock,
  PhotosWeddingsHeld,
  ArticlesWeddings,
  TextHeadingDescription,
  TextHeadingSuitableFor,
  TextHeadingDetailsKitchen,
  TextHeadingFeatures,
  TextHeadingSiteDetails,
} from '@/components/catalog';
import { cards } from '@/mocks/cards';
import CatalogItemSlider from '@/components/catalog/catalogItem/catalogItemSlider/CatalogItemSlider';

type CatalogItemProps = {
  item?: Place;
};

export default function CatalogItem({ item }: CatalogItemProps) {
  const { providerCards } = cards || {};
  const { photosHeld } = cards || {};
  const { articles } = cards || {};

  return (
    <Container>
      <Breadcrumb className="breadcrumb">
        <Breadcrumb.Item linkAs={Link} href="/">
          Главная
        </Breadcrumb.Item>
        <Breadcrumb.Item linkAs={Link} href="/catalog">
          Каталог
        </Breadcrumb.Item>
        <Breadcrumb.Item linkAs={Link} href="/catalog">
          Площадки
        </Breadcrumb.Item>
        <Breadcrumb.Item active>{item?.title}</Breadcrumb.Item>
      </Breadcrumb>

      {/* тестовые данные для разных ситуаций, потом - удалить */}
      <LocationPhotos
        photoUrls={[
          'https://picsum.photos/369/224',
          'https://picsum.photos/369/224',
          'https://picsum.photos/369/224',
          'https://picsum.photos/369/224',
          'https://picsum.photos/369/224',
        ]}
      />

      {/* это - общий контейнер страницы на все блоки под верхними фото */}

      {/* <div className={styles.location__flex_container}> */}
      <Row className="d-flex justify-content-center">
        {/* это - основной контейнер слева на странице */}
        <Col xl={8} lg={10} className={styles.left__container}>
          <div className={styles.location__flex_container}>
            <h3>{item?.title}</h3>
            {/* <p>3 зала &nbsp;|&nbsp; 2 веранды &nbsp;|&nbsp; 2 шатра</p> */}
            <Card.Footer className={styles.text_title}>
              <span>3 зала</span>
              <span className="fs-4 text-secondary mx-2">|</span>
              <span>2 шатра</span>
              <span className="fs-4 text-secondary mx-2">|</span>
              <span>2 веранды</span>
            </Card.Footer>
          </div>

          <div className={styles.location__flex_container}>
            <p>{item?.address.full}</p>
            <Link href="#map" className={styles.location__map}>
              <i className="fi-map" /> <p>На карте</p>
            </Link>
          </div>

          <AnchorBtns />
          {/* все отсутстсвующие поля должны приходить с бэка */}

          <TextHeadingDescription item={item} />
          <TextHeadingSuitableFor />
          <TextHeadingDetailsKitchen />
          <CatalogItemSlider />
          <TextHeadingSiteDetails />
          <TextHeadingFeatures />

          {providerCards &&
            providerCards.map((item) => (
              <ProviderCardSpecialBlock
                key={item.id}
                id={item.id}
                title={item.title}
                description={item.description}
                pathImg={item.pathImg}
              />
            ))}

          <Row className="my-xl-4 my-md-3 my-sm-2">
            <Card.Title as="h4" className="mb-xl-4 mb-md-3 mb-sm-2">
              Фото проведенных свадеб на площадке
            </Card.Title>
            <div className="d-flex justify-content-evenly">
              {photosHeld &&
                photosHeld.map((item) => (
                  <PhotosWeddingsHeld
                    key={item.id}
                    title={item.title}
                    description={item.description}
                    pathImg={item.pathImg}
                  />
                ))}
            </div>
          </Row>

          <Row className="justify-content-between my-xl-4 my-md-3 my-sm-2">
            <Card.Title as="h4" className="mb-xl-4 mb-md-3 mb-sm-2 w-100">
              Статьи о свадьбах на площадке “Villa Arcobaleno”
            </Card.Title>
            <div className="d-flex justify-content-evenly">
              {articles &&
                articles.map((item) => (
                  <ArticlesWeddings
                    key={item.id}
                    title={item.title}
                    description={item.description}
                    pathImg={item.pathImg}
                    dateText={item.dateText}
                  />
                ))}
            </div>
          </Row>

          <div id="map">
            Здесь карта Яндекса с объектом
            <YaMap />
          </div>

          <div id="comments">
            <YaComments />
          </div>
        </Col>

        {/* это - боковой контейнер справа на странице */}
        <Col xl={4} sm={12} className="d-flex justify-content-center">
          <Col xl={12} sm={6}>
            <div className={styles.popular__container}>
              {/* тестовые данные, потом - удалить */}
              <RatingStars rating={3.7} voices={58} />
              {/* <RatingStars rating={item?.rating?.rating || 0 } voices={item?.rating?.votes || 0} /> */}
              <div className={styles.popular__text}>
                <p className={styles.popular__par}>
                  В избранном у&nbsp;<span>{234} человека </span>
                </p>
                <p className={styles.popular__par}>
                  Забронировано&nbsp;<span>{12} раз </span>
                </p>
              </div>
            </div>

            {/* тестовые данные, потом - удалить */}
            <BookingForm
              avatar={'https://picsum.photos/100/100'}
              first_name={'Имя'}
              last_name={'Фамилия'}
              phone={'12345678'}
              email={'sshuahuash@mail.ru'}
            />

            <ContactForm />
          </Col>
        </Col>
      </Row>
    </Container>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const id = context.params?.id;
  const response = await fetch(`${URL}/places/${id}`);
  if (response.ok) {
    const result: Place = await response.json();

    if (!result) {
      return {
        notFound: true,
      };
    }

    return {
      props: { item: result },
    };
  }

  return {
    props: {},
  };
};
