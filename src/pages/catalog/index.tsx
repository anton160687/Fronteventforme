import Sidebar from '@/components/catalog/sidebar/Sidebar';
import { useBreadcrumbs } from '@/components/context/useBreadcrumbs';
import { useEffect } from 'react';
import { Row, Col } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';

export default function Catalog() {
  let { setIsShown } = useBreadcrumbs();

  useEffect(() => {
    setIsShown(true);
  }, []);

  return (
    <Container>
      <Row>
        <Sidebar />
        <Col>
          <h2>Корневая страница каталога</h2>
        </Col>
      </Row>
    </Container>
  );
}
