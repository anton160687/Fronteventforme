import { useState } from 'react'
import { Button, Card, Col, Container, Modal, Row} from 'react-bootstrap';
import styles from '@/styles/addproperty/AddProperty.module.scss';
import LocationPhotos from '@/components/catalog/catalogItem/locationPhotos/locationsPhotos';
import LocationDescription from '@/components/catalog/catalogItem/locationPhotos/LocationDescription';
import AnchorBtns from '@/components/catalog/catalogItem/anchorBtns/AnchorBtns';
import { ArticlesWeddings, PhotosWeddingsHeld, ProviderCardSpecialBlock, TextHeadingDescription, TextHeadingDetailsKitchen, TextHeadingFeatures, TextHeadingSiteDetails, TextHeadingSuitableFor } from '@/components/catalog';
import CatalogItemSlider from '@/components/catalog/catalogItem/catalogItemSlider/CatalogItemSlider';
import { cards } from '@/mocks/cards';

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

                    <Row className="my-xl-4 my-md-3 my-sm-2">
                        <Card.Title as="h4" className="mb-xl-4 mb-md-3 mb-sm-2">
                            Фото проведенных свадеб на площадке
                        </Card.Title>
                        <div className="d-flex justify-content-evenly">
                            {photosHeld &&
                            photosHeld.map((item) => (
                                <PhotosWeddingsHeld
                                    key={item.id}
                                    title={item.title}
                                    description={item.description}
                                    pathImg={item.pathImg}
                                />
                            ))}
                        </div>
                    </Row>

                    <Row className="justify-content-between my-xl-4 my-md-3 my-sm-2">
                        <Card.Title as="h4" className="mb-xl-4 mb-md-3 mb-sm-2 w-100">
                            Статьи о свадьбах на площадке “Villa Arcobaleno”
                        </Card.Title>
                        <div className="d-flex justify-content-evenly">
                            {articles && articles.map((item) => (
                                <ArticlesWeddings
                                    key={item.id}
                                    title={item.title}
                                    description={item.description}
                                    pathImg={item.pathImg}
                                    dateText={item.dateText}
                                />
                            ))}
                        </div>
                    </Row>
                </Col>
                
            </Container>
        </Modal.Body>
    </Modal>
    )
}

export default Preview;
