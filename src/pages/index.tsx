import Hero from '@/components/main/hero/Hero';
import SupplierCard from '@/components/main/supplierCard/supplierCard';
import PlanWeddingCard from '@/components/main/planWeddingCard/planWeddingCard';
import { PersonServices } from '@/components/main/cardIndividualApproach';
import SupplierSlider from "@/components/main/supplierSlider/supplierSlider";
import MoreServices from "@/components/main/moreServices/moreServices";
import { CardsLink } from '@/components/main/cardsLink/cardsLink';
import {Locations} from "@/components/main/locations/locations";
import {properties} from "@/mocks/locations";


export default function Home() {  

  return (
      <>
          <Hero/>
          <CardsLink/>
          <Locations array={properties} title={"ТОП-5 площадок разных категорий г. Москва"}/>
          <MoreServices/>
          <SupplierSlider/>
          <Locations array={properties} title={"Лучшие локации"}/>
          <PersonServices/>
          <SupplierCard/>
          <PlanWeddingCard/>
      </>
  )
}