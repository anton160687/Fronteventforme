// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-nocheck
import { useState } from 'react';
import dynamic from 'next/dynamic';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import FormGroup from '../../_finder/FormGroup';
import DropdownSelect from '../../_finder/DropdownSelect';


const BgParallax = dynamic(() => import('../../_finder/BgParallax'), { ssr: false })

function Hero(): JSX.Element {
  return (
    <>
     <Container fluid as='section' className='my-5 pt-5 pb-lg-4 px-xxl-4'>
        <BgParallax
          imgSrc='/img/hero/hero.png'
          type='scroll' // scale, opacity, scroll-opacity, scale-opacity
          speed={0.5} // from -1.0 to 2.0
          overlay={45} // from 0 to 100 or 'gradient' to apply gradient overlay
          contentWrapper={{
            style: {maxWidth: '856px'}
          }}
          className='card align-items-center justify-content-center border-0 p-md-5 p-4 bg-secondary overflow-hidden mt-n3'
          style={{minHeight: '65vh'}}
        >
          <h1 className='display-5 mb-5 pb-md-3 px-md-3 text-white text-center'>Easy way to find a perfect property</h1>
          <FormGroup className='d-block'>
            <Row className='g-0'>
              <Col md={10} className='d-sm-flex align-items-center'>
                <DropdownSelect
                  defaultValue='For rent'
                  icon='fi-home'
                  options={[
                    [null, 'For rent'],
                    [null, 'For sale']
                  ]}
                  variant='link ps-2 ps-sm-3'
                  className='w-sm-50 border-end-sm'
                />
                <hr className='d-sm-none my-2' />
                <DropdownSelect
                  defaultValue='Location'
                  icon='fi-map-pin'
                  options={[
                    [null, 'New York'],
                    [null, 'Chicago'],
                    [null, 'Los Angeles'],
                    [null, 'San Diego']
                  ]}
                  variant='link ps-2 ps-sm-3'
                  className='w-sm-50 border-end-sm'
                />
                <hr className='d-sm-none my-2' />
                <DropdownSelect
                  defaultValue='Property type'
                  icon='fi-list'
                  options={[
                    [null, 'Houses'],
                    [null, 'Apartments'],
                    [null, 'Commercial'],
                    [null, 'Daily rental'],
                    [null, 'New buildings']
                  ]}
                  variant='link ps-2 ps-sm-3'
                  className='w-sm-50 border-end-md'
                />
              </Col>
              <hr className='d-md-none mt-2' />
              <Col md={2} className='d-sm-flex align-items-center pt-3 pt-md-0'>
                <Button className='w-100'>Search</Button>
              </Col>
            </Row>
          </FormGroup>
        </BgParallax>
      </Container>
    </>
  )
}

export default Hero;