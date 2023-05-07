import { Row, Form } from "react-bootstrap";
import RenderCheckbox from "../renderChekbox/RenderCheckBox";
import { FEATURES, TERRITORY } from "@/constant";
import DetailsTextarea from "../detailsTextarea/detailsTextarea";
import { ChangeEvent } from "react";

function PlaceDetails() {
  return (
    <section id='details' className='card card-body border-0 shadow-sm p-4 mb-4'>
      <h2 className='h4 mb-4'>
        <i className='fi-party-popper text-primary fs-5 mt-n1 me-2'></i>
        Детали площадки
      </h2>

      <Row className='mb-4'>
        <DetailsTextarea
          details={""}
          handleChange={function (e: ChangeEvent<HTMLInputElement>): void {
            throw new Error("Function not implemented.");
          }}
          name={""}
          header={"Описание"}
          placeholder={"Опишите площадку"}
          required
        />
      </Row>

      <Row className='mb-4'>
        <Form.Label className='d-block fw-bold mb-2 mt-2 pb-1'>
        {'Особенности\u00a0'}
          <span className='text-danger'>*</span>
        </Form.Label>
        <RenderCheckbox options={FEATURES} />
      </Row>

      <Row className='mb-4'>
        <Form.Label className='d-block fw-bold mb-2 mt-2 pb-1'>
          Сколько человек обслуживает 1 официант?
          <span className='text-danger'>*</span>
        </Form.Label>
        <Form.Control size='lg' className="w-md-50 w-sm-75 w-xs-100" placeholder='10 человек или 1 стол' />
      </Row>

      <Row className='mb-4'>
        <Form.Label className='d-block fw-bold mb-2 mt-2 pb-1'>
          Территория
          <i className='fi-eye-on fs-sm ms-2' />
        </Form.Label>
        <RenderCheckbox options={TERRITORY} />
      </Row>

      <Row className='mb-4'>
        <Form.Label className='d-block fw-bold mb-2 mt-2 pb-1'>Вместимость парковки</Form.Label>
        <Form.Control size='lg' className="w-md-50 w-sm-75 w-xs-100" placeholder='100 машин' />
      </Row>

      <Row className='mb-4'>
        <DetailsTextarea
          details={""}
          handleChange={function (e: ChangeEvent<HTMLInputElement>): void {
            throw new Error("Function not implemented.");
          }}
          name={""}
          header={"Описание территории"}
          placeholder={"Опишите территорию"}
          required={false}
        />
      </Row>

      <Row className='mb-4'>
        <Form.Label className='d-block fw-bold mb-2 mt-2 pb-1'>
          Welcome-зона
          <i className='fi-eye-on fs-sm ms-2' />
        </Form.Label>
        <Form.Label className='d-block mb-2 mt-2 pb-1'>Описание welcome-зоны</Form.Label>
        <DetailsTextarea
          details={""}
          handleChange={function (e: ChangeEvent<HTMLInputElement>): void {
            throw new Error("Function not implemented.");
          }}
          name={""}
          header={""}
          placeholder={"Описание welcome-зоны"}
          required={false}
        />
      </Row>

      <Row className='mb-4'>
        <Form.Label className='d-block fw-bold mb-2 mt-2 pb-1'>
          Выездная регистрация
          <i className='fi-eye-on fs-sm ms-2' />
        </Form.Label>
        <Form.Label className='d-block mb-2 mt-2 pb-1'>Условия выездной регистрации</Form.Label>
        <DetailsTextarea
          details={""}
          handleChange={function (e: ChangeEvent<HTMLInputElement>): void {
            throw new Error("Function not implemented.");
          }}
          name={""}
          header={""}
          placeholder={"Описание условий"}
          required={false}
        />
      </Row>
    </section>
  )
}

export default PlaceDetails;