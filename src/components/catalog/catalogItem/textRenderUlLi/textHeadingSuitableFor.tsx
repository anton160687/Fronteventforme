import { cards } from "@/mocks/cards";
import { FC } from "react"
import { Col, Row } from "react-bootstrap"


export const TextHeadingSuitableFor:FC = () => {
  const { festivEvents } = cards || {};

  return (
    <Row className='mb-xl-5 mb-md-4 mb-sm-3'>
      <h4>Подходит для:</h4>
      <Row xs={1} sm={2} md={3} className='w-auto'>
          {festivEvents?.map((item, i) => (    
            <Col key={i}>
              <i className= {`${item?.icon} me-2 fs-sm`}/>
              {item?.action}
            </Col>
          ))
          }
      </Row>
    </Row>
  )}