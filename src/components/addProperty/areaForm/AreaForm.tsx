import { ChangeEvent, useState } from 'react';
import { ButtonGroup, ToggleButton } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import BasicForm from '../basicForm/BasicForm';

type AreaFormProps = {
    index: number
}

function AreaForm({ index }: AreaFormProps ) {
    //название помещения
    const [title, setTitle] = useState<string>('');
    function handleChange(e: ChangeEvent<HTMLInputElement>) {
        setTitle(e.target.value);
    }

    return (
        <section id={`area${index}`} className='card card-body border-0 shadow-sm p-4 mb-4'>
            <h2 className='h4 mb-4'>
                <i className='fi-party-popper text-primary fs-5 mt-n1 me-2'></i>
                Помещения
            </h2>
            <BasicForm title={title} location={false} handleChange={handleChange}/>

            {/* <Form.Group className='mb-4'>
                <Form.Label>Расположение <span className='text-danger'>*</span></Form.Label>
                <ButtonGroup size='sm'>
                    {bedrooms.map((bedroom, indx) => (
                        <ToggleButton
                            key={indx}
                            type='radio'
                            id={`bedrooms-${indx}`}
                            name='bedrooms'
                            value={bedroom.value}
                            checked={bedroomsValue === bedroom.value}
                            onChange={(e) => setBedroomsValue(e.currentTarget.value)}
                            variant='outline-secondary fw-normal'
                        >{bedroom.name}</ToggleButton>
                    ))}
                </ButtonGroup>
            </Form.Group>
            <Form.Group className='mb-4'>
                <Form.Label className='d-block fw-bold mb-2 pb-1'>Bathrooms</Form.Label>
                <ButtonGroup size='sm'>
                    {bathrooms.map((bathroom, indx) => (
                        <ToggleButton
                            key={indx}
                            type='radio'
                            id={`bathrooms-${indx}`}
                            name='bathrooms'
                            value={bathroom.value}
                            checked={bathroomsValue === bathroom.value}
                            onChange={(e) => setBathroomsValue(e.currentTarget.value)}
                            variant='outline-secondary fw-normal'
                        >{bathroom.name}</ToggleButton>
                    ))}
                </ButtonGroup>
            </Form.Group>
            <Form.Group className='mb-4'>
                <Form.Label className='d-block fw-bold mb-2 pb-1'>Parking spots</Form.Label>
                <ButtonGroup size='sm'>
                    {parkings.map((parking, indx) => (
                        <ToggleButton
                            key={indx}
                            type='radio'
                            id={`parkings-${indx}`}
                            name='parkings'
                            value={parking.value}
                            checked={parkingsValue === parking.value}
                            onChange={(e) => setParkingsValue(e.currentTarget.value)}
                            variant='outline-secondary fw-normal'
                        >{parking.name}</ToggleButton>
                    ))}
                </ButtonGroup>
            </Form.Group>
            <Form.Group className='mb-4'>
                <Form.Label className='d-block fw-bold mb-2 pb-1'>Amenities</Form.Label>
                <Row xs={1} sm={3}>
                    {amenities.map((amenity, indx) => (
                        <Col key={indx}>
                            <Form.Check
                                type='checkbox'
                                id={`amenities-${indx}`}
                                value={amenity.value}
                                label={amenity.value}
                                defaultChecked={amenity.checked}
                            />
                        </Col>
                    ))}
                </Row>
            </Form.Group>
            <Form.Group className='mb-4'>
                <Form.Label className='d-block fw-bold mb-2 pb-1'>Pets</Form.Label>
                <Row xs={1} sm={3}>
                    <Col>
                        {pets.map((pet, indx) => (
                            <Form.Check
                                key={indx}
                                type='checkbox'
                                id={`pets-${indx}`}
                                value={pet.value}
                                label={pet.value}
                                defaultChecked={pet.checked}
                            />
                        ))}
                    </Col>
                </Row>
            </Form.Group>
            <Form.Group controlId='ap-description'>
                <Form.Label>Description</Form.Label>
                <Form.Control as='textarea' rows={5} placeholder='Describe your property' />
                <Form.Text>1500 characters left</Form.Text>
            </Form.Group> */}
        </section>
    )
}

export default AreaForm;