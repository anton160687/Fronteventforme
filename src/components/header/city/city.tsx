import { useEffect, useState, MouseEvent, useRef } from "react";
import Image from 'next/image';
import styles from '@/styles/header/City.module.scss';
import { DaDataValue, DaDataValues } from "@/types/dadata";
import useOutsideClick from '@/hooks/useOutsideClick';
import { Nullable } from "@/types/dadata";


function City(): JSX.Element {
  const [city, setCity] = useState<string>('Москва');
  const [lat, setLat] = useState<number>(0);
  const [lng, setLng] = useState<number>(0);

  const [address, setAddress] = useState<string>('');
  const [suggestions, setSuggestions] = useState<DaDataValue[] | undefined>();
  const [error, setError] = useState<string>('');

  const cityURL = 'https://suggestions.dadata.ru/suggestions/api/4_1/rs/geolocate/address';
  const sugURL = 'https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/address';
  const token = 'de4ad3d540c15631e021ae284bf33aed8d0bedfb';

  const dropDownRef = useRef(null);
  const [openDropDown, setOpenDropdown] = useState<boolean>(false);

  // определение геолокации юзера
  useEffect(() => {
    const geo = navigator.geolocation;
    if (!geo) {
      setError('Геолокация не поддерживается браузером');
      return;
    }
    geo.getCurrentPosition((position) => {
      setLat(position.coords.latitude);
      setLng(position.coords.longitude);
    })
  }, []);

  // определение города по геолокации юзера
  useEffect(() => {
    async function fetchCity() {
      let data = { "lat": lat, "lon": lng };
      let response = await fetch(cityURL, {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
          "Authorization": "Token " + token
        },
        body: JSON.stringify(data),
      })
      let result = await response.json();
      setCity(result?.suggestions[0]?.data?.city);
    }

    fetchCity();
  }, [lat, lng])

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

  function handleClick(e: MouseEvent<HTMLParagraphElement>, city: Nullable<string>) {
    let input = e.target as HTMLElement;
    let chosenAddress: string = input.innerText;
    console.log(city);

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
    <div className={styles.city__form_container}>
      <label className={styles.city__form}>
        <div className={styles.city__text}>
          <Image className={styles.city__image} src='/img/header/pin.svg' width={18} height={21} alt="pin" />
          <p className={styles.city__name}>{city || 'Москва'}</p>
        </div>
        <input
          className={styles.city__input}
          type='text'
          placeholder="Укажите адрес"
          value={address}
          onChange={e => {
            setAddress(e.target.value);
            setOpenDropdown(true);
          }}
        />
      </label>
      {openDropDown && suggestions &&
        <div ref={dropDownRef} className={styles.city__dropdown}>
          {renderClues(suggestions)}
        </div>
      }
    </div>
  )
}

export default City;