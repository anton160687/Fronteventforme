import CustomBreadcrumbs from '@/components/breadcrumbs/CustomBreadcrumbs';
import Sidebar from '@/components/catalog/sidebar/Sidebar';
import { Paths } from '@/constant';
import { Row, Col } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';

const breadcrumbs = [
  { path: Paths.Home, name: 'Главная' },
  {
    path: Paths.Catalog,
    name: 'Каталог',
  },
];

export default function Catalog() {
  return (
    <>
      <CustomBreadcrumbs breadcrumbs={breadcrumbs} />
      <main>
        <Container className="px-5">
          <Row className="mx-0">
            <Sidebar />
            <Col>
              <h2>Корневая страница каталога</h2>
            </Col>
          </Row>
        </Container>
      </main>
    </>
  );
}
