import Header from '../header/Header';
import Footer from '../footer/Footer';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from '@/store';
import { useRouter } from 'next/router';

type LayoutProps = {
  children: React.ReactNode;
};

export default function Layout({ children }: LayoutProps): JSX.Element {
  const dispatch = useDispatch<AppDispatch>();

  const router = useRouter().pathname;

  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
