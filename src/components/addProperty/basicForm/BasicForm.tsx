import { ChangeEvent, useState } from 'react';
import Form from 'react-bootstrap/Form';

type BasicFormProps = {
    title: string,
    location: boolean,
    handleChange: (e: ChangeEvent<HTMLInputElement>) => void,
}

function BasicForm({title, handleChange, location}: BasicFormProps): JSX.Element {
    const [lettersLeft, setLettersLeft] = useState<number>(50);
    function handleChangeInsideForm(e: ChangeEvent<HTMLInputElement>) {
        handleChange(e);
        setLettersLeft(50 - e.target.value.length);
    }

    return (
        <Form.Group controlId='ap-title' className='mb-3'>
            <Form.Label>Название <span className='text-danger'>*</span></Form.Label>
            <Form.Control
                placeholder={location? 'Напишите название площадки' : 'Напишите название помещения'}
                maxLength={50}
                value={title}
                onChange={handleChangeInsideForm}
                required
            />
            <Form.Text>Осталось {lettersLeft} символов</Form.Text>
        </Form.Group>
    )
}

export default BasicForm;