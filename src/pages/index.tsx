import Hero from '@/components/hero/Hero';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from '@/store';
import { fetchUsers } from '@/store/user/userSlice';

export default function Home() {  
  // кастомизируем диспатч:
  const dispatch = useDispatch<AppDispatch>();

 //для примера - обычный запрос к API и диспатч юзеров в стор через useEffect
  //Все действия производятся на стороне клиента (браузера), в отличие от ssr (см. страницу catalog)
  useEffect(()=> {  
    dispatch(fetchUsers());
  }, [])

  return (
    <>
      <Hero/>
    </>
  )
}