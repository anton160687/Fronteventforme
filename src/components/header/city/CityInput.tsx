import { useEffect, useState, MouseEvent, useRef } from "react";
import useOutsideClick from '@/hooks/useOutsideClick';
import { CITY_URL, SUG_URL, TOKEN } from "@/constant";
import { DaDataValue, DaDataValues, Nullable } from "@/types/dadata";
import styles from '@/styles/header/City.module.scss';

const populatCities = ["Москва", "Санкт-Петербург", "Астрахань", "Барнаул", "Владивосток", "Самара", "Калуга", "Москва", "Санкт-Петербург", "Астрахань", "Барнаул", "Владивосток", "Самара", "Калуга", "Москва", "Санкт-Петербург", "Астрахань", "Барнаул", "Владивосток", "Самара", "Калуга"];

function CityInput() {
  let apiToken = (process.env.NODE_ENV === 'production' ? process.env.NEXT_PUBLIC_DADATA : TOKEN);
  const [city, setCity] = useState<string>('Москва');
  const [lat, setLat] = useState<number>(0);
  const [lng, setLng] = useState<number>(0);
  // поиск по введенной строке
  const [address, setAddress] = useState<string>('');
  const [suggestions, setSuggestions] = useState<DaDataValue[] | undefined>();
  const [error, setError] = useState<string>('');
  //стейты выпадающих компонентов
  const optionsRef = useRef(null);
  const [optionsOpen, setOptionsOpen] = useState<boolean>(false);
  const dropDownRef = useRef(null);
  const [dropDownOpen, setdropDownOpen] = useState<boolean>(false);
  //кастомный хук для закрытия меню по клику в другом месте
  useOutsideClick(optionsRef, handleOptOutsideClick, optionsOpen);
  function handleOptOutsideClick(e: MouseEvent<HTMLParagraphElement>) {
    setOptionsOpen(false);
    setSuggestions(undefined);
  }
  //кастомный хук для закрытия дропдауна по клику в другом месте
  useOutsideClick(dropDownRef, handleDDOutsideClick, dropDownOpen);
  function handleDDOutsideClick(e: MouseEvent<HTMLParagraphElement>) {
    setdropDownOpen(false);
    setSuggestions(undefined);
  }

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
      let response = await fetch(CITY_URL, {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
          "Authorization": "Token " + apiToken
        },
        body: JSON.stringify(data),
      })
      let result = await response.json();
      let fetchedCity = result?.suggestions[0]?.data?.city;
      setCity(fetchedCity || 'Москва');
    }
    fetchCity();
  }, [lat, lng])

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
          "Authorization": "Token " + apiToken
        },
        body: JSON.stringify(data),
      })
      let result: DaDataValues = await response.json();
      setSuggestions(result.suggestions);
    }
    fetchAdress(address);
  }, [address])

  function handleClick(city: Nullable<string>) {
    if (city) {
      setCity(city);
      setAddress('');
    }
    setdropDownOpen(false);
    setOptionsOpen(false);
  }

  function renderClues(suggestions: DaDataValue[]) {
    let citiesArray = suggestions.map((suggestion) => {
      if (suggestion.data.city) {
        return suggestion.data.city
      } else {
        return null
      }
    })
    let uniqueCitiesArray = [...new Set(citiesArray)]

    return uniqueCitiesArray.map((city, i) => (
      <p key={i} className={styles.checked} onClick={() => handleClick(city)}> {city ? city : ""} </ p>
    ))
  }

  return (
    <li
      ref={optionsRef}
      className={`${styles.city__form_container} nav-item`}
      itemProp="itemListElement"
      itemScope
      itemType="http://schema.org/ItemList"
    >
      <meta itemProp="name" content="Введите город" />

      <p
        className={styles.city__display}
        onClick={() => { setOptionsOpen(!optionsOpen) }}
      >
        <i className="fi-map-pin" />{city === "Санкт-Петербург" ? "Петербург" : city}
      </p>

      {optionsOpen &&
        <div className={`${styles.city__options}`}>
          <div className={styles.city__options_title}>Выберите свой город <i className="fi-x" onClick={() => { setOptionsOpen(false) }} /></div>
          
          <div className={styles.city__suggestions}>
            <label className={styles.city__suggestions_form}>
              <i className="fi-search" />
              <input
                className={styles.city__input}
                type="text"
                placeholder="Поиск по городам"
                value={address}
                onChange={e => {
                  setAddress(e.target.value);
                  setdropDownOpen(true);
                }}
              />
            </label>
            {dropDownOpen && suggestions &&
              <div ref={dropDownRef} className={styles.city__dropdown}>
                {renderClues(suggestions)}
              </div>
            }
          </div>
          <p className={styles.city__popular_title}>Популярные города:</p>
          <ul className={styles.city__popular_list}>
            {populatCities.map((city, i) => <li key={i} onClick={() => handleClick(city)}>{city}</li>)}
          </ul>
        </div>
      }

    </li>
  )
}

export default CityInput;