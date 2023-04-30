import { ChangeEvent, MouseEvent, Dispatch, SetStateAction, useEffect, useRef, useState } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import { DaDataValue, DaDataValues, Nullable } from "@/types/dadata";
import useOutsideClick from '@/hooks/useOutsideClick';
import styles from '@/styles/addProperty/AddProperty.module.scss';

type LocationFormProps = {
    setCity: Dispatch<SetStateAction<string>>,
    setAddress: Dispatch<SetStateAction<string>>,
    address: string,
}

function LocationForm({ setCity, setAddress, address }: LocationFormProps) {
    const sugURL = 'https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/address';
    const token = 'de4ad3d540c15631e021ae284bf33aed8d0bedfb';
    const dropDownRef = useRef(null);
    const [openDropDown, setOpenDropdown] = useState<boolean>(false);
    const [suggestions, setSuggestions] = useState<DaDataValue[] | undefined>();

    // запрос версий адреса по введенной строке
    useEffect(() => {
        async function fetchAdress(query: string) {
            let data = { "query": query };
            let response = await fetch(sugURL, {
                method: "POST",
                mode: "cors",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json",
                    "Authorization": "Token " + token
                },
                body: JSON.stringify(data),
            })
            let result: DaDataValues = await response.json();
            setSuggestions(result.suggestions);
        }
        fetchAdress(address);
    }, [address])

    //кастомный хук для закрытия дропдауна по клику в другом месте
    useOutsideClick(dropDownRef, handleOutsideClick, openDropDown);

    function handleChange(e: ChangeEvent<HTMLInputElement>) {
        setAddress(e.target.value);
        setOpenDropdown(true);
    }

    function handleClick(e: MouseEvent<HTMLParagraphElement>, city: Nullable<string>) {
        let input = e.target as HTMLElement;
        let chosenAddress: string = input.innerText;
        setAddress(chosenAddress);
        if (city) {
            setCity(city);
        }
    }

    function handleOutsideClick(e: MouseEvent<HTMLParagraphElement>) {
        setOpenDropdown(false);
        setSuggestions(undefined);
    }

    function renderClues(suggestions: DaDataValue[]) {
        return suggestions.map((suggestion, i) => (
            <p key={i} className={styles.checked} onClick={(e) => handleClick(e, suggestion.data.city)}> {suggestion.value} </ p>
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
                    <Form.Label>Адрес <span className='text-danger'>*</span></Form.Label>
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