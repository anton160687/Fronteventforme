import Container from 'react-bootstrap/Container';
import { Col } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Sidebar from '@/components/catalog/sidebar/Sidebar';

export default function Catalog() {
  return (
    <Container>
      <Row>
        <Sidebar />
        <Col>
          <h2>Музыка</h2>
        </Col>
      </Row>
    </Container>
  );
}
