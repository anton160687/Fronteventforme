import Link from 'next/link';
import {  MouseEvent, useState } from 'react';
import { Button, Form, InputGroup } from 'react-bootstrap';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

function AreaFormDatePicker() {
    const [indexArray, setIndexArray] = useState<number[]>([1]);
    const [datesArray, setDatesArray] = useState<Date[]>([]);

    function handleDateChange(date: Date, id: number) {
        let newArr = [...datesArray];
        newArr[id] = date;
        setDatesArray(newArr);
    }

    function handleClick(e: MouseEvent<HTMLParagraphElement>) {
        e.preventDefault;
        let last = indexArray[indexArray.length-1];
        setIndexArray([...indexArray, ++last]);
    }

    console.log(datesArray)

    function renderDateForm(index: number) {
        return (
            <>
                <Form.Group key={index} controlId='date-input' className='mb-3'>
                    <InputGroup>
                        <Form.Control
                            as={DatePicker}
                            selected={datesArray[index]}
                            placeholderText="Дата мероприятия"
                            className='rounded pe-5'
                            dateFormat="dd/MM/yy"
                            onChange={(e: any) => {
                                handleDateChange(e, index);
                            }}
                        />
                        <i className='fi-calendar position-absolute top-50 end-0 translate-middle-y me-3'></i>
                    </InputGroup>
                </Form.Group>
                <p className="text-primary mb-3" onClick = {handleClick}>
                    <i className='fi-plus-circle me-3'></i> Добавить дату
                </p>
            </>
        )
    }

    return (
        <>
           {indexArray.map((index) => renderDateForm(index))}
        </>
    )
}

export default AreaFormDatePicker;