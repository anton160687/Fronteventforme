import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Title from '@/components/catalog/title/Title';
import Sidebar from '@/components/catalog/sidebar/Sidebar';
import Sorting from '@/components/catalog/sorting/Sorting';
import PlaceFilters from '@/components/catalog/placeFilters/PlaceFilters';
import PlaceCard from '@/components/catalog/placeCard/PlaceCard';
import PlaceTypesSlider from '@/components/catalog/placeTypesSlider/PlaceTypesSlider';
import BotomFilters from '@/components/catalog/botomFilters/BotomFilters';
//для SSR
import { API, BreadCrumbsLinks, Paths } from '@/constant';
import { PlaceCardType } from '@/types/catalog';
import { GetServerSideProps } from 'next';
import PaginationBar from '@/components/catalog/pagination/Pagination';
import {
  getQueryParams,
  getQueryParamsWithoutParam,
} from '@/services/catalog.service';
import CustomBreadcrumbs from '@/components/breadcrumbs/CustomBreadcrumbs';

type CatalogPlacesProps = {
  places: PlaceCardType[];
  totalCount: number;
  currentPage: number;
  queryParamsWithoutPagination: string;
  queryParamsWithoutSorting: string;
};

const breadcrumbs = [
  { path: Paths.Home, name: 'Главная' },
  {
    path: Paths.Catalog,
    name: 'Каталог',
  },
  { path: BreadCrumbsLinks.Places.link, name: BreadCrumbsLinks.Places.name },
];

function CatalogPlaces({
  places,
  totalCount,
  currentPage,
  queryParamsWithoutPagination,
  queryParamsWithoutSorting,
}: CatalogPlacesProps) {
  console.log(places);

  function renderAllPlaces(places: PlaceCardType[]) {
    if (places.length !== 0) {
      return places.map((place) => <PlaceCard key={place.id} place={place} />);
    }
  }

  return (
    <>
      <CustomBreadcrumbs breadcrumbs={breadcrumbs} />
      <main>
        <Container>
          <Row className="mx-0">
            <Title title={'Площадки'} quantity={totalCount} />
            <PlaceTypesSlider />
            <PlaceFilters />
          </Row>

          <Row className="mx-0">
            <Sidebar />
            <Col className="ms-lg-4 p-0">
              <Sorting query={queryParamsWithoutSorting} />

              {renderAllPlaces(places)}

              {/* Пагинация */}
              <PaginationBar
                currentPage={currentPage}
                totalCount={totalCount}
                siblingCount={1}
                pageSize={8}
                query={queryParamsWithoutPagination}
              />
            </Col>
          </Row>

          <BotomFilters />
        </Container>
      </main>
    </>
  );
}

export default CatalogPlaces;

//SSR

export const getServerSideProps: GetServerSideProps = async (context) => {
  const query = context.query;
  const currentPage: number = query?.page ? +query.page : 1;
  const queryParams =
    getQueryParams(query) !== '?' ? getQueryParams(query) : '';
  const queryParamsWithoutPagination =
    getQueryParamsWithoutParam(query, 'page') !== '?'
      ? getQueryParamsWithoutParam(query, 'page')
      : '';
  const queryParamsWithoutSorting =
    getQueryParamsWithoutParam(query, 'ordering') !== '?'
      ? getQueryParamsWithoutParam(query, 'ordering')
      : '';

  const getPlacesURL = queryParams
    ? `${API}catalog/places/${queryParams}`
    : `${API}catalog/places/`;

  console.log('это урл на бэк ' + getPlacesURL);

  const response = await fetch(getPlacesURL);
  const result = await response.json();
  const places: PlaceCardType[] = result.results;
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
      queryParamsWithoutSorting,
    },
  };
};
