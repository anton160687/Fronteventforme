import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from '@/store';
import { selectPlaces, setPlaces } from '@/store/catalog/catalogSlice';
import Link from 'next/link';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import Container from 'react-bootstrap/Container';
import Pagination from 'react-bootstrap/Pagination';
import Title from '@/components/catalog/title/Title';
import Sidebar from '@/components/catalog/sidebar/Sidebar';
import Sorting from '@/components/catalog/sorting/Sorting';
import PlaceFilters from '@/components/catalog/placeFilters/PlaceFilters';
import CatalogPlaceCard from '@/components/catalog/placeCard/catalogPlaceCard';
import TypeAreaSlider from '@/components/catalog/typeAreaSlider/TypeAreaSlider';
//для SSR
import { URL, Paths } from '@/constant';
import { Place } from '@/types/catalog';
import BotomFilters from '@/components/catalog/botomFilters/BotomFilters';

type CatalogPlacesProps = {
  places: Place[];
};

function CatalogPlaces({ places }: CatalogPlacesProps) {
  const [sortedPlaces, setSortedPlaces] = useState<Place[] | null>(null);
  const unsortedPlaces = useSelector(selectPlaces);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(setPlaces(places));
  }, []);

  function sortPlacesByParam(param: string) {
    switch (param) {
      case 'popularity':
        let sortedByRating = places
          .slice()
          .sort((a: Place, b: Place) => b.rating.rating - a.rating.rating);
        setSortedPlaces(sortedByRating);
        break;
      case 'lowPrice':
        //здесь логика сортировки
        break;
      case 'hightPrice':
        //здесь логика сортировки
        break;
    }
  }

  function renderAllPlaces(places: Place[]) {
    return places.map((place) => (
      <CatalogPlaceCard key={place.id} place={place} />
    ));
  }

  return (
    <Container className="px-5 px-xl-0 ">
      <Breadcrumb className="breadcrumb">
        <Breadcrumb.Item linkAs={Link} href={Paths.Home}>
          Главная
        </Breadcrumb.Item>
        <Breadcrumb.Item linkAs={Link} href={Paths.Catalog}>
          Каталог
        </Breadcrumb.Item>
        <Breadcrumb.Item active>Площадки</Breadcrumb.Item>
      </Breadcrumb>

      <Row className="p-0">
        <Title title={'Площадки'} quantity={places.length} />
        <TypeAreaSlider />
        <PlaceFilters />
      </Row>

      <Row>
        <Sidebar />
        <Col className="ms-lg-4 p-0">
          <Sorting sortingCB={sortPlacesByParam} />

          <section>
            {sortedPlaces
              ? renderAllPlaces(sortedPlaces)
              : renderAllPlaces(places)}
          </section>

          <Pagination
            size="lg"
            className=" justify-content-center justify-content-lg-start"
          >
            <Pagination.Item>
              <i className="fi-chevron-left"></i>
            </Pagination.Item>
            <Pagination.Item>{1}</Pagination.Item>
            <Pagination.Item active>{2}</Pagination.Item>
            <Pagination.Item>{3}</Pagination.Item>
            <Pagination.Ellipsis />
            <Pagination.Item>{10}</Pagination.Item>
            <Pagination.Item>
              <i className="fi-chevron-right"></i>
            </Pagination.Item>
          </Pagination>
        </Col>
      </Row>

      <BotomFilters />
    </Container>
  );
}

export default CatalogPlaces;

//SSR
export async function getServerSideProps() {
  const response = await fetch(`${URL}/places/`);
  const places: Place[] = await response.json();

  if (!places) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      places,
    },
  };
}
