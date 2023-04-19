import Link from "next/link";
import Image from "next/image";
import { GetServerSideProps } from 'next';
import { Place } from '@/types/catalog';
import { URL } from '@/constant';
import { Breadcrumb, Button } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import YaComments from "../../../components/catalog/catalogItem/yaComments/YaComments";
import AnchorBtns from "@/components/catalog/catalogItem/anchorBtns/AnchorBtns";
import { LocationPhotos } from "@/components/catalog/catalogItem/locationPhotos/locationsPhotos";

type CatalogItemProps = {
  item?: Place,
}



export default function CatalogItem({ item }: CatalogItemProps) {

  return (
    <Container>
      <Breadcrumb className='breadcrumb'>
        <Breadcrumb.Item linkAs={Link} href='/'>Главная</Breadcrumb.Item>
        <Breadcrumb.Item linkAs={Link} href='/catalog'>Каталог</Breadcrumb.Item>
        <Breadcrumb.Item linkAs={Link} href='/catalog'>Площадки</Breadcrumb.Item>
        <Breadcrumb.Item active>{item?.title}</Breadcrumb.Item>
      </Breadcrumb>

      {!item ?
        <p>Loading...</p>
        :
        <>
          {/* тестовые данные для разных ситуаций, потом - удалить */}
          <LocationPhotos photoUrls={[
            'https://picsum.photos/369/224',
            'https://picsum.photos/369/224',
            'https://picsum.photos/369/224',
            'https://picsum.photos/369/224',
            'https://picsum.photos/369/224',
          ]} />

          <LocationPhotos photoUrls={[
            'https://picsum.photos/369/224',
            'https://picsum.photos/369/224',
          ]} />

          <LocationPhotos photoUrls={[
            'https://picsum.photos/369/224',
          ]} />

          <h3>{item.title}</h3>
          <div>
            <p>{item.address.full}</p>
            <Link href='#'>
              <i className="fi-map" />
              <p>На карте</p>
            </Link>
          </div>

          <p>
            В избранном у 232 человек
            Забронировано 48 раз
          </p>
        </>
      }

      <AnchorBtns />


      <div id="map">
        Здесь карта Яндекса с объектом
      </div>

      <div id="comments">
        <YaComments />
      </div>

    </Container>
  )
}


export const getServerSideProps: GetServerSideProps = async (context) => {
  const id = context.params?.id;
  const response = await fetch(`${URL}/places/${id}`);
  if (response.ok) {
    const result: Place = await response.json();

    if (!result) {
      return {
        notFound: true,
      }
    }

    return {
      props: { item: result },
    }
  }

  return {
    props: {},
  }
}
