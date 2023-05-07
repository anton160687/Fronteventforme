import { FC } from "react";
import { Form } from "react-bootstrap";
import { DescriptionPlaceElement } from "../descriptionPlace";
import { checkBoxes } from '@/mocks/checkBox';

export const PropertyDetailsAddProperty:FC = () => {
  const { features }  = checkBoxes || {};

  return(
    <section id='details' className='card card-body border-0 shadow-sm p-4 mb-4'>
      <h2 className='h4 mb-4'>
          <i className='fi-party-popper text-primary fs-5 mt-n1 me-2'></i>
          Детали площадки
      </h2>

      <Form.Group controlId='ap-description' className='mb-4'>
          <Form.Label className='d-block fw-bold mb-2 pb-1'>Описание*</Form.Label>
          <Form.Control className="mb-1" as='textarea' rows={5} placeholder='Опишите площадку' />
          <Form.Text>Осталось 1000 символов</Form.Text>
      </Form.Group>

      <Form.Group className='mb-4'>
        <Form.Label className='d-block fw-bold mb-2 pb-1'>Особенности*</Form.Label>

          <DescriptionPlaceElement location={features}/>

      </Form.Group>

      <Form.Group controlId='input-lg' className='mb-4'>
        <Form.Label className='d-block fw-bold mb-2 pb-1'>Сколько человек обслуживает 1 официант?*</Form.Label>
        <Form.Control size='lg' className="w-md-50 w-sm-75 w-xs-100" placeholder='10 человек или 1 стол' />
      </Form.Group>

      <Form.Group className='mb-4'>
        <Form.Label className='d-block fw-bold mb-2 pb-1'>
          Территория
          <i className='fi-eye-on fs-sm ms-2' />
          </Form.Label>

          <DescriptionPlaceElement location={features}/>

      </Form.Group>

      <Form.Group controlId='input-lg' className='mb-4'>
        <Form.Label className='d-block fw-bold mb-2 pb-1'>Вместимость парковки</Form.Label>
        <Form.Control size='lg' className="w-md-50 w-sm-75 w-xs-100" placeholder='100 машин' />
      </Form.Group>

      <Form.Group controlId='ap-description' className='mb-4'>
          <Form.Label className='d-block fw-bold mb-2 pb-1'>Описание территории</Form.Label>
          <Form.Control className="mb-1" as='textarea' rows={5} placeholder='Опишите территорию' />
          <Form.Text>Осталось 1000 символов</Form.Text>
      </Form.Group>
    </section>
)}