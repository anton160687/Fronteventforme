import { ChangeEvent, useState } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownCB from './DropdownCheckbox';
import { FormControl } from 'react-bootstrap';
import FormGroup from '@/components/_finder/FormGroup';
import styles from '@/styles/catalog/Catalog.module.scss';
import { filterParamsType } from '@/types/filter';


function PlaceFilters() {
    const initialFilterParamsState: filterParamsType = {
        city: '',
        capacity: [],
        style: [],
        price: [],
        territory: [],
        more: [],
        additional: [],
    };
    const [filterParams, setFilterParams] = useState(initialFilterParamsState);

    function setCity(e: ChangeEvent<HTMLInputElement>) {
        setFilterParams({ ...filterParams, city: e.target.value })
    }

    function setCBParams(name: string, value: string[]) {
        setFilterParams({ ...filterParams, [name]: value })
    }

    console.log(filterParams);

    return (
        <div className={styles.catalog__dropdown}>
            
                <Col md={4} className='d-sm-flex align-items-center'>
                    <Dropdown>
                        <Dropdown.Toggle variant='outline-none'>
                            <i className={`fi-map-pin fs-lg opacity-60 me-1`} />
                            <p className={styles.catalog__dropdown_text}>Город</p>
                        </Dropdown.Toggle>
                        <Dropdown.Menu className={styles.catalog__dropdown_container}>
                            <FormControl type='text' placeholder='Введите город' onChange={setCity} value={filterParams.city}/>
                        </Dropdown.Menu>
                    </Dropdown>
                    <hr className={styles.catalog__dropdown_hr} />
                    <DropdownCB
                        name='capacity'
                        text='Вместимость'
                        icon='fi-building'
                        callback={setCBParams}
                        options={[
                            ['10-30', 'от 10 до 30'],
                            ['30-60', 'от 30 до 60'],
                            ['60-100', 'от 60 до 100'],
                            ['100-150', 'от 100 до 150'],
                            ['150', 'от 150'],
                        ]}
                    />
                    <hr className={styles.catalog__dropdown_hr} />
                    <DropdownCB
                        name='style'
                        text='Стиль площадки'
                        icon='fi-home'
                        callback={setCBParams}
                        options={[
                            ['loft', 'Лофт'],
                            ['rustik', 'Рустик'],
                            ['classic', 'Классический'],
                            ['other', 'Другое'],
                        ]}
                    />
                    <hr className={styles.catalog__dropdown_hr} />
                    <DropdownCB
                        name='price'
                        text='Средний чек'
                        icon='fi-wallet'
                        callback={setCBParams}
                        options={[
                            ['1000', 'до 1000 ₽'],
                            ['1000-2000', 'от 1000 ₽ до 2000 ₽'],
                            ['2000-3000', 'от 2000 ₽ до 3000 ₽'],
                            ['other', 'Другое'],
                        ]}
                    />
                    <hr className={styles.catalog__dropdown_hr} />
                    <DropdownCB
                        name='territory'
                        text='Территория'
                        icon='fi-grid'
                        callback={setCBParams}
                        options={[
                            ['welcome', 'Welcome-зона'],
                            ['photozone', 'Фотозона'],
                            ['guesthouse', 'Проживание гостей'],
                            ['parking', 'Своя парковка'],
                            ['registration', 'С выездной регистрацией'],
                            ['firework', 'Можно фейерверк'],
                        ]}
                    />
                    <hr className={styles.catalog__dropdown_hr} />
                    <DropdownCB
                        name='more'
                        text='Еще на площадке'
                        icon='fi-grid'
                        callback={setCBParams}
                        options={[
                            ['1000', 'до 1000 ₽'],
                            ['1000-2000', 'от 1000 ₽ до 2000 ₽'],
                            ['2000-3000', 'от 2000 ₽ до 3000 ₽'],
                            ['other', 'Другое'],
                        ]}
                    />
                    <hr className={styles.catalog__dropdown_hr} />
                    <DropdownCB
                        name='additional'
                        text='Дополнительно'
                        icon='fi-grid'
                        callback={setCBParams}
                        options={[
                            ['1000', 'Аренда без еды'],
                            ['1000-2000', 'Свой алкоголь'],
                            ['2000-3000', 'Без проб. сбора'],
                            ['other', 'Можно праздновать после 23:00'],
                        ]}
                    />
                </Col>
        </div >
    )
}

export default PlaceFilters;