import { Card, Col, Container, Modal, Row} from 'react-bootstrap';
import styles from '@/styles/addproperty/AddProperty.module.scss';
import LocationPhotos from '@/components/catalog/catalogItem/locationPhotos/locationsPhotos';
import LocationDescription from '@/components/catalog/catalogItem/locationPhotos/LocationDescription';
import { 
    PhotosWeddingsHeld,
    ProviderCardSpecialBlock, 
    TextHeadingDescription, 
    TextHeadingDetailsKitchen, 
    TextHeadingFeatures, 
    TextHeadingSiteDetails 
} from '@/components/catalog';
import CatalogItemSlider from '@/components/catalog/catalogItem/catalogItemSlider/CatalogItemSlider';
import { cards } from '@/mocks/cards';
import YaMap from '@/components/catalog/catalogItem/yaMap/yaMap';
import { Place } from '@/types/placeType';

type PreviewProps = {
    previewShow: boolean,
    handlePreviewClose: () => void
    place: Place
}

function Preview({ previewShow, handlePreviewClose, place }: PreviewProps) {
    const { providerCards } = cards || {};
    const { photosHeld } = cards || {};
    const { festivEvents } = cards || {};
    const { event } = place || [];

return (
    <Modal
        fullscreen
        show={previewShow}
        onHide={handlePreviewClose}
    >
        <Modal.Header closeButton className={styles.preview_header} >
            <h3 className='h5 text-muted fw-normal modal-title d-none d-sm-block text-nowrap'>
                {'Предпросмотр\u00a0'}<span>площадки</span>
            </h3>
        </Modal.Header>

        <Modal.Body className="d-flex flex-column p-0">
            <Container  className='mt-2 mt-sm-0 py-4 py-sm-5'>

                <LocationPhotos
                    photoUrls={[
                    'https://picsum.photos/700/400',
                    'https://picsum.photos/350/200',
                    'https://picsum.photos/700/400',
                    'https://picsum.photos/369/224',
                    'https://picsum.photos/369/224',
                    ]}
                />

                <Col className='w-lg-75 m-auto px-3'>
                    <LocationDescription title={place.title} address={place.address} />

                    <TextHeadingDescription place={place}/>

                    <Row className='mb-xl-5 mb-md-4 mb-sm-3'>
                        <h4>Подходит для:</h4>
                        <Row xs={1} sm={2} md={3}>
                            {event?.map((item, i) => {
                            // отображаем только то, что кликнул поставщик
                            const renderEvent = festivEvents.find(festivEvent => festivEvent.alt == item)

                            return(
                                <Col key={i} className='mb-1'>
                                    <i className= {`${renderEvent?.icon} me-2`}/>
                                    {renderEvent?.action}
                                </Col>
                            )})}
                        </Row>
                    </Row>

                    <TextHeadingDetailsKitchen />

                    <CatalogItemSlider />

                    <TextHeadingSiteDetails />

                    <TextHeadingFeatures />

                    {providerCards &&
                        providerCards.map((item) => (
                            <ProviderCardSpecialBlock
                            key={item.id}
                            id={item.id}
                            title={item.title}
                            description={item.description}
                            pathImg={item.pathImg}
                            />
                    ))}

                    <Row>
                        <Card.Title as="h4" className="text-sm-center text-md-start">
                            Фото проведенных свадеб на площадке
                        </Card.Title>
                        <Row>
                            {photosHeld &&
                            photosHeld.map((item) => (
                                <PhotosWeddingsHeld
                                    key={item.id}
                                    title={item.title}
                                    description={item.description}
                                    pathImg={item.pathImg}
                                />
                            ))}
                        </Row>
                    </Row>

                    <Col md={12} className='my-5' id="map">
                        <h4>Расположение</h4>
                        <YaMap />
                    </Col>
                </Col>
                
            </Container>
        </Modal.Body>
    </Modal>
    )
}

export default Preview;
