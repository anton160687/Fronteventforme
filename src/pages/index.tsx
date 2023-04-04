// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-nocheck
import Image from 'next/image';
import styles from '@/styles/Home.module.scss';
import Hero from '@/components/hero/hero';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from '@/store';
import { fetchUsers, selectValue, setValue } from '@/store/user/userSlice';

export default function Home() {
  
  // кастомизируем диспатч:
  const dispatch = useDispatch<AppDispatch>();
  //кастомный селектор:
  const value = useSelector(selectValue);


 //для примера - обычный запрос к API и диспатч юзеров в стор через useEffect
  //Все действия производятся на стороне клиента (браузера), в отличие от ssr (см. страницу catalog)
  useEffect(()=> {  
    dispatch(fetchUsers());
  }, [])

  return (
    <>
      <h2 className={styles.description}>Here is main page</h2>
      <h3>The value in store is {value}</h3>
      <button onClick={() => dispatch(setValue())}>+++</button>
      <Hero/>
    </>
  )
}