import Link from "next/link";
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import Container from "react-bootstrap/Container";


export default function Catalog() {
  return (
    <Container>

      <Breadcrumb className='breadcrumb'>
        <Breadcrumb.Item linkAs={Link} href='/'>Главная</Breadcrumb.Item>
        <Breadcrumb.Item linkAs={Link} href='/catalog'>Каталог</Breadcrumb.Item>
        <Breadcrumb.Item active>Музыка</Breadcrumb.Item>
      </Breadcrumb>

    </Container>
  )
}