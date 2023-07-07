import Link from 'next/link';
import { GetServerSideProps } from 'next';
import { Col, Row, Card, Button, Spinner } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import AnchorBtns from '@/components/catalog/catalogItem/anchorBtns/AnchorBtns';
import BookingForm from '@/components/bookingForm/BookingForm';
import ContactForm from '@/components/bookingForm/ContactForm';
import ArticleWeddings from '@/components/catalog/catalogItem/articleWeddings/ArticleWeddings';
import TextDescription from '@/components/catalog/catalogItem/textComponents/TextDescription';
import TextFeatures from '@/components/catalog/catalogItem/textComponents/TextFeatures';
import TextEvents from '@/components/catalog/catalogItem/textComponents/TextEvents';
import TextDetails from '@/components/catalog/catalogItem/textComponents/TextDetails';
import TextKitchen from '@/components/catalog/catalogItem/textComponents/TextKitchen';
import PlaceAreas from '@/components/catalog/catalogItem/placeAreas/PlaceAreas';
import { SimilarItemsSlider } from '@/components/catalog/catalogItem/similarItemsSlider/similarItemsSlider';
import LocationDescription from '@/components/catalog/catalogItem/locationPhotos/LocationDescription';
import YaMap from '@/components/catalog/catalogItem/yaMap/yaMap';
import YaComments from '@/components/catalog/catalogItem/yaComments/YaComments';
import RatingStars from '@/components/catalog/catalogItem/ratingStars/RatingStar';
import { API, BreadCrumbsLinks, Paths } from '@/constant';
import { User } from '@/types/user';
import { PlaceReceived } from '@/types/placeType';
import styles from '@/styles/catalog/places/Places.module.scss';
import AlbumCardContainer from '@/components/catalog/catalogItem/albumCard/AlbumCardContainer';
import LocationPhotos from '@/components/catalog/catalogItem/locationPhotos/LocationPhotos';
import LocalRating from '@/components/catalog/catalogItem/localRating/LocalRating';
import CustomBreadcrumbs from '@/components/breadcrumbs/CustomBreadcrumbs';
import WeddingPhotosContainer from '@/components/catalog/catalogItem/weddingPhotos/WeddingPhotosContainer';
import ArticleWeddingsContainer from '@/components/catalog/catalogItem/articleWeddings/ArticleWeddingsContainer';
import YandexReview from '@/components/catalog/catalogItem/yandexReview/YandexReview';
import LocalReviews from '@/components/catalog/catalogItem/localReviews/LocalReviews';

type CatalogItemProps = {
  place: PlaceReceived;
  user: User;
};

export default function CatalogItem({ place, user }: CatalogItemProps) {
  const territory = [
    {
      id: 0,
      images_territory: [],
      territory_desc: place?.territory_desc,
      place: place?.id,
      type_territory: place?.type_territory,
    },
  ];

  const breadcrumbs = [
    { path: Paths.Home, name: 'Главная' },
    {
      path: Paths.Catalog,
      name: 'Каталог',
    },
    { path: BreadCrumbsLinks.Places.link, name: BreadCrumbsLinks.Places.name },
    { path: `/${place.id}`, name: place.title },
  ];

  return (
    <>
      <CustomBreadcrumbs breadcrumbs={breadcrumbs} />
      <main>
        <Container>
          {!place ? (
            <div className="w-100 h-100 d-flex justify-content-center mt-5">
              <Spinner className="centered" />
            </div>
          ) : (
            <>
              <LocationPhotos
                photoUrls={place.images_place}
                title={place.title}
              />
              {/* общий контейнер страницы на все блоки под верхними фото */}
              <Row className={styles.main__container}>
                {/* основной контейнер слева на странице */}
                <Col xl={8} className={styles.left__container + ' pe-lg-4'}>
                  <LocationDescription
                    title={place.title}
                    areasNumber={place.areas?.length}
                    address={place.address}
                    metro={place.metro}
                  />
                  <AnchorBtns />
                  <TextDescription item={place} />
                  <TextEvents events={place.event} />
                  <TextKitchen
                    kids={place.children_kitchen}
                    kitchens={place.kitchen}
                  />

                  <PlaceAreas
                    areas={place.areas}
                    average_check={place.average_check}
                  />

                  <TextDetails description={place.description} />
                  <TextFeatures
                    features={place.type_feature}
                    territories={place.type_territory}
                    max_serving={place.max_serving}
                  />

                  <AlbumCardContainer
                    territory={territory}
                    welcome_zones={place.welcome_zones}
                    outside_reg={place.outsites_reg}
                  />
                  {/* //! поправить адаптив */}
                  <WeddingPhotosContainer />
                  {/* //! поправить адаптив */}
                  <ArticleWeddingsContainer />
                  <YandexReview place={place} />
                  <LocalRating />
                  <LocalReviews id={place.id} />
                </Col>

                {/* боковой контейнер справа на странице */}
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
                    avatar={user?.avatar || '/img/header/avatar.svg'}
                    first_name={user?.first_name || 'Имя'}
                    last_name={user?.last_name || 'Фамилия'}
                    phone={user?.phone || '123456789'}
                    email={user?.email || 'sshuahuash@mail.ru'}
                  />

                  <ContactForm />
                </Col>
                <SimilarItemsSlider />
              </Row>
            </>
          )}
        </Container>
      </main>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const id = context.params?.id;

  let response = await fetch(`${API}catalog/place/${id}/`);
  if (response.ok) {
    let result = await response.json();
    let user = result.user;
    delete result.user;

    if (!result) {
      return {
        notFound: true,
      };
    }

    return {
      props: {
        place: result,
        user: user,
      },
    };
  }

  return {
    props: {},
  };
};
