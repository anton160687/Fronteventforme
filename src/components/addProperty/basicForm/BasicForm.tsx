import { ChangeEvent, useState } from 'react';
import Form from 'react-bootstrap/Form';

type BasicFormProps = {
    title: string,
    lettersLeft: number,
    handleChange: (e: ChangeEvent<HTMLInputElement>) => void,
}

function BasicForm({title, lettersLeft, handleChange}: BasicFormProps): JSX.Element {
    return (
        <section id='basic-info' className='card card-body border-0 shadow-sm p-4 mb-4'>
        <h2 className='h4 mb-4'>
            <i className='fi-info-circle text-primary fs-5 mt-n1 me-2'></i>
            Базовая информация
        </h2>
        <Form.Group controlId='ap-title' className='mb-3'>
            <Form.Label>Название <span className='text-danger'>*</span></Form.Label>
            <Form.Control
                placeholder='Напишите название площадки'
                maxLength={50}
                value={title}
                onChange={handleChange}
                required
            />
            <Form.Text>Осталось {lettersLeft} символов</Form.Text>
        </Form.Group>
    </section>
    )
}

export default BasicForm;