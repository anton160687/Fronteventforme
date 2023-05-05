import { useState, ChangeEvent } from "react";
import { Form, Row } from "react-bootstrap";

type AreaFormDetailsProps = {
    details: string,
    handleChange: (e: ChangeEvent<HTMLInputElement>) => void,
}

function AreaFormDetails({ details, handleChange }: AreaFormDetailsProps) {
    const [lettersLeft, setLettersLeft] = useState<number>(1000);
    function handleChangeInsideForm(e: ChangeEvent<HTMLInputElement>) {
        handleChange(e);
        setLettersLeft(1000 - e.target.value.length);
    }

    return (
        <Row className='mb-4'>
            <Form.Label className='d-block fw-bold mb-2 mt-2 pb-1'>
                {'Детали\u00a0'}<span className='text-danger'>*</span>
            </Form.Label>
            <Form.Control
                as='textarea'
                rows={6}
                maxLength={1000}
                placeholder='Например, опишите минимальную стоимость банкета/аренды зала в пятницу и субботу'
                onChange={handleChangeInsideForm}
            />
            <Form.Text>Осталось {lettersLeft} символов</Form.Text>
        </Row>
    )
}

export default AreaFormDetails;