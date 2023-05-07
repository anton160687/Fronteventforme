import { useState } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import NumberFormat from 'react-number-format';


function ContactsForm() {
    return (
        <section id='contacts' className='card card-body border-0 shadow-sm p-4 mb-4'>
            <h2 className='h4 mb-4'>
                <i className='fi-phone text-primary fs-5 mt-n1 me-2'></i>
                Contacts
            </h2>
            <Row>
                <Form.Group as={Col} sm={6} controlId='ab-fn' className='mb-3'>
                    <Form.Label>First name <span className='text-danger'>*</span></Form.Label>
                    <Form.Control defaultValue='Annette' placeholder='Enter your first name' required />
                </Form.Group>
                <Form.Group as={Col} sm={6} controlId='ab-sn' className='mb-3'>
                    <Form.Label>Second name <span className='text-danger'>*</span></Form.Label>
                    <Form.Control defaultValue='Black' placeholder='Enter your second name' required />
                </Form.Group>

                <Form.Group as={Col} sm={6} controlId='ab-email' className='mb-3'>
                    <Form.Label>Email <span className='text-danger'>*</span></Form.Label>
                    <Form.Control type='email' defaultValue='annette_black@email.com' placeholder='Enter your email address' required />
                </Form.Group>
                
                <Form.Group as={Col} sm={6} controlId='ab-phone' className='mb-3'>
                    <Form.Label>Phone number <span className='text-danger'>*</span></Form.Label>
                    <Form.Control
                        as={NumberFormat}
                        format='+7 ###-###-##-##'
                        placeholder='+7 999 999 99 99'
                        required
                    />
                </Form.Group>
            </Row>
        </section>
    )

}

export default ContactsForm;