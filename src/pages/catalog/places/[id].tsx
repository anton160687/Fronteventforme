import Link from 'next/link';
import { GetServerSideProps } from 'next';
import { Place } from "@/types/placeType"
import { URL } from '@/constant';
import { Breadcrumb, Col, Row } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import AnchorBtns from '@/components/catalog/catalogItem/anchorBtns/AnchorBtns';
import BookingForm from '@/components/bookingForm/BookingForm';
import ContactForm from '@/components/bookingForm/ContactForm';
import LocationPhotos from '@/components/catalog/catalogItem/locationPhotos/locationsPhotos';
import LocationDescription from '@/components/catalog/catalogItem/locationPhotos/LocationDescription';
import RatingStars from '@/components/catalog/catalogItem/ratingStars/RatingStar';
import YaComments from '../../../components/catalog/catalogItem/yaComments/YaComments';
import YaMap from '../../../components/catalog/catalogItem/yaMap/yaMap';
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
import { SimilarItemsSlider } from '@/components/catalog/catalogItem/similarItemsSlider/similarItemsSlider';
import styles from '@/styles/catalog/places/Places.module.scss';


type CatalogItemProps = {
  item: Place;
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
        <Breadcrumb.Item linkAs={Link} href="/catalog/places">
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

      <Row className={`${styles.main__container} mx-auto w-xl-100 w-lg-75`}>
        
        {/* это - основной контейнер слева на странице */}
        <Col xl={8} className={styles.left__container}>
          <LocationDescription />

          <AnchorBtns />
          
          <TextHeadingDescription place={item}/>
          
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

          <Row>
            <Card.Title as="h4" className="text-sm-center text-md-start">
              Фото проведенных свадеб на площадке
            </Card.Title>
            <Row>
              {photosHeld &&
                photosHeld.map((item) => (
                  <PhotosWeddingsHeld
                    key={item.id}
                    title={item.title}
                    description={item.description}
                    pathImg={item.pathImg}
                  />
                ))}
            </Row>
          </Row>

          <Row>
            <Card.Title as="h4" className="text-sm-center text-lg-start">
              Статьи о свадьбах на площадке “Villa Arcobaleno”
            </Card.Title>
            <Row className="d-flex flex-lg-nowrap justify-content-evenly">
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
            </Row>
          </Row>

          
        </Col>

        {/* это - боковой контейнер справа на странице */}
        <Col xl={4} lg={8} className={styles.right__container}>
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

      </Row>
      <div id="map" className={styles.map__container}>
        Здесь карта Яндекса с объектом
        <YaMap />
      </div>

      <div id="comments" className={styles.comments__container}>
        <YaComments />
      </div>
      <SimilarItemsSlider />
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
