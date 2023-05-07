import { FC } from "react";
import { Col, Form, Row } from "react-bootstrap"
import { checkBoxElement } from '@/types/checkBoxes';

type checkBoxElementProps = {
  location: checkBoxElement[],
}

export const DescriptionPlaceElement:FC<checkBoxElementProps> = ({location}) => {

  return (
  <Row xs={1} sm={2} md={3}>
      {location.map((item, indx) => (
        <Col key={indx}>
          <Form.Check
            type='checkbox'
            id={`location-${indx}`}
            value={item.value}
            label={item.value}
            defaultChecked={item.checked}
          />
        </Col>
      ))}
    </Row>
)}