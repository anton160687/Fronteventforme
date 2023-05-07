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
                Контакты
            </h2>
            <Row>
                <Form.Group as={Col} sm={6} controlId='ab-fn' className='mb-3'>
                    <Form.Label>Имя <span className='text-danger'>*</span></Form.Label>
                    <Form.Control placeholder='Введите свое имя' required />
                </Form.Group>
                <Form.Group as={Col} sm={6} controlId='ab-sn' className='mb-3'>
                    <Form.Label>Фамилия <span className='text-danger'>*</span></Form.Label>
                    <Form.Control placeholder='Введите свою фамилию' required />
                </Form.Group>

                <Form.Group as={Col} sm={6} controlId='ab-email' className='mb-3'>
                    <Form.Label>Контактная электронная почта <span className='text-danger'>*</span></Form.Label>
                    <Form.Control type='email' placeholder='primer@mail.ru' required />
                </Form.Group>
                
                <Form.Group as={Col} sm={6} controlId='ab-phone' className='mb-3'>
                    <Form.Label>Контактный номер телефона <span className='text-danger'>*</span></Form.Label>
                    <Form.Control
                    // @ts-expect-error: проблема совместимости со сторонней библиотекой
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