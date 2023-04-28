import { ChangeEvent, useState } from 'react';
import { FormControl } from 'react-bootstrap';
import Col from 'react-bootstrap/Col';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownCB from './DropdownCheckbox';
import styles from '@/styles/catalog/Catalog.module.scss';
import { filterParamsType } from '@/types/filter';
import { OPTIONS_ADD, OPTIONS_CAPACITY, OPTIONS_MORE, OPTIONS_PRICE, OPTIONS_STYLE, OPTIONS_TERRITORY } from '@/constant';


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

    function filterParamsCallback(name: string, value: string[]) {
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
                        setFilterParams={filterParamsCallback}
                        options={OPTIONS_CAPACITY}
                    />
                    <hr className={styles.catalog__dropdown_hr} />
                    <DropdownCB
                        name='style'
                        text='Стиль площадки'
                        icon='fi-home'
                        setFilterParams={filterParamsCallback}
                        options={OPTIONS_STYLE}
                    />
                    <hr className={styles.catalog__dropdown_hr} />
                    <DropdownCB
                        name='price'
                        text='Средний чек'
                        icon='fi-wallet'
                        setFilterParams={filterParamsCallback}
                        options={OPTIONS_PRICE}
                    />
                    <hr className={styles.catalog__dropdown_hr} />
                    <DropdownCB
                        name='territory'
                        text='Территория'
                        icon='fi-grid'
                        setFilterParams={filterParamsCallback}
                        options={OPTIONS_TERRITORY}
                    />
                    <hr className={styles.catalog__dropdown_hr} />
                    <DropdownCB
                        name='more'
                        text='Еще на площадке'
                        icon='fi-grid'
                        setFilterParams={filterParamsCallback}
                        options={OPTIONS_MORE}
                    />
                    <hr className={styles.catalog__dropdown_hr} />
                    <DropdownCB
                        name='additional'
                        text='Дополнительно'
                        icon='fi-grid'
                        setFilterParams={filterParamsCallback}
                        options={OPTIONS_ADD}
                    />
                </Col>
        </div >
    )
}

export default PlaceFilters;