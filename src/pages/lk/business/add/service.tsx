import { useState, ChangeEvent, MouseEvent, useEffect } from 'react';
import { useRouter } from 'next/router';
import {
  Button,
  Col,
  Container,
  Form,
  ProgressBar,
  Row,
} from 'react-bootstrap';
import CityForm from '@/components/addBusiness/CityForm';
import BasicForm from '@/components/addBusiness/BasicForm';
import BusinessDetails from '@/components/addBusiness/BusinessDetails';
import MainPhotos from '@/components/addProperty/mainPhotos/MainPhotos';
import { ADD_PLACE_NAMES, Paths } from '@/constant';
import ServiceForm from '@/components/addBusiness/serviceForm/ServiceForm';
import withAuth from '@/hoc/withAuth';
import { useBreadcrumbs } from '@/components/context/useBreadcrumbs';

function AddBusinessPage() {
  const router = useRouter();
  const initialBusinessState = {
    city: 'Москва',
    start_time: new Date(),
    finish_time: new Date(),
    achievement: '',
    main_photos: [''],
    wedding_albums: [''],
    description: '',
  };

  let {
    setIsShown,
    isShown,
    dynamicBreadCrumbTitle,
    setDynamicBreadCrumbTitle,
  } = useBreadcrumbs();

  useEffect(() => {
    if (!isShown) {
      setIsShown(true);
    }
    if (dynamicBreadCrumbTitle.length > 0) {
      setDynamicBreadCrumbTitle('');
    }
  }, []);

  const [business, setBusiness] =
    useState<typeof initialBusinessState>(initialBusinessState);
  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    setBusiness({ ...business, [e.target.name]: e.target.value });
  }
  function setCity(city: string) {
    setBusiness({ ...business, ['city']: city });
  }

  // Загрузка картинок
  const [mainPhotos, setMainPhotos] = useState<string[]>([]);
  useEffect(() => {
    setBusiness((prev) => ({ ...prev, main_photos: mainPhotos }));
  }, [mainPhotos]);

  // Площадки - TODO указать тип!
  const [services, setServices] = useState<(any | null)[]>([]);
  const [serviceIndexArray, setServiceIndexArray] = useState<(number | null)[]>(
    [0]
  );

  function addService(e: MouseEvent<HTMLParagraphElement>) {
    e.preventDefault;
    let last = serviceIndexArray.length - 1;
    setServiceIndexArray([...serviceIndexArray, ++last]);
  }

  function deleteServiceForm(
    e: MouseEvent<HTMLParagraphElement>,
    index: number
  ) {
    e.preventDefault;

    if (index !== 0) {
      let copyIndexArray = serviceIndexArray;
      copyIndexArray[index] = null;

      let copyServicesArray = services;
      copyServicesArray[index] = null;
      setServiceIndexArray([...copyIndexArray]);
      setServices([...copyServicesArray]);
    }
  }

  function renderServiceForms() {
    return serviceIndexArray.map((index, i) => {
      if (index !== null) {
        return (
          <section
            key={index}
            id={`${ADD_PLACE_NAMES.service.id}${index}`}
            className="card card-body border-0 shadow-sm p-4 mb-4"
          >
            {!!index && (
              <p
                className="text-primary mb-3 cursor-pointer d-flex align-items-center"
                onClick={(e) => deleteServiceForm(e, index)}
                style={{ width: 'fit-content' }}
              >
                <i className="fi-minus-circle me-3"></i> Удалить услугу
              </p>
            )}
            <ServiceForm
              index={index}
              services={services}
              setServices={setServices}
              setPreviewServicesImg={setPreviewServicesImg}
            />
            <p
              className="text-primary mb-3 cursor-pointer d-flex align-items-center"
              onClick={addService}
              style={{ width: 'fit-content' }}
            >
              <i className="fi-plus-circle me-3"></i> Добавить услугу
            </p>
          </section>
        );
      } else {
        return <div key={i}></div>;
      }
    });
  }

  // Превью
  const [previewShow, setPreviewShow] = useState(false);
  const handlePreviewClose = () => setPreviewShow(false);
  const handlePreviewShow = () => setPreviewShow(true);
  const [previewMainPhotos, setPreviewMainPhotos] = useState<string[]>([]);
  const [previewServicesImg, setPreviewServicesImg] = useState<string[][]>([]);

  //здесь логика отправки формы
  function handleSubmit() {
    // router.push(Paths.Success);
  }

  return (
    <>
      <Container className="py-5">
        <Row>
          <Col lg={8}>
            <Form onSubmit={handleSubmit}>
              <div className="mb-4">
                <h1 className="h2 mb-0">Добавить бизнес</h1>
                <div className="d-lg-none pt-3 mb-2">
                  {0}% информации заполнено
                </div>
                <ProgressBar
                  variant="warning"
                  now={0}
                  style={{ height: '.25rem' }}
                  className="d-lg-none mb-4"
                />
              </div>
              <CityForm city={business.city} setCity={setCity} />

              <BasicForm
                achievement={business.achievement}
                handleChange={handleChange}
              />

              <MainPhotos
                title="Главные фото"
                setMainPhotos={setMainPhotos}
                setPreviewMainPhotos={setPreviewMainPhotos}
              />

              {renderServiceForms()}

              <BusinessDetails
                description={business.description}
                handleChange={handleChange}
              />

              <section className="d-sm-flex justify-content-between pt-2">
                <Button
                  size="lg"
                  variant="outline-primary d-block w-100 w-sm-auto mb-3 mb-sm-2"
                  // onClick={handlePreviewShow}
                >
                  <i className="fi-eye-on ms-n1 me-2"></i>
                  Предпросмотр
                </Button>
                <Button
                  type="submit"
                  size="lg"
                  variant="primary d-block w-100 w-sm-auto mb-2"
                  onClick={handleSubmit}
                >
                  Сохранить
                </Button>
              </section>
            </Form>
          </Col>
          <Col lg={{ span: 3, offset: 1 }} className="d-none d-lg-block">
            <h3>Здесь боковой прогресс-бар</h3>
          </Col>
        </Row>
      </Container>

      {/* <Preview>
      здесь будет превью
    </Preview> */}
    </>
  );
}

export default withAuth(AddBusinessPage);
