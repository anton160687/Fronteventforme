import Sidebar from '@/components/catalog/sidebar/Sidebar';
import { Dispatch, SetStateAction, useEffect } from 'react';
import { Row, Col } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';

type CatalogProps = {
  setIsShown: Dispatch<SetStateAction<boolean>>;
};

export default function Catalog({ setIsShown }: CatalogProps) {
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
