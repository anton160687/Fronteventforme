import Hero from '@/components/main/hero/Hero';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from '@/store';
import { fetchUsers } from '@/store/user/userSlice';
import SupplierCard from '@/components/main/supplierCard/supplierCard';
import PlanWeddingCard from '@/components/main/planWeddingCard/planWeddingCard';
import SupplierSlider from "@/components/main/supplierSlider/supplierSlider";
import { CardsLink } from '@/components/main/cardsLink/cardsLink';


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

      <SupplierSlider/>

      <CardsLink/>

      <SupplierCard/>
      <PlanWeddingCard/>
    </>
  )
}