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
import PlaceTypesSlider from '@/components/catalog/placeTypesSlider/PlaceTypesSlider';
import BotomFilters from '@/components/catalog/botomFilters/BotomFilters';
//для SSR
import { URL, Paths } from '@/constant';
import { PlaceCardType } from '@/types/catalog';
import { GetServerSideProps } from 'next';
import PaginationBar from '@/components/catalog/pagination/Pagination';
import {
  getQueryParams,
  getQueryParamsWithoutParam,
} from '@/services/catalog.service';
import { generateBreadcrumbs } from '@/components/helpers';

type CatalogPlacesProps = {
  places: PlaceCardType[];
  totalCount: number;
  currentPage: number;
  queryParamsWithoutPagination: string;
  queryParamsWithoutSorting: string;
};

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
    <main>
      <Container className="px-5">
        {/* <Breadcrumb className="breadcrumb">
        <Breadcrumb.Item linkAs={Link} href={Paths.Home}>
          Главная
        </Breadcrumb.Item>
        <Breadcrumb.Item linkAs={Link} href={Paths.Catalog}>
          Каталог
        </Breadcrumb.Item>
        <Breadcrumb.Item active>Площадки</Breadcrumb.Item>
      </Breadcrumb> */}

        <Row className="p-0">
          <Title title={'Площадки'} quantity={totalCount} />
          <PlaceTypesSlider />
          <PlaceFilters />
        </Row>

        <Row>
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

  const API =
    process.env.NODE_ENV === 'production' ? process.env.NEXT_PUBLIC_URL : URL;

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

  const breadcrumbs = generateBreadcrumbs(context.resolvedUrl);

  const schemaData: SchemaType = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [],
  };

  breadcrumbs.forEach((breadcrumb, index) => {
    const crumbSchema: CrumbSchemaType = {
      '@type': 'ListItem',
      position: index + 1,
      name: breadcrumb.text,
      item: breadcrumb.href,
    };

    // const crumbSchema: CrumbSchemaType = {
    //   '@type': 'ListItem',
    //   position: index + 1,
    //   name: text,
    // };

    // if (!last) {
    //   crumbSchema.item = href;
    // }
    schemaData.itemListElement.push(crumbSchema);
  });

  return {
    props: {
      places,
      totalCount,
      currentPage,
      queryParamsWithoutPagination,
      queryParamsWithoutSorting,
      schemaData,
    },
  };
};
