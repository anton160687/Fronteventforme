import Link from 'next/link'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Nav from 'react-bootstrap/Nav'
import Image from 'next/image';
import SocialButton from '../_finder/SocialButton';


export default function Footer () {
    return (
      <>
              <footer className='footer bg-secondary pt-5'>
        <Container className='pt-lg-4 pb-4'>
          <Row className='mb-5 pb-md-3 pb-lg-4'>
            <Col lg={6} className='mb-lg-0 mb-4'>
              <div className='d-flex flex-sm-row flex-column justify-content-between mx-n2'>

                {/* Logo + contacts */}
                <div className='mb-sm-0 mb-4 px-2'>

                  <Link href='/real-estate' className='d-inline-flex mb-4'>
                    <Image src='/img/header/logo.png' width={143} height={33} alt='EventForME' />
                  </Link>

                  <Nav className='flex-column mb-sm-4 mb-2'>
                    
                    <Nav.Item className='mb-2'>
                      <Nav.Link href='mailto:example@email.com' active={false} className='p-0 fw-normal'>
                        <i className='fi-mail me-2 align-middle opacity-70'></i>
                        example@email.com
                      </Nav.Link>
                    </Nav.Item>

                    <Nav.Item>
                      <Nav.Link href='tel:4065550120' active={false} className='p-0 fw-normal'>
                        <i className='fi-device-mobile me-2 align-middle opacity-70'></i>
                        (406) 555-0120
                      </Nav.Link>
                    </Nav.Item>

                  </Nav>

                  <div className='pt-2'>
                    <SocialButton href='#' variant='solid' brand='facebook' roundedCircle className='me-2 mb-2' size='' light='' />
                    <SocialButton href='#' variant='solid' brand='twitter' roundedCircle className='me-2 mb-2' size='' light=''/>
                    <SocialButton href='#' variant='solid' brand='viber' roundedCircle className='me-2 mb-2' size='' light='' />
                    <SocialButton href='#' variant='solid' brand='telegram' roundedCircle className='mb-2' size='' light=''/>
                  </div>
                </div>

                {/* Quick links */}
                <div className='mb-sm-0 mb-4 px-2'>
                  <h4 className='h5'>Quick Links</h4>
                  <Nav className='flex-column'>
                    <Nav.Item className='mb-2'>
                      <Nav.Link as={Link} href='#' active={false} className='p-0 fw-normal'>Buy a property</Nav.Link>
                    </Nav.Item>
                    <Nav.Item className='mb-2'>
                      <Nav.Link as={Link} href='#' active={false} className='p-0 fw-normal'>Sell a property</Nav.Link>
                    </Nav.Item>
                    <Nav.Item className='mb-2'>
                      <Nav.Link as={Link} href='#' active={false} className='p-0 fw-normal'>Rent a property</Nav.Link>
                    </Nav.Item>
                    <Nav.Item className='mb-2'>
                      <Nav.Link as={Link} href='#' active={false} className='p-0 fw-normal'>Calculate  your property</Nav.Link>
                    </Nav.Item>
                    <Nav.Item className='mb-2'>
                      <Nav.Link as={Link} href='#' active={false} className='p-0 fw-normal'>Top offers</Nav.Link>
                    </Nav.Item>
                    <Nav.Item className='mb-2'>
                      <Nav.Link as={Link} href='#' active={false} className='p-0 fw-normal'>Top cities</Nav.Link>
                    </Nav.Item>
                  </Nav>
                </div>

                {/* About links */}
                <div className='px-2'>
                  <h4 className='h5'>About</h4>
                  <Nav className='flex-column'>
                    <Nav.Item className='mb-2'>
                      <Nav.Link as={Link} href='#' active={false} className='p-0 fw-normal'>About us</Nav.Link>
                    </Nav.Item>
                    <Nav.Item className='mb-2'>
                      <Nav.Link as={Link} href='#' active={false} className='p-0 fw-normal'>Our agents</Nav.Link>
                    </Nav.Item>
                    <Nav.Item className='mb-2'>
                      <Nav.Link as={Link} href='#' active={false} className='p-0 fw-normal'>Help &amp; support</Nav.Link>
                    </Nav.Item>
                    <Nav.Item className='mb-2'>
                      <Nav.Link as={Link} href='#' active={false} className='p-0 fw-normal'>Contacts</Nav.Link>
                    </Nav.Item>
                    <Nav.Item className='mb-2'>
                      <Nav.Link as={Link} href='#' active={false} className='p-0 fw-normal'>News</Nav.Link>
                    </Nav.Item>
                  </Nav>
                </div>
              </div>
            </Col>
          </Row>

          {/* Copyright */}
          <div className='text-center fs-sm pt-4 mt-3 pb-2'>
            &copy; All rights reserved. Made by <a href='https://createx.studio/' className='d-inline-block nav-link p-0' target='_blank' rel='noreferrer'>Createx Studio</a>
          </div>
        </Container>
      </footer>
      </>

    )
}