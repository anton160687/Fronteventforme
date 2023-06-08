import { Breadcrumb, Card, Col, Container, Modal, Row } from 'react-bootstrap';
import styles from '@/styles/catalog/places/Places.module.scss';
import LocationDescription from '@/components/catalog/catalogItem/locationPhotos/LocationDescription';
import YaMap from '@/components/catalog/catalogItem/yaMap/yaMap';
import {
  Event,
  Feature,
  ImagesPlace,
  ImagesWedding,
  Kitchen,
  Location,
  OutsideRegImages,
  Place,
  PlaceReceived,
  Territory,
  TerritoryImage,
  TypePlace,
  WelcomeZoneImage,
} from '@/types/placeType';
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
import { Area, AreaImages, AreaReceived, TypeArea } from '@/types/areaType';
import { OutsideReg, WelcomeZone } from '@/types/placeType';
import LocationPhotos from '@/components/catalog/catalogItem/locationPhotos/locationsPhotos';
import { useEffect, useMemo, useState } from 'react';

type PreviewProps = {
  previewShow: boolean;
  handlePreviewClose: () => void;
  place: Place;
  areas: Area[];
  mainPhotos: string[];
  previewTerritoryImg: string[];
  previewWelcomeImg: string[];
  previewOutregImg: string[];
  previewAreasImg: string[][];
};

function Preview({
  previewShow,
  handlePreviewClose,
  place,
  areas,
  mainPhotos,
  previewTerritoryImg,
  previewWelcomeImg,
  previewOutregImg,
  previewAreasImg,
}: PreviewProps) {
  const { weddingPhotos } = cards || {};

  const [uniAreas, setUniAreas] = useState<AreaReceived[]>([]);

  //const [uniPlace, setUniPlace] = useState<PlaceReceived>([]);

  //через хук, т.к. если просто делать переменную, то фукнция вызывается при каждом клике
  // useEffect(() => {
  //   if (previewShow) {
  //     makeUniAreas();
  //   //  makePlaceRecieved();
  //   }
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [previewShow]);

  const makeUniAreas = (): AreaReceived[] => {
    const newArray: AreaReceived[] = areas.map((area, index) =>
      makeAreaRecievedArr(area, index)
    );
    //  setUniAreas(newArray);
    return newArray;
  };

  const makeAreaRecievedArr = (area: Area, index: number): AreaReceived => {
    const reservedDays = area.reserved_days.toString();
    const typeArea: TypeArea = { id: 0, type_area: area.type_area };

    const imagesArea: AreaImages[] = [];
    previewAreasImg[index].map((image) => {
      const item = { id: 0, image: image, area: 0 };
      imagesArea.push(item);
    });

    const newArea = {
      ...area,
      type_area: typeArea,
      place: 0,
      reserved_days: reservedDays,
      images_area: imagesArea,
    };

    delete newArea.place_id;

    return newArea;
  };

  const makePlaceRecieved = (): PlaceReceived => {
    const startTime = place.start_time?.toString();
    const finishTime = place.finish_time?.toString();
    const typePlace: TypePlace[] = place.type_place.map((item) => ({
      id: item,
      type_place: '',
    }));
    const typeFeature: Feature[] = place.type_feature.map((item) => ({
      id: item,
      type_feature: '',
    }));

    const newLocation: Location[] = place.location.map((item) => ({
      id: item,
      location: '',
    }));

    const newEvent: Event[] = place.event.map((item) => ({
      id: item,
      event: '',
    }));

    const newKitchen: Kitchen[] = place.kitchen.map((item) => ({
      id: item,
      kitchen: '',
    }));

    const imagesPlace: ImagesPlace[] = place.place_img.map((img) => ({
      id: 0,
      image: img,
      place: 0,
    }));

    const welcomeZoneImg: WelcomeZoneImage[] = previewWelcomeImg.map((img) => ({
      id: 0,
      image: img,
      welcome_zone: 0,
    }));

    const welcomeZone = [
      {
        id: 0,
        images_welcome: welcomeZoneImg,
        welcome_desc: place.welcome_desc || '',
        place: 0,
      },
    ];

    const outsideRegImg: OutsideRegImages[] = previewOutregImg.map((img) => ({
      id: 0,
      image: img,
      outsite_reg: 0,
    }));

    const outsideReg: OutsideReg[] = [
      {
        id: 0,
        images_out_reg: outsideRegImg,
        outreg_price: place.outreg_price || 0,
        outreg_conditions: place.outreg_conditions || '',
        outreg_include: place.outreg_desc || '',
        place: 0,
      },
    ];

    const territoryImg: TerritoryImage[] = previewTerritoryImg.map((img) => ({
      id: 0,
      image: img,
      territory: 0,
    }));

    const newTerritory: Territory[] = [
      {
        id: 0,
        images_territory: territoryImg,
        territory_desc: place.territory_desc,
        place: 0,
      },
    ];

    //! поправить, как будет доступна загрузка свадебных альбомов в форме
    const imagesWedding: ImagesWedding[] = [];

    const newPlace = {
      ...place,
      id: 0,
      start_time: startTime,
      finish_time: finishTime,
      type_place: typePlace,
      type_feature: typeFeature,
      location: newLocation,
      event: newEvent,
      kitchen: newKitchen,
      cover_place: '',
      images_place: imagesPlace,
      images_wedding: imagesWedding,
      welcome_zones: welcomeZone,
      outsites_reg: outsideReg,
      territory: newTerritory,
      //!
      areas: makeUniAreas(),
    };

    delete newPlace.welcome_desc;
    delete newPlace.outreg_price;
    delete newPlace.outreg_desc;
    delete newPlace.outreg_conditions;
    //delete newPlace.territory_desc;
    //delete newPlace.place_img;

    return newPlace;
  };

  const uniPlace: PlaceReceived = useMemo(() => {
    //! подумать о том, чтобы вызывалась только при previewShow = тру
    //if (previewShow) {
    return makePlaceRecieved();
    //   } else return uniPlace;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [previewShow]);

  console.log('uniPlace', uniPlace);

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
                <TextDescription item={uniPlace} />
                <TextEvents events={place.event} />
                <TextKitchen
                  kids={place.children_kitchen}
                  kitchens={place.kitchen}
                />

                <PlaceAreas
                  areas={uniAreas}
                  average_check={place.average_check}
                />

                <TextDetails description={place.description} />
                <TextFeatures
                  features={place.type_feature}
                  territories={place.type_place}
                />

                {/* <AlbumCardContainer
                  territory={place.territory_desc}
                  welcome_zones={welcome_zones}
                  outside_reg={outside_reg}
                  territoryImg={territoryImg}
                  welcomeImg={welcomeImg}
                  outregImg={outregImg}
                /> */}

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
