import { Row, Form, Col, InputGroup } from 'react-bootstrap';
import RenderCheckbox from '../renderChekbox/RenderCheckBox';
import { ADD_PLACE_NAMES, FEATURES, TERRITORY } from '@/constant';
import DetailsTextarea from '../detailsTextarea/DetailsTextarea';
import { ChangeEvent } from 'react';

type PlaceDetailsProps = {
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleCheckBox: (name: string, array: string[]) => void;
  handleNumberChange: (e: ChangeEvent<HTMLInputElement>) => void;
  description: string;
  territory_desc: string;
  welcome_desc: string;
  outreg_price: number;
  outreg_desc: string;
  outreg_conditions: string;
};

function PlaceDetails({
  handleChange,
  handleCheckBox,
  handleNumberChange,
  description,
  territory_desc,
  welcome_desc,
  outreg_price,
  outreg_desc,
  outreg_conditions,
}: PlaceDetailsProps) {
  return (
    <section
      id={ADD_PLACE_NAMES.details.id}
      className="card card-body border-0 shadow-sm p-4 mb-4"
    >
      <h2 className="h4 mb-4">
        <i className="fi-party-popper text-primary fs-5 mt-n1 me-2"></i>
        {ADD_PLACE_NAMES.details.name}
      </h2>

      <Row className="mb-4">
        <DetailsTextarea
          details={description}
          handleChange={handleChange}
          name={'description'}
          header={'Описание'}
          placeholder={'Опишите площадку'}
          required
        />
      </Row>

      <Row className="mb-4">
        <Form.Group controlId="features">
          <Form.Label className="d-block fw-bold mb-2 mt-2 pb-1">
            {'Особенности\u00a0'}
            <span className="text-danger">*</span>
          </Form.Label>
          <RenderCheckbox
            options={FEATURES}
            name="features"
            max={100}
            handleCheckBox={handleCheckBox}
          />
        </Form.Group>
      </Row>

      <Row className="mb-4">
        <Form.Group controlId="max_serving">
          <Form.Label className="d-block fw-bold mb-2 mt-2 pb-1">
            Сколько человек обслуживает 1 официант?
            <span className="text-danger">*</span>
          </Form.Label>
          <Form.Control
            name="max_serving"
            type="number"
            size="lg"
            className="w-md-50 w-sm-75 w-xs-100"
            placeholder="10 человек или 1 стол"
            onChange={handleNumberChange}
            required
          />
        </Form.Group>
      </Row>

      <Row className="mb-4">
        <Form.Group controlId="territory">
          <Form.Label className="d-block fw-bold mb-2 mt-2 pb-1">
            Территория
            <i className="fi-eye-on fs-sm ms-2" />
          </Form.Label>
          <RenderCheckbox
            options={TERRITORY}
            name="territory"
            max={6}
            handleCheckBox={handleCheckBox}
          />
          <p className="mt-2 mb-0 fs-sm">
            <i className="fi-alert-circle me-2" />
            Не более 6-и опций.
          </p>
        </Form.Group>
      </Row>

      <Row className="mb-4">
        <Form.Group controlId="parking">
          <Form.Label className="d-block fw-bold mb-2 mt-2 pb-1">
            Вместимость парковки
          </Form.Label>
          <Form.Control
            name="parking"
            type="number"
            size="lg"
            className="w-md-50 w-sm-75 w-xs-100"
            placeholder="100 машин"
            onChange={handleNumberChange}
          />
        </Form.Group>
      </Row>

      <Row className="mb-4">
        <DetailsTextarea
          details={territory_desc}
          handleChange={handleChange}
          name={'territory_desc'}
          header={'Описание территории'}
          placeholder={'Опишите территорию'}
          required={false}
        />
      </Row>

      <Row className="mb-4">
        <Form.Label className="d-block fw-bold mb-2 mt-2 pb-1">
          Welcome-зона
          <i className="fi-eye-on fs-sm ms-2" />
        </Form.Label>
        <DetailsTextarea
          details={welcome_desc}
          handleChange={handleChange}
          name={'welcome_desc'}
          header={'Описание welcome-зоны'}
          placeholder={'Описание welcome-зоны'}
          required={false}
        />
      </Row>

      <Row className="mb-4">
        <Form.Label className="d-block fw-bold mb-2 mt-2 pb-1">
          Выездная регистрация
          <i className="fi-eye-on fs-sm ms-2" />
        </Form.Label>
        <Row className="align-items-end mb-3">
          <Col xs={12} sm={12} md={5} lg={5} xl={5}>
            <Form.Label className="d-block fw-bold mb-2 mt-2 pb-1">
              {'Стоимость выезд. регистрации\u00a0'}
              <span className="text-danger">*</span>
            </Form.Label>
            <InputGroup>
              <Form.Control
                name="outreg_price"
                placeholder="1000"
                type="number"
                value={outreg_price}
                onChange={handleNumberChange}
                required
              />
              <InputGroup.Text id="icon-addon">₽</InputGroup.Text>
            </InputGroup>
          </Col>
          <Col>
            <Form.Label className="d-block fw-bold mb-2 mt-2 pb-1">
              {'Что входит в стоимость?\u00a0'}
              <span className="text-danger">*</span>
            </Form.Label>
            <Form.Control
              name="outreg_desc"
              type="text"
              value={outreg_desc}
              onChange={handleChange}
              required
            />
          </Col>
        </Row>
        <DetailsTextarea
          details={outreg_conditions}
          handleChange={handleChange}
          name={'outreg_conditions'}
          header={'Условия выездной регистрации'}
          placeholder={'Описание условий'}
          required={false}
        />
      </Row>
    </section>
  );
}

export default PlaceDetails;
