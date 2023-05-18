import {
  ChangeEvent,
  FormEvent,
  MouseEvent,
  SetStateAction,
  useEffect,
  useState,
} from 'react';
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
import PlaceDescription from '@/components/addProperty/placeDescription/placeDescription';
import PlaceDetails from '@/components/addProperty/placeDetails/PlaceDetails';
import { MainPhotos } from '@/components/addProperty/mainPhotos/MainPhotos';
import WeddingAlbums from '@/components/addProperty/weddingAlbums/weddingAlbums';
import { useSelector } from 'react-redux';
import { selectUser } from '@/store/user/userSlice';
import { createPlace } from '@/store/place/placeAPI';
import { Area } from '@/types/areaType';
import { Album, Place } from '@/types/placeType';
import { ADD_PLACE_NAMES, TOKEN_TYPES } from '@/constant';

//! обязательно проверть корректность после подключения API: проценты в прогресс баре, заполнение всех обязательных полей, загрузку фоток
function AddPropertyPage() {
  const user = useSelector(selectUser);
  const initialPlaceState: Place = {
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
    start_time: new Date(),
    finish_time: new Date(),
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
  function setGeodata(lat: number, lon: number) {
    setPlace({ ...place, ['longitude']: lon, ['width']: lat });
  }
  function setCity(data: string) {
    setPlace({ ...place, ['city']: data });
  }
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
    let token = localStorage.getItem(TOKEN_TYPES.default);
    if (form.checkValidity() && token) {
      setValidated(true);
      createPlace(place, token);
    }
  }
  //Progress Bar
  const [percent, setPercent] = useState<number>(0);
  const [isFormFilled, setIsFormFilled] = useState<boolean>(false);
  // Загрузка картинок
  const [mainPhotos, setMainPhotos] = useState<string[]>([]);
  const [territoryImg, setTerritoryImg] = useState<string[]>([]);
  const [welcomeImg, setWelcomeImg] = useState<string[]>([]);
  const [outregImg, setOutregImg] = useState<string[]>([]);
  const [albums, setAlbums] = useState<Album[]>([]);
  const [albumIndexArr, setAlbumIndexArr] = useState<number[]>([0]);

  //TODO расскоменировать или подкорректировать при подключении API
  // useEffect(() => {
  //   const placeImg = mainPhotos.slice(1);
  //   setPlace((prev) => ({
  //     ...prev,
  //     cover_place: mainPhotos[0],
  //     place_img: placeImg,
  //   }));
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [mainPhotos]);

  // useEffect(() => {
  //   setPlace((prev) => ({ ...prev, welcome_img: welcomeImg }));
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [welcomeImg]);

  // useEffect(() => {
  //   setPlace((prev) => ({ ...prev, territory_img: territoryImg }));
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [territoryImg]);

  // useEffect(() => {
  //   setPlace((prev) => ({ ...prev, outreg_img: outregImg }));
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [outregImg]);

  // useEffect(() => {
  //   setPlace((prev) => ({ ...prev, wedding_albums: albums }));
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [albums]);

  function addAlbum(e: MouseEvent<HTMLParagraphElement>) {
    e.preventDefault;
    let last = albumIndexArr[albumIndexArr.length - 1];
    setAlbumIndexArr([...albumIndexArr, ++last]);
  }

  function renderWeddingAlbum() {
    return albumIndexArr.map((index) => (
      <section
        key={index}
        id={`${ADD_PLACE_NAMES.weddingAlbum.id}${index}`}
        className="card card-body border-0 shadow-sm p-4 mb-4"
      >
        <WeddingAlbums index={index} albums={albums} setAlbums={setAlbums} />
        <p className="cursor-pointer text-primary mb-3" onClick={addAlbum}>
          <i className="fi-plus-circle me-3"></i> Добавить альбом
        </p>
      </section>
    ));
  }

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

              <MainPhotos setMainPhotos={setMainPhotos} />

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
                setTerritoryImg={setTerritoryImg}
                setWelcomeImg={setWelcomeImg}
                setOutregImg={setOutregImg}
              />

              {renderWeddingAlbum()}

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
              mainPhotos={mainPhotos}
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
}

export default AddPropertyPage;
