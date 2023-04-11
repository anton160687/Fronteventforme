import { useEffect, useState } from "react";
import Image from 'next/image';
import styles from '@/styles/header/City.module.scss';


function City(): JSX.Element {
  const [city, setCity] = useState<string>('Москва');
  const [lat, setLat] = useState<number>(0);
  const [lng, setLng] = useState<number>(0);
  const [error, setError] = useState<string>('');
  const URL = 'https://suggestions.dadata.ru/suggestions/api/4_1/rs/geolocate/address';
  const token = 'de4ad3d540c15631e021ae284bf33aed8d0bedfb';

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

  useEffect(() => {
    async function fetchCity() {
      let data = { "lat": lat, "lon": lng };
      let response = await fetch(URL, {
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

  return (
    <label className={styles.city__form}>
      <div className={styles.city__text}>
        <Image className={styles.city__image} src='/img/header/pin.svg' width={18} height={21} alt="pin" />
        <p className={styles.city__name}>{city || 'Москва'}</p>
      </div>
      <input
        className={styles.city__input}
        type='text'
        placeholder="Укажите адрес"
      />
    </label>
  )
}

export default City;