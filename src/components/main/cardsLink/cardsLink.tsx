import { cardsLinkArrey } from "@/mocks/cardsLinkArrey";
import { FC } from "react";
import {Container, Col, Row} from "react-bootstrap";
import { Card } from "./card";

export const CardsLink = () => (
  <section>
    <Container style={{marginTop: "104px"}}>
      <Row className='align-items-center justify-content-center'> 
        <Col sm={12} className='text-center'>
          <p className='mb-3'>Портал EventForMe</p>
          <h3 className='mb-5'>Сайт, в котором есть всё необходимое<br />для планирования свадьбы </h3>
        </Col>
      </Row>
      <Row className='align-items-center justify-content-space-evenly g-2'>
        {cardsLinkArrey && cardsLinkArrey.map(item =>
          ( <Card 
            key={item.id} 
            title={item.title} 
            description={item.description} 
            pathImg={item.pathImg} />)
        )}
      </Row>
    </Container>
  </section>
)