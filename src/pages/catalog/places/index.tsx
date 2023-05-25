import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '@/store';
import { setPlaces } from '@/store/catalog/catalogSlice';
import Link from 'next/link';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import Container from 'react-bootstrap/Container';
import Title from '@/components/catalog/title/Title';
import Sidebar from '@/components/catalog/sidebar/Sidebar';
import Sorting from '@/components/catalog/sorting/Sorting';
import PlaceFilters from '@/components/catalog/placeFilters/PlaceFilters';
import PlaceCard from '@/components/catalog/placeCard/PlaceCard';
import TypeAreaSlider from '@/components/catalog/typeAreaSlider/TypeAreaSlider';
import BotomFilters from '@/components/catalog/botomFilters/BotomFilters';
//для SSR
import { URL, Paths } from '@/constant';
import { Place, PlaceCardType } from '@/types/catalog';
import { GetServerSideProps } from 'next';
import PaginationBar from '@/components/catalog/pagination/Pagination';
import { getQueryParams, getQueryParamsWithoutParam } from '@/services/catalog.service';


type CatalogPlacesProps = {
  places: PlaceCardType[];
  totalCount: number;
  currentPage: number;
  queryParamsWithoutPagination: string | null;
};

function CatalogPlaces({ places, totalCount, currentPage, queryParamsWithoutPagination }: CatalogPlacesProps) {
  const dispatch = useDispatch<AppDispatch>();
  const [sortedPlaces, setSortedPlaces] = useState<PlaceCardType[] | null>(null);
  
  // useEffect(() => {
  //   dispatch(setPlaces(places));
  // }, []);

  function sortPlacesByParam(param: string) {
    switch (param) {
      case 'popularity':
        // let sortedByRating = places
        //   .slice()
        //   .sort((a: Place, b: Place) => b.rating.rating - a.rating.rating);
        // setSortedPlaces(sortedByRating);
        break;
      case 'lowPrice':
        //здесь логика сортировки
        break;
      case 'hightPrice':
        //здесь логика сортировки
        break;
    }
  }

  function renderAllPlaces(places: PlaceCardType[]) {
    if (places.length !== 0) {
      return places.map((place) => (
        <PlaceCard key={place.id} place={place} />
      ));
    }
  }

  return (
    <Container>
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
        <Col className="ms-4 p-0">
          <Sorting sortingCB={sortPlacesByParam} />

          <section>
            {sortedPlaces
              ? renderAllPlaces(sortedPlaces)
              : renderAllPlaces(places)}
          </section>

       {/* Пагинация */}
        <PaginationBar
          currentPage ={currentPage}
          totalCount={totalCount}
          siblingCount = {1}
          pageSize={8}
          query={queryParamsWithoutPagination}
        />
        </Col>
      </Row>

      <BotomFilters />
    </Container>
  );
}

export default CatalogPlaces;

//SSR

export const getServerSideProps: GetServerSideProps = async (context) => {
  const query = context.query;
  const currentPage: number = query?.page? +query.page : 1;
  let queryParams: string | null = null;
  let queryParamsWithoutPagination: string | null = null;
  if (query) {
    queryParams =  getQueryParams(query);
    queryParamsWithoutPagination = getQueryParamsWithoutParam(query, 'page');
  }
  //запрос перечня Places
  const API = process.env.NODE_ENV === 'production'? process.env.URL : URL;
  const getPlacesURL = queryParams? `${API}catalog/places${queryParams}` : `${API}catalog/places/`;

  console.log('это урл на бэк ' + getPlacesURL);

  const response = await fetch(getPlacesURL);
  const result = await response.json();
  console.log(result);
  // массив карточек
  const places: PlaceCardType[] = result.results;
  // общее кол-во карточек
  const totalCount: number = result.count;

  if (!result) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      places,
      totalCount,
      currentPage,
      queryParamsWithoutPagination,
    },
  };
}
