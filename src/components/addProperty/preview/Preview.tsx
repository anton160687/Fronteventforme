import { Breadcrumb, Card, Col, Container, Modal, Row } from 'react-bootstrap';
import styles from '@/styles/catalog/places/Places.module.scss';
import LocationDescription from '@/components/catalog/catalogItem/locationPhotos/LocationDescription';
import YaMap from '@/components/catalog/catalogItem/yaMap/yaMap';
import { Place } from '@/types/placeType';
import TextDescription from '@/components/catalog/catalogItem/textComponents/TextDescription';
import AnchorBtns from '@/components/catalog/catalogItem/anchorBtns/AnchorBtns';
import TextEvents from '@/components/catalog/catalogItem/textComponents/TextEvents';
import TextKitchen from '@/components/catalog/catalogItem/textComponents/TextKitchen';
import PlaceAreas from '@/components/catalog/catalogItem/placeAreas/PlaceAreas';
import TextDetails from '@/components/catalog/catalogItem/textComponents/TextDetails';
import TextFeatures from '@/components/catalog/catalogItem/textComponents/TextFeatures';
import AlbumCardContainer from '@/components/catalog/catalogItem/albumCard/AlbumCardContainer';
import WeddingsPhotos from '@/components/catalog/catalogItem/weddingPhotos/WeddingsPhotos';
import { cards } from '@/mocks/cards';
import { Area, AreaRecieved } from '@/types/areaType';
import { OutsideReg, WelcomeZone } from '@/types/placeType';
import LocationPhotos from '@/components/catalog/catalogItem/locationPhotos/locationsPhotos';
import { useState } from 'react';

type PreviewProps = {
  previewShow: boolean;
  handlePreviewClose: () => void;
  place: Place;
  areas: AreaRecieved[] | Area[];
  mainPhotos: string[];
  territoryImg: string[];
  welcomeImg: string[];
  outregImg: string[];
};

function Preview({
  previewShow,
  handlePreviewClose,
  place,
  areas,
  mainPhotos,
  territoryImg,
  welcomeImg,
  outregImg,
}: PreviewProps) {
  const { weddingPhotos } = cards || {};

  let outside_reg: OutsideReg[] = [
    {
      id: 0,
      images_out_reg: [],
      outreg_price: place.outreg_price!,
      outreg_conditions: place.outreg_conditions!,
      outreg_include: place.outreg_desc!,
      place: 0,
    },
  ];

  let welcome_zones: WelcomeZone[] = [
    {
      id: 0,
      images_welcome: [],
      welcome_desc: place.welcome_desc!,
      place: 0,
    },
  ];

  //заменить 'type_area' | 'images_area' | 'place_id' | 'color_hall' | 'reserved_days'
  //: AreaRecieved[]

  const [uniAreas, setUniAreas] = useState<AreaRecieved[]>([]);
  const makeUniAreas = () => {
    let newArray: AreaRecieved[] = [];
    areas.map((area) => newFunc(area));
  };

  const newFunc = (area: Area): AreaRecieved => {
    const reservedDays = area.reserved_days.toString();
    // typeof area.reserved_days === 'string'
    //   ? [new Date(area.reserved_days)]
    //   : area.reserved_days;

    const typeArea = { id: 0, type_area: area.type_area };
    const place = area.place_id;
    const colorHall = area.color_hall;

		const imagesArea = 

  };

  return (
    <Modal fullscreen show={previewShow} onHide={handlePreviewClose}>
      <Modal.Header closeButton className={styles.preview_header}>
        <h3 className="h5 text-muted fw-normal modal-title d-none d-sm-block text-nowrap">
          {'Предпросмотр\u00a0'}
          <span>площадки</span>
        </h3>
      </Modal.Header>

      <Modal.Body className="d-flex flex-column p-0">
        <Container className="mt-2 mt-sm-0 py-4 py-sm-5">
          <Container className="px-5">
            <Breadcrumb className="breadcrumb">
              <Breadcrumb.Item>Главная</Breadcrumb.Item>
              <Breadcrumb.Item>Каталог</Breadcrumb.Item>
              <Breadcrumb.Item>Площадки</Breadcrumb.Item>
              <Breadcrumb.Item active>{place.title}</Breadcrumb.Item>
            </Breadcrumb>

            <LocationPhotos photoUrls={mainPhotos} />

            <Row className={styles.main__container}>
              <Col xl={8} className={styles.left__container}>
                <LocationDescription
                  title={place.title}
                  areasNumber={areas.length}
                  address={place.address}
                  metro={place.metro}
                />
                <AnchorBtns />
                <TextDescription item={place} />
                <TextEvents events={place.event} />
                <TextKitchen
                  kids={place.children_kitchen}
                  kitchens={place.kitchen}
                />

                <PlaceAreas areas={areas} average_check={place.average_check} />

                <TextDetails description={place.description} />
                <TextFeatures
                  features={place.type_feature}
                  territories={place.type_place}
                />

                <AlbumCardContainer
                  territory={place.territory_desc}
                  welcome_zones={welcome_zones}
                  outside_reg={outside_reg}
                  territoryImg={territoryImg}
                  welcomeImg={welcomeImg}
                  outregImg={outregImg}
                />

                <Row className="my-xl-4 my-md-3 my-sm-2">
                  <Card.Title as="h4" className="mb-xl-4 mb-md-3 mb-sm-2">
                    Фото проведенных свадеб на площадке
                  </Card.Title>
                  <div className="d-flex justify-content-evenly">
                    {/* //! Сделать отображение альбомов свадеб */}
                    {weddingPhotos &&
                      weddingPhotos.map((item) => (
                        <WeddingsPhotos
                          key={item.id}
                          title={item.title}
                          description={item.description}
                          pathImg={item.pathImg}
                        />
                      ))}
                  </div>
                </Row>

                <div id="map" className={styles.map__container}>
                  <YaMap lat={place.width} long={place.longitude} />
                </div>
              </Col>
            </Row>
          </Container>
        </Container>
      </Modal.Body>
    </Modal>
  );
}

export default Preview;
