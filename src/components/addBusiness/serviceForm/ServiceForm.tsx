import { ChangeEvent, Dispatch, SetStateAction, useEffect, useState } from 'react';
import { Alert, Col, InputGroup, Row } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import FileUploader from '@/components/addProperty/fileUploader/FileUploader';
import AreaFormDatePicker from '@/components/addProperty/areaForm/AreaFormDatePicker';
import styles from '@/styles/addproperty/AreaForm.module.scss';
import { ADD_PLACE_NAMES, RESTORE_IMG } from '@/constant';

//TODPO вместо any вставить тип Услуги, когда будет!!!
type ServiceFormProps = {
  index: number;
  services: (any | null)[];
  setServices: Dispatch<SetStateAction<(any | null)[]>>;
  setPreviewServicesImg: Dispatch<SetStateAction<string[][]>>;
};

function ServiceForm({ index, services, setServices, setPreviewServicesImg }: ServiceFormProps) {
  let initialServiceFormState: any = {
    specialisation: '',
    title: '',
    description: '',
    price: 0,
    sale: '',
    reserved_days: [new Date()],
    service_img: ['']
  };
  const [service, setService] = useState<typeof initialServiceFormState>(initialServiceFormState);
  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    setService({ ...service, [e.target.name]: e.target.value });
  }
  function handleNumberChange(e: ChangeEvent<HTMLInputElement>) {
    setService({ ...service, [e.target.name]: +e.target.value });
  }
  function handleDateChange(date: Date, id: number) {
    let newArr = [...service.reserved_days];
    if (newArr[id] && date === null) {
      newArr.splice(id, 1);
    } else {
      newArr[id] = date;
    }
    setService({ ...service, ['reserved_days']: newArr });
  }

  useEffect(() => {
    let newAreasArr = [...services];
    newAreasArr[index] = service;
    setServices(newAreasArr);
  }, [service]);

  function setServiceImages(imageIds: string[]) {
    setService({ ...service, service_img: imageIds });
  }

  useEffect(() => {
    const serviceImages = services.map((service) =>
      service?.service_img !== undefined
        ? service.service_img.map((img: string) => RESTORE_IMG + img)
        : []
    );
    setPreviewServicesImg(serviceImages);
  }, [services]);

  return (
    <section className='mb-2'>
      <h2 className="h4 mb-4">
        <i className="fi-party-popper text-primary fs-5 mt-n1 me-2"></i>
        {ADD_PLACE_NAMES.service.name}
      </h2>

      <Row className="mb-4">
        <Form.Group>
          <Form.Label className="d-block mb-2 mt-2 pb-1">
            Категории услуги <span className="text-danger">*</span>
          </Form.Label>
          <Form.Control
            name="specialisation"
            placeholder="Не более 50 символов"
            value={service.specialisation}
            maxLength={50}
            onChange={handleChange}
            required
          />
        <Alert variant="info" className="d-flex mt-3 mb-4">
          <i className="fi-alert-circle me-2 me-sm-3 lead"></i>
          <div> Рекомендуемое количество категорий услуг — не более 8. </div>
        </Alert>
        </Form.Group>
      </Row>

      <Row className="mb-4">
        <Form.Group>
          <Form.Label className="d-block mb-2 mt-2 pb-1">
            Загрузите фотографии/видео услуги <span className="text-danger">*</span>
          </Form.Label>
          <FileUploader
            setGallery={setServiceImages}
            required={true}
            maxFiles={5}
            warning="Максимальный размер фото 400 КБ. Форматы: jpeg, jpg, png. Сначала загрузите главное фото."
          />
        </Form.Group>
      </Row>

      {/* Название, описание */}
      <Row className="align-items-end mb-4">
        <Form.Group as={Col} controlId="title">
          <Form.Label className="d-block fw-bold mb-2 mt-2 pb-1">
            {'Название\u00a0услуги\u00a0'}<span className="text-danger">*</span>
          </Form.Label>
          <Form.Control
              name="title"
              placeholder="Например, Фотосессия: полный день"
              value={service.title}
              onChange={handleChange}
              required
            />         
        </Form.Group>

        <Form.Group as={Col} controlId="sale">
          <Form.Label className="d-block fw-bold mb-2 mt-2 pb-1">
            {'Краткое\u00a0описание'}
          </Form.Label>
          <Form.Control
            name="description"
            placeholder={'Например, 9-12 часов'}
            value={service.description}
            onChange={handleChange}
          />
        </Form.Group>
      </Row>

      {/* Цена, скидка */}
      <Row className="align-items-end mb-4">
        <Form.Group as={Col} controlId="title">
          <Form.Label className="d-block fw-bold mb-2 mt-2 pb-1">
            {'Стоимость\u00a0'}<span className="text-danger">*</span>
          </Form.Label>
          <InputGroup>
            <Form.Control
              name="price"
              placeholder="10 000"
              type="number"
              min={0}
              value={service.price || ''}
              onChange={handleNumberChange}
              className={styles.capacity__input}
              required
            />
            <InputGroup.Text id="icon-addon">₽</InputGroup.Text>
          </InputGroup>
        </Form.Group>

        <Form.Group as={Col} controlId="sale">
          <Form.Label className="d-block fw-bold mb-2 mt-2 pb-1">
            {'Подарок/скидка за аренду помещения'}
          </Form.Label>
          <Form.Control
            name="sale"
            placeholder={'Например, номер для молодоженов'}
            maxLength={100}
            value={service.sale}
            onChange={handleChange}
          />
        </Form.Group>
      </Row>


      {/* Недоступные даты */}
      <Row>
        <Form.Group controlId="reserved_days">
          <Form.Label className="d-block fw-bold mb-2 mt-2 pb-1">
            Отметьте даты, на которые бронь зала уже недоступна
          </Form.Label>
          <AreaFormDatePicker
            datesArray={service.reserved_days}
            handleDateChange={handleDateChange}
          />
        </Form.Group>
      </Row>
    </section>
  );
}

export default ServiceForm;