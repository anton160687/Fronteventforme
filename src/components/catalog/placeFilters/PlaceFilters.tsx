import { ChangeEvent, useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { FormControl } from 'react-bootstrap';
import Col from 'react-bootstrap/Col';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownCB from './DropdownCheckbox';
import styles from '@/styles/catalog/Catalog.module.scss';
import { filterParamsType } from '@/types/filter';
import * as options from './placeFilterOptions';


function PlaceFilters() {
    const router = useRouter();
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

    function parseQueryParam(queryParams: string, param: string[]) {
        param.forEach((value) => {
            queryParams === '?' ? queryParams += '' : queryParams += '&'
            queryParams += value
        })
        return queryParams
    }

    useEffect(() => {
        let queryParams = '?';
        if (filterParams.city) {
            queryParams += `city=${filterParams.city}`
        }
        if (filterParams.capacity) {
            queryParams = parseQueryParam(queryParams, filterParams.capacity)
        }
        if (filterParams.price) {
            queryParams = parseQueryParam(queryParams, filterParams.price)
        }
        if (filterParams.territory) {
            queryParams = parseQueryParam(queryParams, filterParams.territory)
        }
        if (filterParams.more) {
            queryParams = parseQueryParam(queryParams, filterParams.more)
        }

        console.log(queryParams);
        if (queryParams!=='?') {
            router.push(`/catalog/places${queryParams}`);
        }

    }, [filterParams])


    return (
        <div className={styles.catalog__dropdown}>

            <Col md={4} className='d-sm-flex align-items-center'>
                <Dropdown>
                    <Dropdown.Toggle variant='outline-secondary' className={styles.catalog__dropdown_icon}>
                        <i className={`fi-map-pin fs-lg opacity-60 me-1`} />
                        <p className={styles.catalog__dropdown_text}>Город</p>
                    </Dropdown.Toggle>
                    <Dropdown.Menu className={styles.catalog__dropdown_container}>
                        <FormControl type='text' placeholder='Введите город' onChange={setCity} value={filterParams.city} />
                    </Dropdown.Menu>
                </Dropdown>
                <hr className={styles.catalog__dropdown_hr} />
                <DropdownCB
                    name='capacity'
                    text='Вместимость'
                    icon='fi-building'
                    setFilterParams={filterParamsCallback}
                    options={options.CAPACITY}
                />
                <hr className={styles.catalog__dropdown_hr} />
                <DropdownCB
                    name='style'
                    text='Стиль площадки'
                    icon='fi-home'
                    setFilterParams={filterParamsCallback}
                    options={options.STYLE}
                />
                <hr className={styles.catalog__dropdown_hr} />
                <DropdownCB
                    name='price'
                    text='Средний чек'
                    icon='fi-wallet'
                    setFilterParams={filterParamsCallback}
                    options={options.PRICE}
                />
                <hr className={styles.catalog__dropdown_hr} />
                <DropdownCB
                    name='territory'
                    text='Территория'
                    icon='fi-grid'
                    setFilterParams={filterParamsCallback}
                    options={options.TERRITORY}
                />
                <hr className={styles.catalog__dropdown_hr} />
                <DropdownCB
                    name='more'
                    text='Еще на площадке'
                    icon='fi-grid'
                    setFilterParams={filterParamsCallback}
                    options={options.MORE}
                />
                <hr className={styles.catalog__dropdown_hr} />
                <DropdownCB
                    name='additional'
                    text='Дополнительно'
                    icon='fi-grid'
                    setFilterParams={filterParamsCallback}
                    options={options.ADD}
                />
            </Col>
        </div >
    )
}

export default PlaceFilters;