import { Row, Form } from "react-bootstrap";
import RenderCheckbox from "../renderChekbox/RenderCheckBox";
import { FEATURES, TERRITORY } from "@/constant";

function PlaceDetails() {
  return (
    <section id='details' className='card card-body border-0 shadow-sm p-4 mb-4'>
      <h2 className='h4 mb-4'>
        <i className='fi-party-popper text-primary fs-5 mt-n1 me-2'></i>
        Детали площадки
      </h2>

      <Row className='mb-4'>
        <Form.Label className='d-block fw-bold mb-2 pb-1'>
          Описание
          <span className='text-danger'>*</span>
        </Form.Label>
        <Form.Control className="mb-1" as='textarea' rows={5} placeholder='Опишите площадку' />
        <Form.Text>Осталось 1000 символов</Form.Text>
      </Row>

      <Row className='mb-4'>
        <Form.Label className='d-block fw-bold mb-2 pb-1'>
          Особенности
          <span className='text-danger'>*</span>
        </Form.Label>
        <RenderCheckbox options={FEATURES} />
      </Row>

      <Row className='mb-4'>
        <Form.Label className='d-block fw-bold mb-2 pb-1'>Сколько человек обслуживает 1 официант?
          <span className='text-danger'>*</span>
        </Form.Label>
        <Form.Control size='lg' className="w-md-50 w-sm-75 w-xs-100" placeholder='10 человек или 1 стол' />
      </Row>

      <Row className='mb-4'>
        <Form.Label className='d-block fw-bold mb-2 pb-1'>
          Территория
          <i className='fi-eye-on fs-sm ms-2' />
        </Form.Label>
        <RenderCheckbox options={TERRITORY} />
      </Row>

      <Row className='mb-4'>
        <Form.Label className='d-block fw-bold mb-2 pb-1'>Вместимость парковки</Form.Label>
        <Form.Control size='lg' className="w-md-50 w-sm-75 w-xs-100" placeholder='100 машин' />
      </Row>

      <Row className='mb-4'>
        <Form.Label className='d-block fw-bold mb-2 pb-1'>Описание территории</Form.Label>
        <Form.Control className="mb-1" as='textarea' rows={5} placeholder='Опишите территорию' />
        <Form.Text>Осталось 1000 символов</Form.Text>
      </Row>

      <Row className='mb-4'>
        <Form.Label className='d-block fw-bold mb-2 pb-1'>Welcome-зона</Form.Label>
        <Form.Control className="mb-1" as='textarea' rows={5} placeholder='Описание welcome-зоны' />
        <Form.Text>Осталось 1000 символов</Form.Text>
      </Row>

      <Row className='mb-4'>
        <Form.Label className='d-block fw-bold mb-2 pb-1'>Выездная регистрация</Form.Label>
        <Form.Label className='d-block fw-bold mb-2 pb-1'>Условия выездной регистрации</Form.Label>
        <Form.Control className="mb-1" as='textarea' rows={5} placeholder='Описание условий' />
        <Form.Text>Осталось 1000 символов</Form.Text>
      </Row>
    </section>
  )
}

export default PlaceDetails;