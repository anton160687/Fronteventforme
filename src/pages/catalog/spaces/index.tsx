import Sidebar from "@/components/catalog/sidebar/Sidebar";
import Link from "next/link";
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import Container from "react-bootstrap/Container";
import Pagination from 'react-bootstrap/Pagination';
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Title from "@/components/catalog/title/Title";


function CatalogSpaces() {

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

export default CatalogSpaces;







//Это специальная функция next для запросов на стороне сервере. Ее наличие обеспечивает ssr:
export async function getServerSideProps() {
  const url = 'https://jsonplaceholder.typicode.com/users';
  const response = await fetch(url, {
    headers: {
      Accept: 'application/json',
    },
  });
  const data = await response.json();

  if (!data) {
    return {
      notFound: true,
    }
  }

  // так можно обращаться к стору прямо из специальных функций Next, но это не рекомендуется
  //Лучше получать данные в компоненте через props и затем диспатчить их в стор из самого компонета.
  // store.dispatch(fetchUsers());

  return {
    props: {
      items: data
    },
  };
}