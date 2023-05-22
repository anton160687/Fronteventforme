import Hero from '@/components/main/hero/Hero';
import SupplierCard from '@/components/main/supplierCard/supplierCard';
import PlanWeddingCard from '@/components/main/planWeddingCard/planWeddingCard';
import SupplierSlider from '@/components/main/supplierSlider/supplierSlider';
import MoreServices from '@/components/main/moreServices/moreServices';
import { Locations } from '@/components/main/locations/locations';
import { ConvenientCatalog } from '@/components/main/convenientCtlg/convenientCatalog';
import { PersonServices } from '@/components/main/cardIndividualApproach/PersonService';
import { CardsLink } from '@/components/main/cardsLink/cardsLink';
import { Place } from '@/types/catalog';
import { URL } from '@/constant';

type HomeProps = {
  topLocations: Place[];
};

export default function Home({ topLocations }: HomeProps) {
  return (
    <>
      <Hero />
      <CardsLink />
      <ConvenientCatalog />
      <Locations
        locations={topLocations}
        title={'ТОП-5 площадок разных категорий г. Москва'}
        isShowAll={false}
      />
      <MoreServices />
      <SupplierSlider />
      <Locations
        locations={topLocations}
        title={'Лучшие локации'}
        isShowAll={true}
        showAllTxt="Показать все"
      />
      <PersonServices />
      <SupplierCard />
      <PlanWeddingCard />
    </>
  );
}

export const getServerSideProps = async () => {
  const response = await fetch(`${URL}/places/`);
  const result: Place[] = await response.json();
  const locations: Place[] = result?.slice(0, 5);

  if (!locations) {
    return {
      notFound: true,
    };
  }

  return {
    props: { topLocations: locations },
  };
};
