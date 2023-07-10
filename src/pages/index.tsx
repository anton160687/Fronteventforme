import { Container } from 'react-bootstrap';
import Hero from '@/components/main/hero/Hero';
import TopCards from '@/components/main/topCards/TopCards';
import ConvenientCatalog from '@/components/main/convenientCatalog/ConvenientCatalog';
import TopLocations from '@/components/main/topLocations/TopLocations';
import Articles from '@/components/main/articles/Articles';
import LkServices from '@/components/main/lkServices/LkServices';
import TopBusiness from '@/components/main/topBusiness/TopBusiness';
import SupplierCard from '@/components/main/supplierCard/SupplierCard';
import PlanWedding from '@/components/main/planWedding/PlanWedding';
import { LocationCard } from '@/types/locationCard';
import { mockLocationCards } from '@/mocks/locationCards';

type HomeProps = {
  topLocations: LocationCard[];
};

export default function Home({ topLocations = mockLocationCards }: HomeProps) {
  return (
    <main>
      <Hero />
      <Container>
        <TopCards />
        <ConvenientCatalog />
        <h2 className='d-none'>Лучшие площадки Москвы</h2>
        <TopLocations
          locations={topLocations}
          title={'ТОП-5 площадок разных категорий г. Москва'}
        />
        <Articles />
        <LkServices />
        <TopBusiness />
        <TopLocations
          locations={topLocations}
          title={'Лучшие локации'}
          text="Показать все"
        />
      </Container>
      <SupplierCard />
      <PlanWedding />
    </main>
  );
}

// Здесь должен быть запрос на URL с топовыми площадками.
// export const getServerSideProps = async () => {
//   const API = process.env.NODE_ENV === 'production' ? process.env.NEXT_PUBLIC_URL : URL;
//   const response = await fetch(`${API}`);
//   const result: LocationCard[] = await response.json();
//   const locations: LocationCard[] = result?.slice(0, 5);

//   if (!locations) {
//     return {
//       notFound: true,
//     };
//   }

//   return {
//     props: { topLocations: locations },
//   };
// };
