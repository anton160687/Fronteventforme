import { ChangeEvent, FormEvent, MouseEvent, useEffect, useState } from 'react';
import { Form, Row, Col, Container, ProgressBar, Button } from 'react-bootstrap';
import Preview from '@/components/addProperty/preview/Preview'
import ProgressSideBar from '@/components/addProperty/progressSideBar/ProgressSideBar';
import FileUploader from '@/components/addProperty/fileUploader/FileUploader';
import LocationForm from '@/components/addProperty/locationForm/LocationForm';
import BasicForm from '@/components/addProperty/basicForm/BasicForm';
import AreaForm from '@/components/addProperty/areaForm/AreaForm';
import { Area } from '@/types/areaType';
import PlaceDescription from '@/components/addProperty/placeDescription/placeDescription';
import PlaceDetails from '@/components/addProperty/placeDetails/PlaceDetails';
import { Place } from '@/types/placeType';
import { FilePondFile } from 'filepond';
import { useSelector } from 'react-redux';
import { selectUser } from '@/store/user/userSlice';


const AddPropertyPage = () => {
    const user = useSelector(selectUser);
    const initialPlaceState: Place = {
        user: user?.id,
        type_place: 1,
        title: '',
        city: '',
        metro: '',
        address: '',
        longitude: 0,
        width: 0,
        location: [],
        id_yandex: '',
        kitchen: [],
        event: [],
        type_feature: [],
        territory: [],
        start_time: new Date,
        finish_time: new Date,
        fireworks: false,
        children_kitchen: false,
        alco: false,
        payment_of_alco: 0,
        lease_extension: false,
        lease_extension_price: 0,
        average_check: 0,
        description: '',
        max_serving: 0,
        parking: 0,
        territory_desc: '',
        welcome_desc: '',
        outreg_price: 0,
        outreg_desc: '',
        outreg_conditions: '',
    }
    const [place, setPlace] = useState<Place>(initialPlaceState);
    //обработчик для стандартных инпутов type=text
    function handleChange(e: ChangeEvent<HTMLInputElement>) {
        setPlace({ ...place, [e.target.name]: e.target.value });
    }
    //обработчик для стандартных инпутов type=number
    function handleNumberChange(e: ChangeEvent<HTMLInputElement>) {
        setPlace({ ...place, [e.target.name]: +e.target.value });
    }
    //обработчик чекбоксов
    function handleCheckBox(name: string, array: number[]) {
        setPlace({ ...place, [name]: array });
    }
    //обработчик радио
    function handleRadio(e: ChangeEvent<HTMLInputElement>) {
        let value = +e.target.value;
        setPlace({ ...place, [e.target.name]: !!value });
    }
    // Специальные обработчики формы "Локация"
    function setAddress(data: string) {
        setPlace({ ...place, ['address']: data });
    }
    function setGeodata(lat: number, lon: number,) {
        setPlace({ ...place, ['longitude']: lon, ['width']: lat });
    }
    function setCity(data: string) {
        setPlace({ ...place, ['city']: data });
    }
    // Загрузка картинок
    const [gallery, setGallery] = useState<FilePondFile[]>([]);
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
    // Превью
    const [previewShow, setPreviewShow] = useState(false);
    const handlePreviewClose = () => setPreviewShow(false);
    const handlePreviewShow = () => setPreviewShow(true);
    //Валидация, отправка формы
    const [validated, setValidated] = useState(false);

    function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        const form = event.currentTarget;
        let token = localStorage.getItem('token');
        if (form.checkValidity()) {
          setValidated(true);
        
        }
    }

    console.log(place);

    return (<>
        <Container className='py-5'>
            <Row>
                <Col lg={8}>
                    <Form onSubmit={handleSubmit} validated={validated}>
                        <div className='mb-4'>
                            <h1 className='h2 mb-0'>Добавить площадку</h1>
                            <div className='d-lg-none pt-3 mb-2'>65% content filled</div>
                            <ProgressBar variant='warning' now={65} style={{ height: '.25rem' }} className='d-lg-none mb-4' />
                        </div>

                        <section id='basic-info' className='card card-body border-0 shadow-sm p-4 mb-4'>
                            <h2 className='h4 mb-4'>
                                <i className='fi-info-circle text-primary fs-5 mt-n1 me-2'></i>
                                Базовая информация
                            </h2>
                            <BasicForm title={place.title} handleChange={handleChange} location />
                        </section>

                        <LocationForm
                            setCity={setCity}
                            setAddress={setAddress}
                            setGeodata={setGeodata}
                            setInputFields={handleChange}
                            address={place.address}
                            metro={place.metro}
                            id_yandex={place.id_yandex}
                        />

                        <PlaceDescription
                            handleChange={handleChange}
                            handleCheckBox={handleCheckBox}
                            handleNumberChange={handleNumberChange}
                            handleRadio={handleRadio}
                            children_kitchen={place.children_kitchen}
                            fireworks={place.fireworks}
                            alco={place.alco}
                        />

                        <FileUploader name='filepond' gallery={gallery} setGallery={setGallery} />

                        {renderAreaForms()}

                        <PlaceDetails
                            handleChange={handleChange}
                            handleCheckBox={handleCheckBox}
                            handleNumberChange={handleNumberChange}
                            description={place.description}
                            territory_desc={place.territory_desc}
                            welcome_desc={place.welcome_desc}
                            outreg_price={place.outreg_price}
                            outreg_desc={place.outreg_desc}
                            outreg_conditions={place.outreg_conditions}
                        />

                        <section className='d-sm-flex justify-content-between pt-2'>
                            <Button size='lg' variant='outline-primary d-block w-100 w-sm-auto mb-3 mb-sm-2' onClick={handlePreviewShow}>
                                <i className='fi-eye-on ms-n1 me-2'></i>
                                Предпросмотр
                            </Button>

                            <Button type='submit' size='lg' variant='primary d-block w-100 w-sm-auto mb-2'>
                                Сохранить
                            </Button>

                        </section>
                    </Form>
                </Col>

                <Col lg={{ span: 3, offset: 1 }} className='d-none d-lg-block'>
                    <ProgressSideBar />
                </Col>
            </Row>
        </Container>

        <Preview previewShow={previewShow} handlePreviewClose={handlePreviewClose} />
    </>
    )
}

export default AddPropertyPage;