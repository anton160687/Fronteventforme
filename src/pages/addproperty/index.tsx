import { ChangeEvent, useState } from 'react';
import Link from 'next/link';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ProgressBar from 'react-bootstrap/ProgressBar'
import Button from 'react-bootstrap/Button'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import ToggleButton from 'react-bootstrap/ToggleButton'
import Form from 'react-bootstrap/Form'
import Preview from '@/components/addProperty/preview/Preview'
import ProgressSideBar from '@/components/addProperty/progressSideBar/ProgressSideBar';
import ContactsForm from '@/components/addProperty/contactsForm/ContactsForm';
import FileUploader from '@/components/addProperty/fileUploader/FileUploader';
import LocationForm from '@/components/addProperty/locationForm/LocationForm';
import { AddPropertyDescriptionPlace } from '@/components/addProperty';

const AddPropertyPage = () => {
    // Превью
    const [previewShow, setPreviewShow] = useState(false);
    const handlePreviewClose = () => setPreviewShow(false);
    const handlePreviewShow = () => setPreviewShow(true);
    // Загрузка картинок
    const [gallery, setGallery] = useState<string[]>([]);
    // Базовая информация
    const [title, setTitle] = useState<string>('');
    const [lettersLeft, setLettersLeft] = useState<number>(50);
    function handleChange(e: ChangeEvent<HTMLInputElement>) {
        let value = e.target.value;
        setTitle(value);
        setLettersLeft(50 - value.length);
    }
    // Локация
    const [city, setCity] = useState<string>('Москва');
    const [address, setAddress] = useState<string>('');
    // логи для тестов, потом - удалить
    console.log("Это город " + city + " это адрес " + address);

    // Number of bedrooms radios buttons
    const [bedroomsValue, setBedroomsValue] = useState('4')
    const bedrooms = [
        { name: 'Studio', value: 'studio' },
        { name: '1', value: '1' },
        { name: '2', value: '2' },
        { name: '3', value: '3' },
        { name: '4', value: '4' },
        { name: '5+', value: '5+' }
    ]
    // Number of bathrooms radios buttons
    const [bathroomsValue, setBathroomsValue] = useState('2')
    const bathrooms = [
        { name: '1', value: '1' },
        { name: '2', value: '2' },
        { name: '3', value: '3' },
        { name: '4', value: '4' }
    ]
    // Number of bathrooms radios buttons
    const [parkingsValue, setParkingsValue] = useState('2')
    const parkings = [
        { name: '1', value: '1' },
        { name: '2', value: '2' },
        { name: '3', value: '3' },
        { name: '4', value: '4' }
    ]
    // Amenities (checkboxes)
    const amenities = [
        { value: 'WiFi', checked: true },
        { value: 'Pets-friendly', checked: false },
        { value: 'Dishwasher', checked: false },
        { value: 'Air conditioning', checked: true },
        { value: 'Pool', checked: false },
        { value: 'Iron', checked: true },
        { value: 'Balcony', checked: false },
        { value: 'Bar', checked: false },
        { value: 'Hair dryer', checked: true },
        { value: 'Garage', checked: false },
        { value: 'TV', checked: true },
        { value: 'Kitchen', checked: true },
        { value: 'Gym', checked: false },
        { value: 'Linens', checked: true },
        { value: 'Breakfast', checked: false },
        { value: 'Free parking', checked: true },
        { value: 'Heating', checked: true },
        { value: 'Security cameras', checked: false }
    ]
    // Pets (checkboxes)
    const pets = [
        { value: 'Cats allowed', checked: false },
        { value: 'Dogs allowed', checked: false }
    ]


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
                        <Form.Group controlId='ap-title' className='mb-3'>
                            <Form.Label>Название <span className='text-danger'>*</span></Form.Label>
                            <Form.Control
                                placeholder='Напишите название площадки'
                                maxLength={50}
                                value={title}
                                onChange={handleChange}
                                required
                            />
                            <Form.Text>Осталось {lettersLeft} символов</Form.Text>
                        </Form.Group>
                    </section>

                    {/* Локация */}
                    <LocationForm setCity={setCity} setAddress={setAddress} address={address}/>

                    <AddPropertyDescriptionPlace/>

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

                    {/* Заливка фотографий*/}
                    <FileUploader gallery={gallery} setGallery={setGallery} />

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
