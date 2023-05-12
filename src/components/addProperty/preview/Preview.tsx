import { useState } from 'react'
import { Button, Card, Col, Container, Modal, Row} from 'react-bootstrap';
import styles from '@/styles/addproperty/AddProperty.module.scss';
import LocationPhotos from '@/components/catalog/catalogItem/locationPhotos/locationsPhotos';
import LocationDescription from '@/components/catalog/catalogItem/locationPhotos/LocationDescription';
import AnchorBtns from '@/components/catalog/catalogItem/anchorBtns/AnchorBtns';
import { PhotosWeddingsHeld, ProviderCardSpecialBlock, TextHeadingDescription, TextHeadingDetailsKitchen, TextHeadingFeatures, TextHeadingSiteDetails, TextHeadingSuitableFor } from '@/components/catalog';
import CatalogItemSlider from '@/components/catalog/catalogItem/catalogItemSlider/CatalogItemSlider';
import { cards } from '@/mocks/cards';
import LightGallery from 'lightgallery/react'
import 'lightgallery/css/lightgallery.css'
import 'lightgallery/css/lg-thumbnail.css'
import 'lightgallery/css/lg-zoom.css'
import 'lightgallery/css/lg-fullscreen.css'
import ImageLoader from '@/components/_finder/ImageLoader';

type PreviewProps = {
    previewShow: boolean,
    handlePreviewClose: () => void
}

function Preview({ previewShow, handlePreviewClose }: PreviewProps) {
    const { providerCards } = cards || {};
    const { photosHeld } = cards || {};
    const { articles } = cards || {};
    
    // Overview collapse state
    const [overviewOpen, setOverviewOpen] = useState(false);

    // Amenities collapse state
    const [amenitiesOpen, setAmenitiesOpen] = useState(false)

    // Amenities array
    const amenitiesPreview = [
        [
            { icon: 'fi-wifi', title: 'Free WiFi' },
            { icon: 'fi-thermometer', title: 'Heating' },
            { icon: 'fi-dish', title: 'Dishwasher' },
            { icon: 'fi-parking', title: 'Parking place' },
            { icon: 'fi-snowflake', title: 'Air conditioning' },
            { icon: 'fi-iron', title: 'Iron' },
            { icon: 'fi-tv', title: 'TV' },
            { icon: 'fi-laundry', title: 'Laundry' },
            { icon: 'fi-cctv', title: 'Security cameras' }
        ],
        [
            { icon: 'fi-no-smoke', title: 'No smocking' },
            { icon: 'fi-pet', title: 'Cats' },
            { icon: 'fi-swimming-pool', title: 'Swimming pool' },
            { icon: 'fi-double-bed', title: 'Double bed' },
            { icon: 'fi-bed', title: 'Single bed' }
        ]
    ]


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
            <div className='d-flex align-items-center justify-content-sm-end w-100 ms-sm-auto'>
                <Button href='#' size='sm' variant='outline-primary' className='me-4'>
                    {'Сохранить\u00a0'}<span>и продолжить</span>
                </Button>
            </div>
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
                    <LocationDescription />

                    <AnchorBtns />

                    <TextHeadingDescription  />

                    <TextHeadingSuitableFor />

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
                    <Col md={12} className='my-5'>
                        <h4>Расположение</h4>
                        <LightGallery
                        selector='#map'
                        zoomFromOrigin={false}
                        elementClassNames='position-relative d-flex flex-column h-100'
                        >
                            <ImageLoader src='/img/map_preveiw.png' layout='fill' objectFit='cover'/>
                            <div className='position-relative d-flex h-100 flex-column align-items-center justify-content-center' style={{minHeight: '300px'}}>
                                <Button
                                    id='map'
                                    href='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2423.924340088787!2d13.428504251724927!3d52.58906113876177!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a85284201593ab%3A0x28af69e02ce0e2fc!2sBusinesshotel%20Berlin!5e0!3m2!1sru!2sua!4v1618908622013!5m2!1sru!2sua'
                                    variant='primary rounded-3 stretched-link'
                                    data-iframe={true}
                                >
                                    <i className='fi-route me-2'></i>
                                    Get directions
                                </Button>
                            </div>
                        </LightGallery>
                    </Col>
                    
                </Col>
                
            </Container>
        </Modal.Body>
    </Modal>
    )
}

export default Preview;
