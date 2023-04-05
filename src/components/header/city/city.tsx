import { useEffect, useState } from "react";
import Image from 'next/image';
import styles from '@/styles/City.module.scss';

function City () {
    const [lat, setLat] = useState<number>(0);
    const [lng, setLng] = useState<number>(0);
    const [error, setError] = useState<string>('');

    // определение геолокации юзера
    useEffect(() => {
      const geo = navigator.geolocation;
      if (!geo) {
        setError('Геолокация не поддерживается браузером');
        return;
      }
      
      geo.getCurrentPosition((position)=>{
        setLat(position.coords.latitude);
        setLng(position.coords.longitude);
      })
    }, []);

    return (
        <label className={styles.city__form}>
          <div className={styles.city__text}>
            <Image className={styles.city__image} src='/img/header/pin.svg' width={18} height={21} alt="pin"/>
            <p className={styles.city__name}>Москва</p>
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