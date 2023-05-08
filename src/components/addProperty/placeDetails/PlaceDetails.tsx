import { Row, Form, Col, InputGroup } from "react-bootstrap";
import RenderCheckbox from "../renderChekbox/RenderCheckBox";
import { FEATURES, TERRITORY } from "@/constant";
import DetailsTextarea from "../detailsTextarea/DetailsTextarea";
import { ChangeEvent } from "react";

type PlaceDetailsProps = {
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleCheckBox: (name: string, array: string[]) => void;
  handleNumberChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleRadio: (e: ChangeEvent<HTMLInputElement>) => void;
}


function PlaceDetails({
  handleChange,
  handleCheckBox,
  handleNumberChange,
  handleRadio,
}: PlaceDetailsProps) {
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
        <RenderCheckbox options={FEATURES}
          name='features'
          max={100}
          handleCheckBox={handleCheckBox}
        />
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
        <RenderCheckbox options={TERRITORY}
          name='territory'
          max={6}
          handleCheckBox={handleCheckBox} />
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
        <DetailsTextarea
          details={""}
          handleChange={function (e: ChangeEvent<HTMLInputElement>): void {
            throw new Error("Function not implemented.");
          }}
          name={""}
          header={"Описание welcome-зоны"}
          placeholder={"Описание welcome-зоны"}
          required={false}
        />
      </Row>

      <Row className='mb-4'>
        <Form.Label className='d-block fw-bold mb-2 mt-2 pb-1'>
          Выездная регистрация
          <i className='fi-eye-on fs-sm ms-2' />
        </Form.Label>
        <Row className="align-items-end mb-3">
          <Col xs={12} sm={12} md={5} lg={5} xl={5}>
            <Form.Label className='d-block fw-bold mb-2 mt-2 pb-1'>
              {'Стоимость выезд. регистрации\u00a0'}<span className='text-danger'>*</span>
            </Form.Label>
            <InputGroup>
              <Form.Control
                name='min_price_banquet'
                placeholder='1000'
                type='number'
                value={undefined}
                // onChange={handleNumberChange}
                // className={styles.capacity__input}
                required
              />
              <InputGroup.Text id='icon-addon'>₽</InputGroup.Text>
            </InputGroup>
          </Col>
          <Col>
            <Form.Label className='d-block fw-bold mb-2 mt-2 pb-1'>
              {'Что входит в стоимость?\u00a0'}<span className='text-danger'>*</span>
            </Form.Label>
            <Form.Control
              name='min_price_banquet'
              type='text'
              value={undefined}
              // onChange={handleNumberChange}
              // className={styles.capacity__input}
              required
            />
          </Col>
        </Row>
        <DetailsTextarea
          details={""}
          handleChange={function (e: ChangeEvent<HTMLInputElement>): void {
            throw new Error("Function not implemented.");
          }}
          name={""}
          header={"Условия выездной регистрации"}
          placeholder={"Описание условий"}
          required={false}
        />
      </Row>
    </section>
  )
}

export default PlaceDetails;