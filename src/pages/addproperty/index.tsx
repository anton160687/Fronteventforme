import { ChangeEvent, MouseEvent, useState } from 'react';
import Link from 'next/link';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ProgressBar from 'react-bootstrap/ProgressBar'
import Button from 'react-bootstrap/Button'
import Preview from '@/components/addProperty/preview/Preview'
import ProgressSideBar from '@/components/addProperty/progressSideBar/ProgressSideBar';
import ContactsForm from '@/components/addProperty/contactsForm/ContactsForm';
import FileUploader from '@/components/addProperty/fileUploader/FileUploader';
import LocationForm from '@/components/addProperty/locationForm/LocationForm';

import { DescriptionPlaceAddProperty, PropertyDetailsAddProperty } from '@/components/addProperty';

import BasicForm from '@/components/addProperty/basicForm/BasicForm';
import AreaForm from '@/components/addProperty/areaForm/AreaForm';
import { Area } from '@/types/areaType';


const AddPropertyPage = () => {
    // Превью
    const [previewShow, setPreviewShow] = useState(false);
    const handlePreviewClose = () => setPreviewShow(false);
    const handlePreviewShow = () => setPreviewShow(true);
    // Загрузка картинок
    const [gallery, setGallery] = useState<string[]>([]);
    // Базовая информация
    const [title, setTitle] = useState<string>('');
    function handleChange(e: ChangeEvent<HTMLInputElement>) {
        setTitle(e.target.value);
    }
    // Локация
    const [city, setCity] = useState<string>('Москва');
    const [address, setAddress] = useState<string>('');
    // Площадки
    const [areas, setAreas] = useState<Area[]>([]);
    const [areaIndexArray, setAreaIndexArray] = useState<number[]>([0,]);
    
    function addArea(e: MouseEvent<HTMLParagraphElement>) {
        e.preventDefault;
        let last = areaIndexArray[areaIndexArray.length - 1];
        setAreaIndexArray([...areaIndexArray, ++last]);
    }

    function renderAreaForms() {
        return areaIndexArray.map((index) => (
            <section key={index} id={`area${index}`} className='card card-body border-0 shadow-sm p-4 mb-4'>
                <AreaForm index={index} areas={areas} setAreas={setAreas} />
                <p className="text-primary mb-3" onClick={addArea}>
                    <i className='fi-plus-circle me-3'></i> Добавить помещение
                </p>
            </section>
        ))
    }

    return (<>
        {/* Модальное окно превью */}
        <Preview previewShow={previewShow} handlePreviewClose={handlePreviewClose} />

        <Container className='py-5'>
            <Row>
                {/* Основное содержание */}
                <Col lg={8}>
                    <div className='mb-4'>
                        <h1 className='h2 mb-0'>Добавить площадку</h1>
                        <div className='d-lg-none pt-3 mb-2'>65% content filled</div>
                        <ProgressBar variant='warning' now={65} style={{ height: '.25rem' }} className='d-lg-none mb-4' />
                    </div>

                    {/* Базовая информация */}
                    <section id='basic-info' className='card card-body border-0 shadow-sm p-4 mb-4'>
                        <h2 className='h4 mb-4'>
                            <i className='fi-info-circle text-primary fs-5 mt-n1 me-2'></i>
                            Базовая информация
                        </h2>
                        <BasicForm title={title} handleChange={handleChange} location />
                    </section>

                    {/* Локация */}

                    <LocationForm setCity={setCity} setAddress={setAddress} address={address}/>

                    <DescriptionPlaceAddProperty/>

                    <PropertyDetailsAddProperty />
                    
                    {/* Property details */}
                    <section id='details' className='card card-body border-0 shadow-sm p-4 mb-4'>
                        <h2 className='h4 mb-4'>
                            <i className='fi-edit text-primary fs-5 mt-n1 me-2'></i>
                            Property details
                        </h2>
                        <Form.Group controlId='ap-area' className='mb-4' style={{ maxWidth: '25rem' }}>
                            <Form.Label>Total area, sq.m</Form.Label>
                            <Form.Control type='number' defaultValue={56} min={20} placeholder='Enter your area' />
                        </Form.Group>
                        <Form.Group className='mb-4'>
                            <Form.Label className='d-block fw-bold mb-2 pb-1'>Bedrooms</Form.Label>
                            <ButtonGroup size='sm'>
                                {bedrooms.map((bedroom, indx) => (
                                    <ToggleButton
                                        key={indx}
                                        type='radio'
                                        id={`bedrooms-${indx}`}
                                        name='bedrooms'
                                        value={bedroom.value}
                                        checked={bedroomsValue === bedroom.value}
                                        onChange={(e) => setBedroomsValue(e.currentTarget.value)}
                                        variant='outline-secondary fw-normal'
                                    >{bedroom.name}</ToggleButton>
                                ))}
                            </ButtonGroup>
                        </Form.Group>
                        <Form.Group className='mb-4'>
                            <Form.Label className='d-block fw-bold mb-2 pb-1'>Bathrooms</Form.Label>
                            <ButtonGroup size='sm'>
                                {bathrooms.map((bathroom, indx) => (
                                    <ToggleButton
                                        key={indx}
                                        type='radio'
                                        id={`bathrooms-${indx}`}
                                        name='bathrooms'
                                        value={bathroom.value}
                                        checked={bathroomsValue === bathroom.value}
                                        onChange={(e) => setBathroomsValue(e.currentTarget.value)}
                                        variant='outline-secondary fw-normal'
                                    >{bathroom.name}</ToggleButton>
                                ))}
                            </ButtonGroup>
                        </Form.Group>
                        <Form.Group className='mb-4'>
                            <Form.Label className='d-block fw-bold mb-2 pb-1'>Parking spots</Form.Label>
                            <ButtonGroup size='sm'>
                                {parkings.map((parking, indx) => (
                                    <ToggleButton
                                        key={indx}
                                        type='radio'
                                        id={`parkings-${indx}`}
                                        name='parkings'
                                        value={parking.value}
                                        checked={parkingsValue === parking.value}
                                        onChange={(e) => setParkingsValue(e.currentTarget.value)}
                                        variant='outline-secondary fw-normal'
                                    >{parking.name}</ToggleButton>
                                ))}
                            </ButtonGroup>
                        </Form.Group>
                        <Form.Group className='mb-4'>
                            <Form.Label className='d-block fw-bold mb-2 pb-1'>Amenities</Form.Label>
                            <Row xs={1} sm={3}>
                                {amenities.map((amenity, indx) => (
                                    <Col key={indx}>
                                        <Form.Check
                                            type='checkbox'
                                            id={`amenities-${indx}`}
                                            value={amenity.value}
                                            label={amenity.value}
                                            defaultChecked={amenity.checked}
                                        />
                                    </Col>
                                ))}
                            </Row>
                        </Form.Group>
                        <Form.Group className='mb-4'>
                            <Form.Label className='d-block fw-bold mb-2 pb-1'>Pets</Form.Label>
                            <Row xs={1} sm={3}>
                                <Col>
                                    {pets.map((pet, indx) => (
                                        <Form.Check
                                            key={indx}
                                            type='checkbox'
                                            id={`pets-${indx}`}
                                            value={pet.value}
                                            label={pet.value}
                                            defaultChecked={pet.checked}
                                        />
                                    ))}
                                </Col>
                            </Row>
                        </Form.Group>
                        <Form.Group controlId='ap-description'>
                            <Form.Label>Description</Form.Label>
                            <Form.Control as='textarea' rows={5} placeholder='Describe your property' />
                            <Form.Text>1500 characters left</Form.Text>
                        </Form.Group>
                    </section>

                    <LocationForm setCity={setCity} setAddress={setAddress} address={address} />


                    {/* Заливка фотографий*/}
                    <FileUploader gallery={gallery} setGallery={setGallery} />

                    {/* Площадки */}
                    {renderAreaForms()}

                    {/* Контактная информация */}
                    < ContactsForm />

                    {/* Action buttons */}
                    <section className='d-sm-flex justify-content-between pt-2'>
                        <Button size='lg' variant='outline-primary d-block w-100 w-sm-auto mb-3 mb-sm-2' onClick={handlePreviewShow}>
                            <i className='fi-eye-on ms-n1 me-2'></i>
                            Preview
                        </Button>
                        <Link href='/real-estate/property-promotion' passHref>
                            <Button size='lg' variant='primary d-block w-100 w-sm-auto mb-2'>Save and continue</Button>
                        </Link>
                    </section>
                </Col>

                {/* Боковая панель с прогрессом заполнения */}
                <Col lg={{ span: 3, offset: 1 }} className='d-none d-lg-block'>
                    <ProgressSideBar />
                </Col>
            </Row>
        </Container>
    </>
    )
}

export default AddPropertyPage
