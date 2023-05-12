import { Col, Form, FormControl, InputGroup, Row } from "react-bootstrap";
import { LOCATION, KITCHEN, EVENT } from '@/constant';
import styles from '@/styles/addproperty/AddProperty.module.scss';
import RenderCheckbox from "../renderChekbox/RenderCheckBox";

function PlaceDescription() {
  return (
    <section id='details' className='card card-body border-0 shadow-sm p-4 mb-4'>
      <h2 className='h4 mb-4'>
        <i className='fi-edit text-primary fs-5 mt-n1 me-2'></i>
        Описание площадки
      </h2>

      {/* Расположение */}
      <Row className='mb-4'>
        <Form.Label className='d-block fw-bold mb-2 pb-1'>
          Расположение
          <span className='text-danger'>*</span>
        </Form.Label>
        <RenderCheckbox options={LOCATION} />
        <p className="mt-2 mb-0 fs-sm">
          <i className='fi-alert-circle me-2' />
          Не более 4-х опций.
        </p>
      </Row>

      {/* Кухня */}
      <Row className='mb-4'>
        <Form.Label className='d-block fw-bold mb-2 pb-1'>
          Кухня <span className='text-danger'>*</span>
        </Form.Label>
        <RenderCheckbox options={KITCHEN} />
        <p className="mt-2 fs-sm">
          <i className='fi-alert-circle me-2' />
          Не более 3-х опций.
        </p>
        <Row>
          <Col>
            <Form.Label className='d-block fw-bold mb-3 p-0'>Есть детское меню?</Form.Label>
            <Form.Check type='radio' id='radio-1' name='radio' label='Да' defaultChecked />
            <Form.Check type='radio' id='radio-2' name='radio' label='Нет' />
          </Col>
        </Row>
      </Row>

      {/* Время работы */}
      <Row className='mb-4'>
        <Form.Label className="form-label fw-bold mb-2 p-0">Время работы <span className='text-danger'>*</span></Form.Label>
        <Form.Group className='mb-4 d-flex justify-content-between align-items-center col-md-6 col-sm-8'>
          <FormControl type='time' defaultValue='10:00' aria-describedby='addon1' />
          <div className='text-muted mx-4 fs-lg'>—</div>
          <FormControl type='time' defaultValue='23:00' aria-describedby='addon2' />
        </Form.Group>
      </Row>

      {/* Алкоголь, фейерверки */}
      <Row className='mb-4'>
        <Col>
          <Form.Label className='d-block fw-bold mb-3 p-0'>Разрешено запускать фейерверки? <span className='text-danger'>*</span></Form.Label>
          <Form.Check type='radio' id='radio-3' name='firework' label='Да' defaultChecked />
          <Form.Check type='radio' id='radio-4' name='firework' label='Нет' />
        </Col>
        <Col>
          <Form.Label className='d-block fw-bold mb-3 p-0'>Разрешено приносить свой алкоголь? <span className='text-danger'>*</span></Form.Label>
          <Form.Check type='radio' id='radio-5' name='alcohol' label='Да' />
          <Form.Check type='radio' id='radio-6' name='alcohol' label='Нет' defaultChecked />
        </Col>
      </Row>

      {/* Пробковый сбор, аренда, чек */}
      <Row className={`${styles.numbers_input__row} mb-4`}>
        <div className={styles.numbers_input__col}>
          <InputGroup>
            <h6 className="fw-bold mb-3 p-0 w-100">Пробковый сбор</h6>
            <FormControl type='number' placeholder='250' aria-label='Amount' className={styles.price_border} />
            <InputGroup.Text className="border-start-0">₽/чел</InputGroup.Text>
          </InputGroup>
        </div>

        <div className={styles.numbers_input__col}>
          <InputGroup>
            <h6 className="fw-bold mb-3 p-0 w-100">Продление аренды</h6>
            <FormControl type='number' placeholder='250' aria-label='Amount' className={styles.price_border} />
            <InputGroup.Text className="border-start-0">₽/час</InputGroup.Text>
          </InputGroup>
        </div>

        <div className={styles.numbers_input__col}>
          <InputGroup>
            <h6 className="fw-bold mb-3 p-0 w-100">Средний чек <span className='text-danger'>*</span></h6>
            <FormControl type='number' placeholder='250' aria-label='Amount' className={styles.price_border} />
            <InputGroup.Text className="border-start-0">₽/чел</InputGroup.Text>
          </InputGroup>
        </div>
      </Row>

      {/* Подходит для: */}
      <Form.Group className='mb-2'>
        <Form.Label className='d-block fw-bold mb-2 pb-1'>Подходит для: <span className='text-danger'>*</span></Form.Label>
        <RenderCheckbox options={EVENT} />
      </Form.Group>
    </section>
  )
}

export default PlaceDescription;