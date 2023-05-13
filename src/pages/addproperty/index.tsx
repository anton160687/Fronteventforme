import { ChangeEvent, FormEvent, MouseEvent, useState } from 'react';
import {
  Form,
  Row,
  Col,
  Container,
  ProgressBar,
  Button,
} from 'react-bootstrap';
import Preview from '@/components/addProperty/preview/Preview';
import ProgressSideBar from '@/components/addProperty/progressSideBar/ProgressSideBar';
import LocationForm from '@/components/addProperty/locationForm/LocationForm';
import BasicForm from '@/components/addProperty/basicForm/BasicForm';
import AreaForm from '@/components/addProperty/areaForm/AreaForm';
import { Area } from '@/types/areaType';
import PlaceDescription from '@/components/addProperty/placeDescription/placeDescription';
import PlaceDetails from '@/components/addProperty/placeDetails/PlaceDetails';
import { Place } from '@/types/placeType';
import { FilePondFile } from 'filepond';
import { MainPhotos } from '@/components/addProperty/mainPhotos/MainPhotos';
import { ADD_PLACE_NAMES } from '@/constant';
import { Anchor } from '@/types/anchor';

const AddPropertyPage = () => {
  const initialPlaceState: Place = {
    title: '',
    city: '',
    metro: '', //сделать поле необязательным? вообще убрать?
    address: '',
    geodata: [], //нет на бэке, обязательно для работы карт
    location: [],
    ya_id: undefined, //нет на бэке, обязательно для работы виджета отзывов
    kitchen: [],
    event: [],
    features: [],
    territory: [],
    start_time: new Date(),
    finish_time: new Date(),
    fireworks: false,
    children_kitchen: false,
    //чем alco и corkage_fee отличаются?
    alco: false,
    corkage_fee: false,
    payment_of_alco: 0,
    lease_extension: false,
    lease_extension_price: 0,
    average_check: 0,
    description: '',
    //этих полей на бэке вообще нет, кажется
    max_serving: 0,
    parking: 0,
    territory_desc: '',
    welcome_desc: '',
    outreg_price: 0,
    outreg_desc: '',
    outreg_conditions: '',
  };
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
  function handleCheckBox(name: string, array: string[]) {
    setPlace({ ...place, [name]: array });
  }
  //обработчик радио
  function handleRadio(e: ChangeEvent<HTMLInputElement>) {
    setPlace({ ...place, [e.target.name]: !!e.target.value });
  }
  // Специальные обработчики формы "Локация"
  function setAddress(data: string) {
    setPlace({ ...place, ['address']: data });
  }
  function setGeodata(lat: number, lon: number) {
    setPlace({ ...place, ['geodata']: [lat, lon] });
  }
  function setCity(data: string) {
    setPlace({ ...place, ['city']: data });
  }
  // Загрузка картинок
  const [gallery, setGallery] = useState<FilePondFile[]>([]);
  // Площадки
  const [areas, setAreas] = useState<Area[]>([]);
  const [areaIndexArray, setAreaIndexArray] = useState<number[]>([0]);

  function addArea(e: MouseEvent<HTMLParagraphElement>) {
    e.preventDefault;
    let last = areaIndexArray[areaIndexArray.length - 1];
    setAreaIndexArray([...areaIndexArray, ++last]);
  }

  function renderAreaForms() {
    return areaIndexArray.map((index) => (
      <section
        key={index}
        id={`${ADD_PLACE_NAMES.area.id}${index}`}
        className="card card-body border-0 shadow-sm p-4 mb-4"
      >
        <AreaForm index={index} areas={areas} setAreas={setAreas} />
        <p className="text-primary mb-3" onClick={addArea}>
          <i className="fi-plus-circle me-3"></i> Добавить помещение
        </p>
      </section>
    ));
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
    if (form.checkValidity()) {
      setValidated(true);
      //здесь будут действия по отправке data на бэк
    }
  }

  console.log('Площадка', place);
  //чтобы можно было использовать в обоих ProgressBar
  const [percent, setPercent] = useState<number>(0);
  //
  const [isFormFilled, setIsFormFilled] = useState<boolean>(false);
  console.log('isFormFilled', isFormFilled);

  //т.к. помещения - отдельный компонент, то при ее заполнении anchors сбрасываются на изначальный стейт
  // const anchors: Anchor[] = [
  //   {
  //     to: ADD_PLACE_NAMES.basic.id,
  //     label: ADD_PLACE_NAMES.basic.name,
  //     completed: false,
  //   },
  //   {
  //     to: ADD_PLACE_NAMES.location.id,
  //     label: ADD_PLACE_NAMES.location.name,
  //     completed: false,
  //   },
  //   {
  //     to: ADD_PLACE_NAMES.description.id,
  //     label: ADD_PLACE_NAMES.description.name,
  //     completed: false,
  //   },
  //   {
  //     to: ADD_PLACE_NAMES.mainPhotos.id,
  //     label: ADD_PLACE_NAMES.mainPhotos.name,
  //     completed: true,
  //   },
  //   {
  //     to: `${ADD_PLACE_NAMES.area.id}0`,
  //     label: ADD_PLACE_NAMES.area.name,
  //     completed: false,
  //   },
  //   {
  //     to: ADD_PLACE_NAMES.details.id,
  //     label: ADD_PLACE_NAMES.details.name,
  //     completed: false,
  //   },
  //   {
  //     to: ADD_PLACE_NAMES.weddingAlbum.id,
  //     label: ADD_PLACE_NAMES.weddingAlbum.name,
  //     completed: true,
  //   },
  // ];

  return (
    <>
      <Container className="py-5">
        <Row>
          <Col lg={8}>
            <Form onSubmit={handleSubmit}>
              <div className="mb-4">
                <h1 className="h2 mb-0">Добавить площадку</h1>
                <div className="d-lg-none pt-3 mb-2">
                  {percent}% профиля заполнено
                </div>
                <ProgressBar
                  variant="warning"
                  now={percent}
                  style={{ height: '.25rem' }}
                  className="d-lg-none mb-4"
                />
              </div>

              <section
                id={ADD_PLACE_NAMES.basic.id}
                className="card card-body border-0 shadow-sm p-4 mb-4"
              >
                <h2 className="h4 mb-4">
                  <i className="fi-info-circle text-primary fs-5 mt-n1 me-2"></i>
                  {ADD_PLACE_NAMES.basic.name}
                </h2>
                <BasicForm
                  title={place.title}
                  handleChange={handleChange}
                  location
                />
              </section>

              <LocationForm
                setCity={setCity}
                setAddress={setAddress}
                setGeodata={setGeodata}
                setYaId={handleChange}
                address={place.address}
                ya_id={place.ya_id}
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

              <MainPhotos
                name="filepond"
                gallery={gallery}
                setGallery={setGallery}
              />

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

              {/* //TODO: свадебные альбомы */}

              <section className="d-sm-flex justify-content-between pt-2">
                <Button
                  size="lg"
                  variant="outline-primary d-block w-100 w-sm-auto mb-3 mb-sm-2"
                  onClick={handlePreviewShow}
                >
                  <i className="fi-eye-on ms-n1 me-2"></i>
                  Предпросмотр
                </Button>

                <Button
                  type="submit"
                  size="lg"
                  variant="primary d-block w-100 w-sm-auto mb-2"
                  disabled={!isFormFilled}
                >
                  Сохранить
                </Button>
              </section>
            </Form>
          </Col>

          <Col lg={{ span: 3, offset: 1 }} className="d-none d-lg-block">
            <ProgressSideBar
              place={place}
              areas={areas}
              setPercent={setPercent}
              percent={percent}
              setIsFormFilled={setIsFormFilled}
              //   anchors={anchors}
            />
          </Col>
        </Row>
      </Container>

      <Preview
        previewShow={previewShow}
        handlePreviewClose={handlePreviewClose}
      />
    </>
  );
};

export default AddPropertyPage;
