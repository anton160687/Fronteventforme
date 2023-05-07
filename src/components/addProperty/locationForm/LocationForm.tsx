import { ChangeEvent, MouseEvent, Dispatch, SetStateAction, useEffect, useRef, useState } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import { DaDataValue, DaDataValues, Nullable } from "@/types/dadata";
import useOutsideClick from '@/hooks/useOutsideClick';
import styles from '@/styles/addProperty/AddProperty.module.scss';
import { SUG_URL, TOKEN } from '@/constant';

type LocationFormProps = {
    setCity: Dispatch<SetStateAction<string>>,
    setAddress: Dispatch<SetStateAction<string>>,
    address: string,
}

function LocationForm({ setCity, setAddress, address }: LocationFormProps) {
    const dropDownRef = useRef(null);
    const [openDropDown, setOpenDropdown] = useState<boolean>(false);
    const [suggestions, setSuggestions] = useState<DaDataValue[] | undefined>();
    const [lat, setLat] = useState<number>(0);
    const [lng, setLng] = useState<number>(0);
    //для теста, пока не удалять
    console.log("это из тела" + lat, lng);

    // запрос версий адреса по введенной строке
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
            // этот код необходимо перенести сюда на случай, если адрес внесут, не используя подсказок
            if (result?.suggestions[0]?.data.city) {
                setCity(result.suggestions[0].data.city);
            }
            if (result?.suggestions[0]?.data.geo_lat && result?.suggestions[0]?.data.geo_lon) {
                setLat(+result.suggestions[0].data.geo_lat);
                setLng(+result.suggestions[0].data.geo_lon);
            }

        }
        fetchAdress(address);
    }, [address])

    //кастомный хук для закрытия дропдауна по клику в другом месте
    useOutsideClick(dropDownRef, handleOutsideClick, openDropDown);

    function handleChange(e: ChangeEvent<HTMLInputElement>) {
        setAddress(e.target.value);
        setOpenDropdown(true);
    }

    function handleClick(
        e: MouseEvent<HTMLParagraphElement>,
        city: Nullable<string>,
        lat: Nullable<string>,
        lng: Nullable<string>
    ) {
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
                onClick={(e) => handleClick(e, suggestion.data.city, suggestion.data.geo_lat, suggestion.data.geo_lon)}
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
                        onChange={handleChange}
                        placeholder='Введите адрес'
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
                        placeholder='Введите id организации'
                        title='Id необходимо для отображения отзывов Яндекс'
                        required
                    />
                </Form.Group>
            </Row>
        </section>
    )
}

export default LocationForm;