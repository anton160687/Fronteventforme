import Hero from '@/components/main/hero/Hero';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from '@/store';
import { fetchUsers } from '@/store/user/userSlice';
import SupplierCard from '@/components/main/supplierCard/supplierCard';
import PlanWeddingCard from '@/components/main/planWeddingCard/planWeddingCard';
import { PersonServices } from '@/components/main/card-individual-approach';
import SupplierSlider from "@/components/main/supplierSlider/supplierSlider";
import MoreServices from "@/components/main/moreServices/moreServices";
import { CardsLink } from '@/components/main/cardsLink/cardsLink';
import {Locations} from "@/components/main/locations/locations";
import {properties} from "@/mocks/locations";


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
          <CardsLink/>
          <Locations array={properties} title={'ТОП-5 площадок разных категорий г. Москва'}/>
          <MoreServices/>
          <SupplierSlider/>
          <Locations array={properties} title={'Лучшие локации'}/>
          <PersonServices/>
          <SupplierCard/>
          <PlanWeddingCard/>
      </>
  )
}