import FormGroup from 'react-bootstrap/FormGroup';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownCB from './DropdownCheckbox';
import Button from 'react-bootstrap/Button';
import styles from '@/styles/catalog/Catalog.module.scss';

function PlaceFilters() {

    return (
        <FormGroup className='d-block my-4'>
            <Row className='g-0 ms-sm-n2'>
                <Col className='d-sm-flex align-items-center'>
                    <Dropdown>
                        <Dropdown.Toggle variant='outline-secondary'>
                            <i className={`fi-map-pin fs-lg opacity-60 me-2`}/>
                            Город
                        </Dropdown.Toggle>
                        <Dropdown.Menu className='my-1'>
                            
                                <input
                                    type='text'
                                    placeholder="Введите город"
                                />
                            
                        </Dropdown.Menu>
                    </Dropdown>
                    <hr className='d-sm-none my-2' />

                    <DropdownCB
                        text='Районы'
                        icon='fi-building'
                        options={[
                            'Васька',
                            'Черная речка'
                        ]}
                    />
                    <hr className='d-sm-none my-2' />

                    {/* <DropdownSelect
                        defaultValue='Тип площадки'
                        icon='fi-home'
                        options={[
                            [null, 'Ресторан'],
                            [null, 'Банкетный зал']
                        ]}
                        darkMenu={false}
                        variant='link ps-2 ps-sm-3'
                        className='w-sm-50 border-end-sm'
                    />
                    <hr className='d-sm-none my-2' />


                    <DropdownSelect
                        defaultValue='Средний чек'
                        icon='fi-wallet'
                        options={[
                            [null, 'Houses'],
                            [null, 'Apartments'],
                            [null, 'Commercial'],
                            [null, 'Daily rental'],
                            [null, 'New buildings']
                        ]}
                        darkMenu={false}
                        variant='link ps-2 ps-sm-3'
                        className='w-sm-50 border-end-md'
                    />
                    <hr className='d-sm-none my-2' />

                    <DropdownSelect
                        defaultValue='Особенности'
                        icon='fi-grid'
                        options={[
                            [null, 'Houses'],
                            [null, 'Apartments'],
                            [null, 'Commercial'],
                            [null, 'Daily rental'],
                            [null, 'New buildings']
                        ]}
                        darkMenu={false}
                        variant='link ps-2 ps-sm-3'
                        className='w-sm-50 border-end-md'
                    />
                    <hr className='d-sm-none my-2' /> */}

                    <Button>Искать</Button>

                </Col>
            </Row>
        </FormGroup >
    )
}

export default PlaceFilters;