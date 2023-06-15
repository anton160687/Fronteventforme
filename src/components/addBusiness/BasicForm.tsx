import { ChangeEvent } from 'react';
import { ADD_PLACE_NAMES } from '@/constant';
import {  Form, FormControl, InputGroup, Row } from 'react-bootstrap';

type BasicFormProps = {
  achievement: string;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void
};

function BasicForm({ achievement, handleChange }: BasicFormProps) {
  return (
    <section id={ADD_PLACE_NAMES.basicBusiness.id} className="card card-body border-0 shadow-sm p-4 mb-4">
      <h2 className="h4 mb-4">
        <i className="fi-map-pin text-primary fs-5 mt-n1 me-2"></i>
        {ADD_PLACE_NAMES.basicBusiness.name}
      </h2>

      <Row className="mb-4">
        <Form.Group controlId="time">
          <Form.Label className="form-label fw-bold mb-2 p-0">
            Время работы <span className="text-danger">*</span>
          </Form.Label>
          <div className="d-flex justify-content-between align-items-center col-md-6 col-sm-8">
            <FormControl
              type="time"
              name="start_time"
              onChange={handleChange}
              required
            />
            <div className="text-muted mx-4 fs-lg">—</div>
            <FormControl
              type="time"
              name="finish_time"
              onChange={handleChange}
              required
            />
          </div>
        </Form.Group>
      </Row>

      <Form.Group controlId="achievement">
        <Form.Label className="d-block fw-bold mb-3 p-0">
          Достижения и участие в конкурсах
        </Form.Label>
          <FormControl
            name="achievement"
            placeholder="Опишите свои достижения в сфере"
            value={achievement}
            onChange={handleChange}
          />
      </Form.Group>
    </section >
  );
}

export default BasicForm;