import Sidebar from '@/components/catalog/sidebar/Sidebar';
import Link from 'next/link';
import { Col } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import Container from 'react-bootstrap/Container';

export default function Catalog() {
  return (
    <Container>
      <Row>
        <Sidebar />
        <Col>
          <h2>Фото</h2>
        </Col>
      </Row>
    </Container>
  );
}
