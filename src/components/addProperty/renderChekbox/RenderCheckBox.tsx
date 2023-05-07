import { Col, Form, Row } from "react-bootstrap";

type RenderCheckboxProps = {
    options: string[][],
}

function RenderCheckbox ({options}: RenderCheckboxProps) {
    return (<Row xs={1} sm={2} md={3}>
        {options.map((option) => (
          <Col key={option[0]}>
            <Form.Check
              type='checkbox'
              value={option[0]}
              label={option[1]}
            />
          </Col>
        ))}
      </Row>)
}

export default RenderCheckbox;