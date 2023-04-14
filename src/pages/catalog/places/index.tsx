import Sidebar from "@/components/catalog/sidebar/Sidebar";
import Link from "next/link";
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import Container from "react-bootstrap/Container";
import Pagination from 'react-bootstrap/Pagination';
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Title from "@/components/catalog/title/Title";
import Sorting from "@/components/catalog/sorting/Sorting";
import SpaceFilters from "@/components/catalog/spaceFilters/spaceFilters";
import { URL } from "@/constant";
import { GetServerSideProps } from 'next';
import { Place } from "@/types/catalog";


export async function getServerSideProps (context: GetServerSideProps<{ data: Place[] }>) {
  const response = await fetch(`${URL}/places/`);
  const data: Place[] = await response.json();
  console.log (data);
  return {
    props: {
      data,
    },
  }
}




function CatalogPlaces() {

  return (
    <Container>

      <Breadcrumb className='breadcrumb'>
        <Breadcrumb.Item linkAs={Link} href='/'>Главная</Breadcrumb.Item>
        <Breadcrumb.Item linkAs={Link} href='/catalog'>Каталог</Breadcrumb.Item>
        <Breadcrumb.Item active>Площадки</Breadcrumb.Item>
      </Breadcrumb>

      <Row>
        <Sidebar />
        <Col>
          <Title title={'Банкетные залы'} quantity={184} />
          <SpaceFilters />
          <Sorting />

          <Pagination size='lg'>
            <Pagination.Item>
              <i className='fi-chevron-left'></i>
            </Pagination.Item>
            <Pagination.Item>{1}</Pagination.Item>
            <Pagination.Item active>{2}</Pagination.Item>
            <Pagination.Item>{3}</Pagination.Item>
            <Pagination.Ellipsis />
            <Pagination.Item>{10}</Pagination.Item>
            <Pagination.Item>
              <i className='fi-chevron-right'></i>
            </Pagination.Item>
          </Pagination>
        </Col>
      </Row>

    </Container>
  )
}

export default CatalogPlaces;