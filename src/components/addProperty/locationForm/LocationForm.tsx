import { ChangeEvent, MouseEvent, Dispatch, SetStateAction, useEffect, useRef, useState } from 'react';
import {Row, Col, Form} from 'react-bootstrap';
import { DaDataValue, DaDataValues, Nullable } from "@/types/dadata";
import useOutsideClick from '@/hooks/useOutsideClick';
import { SUG_URL, TOKEN } from '@/constant';
import styles from '@/styles/addProperty/AddProperty.module.scss';

type LocationFormProps = {
    setCity: (data: string) => void,
    setAddress: (data: string) => void,
    setGeodata: (lat: number, lon: number) => void,
    setYaId: (e: ChangeEvent<HTMLInputElement>) => void;
    address: string,
    ya_id?: number;
}

function LocationForm({ setCity, setAddress, setGeodata, address, setYaId, ya_id }: LocationFormProps) {
    const dropDownRef = useRef(null);
    const [openDropDown, setOpenDropdown] = useState<boolean>(false);
    const [suggestions, setSuggestions] = useState<DaDataValue[] | undefined>();
    //кастомный хук для закрытия дропдауна по клику в другом месте
    useOutsideClick(dropDownRef, handleOutsideClick, openDropDown);

    if (suggestions && suggestions.length!==0 && suggestions[0].data.city) {
        console.log(suggestions[0].data.city);
    }
    
    useEffect(() => {
        async function fetchAdress(query: string) {
            let data = { "query": query };
            let response = await fetch(SUG_URL, {
                method: "POST",
                mode: "cors",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json",
                    "Authorization": "Token " + TOKEN
                },
                body: JSON.stringify(data),
            })
            let result: DaDataValues = await response.json();
            setSuggestions(result.suggestions);
            if (result?.suggestions[0]?.data.geo_lat && result?.suggestions[0]?.data.geo_lon) {
                setGeodata(+result.suggestions[0].data.geo_lat, +result.suggestions[0].data.geo_lon);
            }
        }
        fetchAdress(address);
    }, [address])

    //автоматическое определение города
    useEffect(() => {
        if (suggestions && suggestions.length!==0 && suggestions[0].data.city) {
            setCity(suggestions[0].data.city);
        }
    }, [suggestions]);

    function handleChange(e: ChangeEvent<HTMLInputElement>) {
        setAddress(e.target.value);
        setOpenDropdown(true);
    }

    function handleClick(e: MouseEvent<HTMLParagraphElement>) {
        let input = e.target as HTMLElement;
        let chosenAddress: string = input.innerText;
        setAddress(chosenAddress);
    }

    function handleOutsideClick(e: MouseEvent<HTMLParagraphElement>) {
        setOpenDropdown(false);
        setSuggestions(undefined);
    }

    function renderClues(suggestions: DaDataValue[]) {
        return suggestions.map((suggestion, i) => (
            <p
                key={i}
                className={styles.checked}
                onClick={(e) => handleClick(e)}
            >
                {suggestion.value}
            </ p>
        ))
    }

    return (
        <section id='location' className='card card-body border-0 shadow-sm p-4 mb-4'>
            <h2 className='h4 mb-4'>
                <i className='fi-map-pin text-primary fs-5 mt-n1 me-2'></i>
                Локация
            </h2>
            <Row>
                <Form.Group as={Col} sm={12} controlId='ap-address' className='mb-3'>
                    <Form.Label className='d-block fw-bold mb-2 mt-2 pb-1'>
                        Адрес <span className='text-danger'>*</span>
                    </Form.Label>
                    <Form.Control
                        value={address}
                        name='address'
                        onChange={handleChange}
                        placeholder='Введите адрес'
                        title='При вводе адреса вы можете воспользоваться автоматическими подсказками. Выбрать подсказку можно, кликнув на нее.'
                        required
                    />
                    {openDropDown && suggestions &&
                        <div ref={dropDownRef} className={styles.address__dropdown}>
                            {renderClues(suggestions)}
                        </div>
                    }

                </Form.Group>

                <Form.Group as={Col} sm={12} controlId='ap-yaid' className='mb-3'>
                    <Form.Label>ID организации на Яндекс.Картах <span className='text-danger'>*</span></Form.Label>
                    <Form.Control
                        name='ya_id'
                        placeholder='Введите id организации'
                        title='Id необходимо для отображения отзывов Яндекс'
                        value={ya_id}
                        onChange={setYaId}
                        required
                    />
                </Form.Group>
            </Row>
        </section>
    )
}

export default LocationForm;